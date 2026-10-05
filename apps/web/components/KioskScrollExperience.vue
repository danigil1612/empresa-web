<script setup lang="ts">
const props = defineProps<{
  eyebrow: string
  title: string
  hint: string
  visualAlt: string
  screenEyebrow: string
  screenTitle: string
  screenText: string
}>()

const section = ref<HTMLElement | null>(null)
const video = ref<HTMLVideoElement | null>(null)
const progress = ref(0)
const isReady = ref(false)
const isMobile = ref(false)
const isReduced = ref(false)

let scrollFrame = 0
let motionFrame = 0
let targetProgress = 0
let videoDuration = 0
let lastSeekAt = 0
let observer: IntersectionObserver | undefined
let mobileQuery: MediaQueryList | undefined
let motionQuery: MediaQueryList | undefined
let isNearViewport = false

const videoSource = computed(() =>
  `/images/kiosk/kiosk-${isMobile.value ? 'mobile' : 'desktop'}.mp4?v=2`,
)
const posterSource = computed(() =>
  `/images/kiosk/${isMobile.value ? 'mobile' : 'desktop'}/frame-001.webp`,
)
const currentStage = computed(() =>
  Math.min(3, Math.floor(progress.value * 4)),
)
const copyStyle = computed(() => {
  const fade = Math.max(0, Math.min(1, (progress.value - 0.34) / 0.2))

  return {
    opacity: String(1 - fade),
    transform: `translate3d(0, ${fade * -24}px, 0)`,
  }
})
const portalProgress = computed(() => {
  return clamp((progress.value - 0.87) / 0.13)
})
const portalStyle = computed(() => {
  const reveal = portalProgress.value * portalProgress.value * (3 - 2 * portalProgress.value)

  return {
    opacity: String(reveal),
  }
})
const portalContentStyle = computed(() => {
  const reveal = clamp((portalProgress.value - 0.14) / 0.7)

  return {
    opacity: String(reveal),
    transform: `translate3d(0, ${(1 - reveal) * 52}px, 0) scale(${0.92 + reveal * 0.08})`,
  }
})

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function syncVideo(now = performance.now()) {
  const element = video.value
  if (!element) return

  const duration = videoDuration > 0 ? videoDuration : element.duration
  if (!Number.isFinite(duration) || duration <= 0) return

  const targetTime = clamp(progress.value / 0.87) * Math.max(0, duration - 0.04)
  if (
    now - lastSeekAt >= 32 &&
    !element.seeking &&
    Math.abs(element.currentTime - targetTime) >= 0.018
  ) {
    element.currentTime = targetTime
    lastSeekAt = now
  }
}

function handleVideoReady() {
  const element = video.value
  if (!element || !Number.isFinite(element.duration)) return
  videoDuration = element.duration
  isReady.value = true
  syncVideo()
}

function handleVideoSeeked() {
  lastSeekAt = 0
  syncVideo()
}

function animateProgress(now: number) {
  motionFrame = 0
  const difference = targetProgress - progress.value

  if (Math.abs(difference) < 0.00025 || isReduced.value) {
    progress.value = targetProgress
  } else {
    const easedStep = difference * (isMobile.value ? 0.2 : 0.16)
    const maximumStep = isMobile.value ? 0.018 : 0.014
    progress.value += Math.sign(difference) * Math.min(
      Math.abs(difference),
      Math.abs(easedStep),
      maximumStep,
    )
  }

  syncVideo(now)

  if (Math.abs(targetProgress - progress.value) >= 0.00025) {
    motionFrame = requestAnimationFrame(animateProgress)
  }
}

function requestMotion() {
  if (!motionFrame) motionFrame = requestAnimationFrame(animateProgress)
}

function setTargetProgress(value: number) {
  targetProgress = clamp(value)
  requestMotion()
}

function updateProgress() {
  scrollFrame = 0
  if (!section.value || !isNearViewport) return

  const bounds = section.value.getBoundingClientRect()
  if (isReduced.value) {
    setTargetProgress(1)
    return
  }

  const scrollDistance = Math.max(1, bounds.height - window.innerHeight)
  setTargetProgress(clamp(-bounds.top / scrollDistance))
}

function requestUpdate() {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateProgress)
}

function handleModeChange() {
  const nextMobile = mobileQuery?.matches ?? false
  const nextReduced = motionQuery?.matches ?? false
  const changed = nextMobile !== isMobile.value || nextReduced !== isReduced.value

  isMobile.value = nextMobile
  isReduced.value = nextReduced
  if (changed) {
    isReady.value = false
    videoDuration = 0
    nextTick(() => video.value?.load())
  }
  requestUpdate()
}

onMounted(() => {
  mobileQuery = window.matchMedia('(max-width: 700px)')
  motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  handleModeChange()

  mobileQuery.addEventListener('change', handleModeChange)
  motionQuery.addEventListener('change', handleModeChange)
  window.addEventListener('scroll', requestUpdate, { passive: true })
  window.addEventListener('resize', requestUpdate, { passive: true })

  observer = new IntersectionObserver(
    ([entry]) => {
      isNearViewport = Boolean(entry?.isIntersecting)
      if (isNearViewport) {
        requestUpdate()
      }
    },
    { rootMargin: '100% 0px' },
  )
  if (section.value) observer.observe(section.value)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  mobileQuery?.removeEventListener('change', handleModeChange)
  motionQuery?.removeEventListener('change', handleModeChange)
  window.removeEventListener('scroll', requestUpdate)
  window.removeEventListener('resize', requestUpdate)
  if (scrollFrame) cancelAnimationFrame(scrollFrame)
  if (motionFrame) cancelAnimationFrame(motionFrame)
})
</script>

<template>
  <section
    ref="section"
    class="kiosk-scroll"
    :class="{
      'kiosk-scroll--reduced': isReduced,
    }"
    :aria-labelledby="'kiosk-scroll-title'"
  >
    <div class="kiosk-scroll__sticky">
      <video
        ref="video"
        class="kiosk-scroll__video"
        :src="videoSource"
        :poster="posterSource"
        preload="auto"
        muted
        playsinline
        role="img"
        :aria-label="props.visualAlt"
        @loadedmetadata="handleVideoReady"
        @canplay="handleVideoReady"
        @seeked="handleVideoSeeked"
      />

      <div class="kiosk-scroll__veil" aria-hidden="true" />

      <div class="kiosk-scroll__portal" :style="portalStyle">
        <div class="shell kiosk-scroll__portal-content" :style="portalContentStyle">
          <p class="eyebrow">{{ props.screenEyebrow }}</p>
          <h2>{{ props.screenTitle }}</h2>
          <p>{{ props.screenText }}</p>
          <span class="kiosk-scroll__portal-cue" aria-hidden="true">
            ↓
          </span>
        </div>
      </div>

      <div class="shell kiosk-scroll__content">
        <div class="kiosk-scroll__copy" :style="copyStyle">
          <p class="eyebrow">{{ props.eyebrow }}</p>
          <h2 id="kiosk-scroll-title">{{ props.title }}</h2>
          <p class="kiosk-scroll__hint">
            <span aria-hidden="true">↓</span>
            {{ props.hint }}
          </p>
        </div>

        <div class="kiosk-scroll__progress" aria-hidden="true">
          <i
            v-for="stage in 4"
            :key="stage"
            :class="{ 'is-active': currentStage >= stage - 1 }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.kiosk-scroll {
  position: relative;
  height: 420svh;
  background: #e9f3f4;
}

.kiosk-scroll__sticky {
  position: sticky;
  top: 0;
  height: 100svh;
  min-height: 640px;
  overflow: hidden;
  isolation: isolate;
  background: #e9f3f4;
}

.kiosk-scroll__video,
.kiosk-scroll__veil {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.kiosk-scroll__video {
  z-index: -3;
  object-fit: contain;
}

.kiosk-scroll__video::-webkit-media-controls {
  display: none;
}

.kiosk-scroll__portal {
  position: absolute;
  z-index: 2;
  inset: 0;
  display: grid;
  align-items: center;
  overflow: hidden;
  background: #e9f3f4;
  pointer-events: none;
  will-change: opacity;
}

.kiosk-scroll__portal::before {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 76% 22%, rgba(243, 126, 117, 0.11), transparent 30%),
    linear-gradient(145deg, rgba(255, 255, 255, 0.34), transparent 44%);
  content: "";
}

.kiosk-scroll__portal-content {
  position: relative;
  padding-block: clamp(7rem, 14vh, 9rem) 3rem;
  will-change: transform, opacity;
}

.kiosk-scroll__portal-content h2 {
  max-width: 920px;
  margin: 0 0 1.5rem;
  color: #0e2a2d;
  font-size: clamp(3.1rem, 6.2vw, 6.8rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.kiosk-scroll__portal-content > p:not(.eyebrow) {
  max-width: 680px;
  margin: 0;
  color: rgba(14, 42, 45, 0.72);
  font-size: clamp(1rem, 1.5vw, 1.22rem);
  line-height: 1.6;
}

.kiosk-scroll__portal-cue {
  position: absolute;
  right: 0;
  bottom: 0.5rem;
  width: 5rem;
  height: 5rem;
  border: 1px solid rgba(14, 42, 45, 0.16);
  border-radius: 50%;
  color: #f37e75;
  font-size: 1.65rem;
  line-height: 4.8rem;
  text-align: center;
}

.kiosk-scroll__veil {
  z-index: -1;
  background:
    linear-gradient(90deg, rgba(233, 243, 244, 0.98) 0%, rgba(233, 243, 244, 0.88) 23%, rgba(233, 243, 244, 0) 57%),
    linear-gradient(180deg, rgba(233, 243, 244, 0.5) 0%, transparent 22%, transparent 76%, rgba(233, 243, 244, 0.46) 100%);
  pointer-events: none;
}

.kiosk-scroll__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-block: clamp(7rem, 12vh, 10rem) clamp(3rem, 8vh, 6rem);
}

.kiosk-scroll__copy {
  width: min(42rem, 47vw);
  will-change: transform, opacity;
}

.kiosk-scroll__copy h2 {
  max-width: 11ch;
  margin: 1.35rem 0 0;
  color: #0e2a2d;
  font-size: clamp(3.25rem, 6.15vw, 7rem);
  line-height: 0.94;
  letter-spacing: -0.065em;
}

.kiosk-scroll__hint {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
  color: rgba(14, 42, 45, 0.72);
  font-size: 0.96rem;
  font-weight: 560;
}

.kiosk-scroll__hint span {
  display: grid;
  width: 2.3rem;
  height: 2.3rem;
  place-items: center;
  border: 1px solid rgba(14, 42, 45, 0.22);
  border-radius: 999px;
  color: #f37e75;
}

.kiosk-scroll__progress {
  display: grid;
  gap: 0.65rem;
  align-self: flex-end;
}

.kiosk-scroll__progress i {
  width: 3.6rem;
  height: 3px;
  overflow: hidden;
  border-radius: 999px;
  background: rgba(14, 42, 45, 0.16);
  transition: background-color 220ms ease, transform 220ms ease;
  transform-origin: right;
}

.kiosk-scroll__progress i.is-active {
  background: #f37e75;
  transform: scaleX(1.12);
}

.kiosk-scroll--reduced {
  height: auto;
}

.kiosk-scroll--reduced .kiosk-scroll__sticky {
  position: relative;
  height: min(900px, 90svh);
}

@media (max-width: 700px) {
  .kiosk-scroll {
    height: 360svh;
  }

  .kiosk-scroll__sticky {
    min-height: 600px;
  }

  .kiosk-scroll__video {
    object-fit: cover;
  }

  .kiosk-scroll__veil {
    background:
      linear-gradient(180deg, rgba(233, 243, 244, 0.98) 0%, rgba(233, 243, 244, 0.88) 30%, rgba(233, 243, 244, 0.12) 57%, rgba(233, 243, 244, 0.36) 100%);
  }

  .kiosk-scroll__content {
    align-items: flex-start;
    padding-top: clamp(7rem, 15svh, 9rem);
    padding-bottom: 2rem;
  }

  .kiosk-scroll__copy {
    width: min(100%, 30rem);
  }

  .kiosk-scroll__copy h2 {
    font-size: clamp(2.75rem, 13vw, 4.25rem);
  }

  .kiosk-scroll__portal-content {
    padding-top: 7rem;
  }

  .kiosk-scroll__portal-content h2 {
    max-width: 10ch;
    font-size: clamp(2.65rem, 12vw, 4.1rem);
  }

  .kiosk-scroll__portal-content > p:not(.eyebrow) {
    max-width: 31rem;
    font-size: 0.98rem;
  }

  .kiosk-scroll__portal-cue {
    right: 0;
    bottom: -6rem;
    width: 3.6rem;
    height: 3.6rem;
    line-height: 3.4rem;
  }

  .kiosk-scroll__hint {
    margin-top: 1.4rem;
    font-size: 0.88rem;
  }

  .kiosk-scroll__progress {
    position: absolute;
    right: 1.25rem;
    bottom: 2rem;
  }

  .kiosk-scroll__progress i {
    width: 2.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .kiosk-scroll__progress i {
    transition: none;
  }
}
</style>

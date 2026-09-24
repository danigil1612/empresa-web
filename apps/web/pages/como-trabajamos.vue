<script setup lang="ts">
const { content } = usePulseI18n()
const activeProcessIndex = ref(0)
const activeMoodIndex = ref(1)
const activePrincipleIndex = ref(0)
const processTabs = ref<HTMLElement | null>(null)
let processTouchStart: { x: number; y: number } | null = null
const methodologyDarkRef = useScrollThemeReveal()
const principleIcons = [
  'fi-br-feather',
  'fi-br-shield-check',
  'fi-br-refresh',
  'fi-br-bullseye-arrow',
]
const activeMood = computed(
  () =>
    content.value.methodology.model.quadrants[activeMoodIndex.value] ??
    content.value.methodology.model.quadrants[0],
)
const activeProcess = computed(
  () => content.value.methodology.process.steps[activeProcessIndex.value] ??
    content.value.methodology.process.steps[0],
)

function scrollProcessTabIntoView(index: number) {
  if (!window.matchMedia('(max-width: 820px)').matches) {
    return
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const target = processTabs.value?.querySelectorAll<HTMLButtonElement>('.work-process__tab')[index]

  target?.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'nearest',
    inline: 'center',
  })
}

function setProcessStep(index: number) {
  const lastIndex = content.value.methodology.process.steps.length - 1
  const nextIndex = Math.min(Math.max(index, 0), lastIndex)

  if (nextIndex === activeProcessIndex.value) {
    return
  }

  activeProcessIndex.value = nextIndex
  nextTick(() => scrollProcessTabIntoView(nextIndex))
}

function selectProcessStep(index: number, event: MouseEvent) {
  activeProcessIndex.value = index

  if (window.matchMedia('(max-width: 820px)').matches) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const target = event.currentTarget as HTMLElement

    target.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }
}

function startProcessSwipe(event: TouchEvent) {
  const touch = event.touches[0]

  if (touch) {
    processTouchStart = { x: touch.clientX, y: touch.clientY }
  }
}

function endProcessSwipe(event: TouchEvent) {
  const touch = event.changedTouches[0]

  if (touch && processTouchStart) {
    const deltaX = touch.clientX - processTouchStart.x
    const deltaY = touch.clientY - processTouchStart.y

    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.35) {
      setProcessStep(activeProcessIndex.value + (deltaX < 0 ? 1 : -1))
    }
  }

  processTouchStart = null
}

usePageSeo(
  () => content.value.methodology.seo.title,
  () => content.value.methodology.seo.description,
)
</script>

<template>
  <main id="main-content" class="methodology-page" tabindex="-1">
    <PageHero
      :eyebrow="content.methodology.hero.eyebrow"
      eyebrow-target="#proceso"
      :title="content.methodology.hero.title"
      :accent="content.methodology.hero.accent"
      :description="content.methodology.hero.description"
    >
      <template #actions>
        <NuxtLink class="button button--primary" to="/demo">
          {{ content.common.actions.demo }}
          <AnimatedArrowIcon />
        </NuxtLink>
        <NuxtLink class="button button--ghost" to="/que-ofrecemos">
          {{ content.common.nav.product }}
          <AnimatedArrowIcon />
        </NuxtLink>
      </template>
    </PageHero>

    <section id="proceso" class="section work-process-section">
      <div class="shell">
        <div v-reveal class="section-heading section-heading--center">
          <p class="eyebrow">{{ content.methodology.process.eyebrow }}</p>
          <h2>{{ content.methodology.process.title }}</h2>
          <p>{{ content.methodology.process.text }}</p>
        </div>

        <div ref="processTabs" class="work-process" :aria-label="content.methodology.process.eyebrow">
          <button
            v-for="(step, index) in content.methodology.process.steps"
            :key="step.title"
            type="button"
            class="work-process__tab"
            :class="{ 'is-active': activeProcessIndex === index }"
            :aria-pressed="activeProcessIndex === index"
            aria-controls="work-process-detail"
            @click="selectProcessStep(index, $event)"
          >
            <span>0{{ index + 1 }}</span>
            {{ step.title }}
          </button>
        </div>

        <div
          id="work-process-detail"
          class="work-process__detail"
          @touchstart.passive="startProcessSwipe"
          @touchend.passive="endProcessSwipe"
          @touchcancel="processTouchStart = null"
        >
          <Transition name="work-process-switch" mode="out-in">
            <div :key="activeProcessIndex" class="work-process__copy" aria-live="polite">
              <span class="work-process__number">0{{ activeProcessIndex + 1 }}</span>
              <h3>{{ activeProcess?.title }}</h3>
              <p>{{ activeProcess?.text }}</p>
            </div>
          </Transition>

          <div class="work-process__visual" aria-hidden="true">
            <div class="work-process__visual-top">
              <span class="work-process__visual-brand">
                <img src="/images/pulse-mark.png" alt="" width="18" height="18">
                Pulse
              </span>
              <span>0{{ activeProcessIndex + 1 }} / 04</span>
            </div>
            <div class="work-process__visual-center">
              <span
                class="work-process__visual-ring"
                :style="{ transform: `rotate(${activeProcessIndex * 90}deg)` }"
              />
              <Transition name="work-process-switch" mode="out-in">
                <strong :key="activeProcessIndex">0{{ activeProcessIndex + 1 }}</strong>
              </Transition>
            </div>
            <div class="work-process__visual-rail">
              <span
                v-for="(_, index) in content.methodology.process.steps"
                :key="index"
                :class="{ 'is-active': index <= activeProcessIndex }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--soft model-section image-ready-section">
      <div class="shell model-grid">
        <div v-reveal class="model-copy">
          <p class="eyebrow">{{ content.methodology.model.eyebrow }}</p>
          <h2>{{ content.methodology.model.title }}</h2>
          <p>{{ content.methodology.model.text }}</p>
        </div>

        <div v-reveal="100" class="mood-matrix">
          <span class="mood-matrix__axis mood-matrix__axis--y">
            {{ content.methodology.model.energy }}
          </span>
          <div class="mood-matrix__quadrants">
            <button
              v-for="(quadrant, index) in content.methodology.model.quadrants"
              :key="quadrant.title"
              type="button"
              :aria-pressed="activeMoodIndex === index"
              :class="`mood-matrix__quadrant mood-matrix__quadrant--${index + 1}`"
              @click="activeMoodIndex = index"
            >
              <small>{{ quadrant.subtitle }}</small>
              <strong>{{ quadrant.title }}</strong>
            </button>
          </div>
          <div class="mood-matrix__selection" role="status" aria-live="polite">
            <small>{{ content.methodology.model.selected }}</small>
            <strong>{{ activeMood.title }}</strong>
            <span>{{ activeMood.subtitle }}</span>
          </div>
          <span class="mood-matrix__axis mood-matrix__axis--x">
            {{ content.methodology.model.pleasantness }}
          </span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="shell">
        <div v-reveal class="section-heading section-heading--center">
          <p class="eyebrow">{{ content.methodology.principles.eyebrow }}</p>
          <h2>{{ content.methodology.principles.title }}</h2>
        </div>

        <div v-reveal class="principles-grid">
          <button
            v-for="(item, index) in content.methodology.principles.items"
            :key="item.title"
            type="button"
            class="principles-card"
            :class="{ 'is-active': activePrincipleIndex === index }"
            :aria-expanded="activePrincipleIndex === index"
            @click="activePrincipleIndex = index"
          >
            <div class="principles-grid__topline">
              <i
                class="fi principles-grid__icon"
                :class="principleIcons[index]"
                aria-hidden="true"
              />
              <span>0{{ index + 1 }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p :aria-hidden="activePrincipleIndex !== index">{{ item.text }}</p>
          </button>
        </div>
      </div>
    </section>

    <div ref="methodologyDarkRef" class="scroll-theme-reveal methodology-dark">
      <section class="section validation-section">
        <div class="shell validation-panel">
          <div v-reveal class="section-heading validation-panel__intro">
            <p class="eyebrow eyebrow--light">
              {{ content.methodology.validation.eyebrow }}
            </p>
            <h2>{{ content.methodology.validation.title }}</h2>
            <p>{{ content.methodology.validation.text }}</p>
          </div>
          <div class="validation-list validation-list--accordion">
            <details
              v-for="(item, index) in content.methodology.validation.items"
              :key="item.label"
              v-reveal="index * 80"
            >
              <summary>
                <span>0{{ index + 1 }}</span>
                <strong>{{ item.label }}</strong>
                <span class="validation-list__toggle" aria-hidden="true">
                  <AnimatedDisclosureIcon :size="22" />
                </span>
              </summary>
              <div class="validation-list__body">
                <p>{{ item.text }}</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <CtaBanner
        :title="content.methodology.cta.title"
        :text="content.methodology.cta.text"
      />
    </div>
  </main>
</template>

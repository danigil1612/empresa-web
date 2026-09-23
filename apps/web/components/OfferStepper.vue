<script setup lang="ts">
type OfferGroup = {
  title: string
  text: string
  items: readonly { title: string; text: string }[]
}

const props = defineProps<{
  groups: readonly OfferGroup[]
  label: string
}>()

const { locale } = usePulseI18n()
const navigation = computed(() => ({
  ca: { previous: 'Anterior', next: 'Següent', demo: 'Demana una demo', step: 'Pas' },
  es: { previous: 'Anterior', next: 'Siguiente', demo: 'Pide una demo', step: 'Paso' },
  en: { previous: 'Previous', next: 'Next', demo: 'Request a demo', step: 'Step' },
})[locale.value])
const currentStep = ref(0)
const direction = ref(1)
const indicators = ref<HTMLElement | null>(null)
const panel = ref<HTMLElement | null>(null)
const panelHeight = ref<number | null>(null)
const currentGroup = computed(() => props.groups[currentStep.value])
let resizeObserver: ResizeObserver | undefined

function selectStep(index: number, focusIndicator = false) {
  if (index < 0 || index >= props.groups.length) return

  direction.value = index >= currentStep.value ? 1 : -1
  currentStep.value = index

  if (focusIndicator) {
    nextTick(() => {
      indicators.value?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[index]?.focus()
    })
  }
}

function handleIndicatorKeydown(event: KeyboardEvent, index: number) {
  const lastIndex = props.groups.length - 1
  const destinations: Record<string, number> = {
    ArrowRight: index === lastIndex ? 0 : index + 1,
    ArrowLeft: index === 0 ? lastIndex : index - 1,
    Home: 0,
    End: lastIndex,
  }

  if (event.key in destinations) {
    event.preventDefault()
    selectStep(destinations[event.key], true)
  }
}

function observePanel(element: Element) {
  resizeObserver?.disconnect()
  const measure = () => { panelHeight.value = (element as HTMLElement).offsetHeight }
  measure()
  resizeObserver = new ResizeObserver(measure)
  resizeObserver.observe(element)
}

function hideDepartingPanel(element: Element) {
  element.setAttribute('aria-hidden', 'true')
  element.setAttribute('inert', '')
}

onMounted(() => {
  if (panel.value) observePanel(panel.value)
})

onBeforeUnmount(() => resizeObserver?.disconnect())
</script>

<template>
  <div v-if="currentGroup" class="offer-stepper">
    <div ref="indicators" class="offer-stepper__progress" role="tablist" :aria-label="label">
      <div
        v-for="(group, index) in groups"
        :key="index"
        class="offer-stepper__stage"
        :class="{ 'is-active': currentStep === index, 'is-complete': currentStep > index }"
      >
        <button
          :id="`offer-step-${index}`"
          class="offer-stepper__indicator"
          type="button"
          role="tab"
          :aria-selected="currentStep === index"
          :aria-controls="`offer-step-panel-${index}`"
          :tabindex="currentStep === index ? 0 : -1"
          @click="selectStep(index)"
          @keydown="handleIndicatorKeydown($event, index)"
        >
          <span class="offer-stepper__number" aria-hidden="true">
            <svg v-if="currentStep > index" viewBox="0 0 20 20" fill="none">
              <path d="m4.5 10 3.5 3.5 7.5-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span v-else>{{ index + 1 }}</span>
          </span>
          <span class="offer-stepper__label">{{ group.title }}</span>
        </button>
        <span v-if="index < groups.length - 1" class="offer-stepper__connector" aria-hidden="true"><i /></span>
      </div>
    </div>

    <div
      class="offer-stepper__viewport"
      :style="{ height: panelHeight === null ? undefined : `${panelHeight}px`, '--step-direction': direction }"
    >
      <Transition name="offer-slide" @enter="observePanel" @before-leave="hideDepartingPanel">
        <div
          :id="`offer-step-panel-${currentStep}`"
          :key="currentStep"
          ref="panel"
          class="offer-stepper__panel"
          role="tabpanel"
          :aria-labelledby="`offer-step-${currentStep}`"
          tabindex="0"
        >
          <p class="offer-stepper__count">{{ navigation.step }} 0{{ currentStep + 1 }} <span>/ 0{{ groups.length }}</span></p>
          <h3>{{ currentGroup.title }}</h3>
          <p class="offer-stepper__description">{{ currentGroup.text }}</p>
          <ul class="offer-stepper__details">
            <li v-for="item in currentGroup.items" :key="item.title">
              <strong>{{ item.title }}</strong>
              <p>{{ item.text }}</p>
            </li>
          </ul>
        </div>
      </Transition>
    </div>

    <div class="offer-stepper__navigation">
      <button
        class="offer-stepper__back"
        type="button"
        :disabled="currentStep === 0"
        @click="selectStep(currentStep - 1)"
      >
        <AnimatedArrowIcon direction="left" :size="18" />
        {{ navigation.previous }}
      </button>
      <button
        v-if="currentStep < groups.length - 1"
        class="offer-stepper__next"
        type="button"
        @click="selectStep(currentStep + 1)"
      >
        {{ navigation.next }}
        <AnimatedArrowIcon :size="18" />
      </button>
      <NuxtLink v-else class="offer-stepper__next" to="/demo">
        {{ navigation.demo }}
        <AnimatedArrowIcon :size="18" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.offer-stepper {
  width: min(100%, 850px);
  margin-inline: auto;
  padding: clamp(24px, 4vw, 44px);
  border: 1px solid rgba(14, 42, 45, .14);
  border-radius: 30px;
  background: #e9f3f4;
  color: #0e2a2d;
  box-shadow: 0 16px 44px rgba(14, 42, 45, .05);
}

.offer-stepper__progress { display: flex; margin-bottom: 36px; }
.offer-stepper__stage { position: relative; flex: 1; min-width: 0; }
.offer-stepper__indicator {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 0 10px;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
}
.offer-stepper__number {
  position: relative;
  z-index: 1;
  display: grid;
  width: 42px;
  height: 42px;
  place-items: center;
  border: 1px solid rgba(14, 42, 45, .23);
  border-radius: 50%;
  background: #e9f3f4;
  font-weight: 600;
  transition: background-color 300ms, color 300ms, border-color 300ms, transform 300ms;
}
.offer-stepper__number svg { width: 20px; height: 20px; }
.offer-stepper__label { max-width: 190px; font-size: .9rem; line-height: 1.35; opacity: .62; transition: opacity 300ms; }
.is-active .offer-stepper__number { border-color: #f37e75; background: #f37e75; }
.is-complete .offer-stepper__number { border-color: #0e2a2d; background: #0e2a2d; color: #e9f3f4; }
.is-active .offer-stepper__label { font-weight: 600; opacity: 1; }
.offer-stepper__indicator:hover .offer-stepper__number { transform: translateY(-2px); }
.offer-stepper__indicator:hover .offer-stepper__label { opacity: 1; }
.offer-stepper__connector { position: absolute; top: 21px; right: calc(-50% + 30px); left: calc(50% + 30px); height: 2px; overflow: hidden; background: rgba(14, 42, 45, .14); }
.offer-stepper__connector i { display: block; width: 100%; height: 100%; transform: scaleX(0); transform-origin: left; background: #0e2a2d; transition: transform 420ms cubic-bezier(.22, 1, .36, 1); }
.is-complete .offer-stepper__connector i { transform: scaleX(1); }

.offer-stepper__viewport { position: relative; overflow: hidden; transition: height 440ms cubic-bezier(.22, 1, .36, 1); }
.offer-stepper__panel { padding: 4px; }
.offer-stepper__count { margin-bottom: 14px; font-size: .76rem; font-weight: 600; letter-spacing: .09em; text-transform: uppercase; }
.offer-stepper__count span { opacity: .45; }
.offer-stepper__panel h3 { margin-bottom: 14px; font-size: clamp(1.85rem, 3vw, 2.45rem); }
.offer-stepper__description { max-width: 600px; margin-bottom: 28px; font-size: 1.05rem; line-height: 1.55; color: rgba(14, 42, 45, .78); }
.offer-stepper__details { padding: 0; margin: 0; list-style: none; }
.offer-stepper__details li { display: grid; grid-template-columns: minmax(0, .8fr) minmax(0, 1.6fr); gap: 24px; padding: 17px 0; border-top: 1px solid rgba(14, 42, 45, .12); font-size: .97rem; line-height: 1.5; }
.offer-stepper__details strong { font-weight: 600; }
.offer-stepper__details p { margin: 0; color: rgba(14, 42, 45, .78); }
.offer-stepper__navigation { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 28px; }
.offer-stepper__back, .offer-stepper__next { display: inline-flex; min-height: 44px; align-items: center; justify-content: center; gap: 10px; padding: 10px 20px; border: 0; border-radius: 999px; font-size: .92rem; font-weight: 600; cursor: pointer; transition: color 250ms, background-color 250ms, opacity 250ms; }
.offer-stepper__back { padding-left: 4px; background: transparent; color: #0e2a2d; }
.offer-stepper__back:hover:not(:disabled) { opacity: .65; }
.offer-stepper__back:disabled { opacity: .35; cursor: default; }
.offer-stepper__next { background: #0e2a2d; color: #e9f3f4; }
.offer-stepper__next:hover { background: #f37e75; color: #0e2a2d; }
.offer-stepper :is(button, a):focus-visible, .offer-stepper__panel:focus-visible { outline: 2px solid #0e2a2d; outline-offset: 5px; }

.offer-slide-enter-active, .offer-slide-leave-active { transition: opacity 280ms ease, transform 440ms cubic-bezier(.22, 1, .36, 1); }
.offer-slide-leave-active { position: absolute; inset: 0 0 auto; width: 100%; pointer-events: none; }
.offer-slide-enter-from { opacity: 0; transform: translateX(calc(var(--step-direction) * 32px)); }
.offer-slide-leave-to { opacity: 0; transform: translateX(calc(var(--step-direction) * -32px)); }

@media (max-width: 600px) {
  .offer-stepper { padding: 24px 20px; border-radius: 24px; }
  .offer-stepper__progress { margin-bottom: 28px; }
  .offer-stepper__indicator { gap: 10px; padding-inline: 3px; }
  .offer-stepper__label { font-size: .75rem; }
  .offer-stepper__details li { grid-template-columns: 1fr; gap: 5px; padding-block: 15px; }
  .offer-stepper__description { font-size: 1rem; margin-bottom: 22px; }
  .offer-stepper__navigation { margin-top: 22px; gap: 10px; }
  .offer-stepper__next { padding-inline: 16px; }
}

@media (prefers-reduced-motion: reduce) {
  .offer-stepper *, .offer-slide-enter-active, .offer-slide-leave-active { transition: none; }
  .offer-slide-enter-from, .offer-slide-leave-to { transform: none; }
  .offer-stepper__indicator:hover .offer-stepper__number { transform: none; }
}
</style>

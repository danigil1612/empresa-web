<script setup lang="ts">
type FaqAnswer = string | readonly string[]

interface FaqItem {
  id?: string
  question: string
  answer: FaqAnswer
}

interface FaqCategory {
  id: string
  label: string
  description?: string
  items: readonly FaqItem[]
}

const props = withDefaults(
  defineProps<{
    categories: readonly FaqCategory[]
    ariaLabel?: string
    initialCategoryId?: string
    initialOpenIndex?: number
  }>(),
  {
    ariaLabel: 'FAQ',
    initialCategoryId: undefined,
    initialOpenIndex: 0,
  },
)

const root = ref<HTMLElement | null>(null)
const generatedId = useId().replace(/[^a-zA-Z0-9_-]/g, '')
const componentId = `faq-explorer-${generatedId}`

function preferredCategoryId() {
  const requestedCategory = props.categories.find(
    (category) => category.id === props.initialCategoryId,
  )

  return requestedCategory?.id ?? props.categories[0]?.id ?? ''
}

const activeCategoryId = ref(preferredCategoryId())
const openQuestionKey = ref<string | null>(null)

const activeCategory = computed(
  () =>
    props.categories.find(
      (category) => category.id === activeCategoryId.value,
    ) ?? props.categories[0],
)

const tabPanelId = `${componentId}-panel`

function safeId(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
}

function categoryTabId(categoryId: string) {
  return `${componentId}-category-${safeId(categoryId)}`
}

function questionKey(categoryId: string, item: FaqItem, index: number) {
  return `${categoryId}:${item.id ?? index}`
}

function questionButtonId(categoryId: string, item: FaqItem, index: number) {
  return `${componentId}-question-${safeId(
    questionKey(categoryId, item, index),
  )}`
}

function answerPanelId(categoryId: string, item: FaqItem, index: number) {
  return `${componentId}-answer-${safeId(
    questionKey(categoryId, item, index),
  )}`
}

function paragraphs(answer: FaqAnswer) {
  if (Array.isArray(answer)) {
    return answer.filter((paragraph) => paragraph.trim().length > 0)
  }

  return (answer as string)
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

function initialQuestionKey(category: FaqCategory | undefined) {
  if (!category || props.initialOpenIndex < 0) {
    return null
  }

  const item = category.items[props.initialOpenIndex]

  return item
    ? questionKey(category.id, item, props.initialOpenIndex)
    : null
}

function selectCategory(categoryId: string) {
  activeCategoryId.value = categoryId
  const category = props.categories.find((item) => item.id === categoryId)
  openQuestionKey.value = initialQuestionKey(category)
}

function toggleQuestion(categoryId: string, item: FaqItem, index: number) {
  const key = questionKey(categoryId, item, index)
  openQuestionKey.value = openQuestionKey.value === key ? null : key
}

function categoryButtons() {
  return Array.from(
    root.value?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? [],
  )
}

function focusCategory(index: number) {
  const buttons = categoryButtons()

  if (!buttons.length) {
    return
  }

  const normalizedIndex = (index + buttons.length) % buttons.length
  const category = props.categories[normalizedIndex]

  if (!category) {
    return
  }

  selectCategory(category.id)
  nextTick(() => buttons[normalizedIndex]?.focus())
}

function handleCategoryKeydown(event: KeyboardEvent) {
  const buttons = categoryButtons()
  const currentIndex = buttons.indexOf(
    document.activeElement as HTMLButtonElement,
  )

  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault()
    focusCategory(currentIndex + 1)
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault()
    focusCategory(currentIndex - 1)
  } else if (event.key === 'Home') {
    event.preventDefault()
    focusCategory(0)
  } else if (event.key === 'End') {
    event.preventDefault()
    focusCategory(buttons.length - 1)
  }
}

watch(
  () => [props.categories, props.initialCategoryId] as const,
  () => {
    const activeStillExists = props.categories.some(
      (category) => category.id === activeCategoryId.value,
    )

    if (!activeStillExists) {
      activeCategoryId.value = preferredCategoryId()
    }

    openQuestionKey.value = initialQuestionKey(activeCategory.value)
  },
  { deep: true, immediate: true },
)
</script>

<template>
  <div ref="root" class="faq-explorer">
    <div
      class="faq-explorer__categories"
      role="tablist"
      :aria-label="props.ariaLabel"
      @keydown="handleCategoryKeydown"
    >
      <button
        v-for="category in props.categories"
        :id="categoryTabId(category.id)"
        :key="category.id"
        class="faq-explorer__category"
        :class="{ 'is-active': category.id === activeCategory?.id }"
        type="button"
        role="tab"
        :aria-selected="category.id === activeCategory?.id"
        :aria-controls="tabPanelId"
        :tabindex="category.id === activeCategory?.id ? 0 : -1"
        @click="selectCategory(category.id)"
      >
        <span>{{ category.label }}</span>
        <span class="faq-explorer__count" aria-hidden="true">
          {{ category.items.length.toString().padStart(2, '0') }}
        </span>
      </button>
    </div>

    <section
      v-if="activeCategory"
      :id="tabPanelId"
      class="faq-explorer__panel"
      role="tabpanel"
      :aria-labelledby="categoryTabId(activeCategory.id)"
    >
      <header class="faq-explorer__panel-header">
        <h3>{{ activeCategory.label }}</h3>
        <p v-if="activeCategory.description">
          {{ activeCategory.description }}
        </p>
      </header>

      <div class="faq-explorer__questions">
        <article
          v-for="(item, index) in activeCategory.items"
          :key="questionKey(activeCategory.id, item, index)"
          class="faq-explorer__item"
          :class="{
            'is-open':
              openQuestionKey ===
              questionKey(activeCategory.id, item, index),
          }"
        >
          <h4>
            <button
              :id="questionButtonId(activeCategory.id, item, index)"
              class="faq-explorer__question"
              type="button"
              :aria-expanded="
                openQuestionKey ===
                questionKey(activeCategory.id, item, index)
              "
              :aria-controls="answerPanelId(activeCategory.id, item, index)"
              @click="toggleQuestion(activeCategory.id, item, index)"
            >
              <span>{{ item.question }}</span>
              <span class="faq-explorer__disclosure" aria-hidden="true">
                <AnimatedDisclosureIcon
                  :open="
                    openQuestionKey ===
                    questionKey(activeCategory.id, item, index)
                  "
                />
              </span>
            </button>
          </h4>

          <Transition name="faq-answer">
            <div
              v-if="
                openQuestionKey ===
                questionKey(activeCategory.id, item, index)
              "
              :id="answerPanelId(activeCategory.id, item, index)"
              class="faq-explorer__answer"
              role="region"
              :aria-labelledby="
                questionButtonId(activeCategory.id, item, index)
              "
            >
              <p
                v-for="(paragraph, paragraphIndex) in paragraphs(item.answer)"
                :key="paragraphIndex"
              >
                {{ paragraph }}
              </p>
            </div>
          </Transition>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.faq-explorer {
  --faq-border: var(--border, rgba(14, 42, 45, 0.16));
  --faq-ink: var(--ink, #0e2a2d);
  --faq-ink-deep: var(--ink-deep, #0e2a2d);
  --faq-soft: var(--soft, #dce9ea);
  --faq-paper: var(--paper, #e9f3f4);
  --faq-coral: var(--coral, #f37e75);

  display: grid;
  grid-template-columns: minmax(13rem, 0.72fr) minmax(0, 1.75fr);
  gap: clamp(2rem, 6vw, 6.5rem);
  align-items: start;
  color: var(--faq-ink-deep);
}

.faq-explorer__categories {
  position: sticky;
  top: 7.5rem;
  display: grid;
  gap: 0.35rem;
}

.faq-explorer__category {
  width: 100%;
  min-height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 0.95rem;
  border: 1px solid transparent;
  border-radius: var(--radius-sm, 16px);
  background: transparent;
  color: var(--faq-ink);
  font: inherit;
  font-size: 0.94rem;
  font-weight: 520;
  line-height: 1.25;
  text-align: left;
  cursor: pointer;
  transition:
    color 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease,
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

.faq-explorer__category:hover {
  border-color: var(--faq-border);
  background: rgba(220, 233, 234, 0.22);
  transform: translateX(0.2rem);
}

.faq-explorer__category.is-active {
  border-color: rgba(14, 42, 45, 0.12);
  background: var(--faq-ink-deep);
  color: var(--faq-paper);
}

.faq-explorer__category:focus-visible,
.faq-explorer__question:focus-visible {
  outline: 3px solid var(--faq-coral);
  outline-offset: 3px;
}

.faq-explorer__count {
  min-width: 2rem;
  color: currentColor;
  font-size: 0.72rem;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.08em;
  opacity: 0.68;
  text-align: right;
}

.faq-explorer__panel {
  min-width: 0;
}

.faq-explorer__panel-header {
  display: grid;
  gap: 0.6rem;
  margin-bottom: clamp(1.4rem, 3vw, 2.2rem);
}

.faq-explorer__panel-header h3 {
  margin: 0;
  color: var(--faq-ink-deep);
  font-size: clamp(1.55rem, 3vw, 2.2rem);
  font-weight: 540;
  letter-spacing: -0.035em;
  line-height: 1.05;
}

.faq-explorer__panel-header p {
  max-width: 46rem;
  margin: 0;
  color: var(--faq-ink);
  font-size: 1rem;
  line-height: 1.65;
  opacity: 0.78;
}

.faq-explorer__questions {
  border-top: 1px solid var(--faq-border);
}

.faq-explorer__item {
  border-bottom: 1px solid var(--faq-border);
}

.faq-explorer__item h4 {
  margin: 0;
}

.faq-explorer__question {
  width: 100%;
  min-height: 5.5rem;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1.5rem;
  align-items: center;
  padding: 1.3rem 0.2rem;
  border: 0;
  background: transparent;
  color: var(--faq-ink-deep);
  font: inherit;
  font-size: clamp(1.03rem, 1.7vw, 1.22rem);
  font-weight: 520;
  line-height: 1.35;
  text-align: left;
  cursor: pointer;
  transition: color 180ms ease;
}

.faq-explorer__question:hover {
  color: var(--faq-ink);
}

.faq-explorer__disclosure {
  width: 2.6rem;
  height: 2.6rem;
  display: grid;
  place-items: center;
  border: 0;
  background: transparent;
  color: var(--faq-ink);
  transition: color 180ms ease, transform 180ms ease;
}

.faq-explorer__item.is-open .faq-explorer__disclosure,
.faq-explorer__question:hover .faq-explorer__disclosure {
  color: var(--faq-ink-deep);
  transform: scale(1.12);
}

.faq-explorer__answer {
  max-width: 47rem;
  padding: 0 4.1rem 1.8rem 0.2rem;
  color: var(--faq-ink);
}

.faq-explorer__answer p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.72;
  white-space: pre-line;
}

.faq-explorer__answer p + p {
  margin-top: 0.8rem;
}

.faq-answer-enter-active,
.faq-answer-leave-active {
  transform-origin: top;
  transition:
    opacity 180ms ease,
    transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
}

.faq-answer-enter-from,
.faq-answer-leave-to {
  opacity: 0;
  transform: translateY(-0.45rem);
}

@media (max-width: 820px) {
  .faq-explorer {
    grid-template-columns: 1fr;
    gap: 2.4rem;
  }

  .faq-explorer__categories {
    position: static;
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    padding: 0.15rem 0.15rem 0.6rem;
    scroll-snap-type: x proximity;
    scrollbar-width: thin;
  }

  .faq-explorer__category {
    width: auto;
    min-width: max-content;
    scroll-snap-align: start;
  }

  .faq-explorer__category:hover {
    transform: none;
  }
}

@media (max-width: 540px) {
  .faq-explorer__question {
    min-height: 5rem;
    gap: 1rem;
  }

  .faq-explorer__answer {
    padding-right: 0.2rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .faq-explorer__category,
  .faq-explorer__question,
  .faq-explorer__disclosure,
  .faq-answer-enter-active,
  .faq-answer-leave-active {
    transition: none;
  }

  .faq-explorer__category:hover,
  .faq-answer-enter-from,
  .faq-answer-leave-to {
    transform: none;
  }
}
</style>

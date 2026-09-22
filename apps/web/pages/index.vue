<script setup lang="ts">
import { faqMessages } from '~/i18n/faq'

const { content, locale } = usePulseI18n()
const problemIcons = [
  'fi-br-battery-quarter',
  'fi-br-clock-three',
  'fi-br-ear',
]
const activeProblem = ref(0)
const activeMethodStep = ref(0)
const homeDarkRef = useScrollThemeReveal()

function selectMethodStep(index: number, event: MouseEvent) {
  activeMethodStep.value = index

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
const faq = computed(() => faqMessages[locale.value])
const faqCategories = computed(() =>
  faq.value.sections.map((section) => ({
    id: section.id,
    label: section.title,
    items: section.items,
  })),
)

usePageSeo(
  () => content.value.home.seo.title,
  () => content.value.home.seo.description,
)
</script>

<template>
  <main id="main-content" class="home-page" tabindex="-1">
    <section class="home-hero">
      <div class="shell home-hero__grid">
        <div v-reveal class="home-hero__copy">
          <p class="eyebrow">{{ content.home.hero.eyebrow }}</p>
          <h1>
            {{ content.home.hero.title }}
            <span>{{ content.home.hero.accent }}</span>
          </h1>
          <p class="home-hero__lead">{{ content.home.hero.lead }}</p>
          <div class="hero-actions">
            <NuxtLink class="button button--primary" to="/demo">
              {{ content.common.actions.demo }}
              <AnimatedArrowIcon />
            </NuxtLink>
            <NuxtLink class="button button--ghost" to="/como-trabajamos">
              {{ content.home.hero.how }}
              <AnimatedArrowIcon />
            </NuxtLink>
          </div>
          <div class="hero-metrics" aria-label="Pulse">
            <div
              v-for="metric in content.home.hero.metrics"
              :key="metric.label"
              class="hero-metrics__item"
            >
              <strong>{{ metric.value }}</strong>
              <span>{{ metric.label }}</span>
            </div>
          </div>
        </div>

        <div v-reveal="120" class="home-hero__visual">
          <HeroScreens />
        </div>
      </div>
    </section>

    <section class="section problem-section">
      <div class="shell">
        <div v-reveal class="section-heading section-heading--center">
          <p class="eyebrow">{{ content.home.problem.eyebrow }}</p>
          <h2>{{ content.home.problem.title }}</h2>
          <p v-if="content.home.problem.intro">
            {{ content.home.problem.intro }}
          </p>
        </div>

        <div v-reveal class="problem-grid">
          <button
            v-for="(problem, index) in content.home.problem.cards"
            :key="problem.number"
            type="button"
            class="problem-card"
            :class="{ 'is-active': activeProblem === index }"
            :aria-expanded="activeProblem === index"
            @click="activeProblem = index"
          >
            <span class="problem-card__topline">
              <i
                class="fi problem-card__icon"
                :class="problemIcons[index]"
                aria-hidden="true"
              />
              <span class="problem-card__number">{{ problem.number }}</span>
            </span>
            <span class="problem-card__content">
              <span class="problem-card__title">{{ problem.title }}</span>
              <span
                class="problem-card__description"
                :aria-hidden="activeProblem !== index"
              >
                {{ problem.text }}
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>

    <div ref="homeDarkRef" class="scroll-theme-reveal home-dark">
      <section class="section methodology-section">
        <div class="shell">
          <div class="method-panel method-panel--immersive">
            <div class="method-panel__heading">
              <p class="eyebrow eyebrow--light">
                {{ content.home.methodology.eyebrow }}
              </p>
              <h2>
                {{ content.home.methodology.title }}
                <span>{{ content.home.methodology.accent }}</span>
              </h2>
            </div>

            <div class="method-steps" :aria-label="content.home.methodology.eyebrow">
              <button
                v-for="(step, index) in content.home.methodology.steps"
                :key="step.tag"
                type="button"
                class="method-step"
                :class="{ 'is-active': activeMethodStep === index }"
                :aria-pressed="activeMethodStep === index"
                aria-controls="method-step-detail"
                @click="selectMethodStep(index, $event)"
              >
                <span class="method-steps__index">0{{ index + 1 }}</span>
                <span class="method-steps__tag">{{ step.tag }}</span>
                <span class="method-step__title">{{ step.title }}</span>
              </button>
            </div>

            <div id="method-step-detail" class="method-detail" aria-live="polite">
              <Transition name="method-detail-switch" mode="out-in">
                <div
                  :key="activeMethodStep"
                  class="method-detail__content"
                >
                  <span class="method-detail__index">0{{ activeMethodStep + 1 }}</span>
                  <div>
                    <p class="method-detail__tag">
                      {{ content.home.methodology.steps[activeMethodStep]?.tag }}
                    </p>
                    <h3>{{ content.home.methodology.steps[activeMethodStep]?.title }}</h3>
                    <p>{{ content.home.methodology.steps[activeMethodStep]?.text }}</p>
                  </div>
                </div>
              </Transition>
            </div>

            <NuxtLink class="button button--method" to="/como-trabajamos">
              {{ content.home.methodology.link }}
              <AnimatedArrowIcon />
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="section home-product-section">
        <div class="shell">
          <div v-reveal class="section-heading home-product-section__heading">
            <p class="eyebrow eyebrow--light">{{ content.home.product.eyebrow }}</p>
            <h2>{{ content.home.product.title }}</h2>
            <p>{{ content.home.product.intro }}</p>
          </div>
          <div class="home-product-benefits">
            <article
              v-for="(benefit, index) in content.home.product.benefits"
              :key="benefit.title"
              v-reveal="index * 80"
            >
              <span>0{{ index + 1 }}</span>
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.text }}</p>
            </article>
          </div>
          <NuxtLink class="button button--method" to="/que-ofrecemos">
            {{ content.home.product.link }}
            <AnimatedArrowIcon />
          </NuxtLink>
        </div>
      </section>

      <section class="section section--soft trust-section">
        <div class="shell trust-grid">
          <div v-reveal class="section-heading">
            <p class="eyebrow">{{ content.home.trust.eyebrow }}</p>
            <h2>{{ content.home.trust.title }}</h2>
            <p>{{ content.home.trust.text }}</p>
          </div>
          <div class="trust-list">
            <details
              v-for="(item, index) in content.home.trust.items"
              :key="item.title"
              v-reveal="index * 80"
            >
              <summary>
                <span>0{{ index + 1 }}</span>
                <span class="trust-list__summary-copy">
                  <small>{{ item.title }}</small>
                  <strong>{{ item.subtitle }}</strong>
                </span>
                <span class="trust-list__toggle" aria-hidden="true">+</span>
              </summary>
              <div class="trust-list__body">
                <p>{{ item.detail }}</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section class="section faq-section">
        <div class="shell">
          <div v-reveal class="section-heading faq-section__heading">
            <p class="eyebrow">{{ faq.eyebrow }}</p>
            <h2>{{ faq.title }}</h2>
            <p>{{ faq.intro }}</p>
          </div>
          <FaqExplorer
            v-reveal="100"
            class="faq-explorer--inverse"
            :categories="faqCategories"
            :aria-label="faq.title"
            initial-category-id="about"
          />
        </div>
      </section>

      <CtaBanner :title="content.common.cta.title" :text="content.common.cta.text" />
    </div>
  </main>
</template>

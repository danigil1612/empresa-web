<script setup lang="ts">
const { content } = usePulseI18n()
const problemIcons = [
  'fi-br-battery-quarter',
  'fi-br-clock-three',
  'fi-br-ear',
]

usePageSeo(
  () => content.value.home.seo.title,
  () => content.value.home.seo.description,
)
</script>

<template>
  <main id="main-content" tabindex="-1">
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
              <i class="fi fi-br-arrow-right" aria-hidden="true" />
            </NuxtLink>
            <NuxtLink class="button button--ghost" to="/como-trabajamos">
              {{ content.home.hero.how }}
            </NuxtLink>
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
          <p>{{ content.home.problem.intro }}</p>
        </div>

        <div class="problem-grid">
          <article
            v-for="(problem, index) in content.home.problem.cards"
            :key="problem.number"
            v-reveal="index * 90"
            class="problem-card"
          >
            <div class="problem-card__topline">
              <i
                class="fi problem-card__icon"
                :class="problemIcons[index]"
                aria-hidden="true"
              />
              <span class="problem-card__number">{{ problem.number }}</span>
            </div>
            <div>
              <h3>{{ problem.title }}</h3>
              <p>{{ problem.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section pulse-intro-section image-ready-section">
      <div class="shell pulse-intro">
        <div v-reveal class="pulse-intro__heading">
          <p class="eyebrow">{{ content.home.introduction.eyebrow }}</p>
          <h2>{{ content.home.introduction.title }}</h2>
        </div>
        <div v-reveal="100" class="pulse-intro__copy">
          <p>{{ content.home.introduction.text }}</p>
          <NuxtLink class="text-link" to="/quienes-somos">
            {{ content.home.introduction.link }}
            <i class="fi fi-br-arrow-right" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section methodology-section">
      <div class="shell">
        <div class="method-panel">
          <div v-reveal class="method-panel__heading">
            <p class="eyebrow eyebrow--light">
              {{ content.home.methodology.eyebrow }}
            </p>
            <h2>
              {{ content.home.methodology.title }}
              <span>{{ content.home.methodology.accent }}</span>
            </h2>
          </div>

          <div class="method-steps">
            <article
              v-for="(step, index) in content.home.methodology.steps"
              :key="step.tag"
              v-reveal="index * 90"
            >
              <div class="method-steps__index">0{{ index + 1 }}</div>
              <p class="method-steps__tag">{{ step.tag }}</p>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </article>
          </div>

          <NuxtLink class="text-link text-link--light" to="/como-trabajamos">
            {{ content.home.methodology.link }}
            <i class="fi fi-br-arrow-right" aria-hidden="true" />
          </NuxtLink>
        </div>
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
          <div
            v-for="(item, index) in content.home.trust.items"
            :key="item"
            v-reveal="index * 80"
          >
            <span>0{{ index + 1 }}</span>
            <p>{{ item }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section faq-section">
      <div class="shell faq-grid">
        <div v-reveal class="section-heading">
          <p class="eyebrow">{{ content.home.faq.eyebrow }}</p>
          <h2>{{ content.home.faq.title }}</h2>
        </div>
        <div v-reveal="100" class="faq-list">
          <details
            v-for="(item, index) in content.home.faq.items"
            :key="item.question"
            :open="index === 0"
          >
            <summary>
              <span>{{ item.question }}</span>
              <i class="fi fi-br-plus-small" aria-hidden="true" />
            </summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <CtaBanner />
  </main>
</template>

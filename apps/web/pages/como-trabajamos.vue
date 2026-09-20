<script setup lang="ts">
const { content } = usePulseI18n()
const activeMoodIndex = ref(1)
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

usePageSeo(
  () => content.value.methodology.seo.title,
  () => content.value.methodology.seo.description,
)
</script>

<template>
  <main id="main-content" tabindex="-1">
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

        <div class="work-process">
          <article
            v-for="(step, index) in content.methodology.process.steps"
            :key="step.title"
            v-reveal="index * 80"
          >
            <span>0{{ index + 1 }}</span>
            <div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--soft model-section image-ready-section">
      <div class="shell model-grid">
        <div v-reveal class="model-copy">
          <p class="eyebrow">{{ content.methodology.model.eyebrow }}</p>
          <h2>{{ content.methodology.model.title }}</h2>
          <p>{{ content.methodology.model.text }}</p>
          <small>{{ content.methodology.model.note }}</small>
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

        <div class="principles-grid">
          <article
            v-for="(item, index) in content.methodology.principles.items"
            :key="item.title"
            v-reveal="index * 80"
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
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section validation-section">
      <div class="shell validation-panel">
        <div v-reveal class="section-heading validation-panel__intro">
          <p class="eyebrow eyebrow--light">
            {{ content.methodology.validation.eyebrow }}
          </p>
          <h2>{{ content.methodology.validation.title }}</h2>
          <p>{{ content.methodology.validation.text }}</p>
        </div>
        <div class="validation-list validation-list--detailed">
          <article
            v-for="(item, index) in content.methodology.validation.items"
            :key="item.label"
            v-reveal="index * 80"
          >
            <div class="validation-list__meta">
              <span>0{{ index + 1 }}</span>
              <p>{{ item.label }}</p>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <CtaBanner
      :title="content.methodology.cta.title"
      :text="content.methodology.cta.text"
    />
  </main>
</template>

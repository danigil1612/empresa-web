<script setup lang="ts">
const { content } = usePulseI18n()

usePageSeo(
  () => content.value.company.seo.title,
  () => content.value.company.seo.description,
)
</script>

<template>
  <main id="main-content" tabindex="-1">
    <PageHero
      :eyebrow="content.company.hero.eyebrow"
      eyebrow-target="#historia"
      :title="content.company.hero.title"
      :accent="content.company.hero.accent"
      :description="content.company.hero.description"
    >
      <template #actions>
        <NuxtLink class="button button--primary" to="/demo">
          {{ content.company.hero.action }}
          <AnimatedArrowIcon />
        </NuxtLink>
      </template>
    </PageHero>

    <section id="historia" class="section company-story image-ready-section">
      <div class="shell company-story__grid">
        <article
          v-for="(item, index) in content.company.story.items"
          :key="item.title"
          v-reveal="index * 100"
        >
          <p class="eyebrow">{{ item.eyebrow }}</p>
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section class="section company-manifesto">
      <div class="shell">
        <div v-reveal class="manifesto-card">
          <p class="eyebrow eyebrow--light manifesto-card__eyebrow">
            {{ content.company.manifestoEyebrow }}
          </p>
          <span class="manifesto-card__quote" aria-hidden="true">“</span>
          <p>{{ content.company.manifesto }}</p>
        </div>
      </div>
    </section>

    <section class="section section--soft">
      <div class="shell">
        <div v-reveal class="section-heading">
          <p class="eyebrow">{{ content.company.values.eyebrow }}</p>
          <h2>{{ content.company.values.title }}</h2>
        </div>
        <div class="values-grid">
          <article
            v-for="(value, index) in content.company.values.items"
            :key="value.title"
            v-reveal="index * 90"
          >
            <span>0{{ index + 1 }}</span>
            <h3>{{ value.title }}</h3>
            <p>{{ value.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <CtaBanner :title="content.company.cta.title" :text="content.company.cta.text" />
  </main>
</template>

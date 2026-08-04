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
      :title="content.company.hero.title"
      :accent="content.company.hero.accent"
      :description="content.company.hero.description"
    >
      <template #actions>
        <NuxtLink class="button button--primary" to="/demo">
          {{ content.company.hero.action }}
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </template>
    </PageHero>

    <section class="section">
      <div class="shell purpose-grid">
        <div v-reveal>
          <p class="eyebrow">{{ content.company.purpose.eyebrow }}</p>
          <h2>{{ content.company.purpose.title }}</h2>
        </div>
        <div v-reveal="100" class="purpose-grid__copy">
          <p
            v-for="paragraph in content.company.purpose.paragraphs"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
          <p class="placeholder-note">{{ content.company.purpose.note }}</p>
        </div>
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
          <span>{{ content.company.manifestoBy }}</span>
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

    <section class="section">
      <div class="shell audience-panel">
        <div v-reveal class="audience-panel__intro">
          <p class="eyebrow eyebrow--light">
            {{ content.company.audience.eyebrow }}
          </p>
          <h2>{{ content.company.audience.title }}</h2>
          <p>{{ content.company.audience.text }}</p>
        </div>
        <div class="audience-panel__groups">
          <div
            v-for="(group, index) in content.company.audience.groups"
            :key="group"
            v-reveal="index * 80"
          >
            <span>0{{ index + 1 }}</span>
            <p>{{ group }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      :title="content.company.cta.title"
      :text="content.company.cta.text"
    />
  </main>
</template>

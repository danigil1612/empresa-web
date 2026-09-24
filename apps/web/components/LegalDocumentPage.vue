<script setup lang="ts">
import { legalMessages } from '~/i18n/legal'

const props = defineProps<{
  document: 'notice' | 'privacy' | 'cookies'
}>()

const { locale } = usePulseI18n()
const legal = computed(() => legalMessages[locale.value])
const page = computed(() => legal.value[props.document])

usePageSeo(
  () => page.value.seoTitle,
  () => page.value.seoDescription,
)
</script>

<template>
  <main id="main-content" class="legal-page" tabindex="-1">
    <section class="section legal-page__hero">
      <div class="shell legal-page__shell">
        <p class="eyebrow">{{ legal.common.eyebrow }}</p>
        <h1>{{ page.title }}</h1>
        <p class="legal-page__intro">{{ page.intro }}</p>
        <p class="legal-page__updated">{{ legal.common.updated }}</p>
      </div>
    </section>

    <section class="section legal-page__body">
      <div class="shell legal-page__shell legal-page__content">
        <article
          v-for="section in page.sections"
          :key="section.title"
          class="legal-page__section"
        >
          <h2>{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </article>

        <NuxtLink class="text-link legal-page__back" to="/">
          {{ legal.common.back }}
          <AnimatedArrowIcon />
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

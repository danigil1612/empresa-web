<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode?: number
  }
}>()

const { content } = usePulseI18n()
const isNotFound = computed(() => props.error.statusCode === 404)
const eyebrow = computed(() =>
  isNotFound.value
    ? content.value.common.error.notFoundEyebrow
    : content.value.common.error.genericEyebrow,
)
const title = computed(() =>
  isNotFound.value
    ? content.value.common.error.notFoundTitle
    : content.value.common.error.genericTitle,
)
const text = computed(() =>
  isNotFound.value
    ? content.value.common.error.notFoundText
    : content.value.common.error.genericText,
)

useSeoMeta({
  title: () => title.value,
  robots: 'noindex, nofollow',
})

function leaveErrorPage(path: string) {
  clearError({ redirect: path })
}
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">
      {{ content.common.a11y.skipToContent }}
    </a>
    <SiteHeader />
    <main id="main-content" class="error-page" tabindex="-1">
      <div class="error-page__glow error-page__glow--one" />
      <div class="error-page__glow error-page__glow--two" />
      <div class="shell error-page__inner">
        <div class="error-page__code" aria-hidden="true">
          {{ error.statusCode || '—' }}
        </div>
        <div class="error-page__copy">
          <p class="eyebrow">{{ eyebrow }}</p>
          <h1>{{ title }}</h1>
          <p>{{ text }}</p>
          <div class="hero-actions">
            <button
              class="button button--primary"
              type="button"
              @click="leaveErrorPage('/')"
            >
              {{ content.common.error.home }}
              <span aria-hidden="true">→</span>
            </button>
            <button
              class="button button--ghost"
              type="button"
              @click="leaveErrorPage('/demo')"
            >
              {{ content.common.actions.demo }}
            </button>
          </div>
        </div>
      </div>
    </main>
    <SiteFooter />
  </div>
</template>

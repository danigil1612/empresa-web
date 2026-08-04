<script setup lang="ts">
const { content } = usePulseI18n()

useSiteSchema()
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main-content">
      {{ content.common.a11y.skipToContent }}
    </a>
    <SiteHeader />
    <slot />
    <SiteFooter />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
const { content, locale } = usePulseI18n()
</script>

<template>
  <img
    class="home-hero__image"
    :src="`/home-pulse-devices-${locale}.png`"
    :alt="content.home.hero.visualAlt"
    width="1245"
    height="1263"
    fetchpriority="high"
    decoding="async"
  />
</template>

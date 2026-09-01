<script setup lang="ts">
const config = useRuntimeConfig()
const logoPath = '/images/logo-pulse.svg'
const hasApprovedLogo = computed(() => Boolean(config.public.hasApprovedLogo))
</script>

<template>
  <span class="brand" aria-label="Pulse">
    <img
      v-if="hasApprovedLogo"
      class="brand__image"
      :src="logoPath"
      alt=""
      width="132"
      height="34"
    >
    <span v-else class="brand__word">Pulse</span>
  </span>
</template>

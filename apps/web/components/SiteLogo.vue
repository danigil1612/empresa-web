<script setup lang="ts">
const props = withDefaults(defineProps<{ useApproved?: boolean }>(), {
  useApproved: false,
})
const config = useRuntimeConfig()
const logoPath = '/images/logo-pulse.png'
const hasApprovedLogo = computed(
  () => props.useApproved && Boolean(config.public.hasApprovedLogo),
)
</script>

<template>
  <span class="brand" aria-label="Pulse">
    <img
      v-if="hasApprovedLogo"
      class="brand__image"
      :src="logoPath"
      alt=""
      width="105"
      height="30"
    >
    <span v-else class="brand__word">Pulse</span>
  </span>
</template>

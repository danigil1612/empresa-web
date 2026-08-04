<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  accent: string
  description: string
}>()
</script>

<template>
  <section class="page-hero section">
    <div class="page-hero__glow page-hero__glow--one" />
    <div class="page-hero__glow page-hero__glow--two" />
    <div v-reveal class="shell page-hero__inner">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }} <span>{{ accent }}</span></h1>
      <p class="page-hero__description">{{ description }}</p>
      <div v-if="$slots.actions" class="hero-actions">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

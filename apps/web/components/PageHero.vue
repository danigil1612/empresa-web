<script setup lang="ts">
defineProps<{
  eyebrow: string
  eyebrowTarget?: string
  title: string
  accent: string
  description: string
}>()
</script>

<template>
  <section class="page-hero section">
    <div v-reveal class="shell page-hero__inner">
      <NuxtLink
        v-if="eyebrowTarget"
        class="page-hero__jump"
        :to="eyebrowTarget"
      >
        {{ eyebrow }}
        <AnimatedArrowIcon direction="down" :size="17" />
      </NuxtLink>
      <p v-else class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }} <span>{{ accent }}</span></h1>
      <p class="page-hero__description">{{ description }}</p>
      <div v-if="$slots.actions" class="hero-actions">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

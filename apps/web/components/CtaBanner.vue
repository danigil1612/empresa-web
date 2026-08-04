<script setup lang="ts">
const props = defineProps<{
  eyebrow?: string
  title?: string
  text?: string
}>()

const { content } = usePulseI18n()
const eyebrow = computed(() => props.eyebrow ?? content.value.common.cta.eyebrow)
const title = computed(() => props.title ?? content.value.common.cta.title)
const text = computed(() => props.text ?? content.value.common.cta.text)
</script>

<template>
  <section class="section section--cta">
    <div class="shell">
      <div class="cta-banner">
        <div class="cta-banner__orb cta-banner__orb--one" />
        <div class="cta-banner__orb cta-banner__orb--two" />
        <div v-reveal class="cta-banner__content">
          <p class="eyebrow eyebrow--light">{{ eyebrow }}</p>
          <h2>{{ title }}</h2>
          <p>{{ text }}</p>
          <NuxtLink class="button button--light" to="/demo">
            {{ content.common.actions.demo }}
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

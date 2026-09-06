<script setup lang="ts">
const { content } = usePulseI18n()
</script>

<template>
  <div class="hero-screens">
    <div class="hero-screens__desktop">
      <AppMockup />
    </div>

    <div class="hero-screens__tablet" aria-hidden="true">
      <div class="hero-screens__tablet-bar">
        <SiteLogo />
        <span>{{ content.common.mockup.period }}</span>
      </div>
      <div class="hero-screens__tablet-content">
        <i class="fi fi-br-heart-rate" />
        <strong>{{ content.common.mockup.state }}</strong>
        <span>{{ content.common.mockup.trend }}</span>
        <div class="hero-screens__responses">
          <b />
          <b />
          <b class="is-active" />
          <b />
          <b />
        </div>
      </div>
    </div>
  </div>
</template>

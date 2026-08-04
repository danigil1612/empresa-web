<script setup lang="ts">
const { content } = usePulseI18n()
</script>

<template>
  <div
    class="product-visual"
    role="img"
    :aria-label="content.common.mockup.aria"
  >
    <div class="product-visual__topbar">
      <SiteLogo />
      <div class="product-visual__date">
        {{ content.common.mockup.period }}
      </div>
    </div>

    <div class="product-visual__grid">
      <div class="signal-card">
        <div class="signal-card__heading">
          <span>{{ content.common.mockup.state }}</span>
          <strong>{{ content.common.mockup.stable }}</strong>
        </div>
        <div class="signal-score">
          <div class="signal-score__ring">
            <span>74</span>
          </div>
          <p>
            {{ content.common.mockup.trend }}
            <small>{{ content.common.mockup.change }}</small>
          </p>
        </div>
      </div>

      <div class="signal-card signal-card--bars">
        <span>{{ content.common.mockup.signals }}</span>
        <div class="signal-row">
          <small>{{ content.common.mockup.energy }}</small>
          <i><b style="width: 82%" /></i>
        </div>
        <div class="signal-row">
          <small>{{ content.common.mockup.focus }}</small>
          <i><b style="width: 68%" /></i>
        </div>
        <div class="signal-row">
          <small>{{ content.common.mockup.connection }}</small>
          <i><b style="width: 76%" /></i>
        </div>
      </div>

      <div class="signal-insight">
        <span class="signal-insight__dot" />
        <div>
          <small>{{ content.common.mockup.insight }}</small>
          <p>{{ content.common.mockup.insightText }}</p>
        </div>
      </div>
    </div>

    <span class="product-visual__note">
      {{ content.common.mockup.note }}
    </span>
  </div>
</template>

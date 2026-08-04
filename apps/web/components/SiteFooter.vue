<script setup lang="ts">
const { content } = usePulseI18n()
</script>

<template>
  <footer class="site-footer">
    <div class="shell site-footer__grid">
      <div class="site-footer__intro">
        <NuxtLink to="/" :aria-label="content.common.a11y.home">
          <SiteLogo />
        </NuxtLink>
        <p>
          {{ content.common.footer.description }}
        </p>
      </div>

      <div
        class="site-footer__nav"
        :aria-label="content.common.a11y.footerNav"
      >
        <span>{{ content.common.footer.explore }}</span>
        <NuxtLink to="/metodologia">
          {{ content.common.nav.methodology }}
        </NuxtLink>
        <NuxtLink to="/producte">{{ content.common.nav.product }}</NuxtLink>
        <NuxtLink to="/empresa">{{ content.common.nav.company }}</NuxtLink>
        <NuxtLink to="/demo">{{ content.common.nav.demo }}</NuxtLink>
      </div>

      <div class="site-footer__legal">
        <span>{{ content.common.footer.contact }}</span>
        <p>{{ content.common.footer.email }}</p>
        <p>{{ content.common.footer.legal }}</p>
      </div>
    </div>

    <div class="shell site-footer__bottom">
      <p>© {{ new Date().getFullYear() }} Pulse</p>
      <p>{{ content.common.footer.closing }}</p>
    </div>
  </footer>
</template>

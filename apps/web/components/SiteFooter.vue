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
        <NuxtLink to="/como-trabajamos">
          {{ content.common.nav.methodology }}
        </NuxtLink>
        <NuxtLink to="/que-ofrecemos">{{ content.common.nav.product }}</NuxtLink>
        <NuxtLink to="/quienes-somos">{{ content.common.nav.company }}</NuxtLink>
        <NuxtLink to="/demo">{{ content.common.nav.demo }}</NuxtLink>
      </div>

      <div class="site-footer__legal">
        <span>{{ content.common.footer.contact }}</span>
        <p>
          <a href="mailto:info@emotion-pulse.com">
            {{ content.common.footer.email }}
          </a>
        </p>
        <NuxtLink to="/aviso-legal">
          {{ content.common.footer.legalNotice }}
        </NuxtLink>
        <NuxtLink to="/politica-privacidad">
          {{ content.common.footer.privacy }}
        </NuxtLink>
        <NuxtLink to="/politica-cookies">
          {{ content.common.footer.cookies }}
        </NuxtLink>
      </div>
    </div>

    <div class="shell site-footer__bottom">
      <p>© {{ new Date().getFullYear() }} Pulse</p>
      <p>{{ content.common.footer.closing }}</p>
      <a
        class="site-footer__credit"
        href="https://www.flaticon.com/uicons"
        target="_blank"
        rel="noopener noreferrer"
      >
        UIcons by Flaticon
      </a>
    </div>
  </footer>
</template>

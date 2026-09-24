<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const { content } = usePulseI18n()
const menuOpen = ref(false)
const headerScrolled = ref(false)
const homeDarkVisible = ref(false)
const scrollProgress = ref(0)

let animationFrame: number | null = null

const navigation = computed(() => [
  { label: content.value.common.nav.home, to: '/' },
  { label: content.value.common.nav.methodology, to: '/como-trabajamos' },
  { label: content.value.common.nav.product, to: '/que-ofrecemos' },
  { label: content.value.common.nav.company, to: '/quienes-somos' },
])

const dashboardUrl = computed(() => String(config.public.dashboardUrl || '') // feature flag for dashboard link
  .trim()
  .replace(/\/+$/, '')) // remove trailing slashes

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false

    if (import.meta.client) {
      nextTick(() => {
        updateHeader()
      })
    }
  },
)

watch(menuOpen, (isOpen) => {
  if (!import.meta.client) {
    return
  }

  document.body.classList.toggle('is-menu-open', isOpen)
})

function updateHeader() {
  const currentScrollY = Math.max(window.scrollY, 0)
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight
  const homeDark = route.path === '/' || route.path === '/como-trabajamos'
    ? document.querySelector<HTMLElement>('.scroll-theme-reveal')
    : null
  const darkBounds = homeDark?.getBoundingClientRect()

  headerScrolled.value = currentScrollY > 12
  homeDarkVisible.value = Boolean(
    darkBounds && darkBounds.top <= 82 && darkBounds.bottom > 82,
  )
  scrollProgress.value =
    scrollableHeight > 0
      ? Math.min(100, Math.max(0, (currentScrollY / scrollableHeight) * 100))
      : 0

  animationFrame = null
}

function handleScroll() {
  if (animationFrame === null) {
    animationFrame = window.requestAnimationFrame(updateHeader)
  }
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function handleDashboardClick(event: MouseEvent) {
  if (!dashboardUrl.value) {
    event.preventDefault()
  }
}

onMounted(() => {
  updateHeader()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
  document.body.classList.remove('is-menu-open')

  if (animationFrame !== null) {
    window.cancelAnimationFrame(animationFrame)
  }
})
</script>

<template>
  <header
    class="site-header"
    :class="{
      'site-header--scrolled': headerScrolled,
      'site-header--home-dark': homeDarkVisible && !menuOpen,
      'site-header--menu-open': menuOpen,
    }"
  >
    <div class="site-header__inner shell">
      <NuxtLink
        to="/"
        class="site-header__logo"
        :aria-label="content.common.a11y.home"
      >
        <SiteLogo use-approved />
      </NuxtLink>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="primary-navigation"
        :aria-label="content.common.a11y.menu"
        @click="toggleMenu"
      >
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        class="site-nav"
        :class="{ 'site-nav--open': menuOpen }"
        :aria-label="content.common.a11y.primaryNav"
      >
        <div class="site-nav__links">
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            :aria-current="route.path === item.to ? 'page' : undefined"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <div class="site-nav__actions">
          <a
            class="button button--ghost button--small"
            :class="{ 'is-disabled': !dashboardUrl }"
            :href="dashboardUrl || '#'"
            :target="dashboardUrl ? '_blank' : undefined"
            :rel="dashboardUrl ? 'noopener noreferrer' : undefined"
            :aria-disabled="!dashboardUrl"
            :title="
              dashboardUrl
                ? content.common.nav.dashboard
                : content.common.dashboardMissing
            "
            @click="handleDashboardClick"
          >
            {{ content.common.nav.dashboard }}
          </a>
          <NuxtLink class="button button--primary button--small" to="/demo">
            {{ content.common.nav.demo }}
          </NuxtLink>
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
    <span class="site-header__progress" aria-hidden="true">
      <i :style="{ transform: `scaleX(${scrollProgress / 100})` }" />
    </span>
  </header>
</template>

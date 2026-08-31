<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()
const { content } = usePulseI18n()
const menuOpen = ref(false)
const headerHidden = ref(false)
const headerScrolled = ref(false)
const scrollProgress = ref(0)

const directionThreshold = 7
const hideAfter = 96
let lastScrollY = 0
let animationFrame: number | null = null

const navigation = computed(() => [
  { label: content.value.common.nav.home, to: '/' },
  { label: content.value.common.nav.methodology, to: '/como-trabajamos' },
  { label: content.value.common.nav.product, to: '/que-ofrecemos' },
  { label: content.value.common.nav.company, to: '/quienes-somos' },
])

const dashboardUrl = computed(() => String(config.public.dashboardUrl || ''))

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
    headerHidden.value = false

    if (import.meta.client) {
      nextTick(() => {
        lastScrollY = Math.max(window.scrollY, 0)
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

  if (isOpen) {
    headerHidden.value = false
  }
})

function updateHeader() {
  const currentScrollY = Math.max(window.scrollY, 0)
  const delta = currentScrollY - lastScrollY
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight

  headerScrolled.value = currentScrollY > 12
  scrollProgress.value =
    scrollableHeight > 0
      ? Math.min(100, Math.max(0, (currentScrollY / scrollableHeight) * 100))
      : 0

  if (menuOpen.value || currentScrollY <= 12) {
    headerHidden.value = false
  } else if (delta > directionThreshold && currentScrollY > hideAfter) {
    headerHidden.value = true
  } else if (delta < -directionThreshold) {
    headerHidden.value = false
  }

  if (Math.abs(delta) >= directionThreshold || currentScrollY <= 12) {
    lastScrollY = currentScrollY
  }

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

function showHeader() {
  headerHidden.value = false
}

function handleDashboardClick(event: MouseEvent) {
  if (!dashboardUrl.value) {
    event.preventDefault()
  }
}

onMounted(() => {
  lastScrollY = Math.max(window.scrollY, 0)
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
      'site-header--hidden': headerHidden,
      'site-header--scrolled': headerScrolled,
      'site-header--menu-open': menuOpen,
    }"
    @focusin="showHeader"
  >
    <div class="site-header__inner shell">
      <NuxtLink
        to="/"
        class="site-header__logo"
        :aria-label="content.common.a11y.home"
      >
        <SiteLogo />
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

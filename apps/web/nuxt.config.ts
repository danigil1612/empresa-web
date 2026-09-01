import { existsSync } from 'node:fs'

const hasApprovedLogo = existsSync(
  new URL('./public/images/logo-pulse.svg', import.meta.url),
)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  experimental: {
    appManifest: false,
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      dashboardUrl: process.env.NUXT_PUBLIC_DASHBOARD_URL || '',
      hasApprovedLogo,
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      titleTemplate: '%s · Pulse',
      meta: [
        {
          name: 'theme-color',
          content: '#0c4148',
        },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap',
        },
      ],
    },
  },
})

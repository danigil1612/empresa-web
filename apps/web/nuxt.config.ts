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
  nitro: {
    output: {
      dir: '../../.output',
    },
  },
  css: [
    '@fontsource-variable/outfit',
    '@flaticon/flaticon-uicons/css/bold/rounded.css',
    '~/assets/css/main.css',
  ],
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
          content: '#0e2a2d',
        },
      ],
    },
  },
})

import { existsSync } from 'node:fs'

const hasApprovedLogo = existsSync(
  new URL('./public/images/logo-pulse.png', import.meta.url),
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
    hooks: {
      'prerender:generate'(route) {
        if (route.route !== '/404.html' || !route.contents) return

        route.contents = route.contents
          .replace('<title>· Pulse</title>', '<title>Página no encontrada · Pulse</title>')
          .replace('</head>', '<meta name="robots" content="noindex, nofollow"></head>')
      },
    },
  },
  css: [
    '@fontsource-variable/outfit',
    '@flaticon/flaticon-uicons/css/bold/rounded.css',
    '~/assets/css/main.css',
  ],
  runtimeConfig: {
    public: {
      siteUrl: 'https://emotion-pulse.com',
      dashboardUrl:
        process.env.NUXT_PUBLIC_DASHBOARD_URL ||
        'https://app.emotion-pulse.com/pulse/login',
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
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/pulse-mark.png',
        },
        {
          rel: 'apple-touch-icon',
          href: '/images/apple-touch-icon.png',
        },
      ],
    },
  },
})

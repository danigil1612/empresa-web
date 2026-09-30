import { localeOptions, messages, type Locale } from '~/i18n/messages'

const defaultLocale: Locale = 'es'

export function isPulseLocale(value: unknown): value is Locale {
  return localeOptions.some((option) => option.code === value)
}

export function usePulseI18n() {
  const localeCookie = useCookie<Locale>('pulse_locale', {
    default: () => defaultLocale,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
  })
  const locale = useState<Locale>('pulse-locale', () =>
    isPulseLocale(localeCookie.value) ? localeCookie.value : defaultLocale,
  )

  if (!isPulseLocale(locale.value)) {
    locale.value = defaultLocale
  }

  const content = computed(() => messages[locale.value])

  useHead(() => ({
    htmlAttrs: {
      lang: locale.value,
    },
  }))

  function setLocale(nextLocale: Locale) {
    if (!isPulseLocale(nextLocale)) return
    locale.value = nextLocale
    localeCookie.value = nextLocale
  }

  return {
    content,
    locale,
    localeOptions,
    setLocale,
  }
}

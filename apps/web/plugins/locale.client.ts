import { isPulseLocale } from '~/composables/usePulseI18n'

export default defineNuxtPlugin((nuxtApp) => {
  const savedLocale = useCookie<unknown>('pulse_locale')
  const { setLocale } = usePulseI18n()

  // Static HTML has the default locale. Restore the preference after hydration
  // so reloads remember it without mismatching the prerendered markup.
  nuxtApp.hook('app:mounted', () => {
    if (isPulseLocale(savedLocale.value)) {
      setLocale(savedLocale.value)
    }
  })
})

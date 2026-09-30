type RevealElement = HTMLElement & {
  _pulseRevealObserver?: IntersectionObserver
  _pulseRevealOnFocus?: () => void
}

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    nuxtApp.vueApp.directive('reveal', {
      getSSRProps: () => ({})
    })

    return
  }

  nuxtApp.vueApp.directive('reveal', {
    beforeMount(element: RevealElement, binding) {
      element.dataset.reveal = ''

      if (typeof binding.value === 'number' && Number.isFinite(binding.value)) {
        element.style.setProperty('--reveal-delay', `${Math.max(0, binding.value)}ms`)
      }
    },
    mounted(element: RevealElement) {
      if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        element.classList.add('is-revealed')
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed')
              observer.disconnect()
            }
          })
        },
        {
          rootMargin: '0px 0px -10% 0px',
          // A ratio threshold can never be reached by sections taller than the viewport.
          threshold: 0
        }
      )

      element._pulseRevealObserver = observer
      element._pulseRevealOnFocus = () => {
        element.classList.add('is-revealed')
        observer.disconnect()
      }
      element.addEventListener('focusin', element._pulseRevealOnFocus)
      observer.observe(element)
    },
    beforeUnmount(element: RevealElement) {
      element._pulseRevealObserver?.disconnect()
      if (element._pulseRevealOnFocus) {
        element.removeEventListener('focusin', element._pulseRevealOnFocus)
      }
      delete element._pulseRevealObserver
      delete element._pulseRevealOnFocus
    }
  })
})

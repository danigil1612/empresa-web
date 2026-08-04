type RevealElement = HTMLElement & {
  _pulseRevealObserver?: IntersectionObserver
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

      if (typeof binding.value === 'number') {
        element.style.setProperty('--reveal-delay', `${binding.value}ms`)
      }
    },
    mounted(element: RevealElement) {
      if (!('IntersectionObserver' in window)) {
        element.classList.add('is-revealed')
        return
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          rootMargin: '0px 0px -10% 0px',
          threshold: 0.12
        }
      )

      element._pulseRevealObserver = observer
      observer.observe(element)
    },
    beforeUnmount(element: RevealElement) {
      element._pulseRevealObserver?.disconnect()
      delete element._pulseRevealObserver
    }
  })
})

export function useScrollThemeReveal() {
  const revealRef = ref<HTMLElement | null>(null)
  let frame: number | null = null
  let reducedMotion: MediaQueryList | null = null

  function update() {
    const element = revealRef.value
    if (!element) return

    if (reducedMotion?.matches) {
      element.style.setProperty('--theme-reveal-inset', '0px')
      element.style.setProperty('--theme-reveal-radius', '0px')
      return
    }

    const start = window.innerHeight * 0.92
    const end = window.innerHeight * 0.12
    const position = element.getBoundingClientRect().top
    const progress = Math.min(1, Math.max(0, (start - position) / (start - end)))
    const eased = progress * progress * (3 - 2 * progress)
    const inset = Math.max(24, (element.clientWidth - 1180) / 2) * (1 - eased)

    element.style.setProperty('--theme-reveal-inset', `${inset.toFixed(1)}px`)
    element.style.setProperty('--theme-reveal-radius', `${(36 * (1 - eased)).toFixed(1)}px`)
  }

  function schedule() {
    if (frame !== null || reducedMotion?.matches) return

    frame = window.requestAnimationFrame(() => {
      frame = null
      update()
    })
  }

  onMounted(() => {
    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotion.addEventListener('change', update)
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  })

  onBeforeUnmount(() => {
    reducedMotion?.removeEventListener('change', update)
    window.removeEventListener('scroll', schedule)
    window.removeEventListener('resize', schedule)
    if (frame !== null) window.cancelAnimationFrame(frame)
  })

  return revealRef
}

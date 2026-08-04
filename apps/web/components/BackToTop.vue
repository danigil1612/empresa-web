<script setup lang="ts">
const { content } = usePulseI18n()
const visible = ref(false)
let animationFrame: number | null = null

function updateVisibility() {
  visible.value = window.scrollY > 720
  animationFrame = null
}

function handleScroll() {
  if (animationFrame === null) {
    animationFrame = window.requestAnimationFrame(updateVisibility)
  }
}

function scrollToTop() {
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? 'auto' : 'smooth',
  })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)

  if (animationFrame !== null) {
    window.cancelAnimationFrame(animationFrame)
  }
})
</script>

<template>
  <Transition name="back-to-top">
    <button
      v-show="visible"
      class="back-to-top"
      type="button"
      :aria-label="content.common.actions.backToTop"
      :title="content.common.actions.backToTop"
      @click="scrollToTop"
    >
      <span aria-hidden="true" />
    </button>
  </Transition>
</template>

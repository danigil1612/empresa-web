<script setup lang="ts">
type ArrowDirection = 'right' | 'down' | 'left' | 'up'

const props = withDefaults(
  defineProps<{
    direction?: ArrowDirection
    size?: number | string
  }>(),
  {
    direction: 'right',
    size: 20,
  },
)

const icon = ref<SVGElement | null>(null)

onMounted(() => {
  if (!import.meta.dev) {
    return
  }

  const interactiveParent = icon.value?.closest(
    'button, a[href], [role="button"]',
  )

  if (!interactiveParent) {
    console.warn(
      '[Pulse] AnimatedArrowIcon must be placed inside an interactive button or link.',
    )
  }
})
</script>

<template>
  <svg
    ref="icon"
    class="animated-arrow-icon"
    :class="`animated-arrow-icon--${props.direction}`"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <g>
      <path
        class="animated-arrow-icon__shaft"
        d="M3.75 10H16.25"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />
      <path
        class="animated-arrow-icon__head"
        d="M11.5 5.25L16.25 10L11.5 14.75"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>

<style scoped>
.animated-arrow-icon {
  display: inline-block;
  flex: 0 0 auto;
  overflow: visible;
  vertical-align: middle;
  transition: transform 320ms cubic-bezier(0.22, 1, 0.36, 1);
}

.animated-arrow-icon--down {
  transform: rotate(90deg);
}

.animated-arrow-icon--left {
  transform: rotate(180deg);
}

.animated-arrow-icon--up {
  transform: rotate(-90deg);
}

.animated-arrow-icon__shaft,
.animated-arrow-icon__head {
  transition: transform 340ms cubic-bezier(0.22, 1, 0.36, 1);
}

.animated-arrow-icon__shaft {
  transform-box: fill-box;
  transform-origin: right center;
}

:global(button[aria-expanded='true'] .animated-arrow-icon--down) {
  transform: rotate(-90deg);
}

:global(:is(button, a[href], [role='button']):hover .animated-arrow-icon__shaft),
:global(:is(button, a[href], [role='button']):focus-visible .animated-arrow-icon__shaft) {
  transform: scaleX(1.18) translateX(1px);
}

:global(:is(button, a[href], [role='button']):hover .animated-arrow-icon__head),
:global(:is(button, a[href], [role='button']):focus-visible .animated-arrow-icon__head) {
  transform: translateX(3px);
}

:global(:is(button, a[href], [role='button']):active .animated-arrow-icon__shaft) {
  transform: scaleX(0.94);
  transition-duration: 100ms;
}

:global(:is(button, a[href], [role='button']):active .animated-arrow-icon__head) {
  transform: translateX(1px);
  transition-duration: 100ms;
}

@media (prefers-reduced-motion: reduce) {
  .animated-arrow-icon,
  .animated-arrow-icon__shaft,
  .animated-arrow-icon__head {
    transition: none;
  }

  :global(:is(button, a[href], [role='button']):hover .animated-arrow-icon__shaft),
  :global(:is(button, a[href], [role='button']):focus-visible .animated-arrow-icon__shaft),
  :global(:is(button, a[href], [role='button']):active .animated-arrow-icon__shaft),
  :global(:is(button, a[href], [role='button']):hover .animated-arrow-icon__head),
  :global(:is(button, a[href], [role='button']):focus-visible .animated-arrow-icon__head),
  :global(:is(button, a[href], [role='button']):active .animated-arrow-icon__head) {
    transform: none;
  }
}
</style>

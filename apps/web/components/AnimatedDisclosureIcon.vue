<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    open?: boolean
    size?: number | string
  }>(),
  {
    open: false,
    size: 22,
  },
)

const icon = ref<SVGElement | null>(null)

onMounted(() => {
  if (!import.meta.dev) {
    return
  }

  const buttonParent = icon.value?.closest('button')

  if (!buttonParent) {
    console.warn(
      '[Pulse] AnimatedDisclosureIcon must be placed inside a real button.',
    )
  }
})
</script>

<template>
  <svg
    ref="icon"
    class="animated-disclosure-icon"
    :class="{ 'is-open': props.open }"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <path
      class="animated-disclosure-icon__line animated-disclosure-icon__line--horizontal"
      d="M4.5 11H17.5"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
    />
    <path
      class="animated-disclosure-icon__line animated-disclosure-icon__line--vertical"
      d="M11 4.5V17.5"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
    />
  </svg>
</template>

<style scoped>
.animated-disclosure-icon {
  display: inline-block;
  flex: 0 0 auto;
  overflow: visible;
  transform-origin: center;
  transition: transform 260ms cubic-bezier(0.22, 1, 0.36, 1);
}

.animated-disclosure-icon__line {
  transform-box: fill-box;
  transform-origin: center;
  transition:
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 180ms ease;
}

.animated-disclosure-icon.is-open {
  transform: rotate(180deg);
}

.animated-disclosure-icon.is-open
  .animated-disclosure-icon__line--vertical {
  opacity: 0;
  transform: scaleY(0);
}

:global(button:hover) .animated-disclosure-icon:not(.is-open),
:global(button:focus-visible) .animated-disclosure-icon:not(.is-open) {
  transform: rotate(8deg);
}

:global(button:active) .animated-disclosure-icon {
  transform: scale(0.9);
  transition-duration: 90ms;
}

@media (prefers-reduced-motion: reduce) {
  .animated-disclosure-icon,
  .animated-disclosure-icon__line {
    transition: none;
  }

  :global(button:hover) .animated-disclosure-icon:not(.is-open),
  :global(button:focus-visible) .animated-disclosure-icon:not(.is-open),
  :global(button:active) .animated-disclosure-icon {
    transform: none;
  }

  .animated-disclosure-icon.is-open
    .animated-disclosure-icon__line--vertical {
    opacity: 0;
    transform: none;
  }
}
</style>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    color?: string
    shineColor?: string
    speed?: number
    delay?: number
    spread?: number
    direction?: 'left' | 'right'
    yoyo?: boolean
    pauseOnHover?: boolean
    disabled?: boolean
  }>(),
  {
    color: '#b5b5b5',
    shineColor: '#ffffff',
    speed: 2,
    delay: 0,
    spread: 120,
    direction: 'left',
    yoyo: false,
    pauseOnHover: false,
    disabled: false,
  },
)

const shinyStyle = computed(() => {
  if (props.disabled) {
    return { color: props.color }
  }

  const duration = Math.max(props.speed, 0.1) + Math.max(props.delay, 0)
  const startsLeft = props.direction === 'left'

  return {
    backgroundImage: `linear-gradient(${props.spread}deg, ${props.color} 0%, ${props.color} 35%, ${props.shineColor} 50%, ${props.color} 65%, ${props.color} 100%)`,
    '--shiny-duration': `${duration}s`,
    '--shiny-start': startsLeft ? '150%' : '-50%',
    '--shiny-end': startsLeft ? '-50%' : '150%',
  }
})
</script>

<template>
  <span
    class="shiny-text"
    :class="{
      'shiny-text--disabled': disabled,
      'shiny-text--yoyo': yoyo,
      'shiny-text--pause-on-hover': pauseOnHover,
    }"
    :style="shinyStyle"
  >
    {{ text }}
  </span>
</template>

<style scoped>
.shiny-text {
  display: inline;
  background-repeat: repeat;
  background-size: 200% auto;
  background-position: var(--shiny-start, 150%) center;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shiny-sweep var(--shiny-duration, 8s) linear infinite;
}

.shiny-text--yoyo {
  animation-direction: alternate;
}

.shiny-text--pause-on-hover:hover {
  animation-play-state: paused;
}

.shiny-text--disabled {
  background: none !important;
  -webkit-text-fill-color: currentcolor;
  animation: none;
}

@keyframes shiny-sweep {
  0% {
    background-position: var(--shiny-start, 150%) center;
  }

  50%,
  100% {
    background-position: var(--shiny-end, -50%) center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .shiny-text {
    background: none !important;
    color: v-bind(color);
    -webkit-text-fill-color: currentcolor;
    animation: none;
  }
}
</style>

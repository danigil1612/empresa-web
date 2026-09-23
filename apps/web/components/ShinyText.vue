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

const backgroundPosition = ref('150% center')
const isPaused = ref(false)
const reduceMotion = ref(false)
let animationFrame: number | null = null
let previousTime: number | null = null
let elapsed = 0

const shinyStyle = computed(() => {
  if (props.disabled || reduceMotion.value) {
    return { color: props.color }
  }

  return {
    backgroundImage: `linear-gradient(${props.spread}deg, ${props.color} 0%, ${props.color} 35%, ${props.shineColor} 50%, ${props.color} 65%, ${props.color} 100%)`,
    backgroundPosition: backgroundPosition.value,
  }
})

function updateAnimation(time: number) {
  if (props.disabled || reduceMotion.value || isPaused.value) {
    previousTime = null
    animationFrame = window.requestAnimationFrame(updateAnimation)
    return
  }

  if (previousTime === null) {
    previousTime = time
  } else {
    elapsed += time - previousTime
    previousTime = time
  }

  const animationDuration = Math.max(props.speed, 0.1) * 1000
  const delayDuration = Math.max(props.delay, 0) * 1000
  const cycleDuration = animationDuration + delayDuration
  let progress = 0

  if (props.yoyo) {
    const fullCycle = cycleDuration * 2
    const cycleTime = elapsed % fullCycle

    if (cycleTime < animationDuration) {
      progress = (cycleTime / animationDuration) * 100
    } else if (cycleTime < cycleDuration) {
      progress = 100
    } else if (cycleTime < cycleDuration + animationDuration) {
      progress = 100 - ((cycleTime - cycleDuration) / animationDuration) * 100
    }
  } else {
    const cycleTime = elapsed % cycleDuration
    progress = cycleTime < animationDuration
      ? (cycleTime / animationDuration) * 100
      : 100
  }

  const directionalProgress = props.direction === 'left' ? progress : 100 - progress
  backgroundPosition.value = `${150 - directionalProgress * 2}% center`
  animationFrame = window.requestAnimationFrame(updateAnimation)
}

function handleMouseEnter() {
  if (props.pauseOnHover) {
    isPaused.value = true
  }
}

function handleMouseLeave() {
  isPaused.value = false
}

onMounted(() => {
  reduceMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  animationFrame = window.requestAnimationFrame(updateAnimation)
})

onBeforeUnmount(() => {
  if (animationFrame !== null) {
    window.cancelAnimationFrame(animationFrame)
  }
})
</script>

<template>
  <span
    class="shiny-text"
    :class="{ 'shiny-text--disabled': disabled || reduceMotion }"
    :style="shinyStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    {{ text }}
  </span>
</template>

<style scoped>
.shiny-text {
  display: inline;
  background-repeat: repeat;
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.shiny-text--disabled {
  background: none !important;
  -webkit-text-fill-color: currentcolor;
}
</style>

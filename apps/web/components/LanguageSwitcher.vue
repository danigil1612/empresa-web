<script setup lang="ts">
const { content, locale, localeOptions, setLocale } = usePulseI18n()
const open = ref(false)
const root = ref<HTMLElement | null>(null)
const trigger = ref<HTMLButtonElement | null>(null)
const menuId = `language-menu-${useId()}`

const activeLocale = computed(
  () =>
    localeOptions.find((option) => option.code === locale.value) ??
    localeOptions[1],
)

function chooseLocale(code: (typeof localeOptions)[number]['code']) {
  setLocale(code)
  closeMenu(true)
}

function closeMenu(returnFocus = false) {
  open.value = false

  if (returnFocus) {
    nextTick(() => trigger.value?.focus())
  }
}

function toggleMenu() {
  if (open.value) {
    closeMenu(true)
  } else {
    openAndFocus(localeOptions.findIndex((option) => option.code === locale.value))
  }
}

function getOptionButtons() {
  return Array.from(
    root.value?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]') ??
      [],
  )
}

function focusOption(index: number) {
  const buttons = getOptionButtons()
  const total = buttons.length

  if (!total) {
    return
  }

  const normalizedIndex = (index + total) % total
  buttons[normalizedIndex]?.focus()
}

function openAndFocus(index: number) {
  open.value = true
  nextTick(() => focusOption(index))
}

function handleMenuKeydown(event: KeyboardEvent) {
  const buttons = getOptionButtons()
  const currentIndex = buttons.indexOf(
    document.activeElement as HTMLButtonElement,
  )

  if (event.key === 'ArrowDown') {
    event.preventDefault()
    focusOption(currentIndex + 1)
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    focusOption(currentIndex - 1)
  } else if (event.key === 'Home') {
    event.preventDefault()
    focusOption(0)
  } else if (event.key === 'End') {
    event.preventDefault()
    focusOption(buttons.length - 1)
  } else if (event.key === 'Tab') {
    // Resume normal tab order from the menu trigger, including the mobile nav trap.
    trigger.value?.focus()
    closeMenu()
  } else if (event.key === 'Escape') {
    event.preventDefault()
    event.stopPropagation()
    closeMenu(true)
  }
}

function handleFocusOut(event: FocusEvent) {
  if (!root.value?.contains(event.relatedTarget as Node | null)) closeMenu()
}

function handleOutside(event: PointerEvent) {
  if (root.value && !root.value.contains(event.target as Node)) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', handleOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleOutside)
})
</script>

<template>
  <div ref="root" class="language-switcher" @focusout="handleFocusOut">
    <button
      ref="trigger"
      class="language-switcher__trigger"
      type="button"
      :aria-label="content.common.language.label"
      aria-haspopup="menu"
      :aria-expanded="open"
      :aria-controls="open ? menuId : undefined"
      @click="toggleMenu"
      @keydown.down.prevent="openAndFocus(0)"
      @keydown.up.prevent="openAndFocus(localeOptions.length - 1)"
    >
      <span>{{ activeLocale.short }}</span>
      <AnimatedArrowIcon direction="down" :size="14" />
    </button>

    <div
      v-if="open"
      :id="menuId"
      class="language-switcher__menu"
      role="menu"
      :aria-label="content.common.language.menu"
      @keydown="handleMenuKeydown"
    >
      <button
        v-for="option in localeOptions"
        :key="option.code"
        type="button"
        role="menuitemradio"
        tabindex="-1"
        :aria-checked="locale === option.code"
        :class="{ 'is-active': locale === option.code }"
        @click="chooseLocale(option.code)"
      >
        <span>{{ option.label }}</span>
        <small>{{ option.short }}</small>
      </button>
    </div>
  </div>
</template>

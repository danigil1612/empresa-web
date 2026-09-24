<script setup lang="ts">
import { testimonialMessages } from '~/i18n/testimonials'

const { locale } = usePulseI18n()
const copy = computed(() => testimonialMessages[locale.value])
const active = ref(0)
let touchStart: { x: number; y: number } | null = null

function rotate(direction: number) {
  active.value = (active.value + direction + copy.value.items.length) % copy.value.items.length
}

function position(index: number) {
  const offset = (index - active.value + copy.value.items.length) % copy.value.items.length
  return offset > copy.value.items.length / 2 ? offset - copy.value.items.length : offset
}

function handleKey(event: KeyboardEvent) {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault()
    rotate(event.key === 'ArrowRight' ? 1 : -1)
  }
}

function startTouch(event: TouchEvent) {
  const touch = event.touches[0]
  if (touch) touchStart = { x: touch.clientX, y: touch.clientY }
}

function endTouch(event: TouchEvent) {
  const touch = event.changedTouches[0]
  if (touch && touchStart) {
    const x = touch.clientX - touchStart.x
    const y = touch.clientY - touchStart.y
    if (Math.abs(x) > 45 && Math.abs(x) > Math.abs(y) * 1.5) rotate(x < 0 ? 1 : -1)
  }
  touchStart = null
}
</script>

<template>
  <section class="section testimonials-section" :aria-label="copy.eyebrow">
    <div class="shell">
      <div class="section-heading section-heading--center">
        <p class="eyebrow">{{ copy.eyebrow }}</p>
        <h2>{{ copy.title }}</h2>
      </div>
      <div
        class="testimonials"
        role="region"
        :aria-roledescription="copy.carousel"
        :aria-label="copy.title"
        tabindex="0"
        @keydown="handleKey"
      >
        <div class="testimonials__stage" @touchstart.passive="startTouch" @touchend.passive="endTouch" @touchcancel="touchStart = null">
          <article
            v-for="(item, index) in copy.items"
            :key="item.company"
            class="testimonial"
            :class="{ 'is-active': active === index }"
            :style="{ '--position': position(index) }"
            :aria-hidden="active !== index"
          >
            <span class="testimonial__quote-mark" aria-hidden="true">“</span>
            <blockquote><p>{{ item.quote }}</p></blockquote>
            <footer class="testimonial__author">
              <span class="testimonial__initials" aria-hidden="true">{{ item.initials }}</span>
              <div><strong>{{ item.name }}</strong><span>{{ item.role }} · {{ item.company }}</span></div>
            </footer>
          </article>
        </div>
        <button class="testimonials__arrow testimonials__arrow--previous" type="button" :aria-label="copy.previous" @click="rotate(-1)">
          <AnimatedArrowIcon direction="left" :size="26" />
        </button>
        <button class="testimonials__arrow testimonials__arrow--next" type="button" :aria-label="copy.next" @click="rotate(1)">
          <AnimatedArrowIcon :size="26" />
        </button>
        <div class="testimonials__pagination">
          <button v-for="(item, index) in copy.items" :key="item.company" type="button" :aria-label="`${copy.position} ${index + 1}: ${item.name}`" :aria-pressed="active === index" @click="active = index"><span /></button>
        </div>
        <p class="testimonials__announcement" aria-live="polite" aria-atomic="true">{{ copy.position }} {{ active + 1 }} / {{ copy.items.length }}: {{ copy.items[active]?.name }} — {{ copy.items[active]?.quote }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section { padding-top: 80px; border-top: 1px solid rgba(14, 42, 45, .12); }
.testimonials { position: relative; margin-top: 48px; }
.testimonials__stage { display: grid; padding: 28px 0 40px; overflow: hidden; isolation: isolate; perspective: 1400px; touch-action: pan-y; -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent); }
.testimonial {
  grid-area: 1 / 1; justify-self: center; display: flex; flex-direction: column;
  width: min(680px, calc(100% - 140px)); padding: clamp(28px, 4vw, 48px);
  border: 1px solid rgba(14, 42, 45, .13); border-radius: 28px;
  background: #f6fafb; color: var(--ink-deep); opacity: .32;
  transform: translateX(calc(var(--position) * 68%)) scale(.86) rotateY(calc(var(--position) * -12deg));
  transition: transform 700ms cubic-bezier(.22, 1, .36, 1), opacity 600ms ease, box-shadow 600ms ease;
  pointer-events: none;
}
.testimonial.is-active { z-index: 2; opacity: 1; transform: translateX(0) scale(1) rotateY(0); box-shadow: 0 16px 36px rgba(14, 42, 45, .09); pointer-events: auto; }
.testimonial__quote-mark { height: 48px; color: var(--coral); font-family: Georgia, serif; font-size: 88px; line-height: 1; }
.testimonial blockquote { flex: 1; margin: 20px 0 32px; }
.testimonial blockquote p { margin: 0; font-size: clamp(1.1rem, 1.7vw, 1.4rem); line-height: 1.6; }
.testimonial__author { display: flex; align-items: center; gap: 14px; padding-top: 22px; border-top: 1px solid var(--border); }
.testimonial__initials { display: grid; flex: 0 0 44px; height: 44px; place-items: center; border-radius: 50%; background: var(--paper); font-size: .85rem; font-weight: 600; }
.testimonial__author strong, .testimonial__author div > span { display: block; }
.testimonial__author strong { font-size: 1rem; font-weight: 600; }
.testimonial__author div > span { margin-top: 3px; font-size: .85rem; color: var(--ink-soft); }
.testimonials__arrow { position: absolute; top: calc(50% - 34px); z-index: 3; display: grid; width: 48px; height: 48px; place-items: center; padding: 0; border: 0; border-radius: 50%; background: var(--paper); color: var(--ink-deep); cursor: pointer; transition: color 200ms, background-color 200ms, transform 200ms; }
.testimonials__arrow:hover { background: var(--coral); transform: scale(1.06); }
.testimonials__arrow--previous { left: 4px; }
.testimonials__arrow--next { right: 4px; }
.testimonials__pagination { display: flex; justify-content: center; gap: 2px; }
.testimonials__pagination button { display: grid; width: 44px; height: 44px; place-items: center; padding: 0; border: 0; background: transparent; cursor: pointer; }
.testimonials__pagination span { width: 18px; height: 4px; border-radius: 4px; background: rgba(14, 42, 45, .22); transition: background-color 250ms, width 250ms; }
.testimonials__pagination [aria-pressed="true"] span { width: 28px; background: var(--coral); }
.testimonials__announcement { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
@media (max-width: 600px) {
  .testimonials-section { padding-top: 60px; }
  .testimonials { margin-top: 24px; }
  .testimonial { width: calc(100% - 68px); padding: 24px 20px; border-radius: 22px; }
  .testimonial blockquote { margin-block: 12px 24px; }
  .testimonial blockquote p { font-size: 1.05rem; line-height: 1.55; }
  .testimonial__author { align-items: flex-start; gap: 10px; }
  .testimonial__initials { flex-basis: 34px; height: 34px; font-size: .75rem; }
  .testimonial__author strong { font-size: .95rem; }
  .testimonial__author div > span { font-size: .8rem; }
  .testimonials__arrow { width: 44px; height: 44px; background: transparent; }
  .testimonials__arrow--previous { left: -6px; }
  .testimonials__arrow--next { right: -6px; }
}
@media (prefers-reduced-motion: reduce) {
  .testimonial, .testimonials__arrow, .testimonials__pagination span { transition: none; }
}
</style>

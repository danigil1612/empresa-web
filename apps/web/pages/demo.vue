<script setup lang="ts">
const { content } = usePulseI18n()
const submitted = ref(false)

usePageSeo(
  () => content.value.demo.seo.title,
  () => content.value.demo.seo.description,
)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <main id="main-content" tabindex="-1">
    <section class="demo-hero section">
      <div class="demo-hero__glow demo-hero__glow--one" />
      <div class="demo-hero__glow demo-hero__glow--two" />
      <div class="shell demo-grid">
        <div v-reveal class="demo-copy">
          <p class="eyebrow">{{ content.demo.hero.eyebrow }}</p>
          <h1>
            {{ content.demo.hero.title }}
            <span>{{ content.demo.hero.accent }}</span>
          </h1>
          <p>{{ content.demo.hero.text }}</p>

          <div class="demo-points">
            <div
              v-for="(point, index) in content.demo.points"
              :key="point.title"
            >
              <span>0{{ index + 1 }}</span>
              <p>
                <strong>{{ point.title }}</strong>
                {{ point.text }}
              </p>
            </div>
          </div>
        </div>

        <div v-reveal="100" class="demo-form-card">
          <div v-if="!submitted">
            <div class="demo-form-card__heading">
              <p>{{ content.demo.form.heading }}</p>
              <span>{{ content.demo.form.subheading }}</span>
            </div>

            <form class="demo-form" @submit.prevent="handleSubmit">
              <label>
                {{ content.demo.form.name }}
                <input
                  type="text"
                  name="name"
                  autocomplete="name"
                  :placeholder="content.demo.form.namePlaceholder"
                  required
                >
              </label>

              <label>
                {{ content.demo.form.email }}
                <input
                  type="email"
                  name="email"
                  autocomplete="email"
                  :placeholder="content.demo.form.emailPlaceholder"
                  required
                >
              </label>

              <div class="demo-form__row">
                <label>
                  {{ content.demo.form.company }}
                  <input
                    type="text"
                    name="company"
                    autocomplete="organization"
                    :placeholder="content.demo.form.companyPlaceholder"
                    required
                  >
                </label>
                <label>
                  {{ content.demo.form.size }}
                  <select name="team-size" required>
                    <option value="" disabled selected>
                      {{ content.demo.form.select }}
                    </option>
                    <option
                      v-for="size in content.demo.form.sizes"
                      :key="size"
                    >
                      {{ size }}
                    </option>
                  </select>
                </label>
              </div>

              <label>
                {{ content.demo.form.message }}
                <textarea
                  name="message"
                  rows="4"
                  :placeholder="content.demo.form.messagePlaceholder"
                />
              </label>

              <label class="demo-form__check">
                <input type="checkbox" required>
                <span>
                  {{ content.demo.form.consent }}
                  <small>{{ content.demo.form.consentPending }}</small>
                </span>
              </label>

              <button class="button button--primary button--wide" type="submit">
                {{ content.demo.form.submit }}
                <span aria-hidden="true">→</span>
              </button>
              <p class="demo-form__note">{{ content.demo.form.note }}</p>
            </form>
          </div>

          <div v-else class="demo-success" role="status">
            <span class="demo-success__mark">✓</span>
            <p class="eyebrow">{{ content.demo.success.eyebrow }}</p>
            <h2>{{ content.demo.success.title }}</h2>
            <p>{{ content.demo.success.text }}</p>
            <button
              class="text-link"
              type="button"
              @click="submitted = false"
            >
              {{ content.common.actions.back }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="section demo-note-section">
      <div v-reveal class="shell demo-note">
        <p>{{ content.demo.after.title }}</p>
        <div>
          <span v-for="item in content.demo.after.items" :key="item">
            {{ item }}
          </span>
        </div>
      </div>
    </section>
  </main>
</template>

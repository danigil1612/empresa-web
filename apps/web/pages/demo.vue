<script setup lang="ts">
const { content, locale } = usePulseI18n()
const submitted = ref(false)
const submitting = ref(false)
const submitError = ref('')

const formErrors = {
  ca: 'No hem pogut enviar la sol·licitud. Torna-ho a provar o escriu-nos a info@emotion-pulse.com.',
  es: 'No hemos podido enviar la solicitud. Inténtalo de nuevo o escríbenos a info@emotion-pulse.com.',
  en: 'We could not send your request. Please try again or email us at info@emotion-pulse.com.',
}

usePageSeo(
  () => content.value.demo.seo.title,
  () => content.value.demo.seo.description,
)

async function handleSubmit(event: Event) {
  const form = event.currentTarget as HTMLFormElement
  submitting.value = true
  submitError.value = ''

  try {
    const response = await fetch('/api/request-demo.php', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    })

    if (!response.ok) {
      throw new Error('Demo request failed')
    }

    submitted.value = true
    form.reset()
  }
  catch {
    submitError.value = formErrors[locale.value]
  }
  finally {
    submitting.value = false
  }
}
</script>

<template>
  <main id="main-content" tabindex="-1">
    <section class="demo-hero section">
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
              <label class="demo-form__website" aria-hidden="true">
                Website
                <input
                  type="text"
                  name="website"
                  tabindex="-1"
                  autocomplete="off"
                >
              </label>

              <input type="hidden" name="locale" :value="locale">

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
                <input
                  type="checkbox"
                  name="privacy-read"
                  value="yes"
                  required
                >
                <span>
                  {{ content.demo.form.consent }}
                  <NuxtLink to="/politica-privacidad">
                    {{ content.demo.form.consentLink }}
                  </NuxtLink>.
                </span>
              </label>

              <div class="demo-form__privacy">
                <strong>{{ content.demo.form.privacySummary.title }}</strong>
                <p>{{ content.demo.form.privacySummary.controller }}</p>
                <p>{{ content.demo.form.privacySummary.purpose }}</p>
                <p>{{ content.demo.form.privacySummary.basis }}</p>
                <p>{{ content.demo.form.privacySummary.recipients }}</p>
                <p>{{ content.demo.form.privacySummary.rights }}</p>
                <NuxtLink to="/politica-privacidad">
                  {{ content.demo.form.privacySummary.more }}
                </NuxtLink>
              </div>

              <button
                class="button button--primary button--wide"
                type="submit"
                :disabled="submitting"
              >
                {{ content.demo.form.submit }}
                <AnimatedArrowIcon />
              </button>
              <p v-if="submitError" class="demo-form__error" role="alert">
                {{ submitError }}
              </p>
              <p class="demo-form__note">{{ content.demo.form.note }}</p>
            </form>
          </div>

          <div v-else class="demo-success" role="status">
            <i
              class="fi fi-br-check demo-success__mark"
              aria-hidden="true"
            />
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

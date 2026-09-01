<script setup lang="ts">
const { content } = usePulseI18n()
const activeTab = ref(0)
const tabList = ref<HTMLElement | null>(null)
const activeDetail = computed(
  () =>
    content.value.product.detail.tabs[activeTab.value] ??
    content.value.product.detail.tabs[0],
)

function getTabButtons() {
  return Array.from(
    tabList.value?.querySelectorAll<HTMLButtonElement>('[role="tab"]') ?? [],
  )
}

function activateTab(index: number, moveFocus = false) {
  const total = content.value.product.detail.tabs.length
  activeTab.value = (index + total) % total

  if (moveFocus) {
    nextTick(() => getTabButtons()[activeTab.value]?.focus())
  }
}

function handleTabKeydown(event: KeyboardEvent, index: number) {
  if (event.key === 'ArrowRight') {
    event.preventDefault()
    activateTab(index + 1, true)
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    activateTab(index - 1, true)
  } else if (event.key === 'Home') {
    event.preventDefault()
    activateTab(0, true)
  } else if (event.key === 'End') {
    event.preventDefault()
    activateTab(content.value.product.detail.tabs.length - 1, true)
  }
}

usePageSeo(
  () => content.value.product.seo.title,
  () => content.value.product.seo.description,
)
</script>

<template>
  <main id="main-content" tabindex="-1">
    <PageHero
      :eyebrow="content.product.hero.eyebrow"
      :title="content.product.hero.title"
      :accent="content.product.hero.accent"
      :description="content.product.hero.description"
    >
      <template #actions>
        <NuxtLink class="button button--primary" to="/demo">
          {{ content.product.hero.action }}
          <span aria-hidden="true">→</span>
        </NuxtLink>
      </template>
    </PageHero>

    <section class="section offer-section">
      <div class="shell">
        <div v-reveal class="section-heading">
          <p class="eyebrow">{{ content.product.offer.eyebrow }}</p>
          <h2>{{ content.product.offer.title }}</h2>
          <p>{{ content.product.offer.text }}</p>
        </div>

        <div class="offer-groups">
          <article
            v-for="(group, groupIndex) in content.product.offer.groups"
            :key="group.title"
            v-reveal="groupIndex * 90"
            class="offer-group"
          >
            <div class="offer-group__intro">
              <span>0{{ groupIndex + 1 }}</span>
              <h3>{{ group.title }}</h3>
              <p>{{ group.text }}</p>
            </div>
            <ul>
              <li v-for="item in group.items" :key="item.title">
                <strong>{{ item.title }}</strong>
                <span>{{ item.text }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--soft product-showcase image-ready-section">
      <div class="shell product-showcase__grid product-showcase__grid--editorial">
        <div v-reveal class="product-showcase__copy">
          <p class="eyebrow">{{ content.product.showcase.eyebrow }}</p>
          <h2>{{ content.product.showcase.title }}</h2>
          <p>{{ content.product.showcase.text }}</p>
          <ul class="check-list">
            <li v-for="check in content.product.showcase.checks" :key="check">
              {{ check }}
            </li>
          </ul>
          <p class="placeholder-note">{{ content.product.showcase.note }}</p>
        </div>
        <div v-reveal="120" class="product-showcase__visual">
          <AppMockup />
        </div>
      </div>
    </section>

    <section class="section product-detail-section">
      <div class="shell">
        <div v-reveal class="section-heading product-detail-heading">
          <p class="eyebrow">{{ content.product.detail.eyebrow }}</p>
          <h2>{{ content.product.detail.title }}</h2>
        </div>

        <div v-reveal="80" class="product-detail">
          <div ref="tabList" class="product-tabs" role="tablist" aria-label="Pulse">
            <button
              v-for="(tab, index) in content.product.detail.tabs"
              :id="`product-tab-${index}`"
              :key="tab.label"
              type="button"
              role="tab"
              :aria-selected="activeTab === index"
              :aria-controls="`product-panel-${index}`"
              :tabindex="activeTab === index ? 0 : -1"
              :class="{ 'is-active': activeTab === index }"
              @click="activateTab(index)"
              @keydown="handleTabKeydown($event, index)"
            >
              {{ tab.label }}
            </button>
          </div>

          <div
            :id="`product-panel-${activeTab}`"
            class="product-tab-panel"
            role="tabpanel"
            :aria-labelledby="`product-tab-${activeTab}`"
          >
            <div class="product-tab-panel__copy">
              <span>0{{ activeTab + 1 }}</span>
              <h3>{{ activeDetail.title }}</h3>
              <p>{{ activeDetail.text }}</p>
              <ul>
                <li v-for="point in activeDetail.points" :key="point">
                  {{ point }}
                </li>
              </ul>
            </div>
            <div class="product-tab-panel__visual" aria-hidden="true">
              <div class="detail-chart">
                <i style="--point-x: 16%; --point-y: 66%; --point-size: 22px" />
                <i style="--point-x: 35%; --point-y: 39%; --point-size: 34px" />
                <i style="--point-x: 58%; --point-y: 53%; --point-size: 26px" />
                <i style="--point-x: 74%; --point-y: 25%; --point-size: 42px" />
                <i style="--point-x: 86%; --point-y: 44%; --point-size: 30px" />
              </div>
              <div class="detail-insight">
                <span />
                <i />
                <i />
              </div>
            </div>
          </div>
          <p class="placeholder-note product-detail__note">
            {{ content.product.detail.note }}
          </p>
        </div>
      </div>
    </section>

    <CtaBanner :title="content.product.cta.title" :text="content.product.cta.text" />
  </main>
</template>

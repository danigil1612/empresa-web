type SeoValue = string | (() => string)

export function usePageSeo(title: SeoValue, description: SeoValue) {
  const route = useRoute()
  const config = useRuntimeConfig()
  // Prerendering runs on localhost, so public metadata must use the site origin.
  const imageUrl = new URL('/og.png', config.public.siteUrl).toString()
  const pageUrl = () => new URL(route.path, config.public.siteUrl).toString()
  const resolvedTitle = () => (typeof title === 'function' ? title() : title)
  const resolvedDescription = () =>
    typeof description === 'function' ? description() : description

  useSeoMeta({
    title: resolvedTitle,
    description: resolvedDescription,
    ogTitle: () => `${resolvedTitle()} · Pulse`,
    ogDescription: resolvedDescription,
    ogType: 'website',
    ogUrl: pageUrl,
    ogImage: imageUrl,
    twitterCard: 'summary_large_image',
    twitterTitle: () => `${resolvedTitle()} · Pulse`,
    twitterDescription: resolvedDescription,
    twitterImage: imageUrl,
  })
}

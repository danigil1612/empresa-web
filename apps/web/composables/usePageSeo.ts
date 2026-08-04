type SeoValue = string | (() => string)

export function usePageSeo(title: SeoValue, description: SeoValue) {
  const route = useRoute()
  const requestUrl = useRequestURL()
  const imageUrl = new URL('/og.png', requestUrl.origin).toString()
  const pageUrl = () => new URL(route.path, requestUrl.origin).toString()
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

export function useSiteSchema() {
  const route = useRoute()
  const requestUrl = useRequestURL()
  const { content, locale } = usePulseI18n()

  useHead(() => {
    const siteUrl = new URL('/', requestUrl.origin).toString()
    const pageUrl = new URL(route.path, requestUrl.origin).toString()
    const organizationId = `${siteUrl}#organization`
    const websiteId = `${siteUrl}#website`

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': organizationId,
          name: 'Pulse',
          url: siteUrl,
          description: content.value.common.footer.description,
        },
        {
          '@type': 'WebSite',
          '@id': websiteId,
          url: siteUrl,
          name: 'Pulse',
          inLanguage: locale.value,
          publisher: {
            '@id': organizationId,
          },
        },
        {
          '@type': 'SoftwareApplication',
          name: 'Pulse',
          url: siteUrl,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          description: content.value.common.footer.description,
          provider: {
            '@id': organizationId,
          },
        },
      ],
    }

    return {
      link: [
        {
          key: 'canonical',
          rel: 'canonical',
          href: pageUrl,
        },
      ],
      script: [
        {
          key: 'pulse-structured-data',
          type: 'application/ld+json',
          innerHTML: JSON.stringify(schema).replace(/</g, '\\u003c'),
        },
      ],
    }
  })
}

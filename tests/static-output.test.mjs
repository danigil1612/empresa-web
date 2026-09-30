import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import test from 'node:test'

const output = fileURLToPath(new URL('../.output/public/', import.meta.url))
const origin = 'https://emotion-pulse.com'
const routes = ['/', '/como-trabajamos', '/que-ofrecemos', '/quienes-somos', '/demo', '/aviso-legal', '/politica-privacidad', '/politica-cookies']
const read = (path) => readFileSync(join(output, path), 'utf8')
const attributes = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((match) => [match[1], match[2]]))

for (const route of routes) {
  test(`generated page ${route} has public SEO, content and working local assets`, () => {
    const html = read(`${route.slice(1)}/index.html`)
    assert.match(html, /<html[^>]+lang="es"/)
    assert.match(html, /<title>[^<]+ · Pulse<\/title>/)
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1)
    assert.doesNotMatch(html, /name="robots"[^>]*noindex/)
    const links = [...html.matchAll(/<link\b[^>]*>/g)].map(([tag]) => attributes(tag))
    assert.deepEqual(links.filter((link) => link.rel === 'canonical').map((link) => link.href), [`${origin}${route}`])
    const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag))
    assert.ok(metas.find((meta) => meta.name === 'description')?.content.length > 20)
    assert.equal(metas.find((meta) => meta.property === 'og:url')?.content, `${origin}${route}`)
    assert.equal(metas.find((meta) => meta.property === 'og:image')?.content, `${origin}/og.png`)
    const schemaText = html.match(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/s)?.[1]
    assert.ok(schemaText, 'JSON-LD is present')
    const schema = JSON.parse(schemaText)
    for (const entity of schema['@graph']) assert.ok(entity.url.startsWith(`${origin}/`))
    assert.doesNotMatch(schemaText, /localhost|127\.0\.0\.1/)
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])
    assert.equal(new Set(ids).size, ids.length, 'no duplicate HTML IDs')
    for (const match of html.matchAll(/(?:src|href)="(\/[^"#]*)"/g)) {
      const path = decodeURIComponent(match[1].split(/[?#]/)[0]).replace(/^\//, '')
      assert.ok(existsSync(join(output, path)) || existsSync(join(output, path, 'index.html')), `missing asset or route: ${match[1]}`)
    }
  })
}

test('sitemap and robots expose only canonical public pages', () => {
  const robots = read('robots.txt')
  assert.match(robots, /Sitemap: https:\/\/emotion-pulse\.com\/sitemap\.xml/)
  assert.doesNotMatch(robots, /Disallow:\s*\/\s*$/m)
  const urls = [...read('sitemap.xml').matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
  assert.deepEqual(urls.sort(), routes.map((route) => `${origin}${route}`).sort())
})

test('deployment includes the demo endpoint and a non-indexable error page', () => {
  assert.match(read('api/request-demo.php'), /^<\?php/)
  const errorMetas = [...read('404.html').matchAll(/<meta\b[^>]*>/g)].map(([tag]) => attributes(tag))
  assert.match(errorMetas.find((meta) => meta.name === 'robots')?.content || '', /\bnoindex\b/)
})

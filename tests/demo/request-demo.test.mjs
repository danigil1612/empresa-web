import assert from 'node:assert/strict'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const php = process.env.PHP_BIN || 'php'
const harness = fileURLToPath(new URL('./harness.php', import.meta.url))
const validFields = {
  name: 'Persona de prova', email: 'test@example.com', company: 'Empresa de prova',
  'team-size': '1-25', message: 'Una demostració', locale: 'ca', 'privacy-read': 'yes', website: '',
}
const validServer = {
  REQUEST_METHOD: 'POST', CONTENT_TYPE: 'multipart/form-data; boundary=test',
  HTTP_HOST: 'emotion-pulse.com', HTTP_ORIGIN: 'https://emotion-pulse.com',
  HTTP_SEC_FETCH_SITE: 'same-origin', REMOTE_ADDR: '192.0.2.1', CONTENT_LENGTH: '500',
}
function setup(t) {
  const directory = mkdtempSync(join(tmpdir(), 'pulse-demo-test-'))
  t.after(() => rmSync(directory, { recursive: true, force: true }))
  return (fields = {}, server = {}, mailAccepted = true) => {
    const result = spawnSync(php, [harness], {
      input: JSON.stringify({ fields: { ...validFields, ...fields }, server: { ...validServer, ...server }, temp: directory, mailAccepted }),
      encoding: 'utf8', timeout: 10000,
    })
    assert.ifError(result.error)
    assert.equal(result.status, 0, result.stderr)
    const response = JSON.parse(result.stdout)
    response.body = JSON.parse(response.body)
    return response
  }
}

test('valid request is accepted by a mock transport with safe mail headers', (t) => {
  const response = setup(t)()
  assert.equal(response.status, 200)
  assert.equal(response.body.success, true)
  assert.equal(response.mail.to, 'info@emotion-pulse.com')
  assert.match(response.mail.headers, /Reply-To: test@example.com\r\n/)
  assert.doesNotMatch(response.mail.subject, /Empresa de prova|\r|\n/)
  assert.match(Buffer.from(response.mail.message, 'base64').toString('utf8'), /Una demostració/)
})

for (const [name, fields] of [
  ['array field', { name: ['invalid'] }],
  ['header injection', { company: 'Company\r\nBcc: attacker@example.com' }],
  ['oversized field', { message: 'x'.repeat(3001) }],
  ['invalid email', { email: 'not an email' }],
  ['missing privacy acknowledgement', { 'privacy-read': '' }],
  ['invalid locale', { locale: 'invalid' }],
  ['invalid team size', { 'team-size': '999' }],
]) {
  test(`rejects ${name} without sending email`, (t) => {
    const response = setup(t)(fields)
    assert.equal(response.status, 422)
    assert.equal(response.body.success, false)
    assert.equal(response.mail, null)
  })
}

for (const [name, server, status] of [
  ['GET', { REQUEST_METHOD: 'GET' }, 405],
  ['cross-site browser', { HTTP_SEC_FETCH_SITE: 'cross-site' }, 403],
  ['untrusted origin', { HTTP_ORIGIN: 'https://attacker.example' }, 403],
  ['unsupported content type', { CONTENT_TYPE: 'application/json' }, 415],
  ['oversized request', { CONTENT_LENGTH: '50000' }, 413],
]) {
  test(`rejects ${name} without sending email`, (t) => {
    const response = setup(t)({}, server)
    assert.equal(response.status, status)
    assert.equal(response.mail, null)
  })
}

test('honeypot reports success without sending email', (t) => {
  const response = setup(t)({ website: 'spam.example' })
  assert.equal(response.body.success, true)
  assert.equal(response.mail, null)
})

test('mail transport failure does not report success', (t) => {
  const response = setup(t)({}, {}, false)
  assert.equal(response.status, 500)
  assert.equal(response.body.success, false)
})

test('sixth request from an address is throttled; another address can send', (t) => {
  const send = setup(t)
  for (let i = 0; i < 5; i++) assert.equal(send().status, 200)
  const blocked = send()
  assert.equal(blocked.status, 429)
  assert.equal(blocked.mail, null)
  assert.equal(send({}, { REMOTE_ADDR: '192.0.2.2' }).status, 200)
})

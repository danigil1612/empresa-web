<?php

declare(strict_types=1);

namespace Pulse\Demo;

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, bool $success): never
{
    http_response_code($status);
    echo json_encode(['success' => $success]);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, false);
}

if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 32768) {
    respond(413, false);
}

$contentType = strtolower(trim(explode(';', $_SERVER['CONTENT_TYPE'] ?? '')[0]));
if (!in_array($contentType, ['multipart/form-data', 'application/x-www-form-urlencoded'], true)) {
    respond(415, false);
}

// Only this site's form should initiate requests from a browser.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (
    (isset($_SERVER['HTTP_SEC_FETCH_SITE']) && $_SERVER['HTTP_SEC_FETCH_SITE'] === 'cross-site')
    || ($origin !== '' && (
        preg_match('~\Ahttps?://([^/]+)\z~i', $origin, $originParts) !== 1
        || strtolower($originParts[1]) !== strtolower($_SERVER['HTTP_HOST'] ?? '')
    ))
) {
    respond(403, false);
}

function field(string $name, int $maxLength, bool $multiline = false): string
{
    $raw = $_POST[$name] ?? '';
    if (!is_string($raw)) {
        respond(422, false);
    }

    $value = trim($raw);
    $invalidControls = $multiline ? '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/' : '/[\x00-\x1F\x7F]/';
    if (
        strlen($raw) > $maxLength * 4
        || preg_match('/\A.{0,' . $maxLength . '}\z/su', $value) !== 1
        || preg_match($invalidControls, $raw) === 1
    ) {
        respond(422, false);
    }

    return $value;
}

if (field('website', 200) !== '') {
    respond(200, true);
}

$name = field('name', 120);
$email = filter_var(field('email', 254), FILTER_VALIDATE_EMAIL);
$company = field('company', 160);
$teamSize = field('team-size', 10);
$message = field('message', 3000, true);
$locale = field('locale', 5);
$privacyRead = field('privacy-read', 3);

if (
    $name === '' || $email === false || $company === ''
    || !in_array($teamSize, ['1-25', '26-100', '101-500', '500+'], true)
    || !in_array($locale, ['ca', 'es', 'en'], true)
    || $privacyRead !== 'yes'
) {
    respond(422, false);
}

/** Reserve one attempt, storing only expiring hashes outside the public directory. */
function reserveAttempt(): int
{
    $directory = sys_get_temp_dir() . '/pulse-demo-rate-limit';
    if (!is_dir($directory) && !@mkdir($directory, 0700, true) && !is_dir($directory)) {
        throw new \RuntimeException('Rate limit storage unavailable');
    }

    $file = @fopen($directory . '/attempts.json', 'c+');
    if ($file === false) {
        throw new \RuntimeException('Rate limit storage unavailable');
    }

    try {
        if (!flock($file, LOCK_EX)) {
            throw new \RuntimeException('Rate limit lock unavailable');
        }

        $contents = stream_get_contents($file, 262144);
        if ($contents === false) {
            throw new \RuntimeException('Rate limit storage unreadable');
        }
        $attempts = $contents === '' ? [] : json_decode($contents, true, 512, JSON_THROW_ON_ERROR);
        if (!is_array($attempts)) {
            throw new \RuntimeException('Invalid rate limit storage');
        }

        $now = time();
        foreach ($attempts as $key => $attempt) {
            if (!is_array($attempt) || ($attempt['expires'] ?? 0) <= $now) {
                unset($attempts[$key]);
            }
        }

        // Use the server's remote address, never a client-supplied forwarding header.
        $key = hash('sha256', $_SERVER['REMOTE_ADDR'] ?? 'unknown');
        $attempt = $attempts[$key] ?? ['count' => 0, 'expires' => $now + 600];
        if ($attempt['count'] >= 5) {
            return max(1, $attempt['expires'] - $now);
        }
        if (!isset($attempts[$key]) && count($attempts) >= 1024) {
            return 600;
        }

        $attempt['count']++;
        $attempts[$key] = $attempt;
        $encoded = json_encode($attempts, JSON_THROW_ON_ERROR);
        if (!rewind($file) || !ftruncate($file, 0) || fwrite($file, $encoded) !== strlen($encoded) || !fflush($file)) {
            throw new \RuntimeException('Rate limit storage unwritable');
        }

        return 0;
    } finally {
        flock($file, LOCK_UN);
        fclose($file);
    }
}

try {
    $retryAfter = reserveAttempt();
} catch (\Throwable $error) {
    error_log('Pulse demo: request throttle unavailable.');
    respond(503, false);
}

if ($retryAfter > 0) {
    header('Retry-After: ' . $retryAfter);
    respond(429, false);
}

// Keep untrusted data out of header display names and the mail subject.
$subject = '=?UTF-8?B?' . base64_encode('Nova sol·licitud de demo · Pulse') . '?=';
$body = implode("\n", [
    'Nova sol·licitud de demo des de emotion-pulse.com',
    '',
    'Nom: ' . $name,
    'Email: ' . $email,
    'Empresa: ' . $company,
    'Mida de l’equip: ' . $teamSize,
    'Idioma: ' . $locale,
    'Informació de privacitat llegida: sí',
    '',
    'Missatge:',
    $message !== '' ? $message : 'Sense missatge.',
]);

$headers = implode("\r\n", [
    'From: Pulse Web <no-reply@emotion-pulse.com>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
]);

try {
    // Base64 also avoids SMTP line-length and leading-dot issues in free text.
    $sent = @mail('info@emotion-pulse.com', $subject, chunk_split(base64_encode($body)), $headers);
} catch (\Throwable $error) {
    $sent = false;
}

if (!$sent) {
    error_log('Pulse demo: mail transport did not accept the request.');
}

respond($sent ? 200 : 500, $sent);

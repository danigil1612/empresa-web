<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond(int $status, bool $success): never
{
    http_response_code($status);
    echo json_encode(['success' => $success]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, false);
}

if (!empty($_POST['website'] ?? '')) {
    respond(200, true);
}

function field(string $name, int $maxLength): string
{
    $value = trim((string) ($_POST[$name] ?? ''));
    return mb_substr($value, 0, $maxLength);
}

$name = field('name', 120);
$email = filter_var(field('email', 254), FILTER_VALIDATE_EMAIL);
$company = field('company', 160);
$teamSize = field('team-size', 80);
$message = field('message', 3000);
$locale = field('locale', 5);
$privacyRead = field('privacy-read', 3);

if ($name === '' || $email === false || $company === '' || $teamSize === '' || $privacyRead !== 'yes') {
    respond(422, false);
}

$safeName = str_replace(["\r", "\n"], ' ', $name);
$safeEmail = str_replace(["\r", "\n"], '', (string) $email);
$subject = 'Nova sol·licitud de demo · ' . $company;
$body = implode("\n", [
    'Nova sol·licitud de demo des de emotion-pulse.com',
    '',
    'Nom: ' . $safeName,
    'Email: ' . $safeEmail,
    'Empresa: ' . $company,
    'Mida de l’equip: ' . $teamSize,
    'Idioma: ' . ($locale !== '' ? $locale : 'No indicat'),
    'Informació de privacitat llegida: sí',
    '',
    'Missatge:',
    $message !== '' ? $message : 'Sense missatge.',
]);

$headers = implode("\r\n", [
    'From: Pulse Web <no-reply@emotion-pulse.com>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

$sent = mail('info@emotion-pulse.com', $subject, $body, $headers);

respond($sent ? 200 : 500, $sent);

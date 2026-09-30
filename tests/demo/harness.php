<?php
declare(strict_types=1);

namespace Pulse\Demo;

// Namespace overrides prevent these regression tests from contacting a mail server
// or using the application's real rate-limit storage.
$testInput = json_decode(stream_get_contents(STDIN), true, 512, JSON_THROW_ON_ERROR);
$_SERVER = $testInput['server'];
$_POST = $testInput['fields'];
$testMail = null;

function sys_get_temp_dir(): string { return $GLOBALS['testInput']['temp']; }
function mail(string $to, string $subject, string $message, string $headers): bool
{
    $GLOBALS['testMail'] = compact('to', 'subject', 'message', 'headers');
    return $GLOBALS['testInput']['mailAccepted'] ?? true;
}

ob_start();
register_shutdown_function(function (): void {
    $body = ob_get_clean();
    echo json_encode(['status' => http_response_code(), 'body' => $body, 'mail' => $GLOBALS['testMail']]);
});
require __DIR__ . '/../../apps/web/public/api/request-demo.php';

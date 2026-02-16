<?php
/**
 * Automated Deployment Script
 *
 * This script accepts a GitHub Webhook and updates the website.
 */

// -------------------------------------------------------------------------
// CONFIGURATION
// -------------------------------------------------------------------------

// The secret you set in GitHub Webhooks "Secret" field
$secret = 'my_super_secure_secret'; 

// The branch you want to pull
$branch = 'main';

// Log file path
$logFile = 'deploy.log';

// -------------------------------------------------------------------------
// EXECUTION
// -------------------------------------------------------------------------

// If this script is running from the 'dist' folder (because of .htaccess redirect),
// we need to move up one level to the project root to run git commands.
if (basename(__DIR__) === 'dist') {
    chdir('..');
}

// 1. Get the signature from the headers
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';

// 2. Get the raw payload
$payload = file_get_contents('php://input');

// 3. Verify the signature
if (!$signature || !$payload) {
    http_response_code(400);
    die('Bad Request: Missing signature or payload.');
}

$calculatedSignature = 'sha256=' . hash_hmac('sha256', $payload, $secret);

if (!hash_equals($calculatedSignature, $signature)) {
    http_response_code(403);
    die('Forbidden: Invalid signature.');
}

// 4. Log the event
$message = "Depolyment trigged at " . date('Y-m-d H:i:s') . "\n";
file_put_contents($logFile, $message, FILE_APPEND);

// 5. Execute Commands
// IMPORTANT: Namecheap paths for node/npm might vary. You might need to specify full paths
// e.g., /usr/local/bin/npm or similar if 'npm' isn't in the PATH of the web user.
$commands = [
    'echo $PWD',
    'whoami',
    'git pull origin ' . $branch,
    // 'npm install',  <-- Removed: We are committing the build now
    // 'npm run build' <-- Removed: Server functionality only
];

$output = '';
foreach ($commands as $command) {
    // Redirect stderr to stdout to capture errors
    $tmp = shell_exec($command . ' 2>&1');
    $output .= "$ " . $command . "\n" . $tmp . "\n";
}

file_put_contents($logFile, $output, FILE_APPEND);

echo "Deployment finished. Check deploy.log for details.";

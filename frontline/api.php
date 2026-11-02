<?php
// Frontline Spielstand-API: genau ein Stand, nur für Daniel (kein Login, kein Code).
//
//   GET  api.php?meta=1   → {"meta": {...}|null}
//   GET  api.php          → {"meta": {...}, "data": "<base64 gzip>"} oder {"meta": null}
//   POST api.php          → {"action":"save","meta":{...},"data":"<base64 gzip>"} | {"action":"delete"}
//
// Das Spiel (GitHub Pages) schickt den gepackten Spielstand; der Server speichert ihn unverändert.
// Dateien liegen in frontline/data/ (per .htaccess gesperrt, wird beim Deploy nie überschrieben).

const FL_MAX_BYTES = 12 * 1024 * 1024; // gepackter Stand, normal < 1 MB
const FL_FILE = 'save.bin';
const FL_META = 'meta.json';

$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
$allowed = $origin === 'https://crazyviperpilot.github.io' || preg_match('#^http://(localhost|127\.0\.0\.1)(:\d+)?$#', $origin);
if ($allowed) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

function fail($code, $message) {
    http_response_code($code);
    echo json_encode(['error' => $message], JSON_UNESCAPED_UNICODE);
    exit;
}

// Browser anderer Seiten dürfen nicht schreiben.
if ($origin !== '' && !$allowed) fail(403, 'Herkunft nicht erlaubt');

$dir = __DIR__ . '/data';
if (!is_dir($dir) && !mkdir($dir, 0750, true)) fail(500, 'Datenordner nicht anlegbar');

$lock = fopen($dir . '/lock', 'c');
if (!$lock || !flock($lock, LOCK_EX)) fail(500, 'Sperre nicht möglich');

function read_meta($dir) {
    $f = $dir . '/' . FL_META;
    if (!is_file($f) || !is_file($dir . '/' . FL_FILE)) return null;
    $m = json_decode((string) file_get_contents($f), true);
    return is_array($m) ? $m : null;
}

function write_atomic($path, $bytes) {
    $tmp = $path . '.tmp';
    if (file_put_contents($tmp, $bytes) !== strlen($bytes)) { @unlink($tmp); return false; }
    return rename($tmp, $path);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $meta = read_meta($dir);
    if (!$meta) { echo json_encode(['meta' => null]); exit; }
    if (isset($_GET['meta'])) { echo json_encode(['meta' => $meta]); exit; }
    echo json_encode(['meta' => $meta, 'data' => base64_encode((string) file_get_contents($dir . '/' . FL_FILE))]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') fail(405, 'Methode nicht erlaubt');

$body = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($body) || !isset($body['action'])) fail(400, 'Ungültige Anfrage');

if ($body['action'] === 'delete') {
    @unlink($dir . '/' . FL_FILE);
    @unlink($dir . '/' . FL_META);
    @unlink($dir . '/prev-' . FL_FILE);
    @unlink($dir . '/prev-' . FL_META);
    echo json_encode(['ok' => true]);
    exit;
}

if ($body['action'] !== 'save') fail(400, 'Unbekannte Aktion');
$meta = isset($body['meta']) ? $body['meta'] : null;
$data = isset($body['data']) ? $body['data'] : null;
if (!is_array($meta) || !is_string($data)) fail(400, 'meta oder data fehlt');
foreach (['savedAt', 'format', 'gameTime', 'winPoints'] as $k) {
    if (!isset($meta[$k]) || !is_numeric($meta[$k])) fail(400, "meta.$k fehlt");
}
if (!isset($meta['points']) || !is_array($meta['points']) || count($meta['points']) !== 2) fail(400, 'meta.points fehlt');
$bytes = base64_decode($data, true);
if ($bytes === false || strlen($bytes) < 20 || strlen($bytes) > FL_MAX_BYTES) fail(413, 'Stand ungültig oder zu groß');
if (substr($bytes, 0, 2) !== "\x1f\x8b") fail(400, 'Stand ist nicht gepackt (gzip)');

// Nur bekannte Meta-Felder speichern.
$clean = [
    'savedAt' => (float) $meta['savedAt'], 'format' => (int) $meta['format'], 'gameTime' => (float) $meta['gameTime'],
    'points' => [(int) $meta['points'][0], (int) $meta['points'][1]], 'winPoints' => (int) $meta['winPoints'],
    'difficulty' => isset($meta['difficulty']) ? substr((string) $meta['difficulty'], 0, 16) : 'normal',
    'size' => strlen($bytes),
];

// Den bisherigen Stand als Rückfall behalten.
if (is_file($dir . '/' . FL_FILE) && is_file($dir . '/' . FL_META)) {
    @copy($dir . '/' . FL_FILE, $dir . '/prev-' . FL_FILE);
    @copy($dir . '/' . FL_META, $dir . '/prev-' . FL_META);
}
if (!write_atomic($dir . '/' . FL_FILE, $bytes) || !write_atomic($dir . '/' . FL_META, json_encode($clean))) fail(500, 'Schreiben fehlgeschlagen');
echo json_encode(['ok' => true, 'meta' => $clean]);

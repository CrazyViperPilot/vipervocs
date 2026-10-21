<?php
// ViperVocs learning stats on the server (one JSON file, no database).
//
//   GET  api/stats.php             → current stats
//   POST api/stats.php  {words:…}  → merges the posted stats, returns the result
//
// Every request needs the header "X-Vocs-Key: <key>". config.php holds the
// SHA-256 of the key and is written by the deploy workflow (see README).
// Merge rule as in js/srs.js: per word the entry with the later "last" wins,
// on the same day the one with more "asked".

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function fail($code, $message) {
    http_response_code($code);
    echo json_encode(['error' => $message]);
    exit;
}

$configFile = __DIR__ . '/config.php';
if (!is_file($configFile)) fail(500, 'config.php fehlt');
$config = require $configFile;

$key = isset($_SERVER['HTTP_X_VOCS_KEY']) ? $_SERVER['HTTP_X_VOCS_KEY'] : '';
if ($key === '' || !hash_equals($config['key_sha256'], hash('sha256', $key))) fail(401, 'Falscher oder fehlender Schlüssel');

$dataDir = __DIR__ . '/data';
$dataFile = $dataDir . '/stats.json';
if (!is_dir($dataDir) && !mkdir($dataDir, 0750, true)) fail(500, 'Datenordner nicht anlegbar');

// Empty words must stay a JSON object, not [].
function output($stats) {
    $stats['words'] = (object)$stats['words'];
    echo json_encode($stats, JSON_UNESCAPED_UNICODE);
}

function load_stats($fp) {
    rewind($fp);
    $data = json_decode(stream_get_contents($fp), true);
    if (!is_array($data) || !isset($data['words']) || !is_array($data['words'])) $data = ['words' => []];
    return ['version' => 2, 'words' => $data['words']];
}

$fp = fopen($dataFile, 'c+');
if (!$fp) fail(500, 'Datei nicht lesbar');

$method = $_SERVER['REQUEST_METHOD'];
if ($method === 'GET') {
    flock($fp, LOCK_SH);
    $stats = load_stats($fp);
    flock($fp, LOCK_UN);
    fclose($fp);
    output($stats);
    exit;
}
if ($method !== 'POST') fail(405, 'Nur GET und POST');

$in = json_decode(file_get_contents('php://input'), true);
if (!is_array($in) || !isset($in['words']) || !is_array($in['words'])) fail(400, 'Erwartet {"words": {…}}');

flock($fp, LOCK_EX);
$stats = load_stats($fp);
$changed = false;
foreach ($in['words'] as $pl => $s) {
    if (!is_array($s) || !isset($s['asked'], $s['correct'], $s['last'])) continue;
    $t = isset($stats['words'][$pl]) ? $stats['words'][$pl] : null;
    if ($t === null || strcmp($s['last'], $t['last']) > 0 || ($s['last'] === $t['last'] && $s['asked'] > $t['asked'])) {
        $stats['words'][$pl] = [
            'de' => isset($s['de']) ? (string)$s['de'] : '',
            'asked' => (int)$s['asked'],
            'correct' => (int)$s['correct'],
            'last' => (string)$s['last'],
            'box' => isset($s['box']) ? (int)$s['box'] : 0,
            'due' => isset($s['due']) ? (string)$s['due'] : (string)$s['last'],
        ];
        $changed = true;
    }
}

if ($changed) {
    // One backup per day, the last 14 are kept.
    $backup = $dataDir . '/stats-' . date('Y-m-d') . '.json';
    if (!is_file($backup) && filesize($dataFile) > 0) {
        copy($dataFile, $backup);
        $backups = glob($dataDir . '/stats-*.json');
        sort($backups);
        foreach (array_slice($backups, 0, -14) as $old) unlink($old);
    }
    ksort($stats['words']);
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, json_encode(['version' => 2, 'words' => (object)$stats['words']], JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    fflush($fp);
}
flock($fp, LOCK_UN);
fclose($fp);
output($stats);

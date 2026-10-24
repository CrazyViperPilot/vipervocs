<?php
// php fruhno/test.php – plays many random games with the engine and checks invariants.
if (PHP_SAPI !== 'cli') { http_response_code(404); exit; }
require __DIR__ . '/engine.php';

function check($cond, $msg) { if (!$cond) { fwrite(STDERR, "FAIL: $msg\n"); exit(1); } }

check(count(fr_deck()) === 108, 'deck has 108 cards');

$totalTurns = 0;
for ($game = 0; $game < 300; $game++) {
    $n = 2 + $game % 2;
    $names = array_slice(FR_NAMES, 0, $n);
    $g = fr_new_game($names, $game);
    for ($turn = 0; $turn < 2000; $turn++) {
        $count = count($g['draw']) + count($g['discard']);
        foreach ($g['hands'] as $h) $count += count($h);
        check($count === 108, "card conservation game $game turn $turn ($count)");
        check(in_array($g['color'], [0, 1, 2, 3], true), 'color valid');
        check($g['turnName'] === $g['order'][$g['turnIdx']], 'turn consistent');
        $err = fr_bot_move($g, $g['turnName']);
        check($err === null, "bot move error: $err");
        $totalTurns++;
        if (!empty($g['winner'])) break;
    }
    check(!empty($g['winner']), "game $game finished");
    check(count($g['hands'][$g['winner']]) === 0, 'winner has no cards');
}
// rules
$g = fr_new_game(['Daniel', 'Lea']);
$g['color'] = 1; $g['discard'][] = [1, 5];
$g['turnIdx'] = 0; $g['turnName'] = 'Daniel'; $g['drawn'] = null;
$g['hands']['Daniel'] = [[1, 7], [4, FR_WILD4], [2, 5], [0, 3]];
check(fr_playable($g, 'Daniel') === [0, 2], 'color/number match, +4 blocked while color in hand');
$g['hands']['Daniel'] = [[4, FR_WILD4], [2, 2]];
check(fr_playable($g, 'Daniel') === [0], '+4 allowed without color');
$g['hands']['Daniel'] = [[1, FR_REVERSE], [0, 0], [0, 1]];
$g['discard'][] = [1, 5];
fr_play($g, 'Daniel', 0, [1, FR_REVERSE], -1);
check($g['turnName'] === 'Daniel', 'reverse acts as skip with 2 players');
echo "OK ($totalTurns turns)\n";

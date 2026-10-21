// Spaced repetition (Leitner boxes) shared by the web app and the /vocs skill.
// Plain script: the browser loads it via <script>, vocs.mjs evaluates it with new Function.
//
// Stats format (progress/stats.json and localStorage):
// { version: 2, words: { "<pl>": { de, asked, correct, last, box, due } } }
// box 0–6: correct moves one box up, wrong falls back to 0.
// due: date (YYYY-MM-DD) from which the word should be asked again.
const vocabSrs = (() => {
  const INTERVALS = [0, 1, 2, 4, 8, 16, 32]; // days until due, per box
  const MAX_BOX = INTERVALS.length - 1;

  const today = () => new Date().toISOString().slice(0, 10);

  function addDays(date, days) {
    const d = new Date(`${date}T00:00:00Z`);
    d.setUTCDate(d.getUTCDate() + days);
    return d.toISOString().slice(0, 10);
  }

  // Version 1 entries have no box yet: never wrong → box 1, otherwise box 0.
  function normalize(s) {
    if (typeof s.box !== "number") s.box = s.asked && s.correct === s.asked ? 1 : 0;
    if (!s.due) s.due = addDays(s.last || today(), INTERVALS[s.box]);
    return s;
  }

  function update(words, pl, de, correct, date = today()) {
    const s = normalize(words[pl] || (words[pl] = { de, asked: 0, correct: 0, last: "" }));
    s.asked += 1;
    if (correct) s.correct += 1;
    s.box = correct ? Math.min(s.box + 1, MAX_BOX) : 0;
    s.last = date;
    s.due = addDays(date, INTERVALS[s.box]);
    return s;
  }

  // Merges two stats objects per word: the more recent entry wins (no double counting).
  function merge(a, b) {
    const words = { ...(a && a.words) };
    for (const [pl, s] of Object.entries((b && b.words) || {})) {
      const t = words[pl];
      if (!t || s.last > t.last || (s.last === t.last && s.asked > t.asked)) words[pl] = s;
    }
    for (const s of Object.values(words)) normalize(s);
    return { version: 2, words };
  }

  // All pairs, one entry per Polish word. `de` joins all distinct meanings,
  // `alt` lists other Polish words that share a German meaning (also correct answers).
  function collectPairs(lessons) {
    const byPl = new Map();
    const byDe = new Map();
    let order = 0;
    for (const [key, lesson] of Object.entries(lessons)) {
      for (const p of lesson.pairs) {
        let e = byPl.get(p.pl);
        if (!e) byPl.set(p.pl, e = { pl: p.pl, meanings: [], lesson: key, label: lesson.labelDe, order: order++ });
        if (!e.meanings.includes(p.de)) e.meanings.push(p.de);
        if (!byDe.has(p.de)) byDe.set(p.de, new Set());
        byDe.get(p.de).add(p.pl);
      }
    }
    return [...byPl.values()].map(e => {
      const alt = new Set();
      for (const de of e.meanings) for (const pl of byDe.get(de)) if (pl !== e.pl) alt.add(pl);
      return { pl: e.pl, de: e.meanings.join(" / "), alt: [...alt], lesson: e.lesson, label: e.label, order: e.order };
    });
  }

  function shuffle(list) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  }

  // Picks n words: due words first (oldest due, lowest box), then up to 40 % new words
  // from the earliest lesson that still has new ones, then whatever is due next.
  // distinct: no two picked words share a German or Polish text (needed for the matching board).
  function pick(pairs, words, n, { lesson, distinct = false, date = today() } = {}) {
    let pool = lesson ? pairs.filter(p => p.lesson === lesson) : pairs;
    const st = p => words[p.pl] && normalize(words[p.pl]);
    const byDue = (a, b) => st(a).due.localeCompare(st(b).due) || st(a).box - st(b).box;

    const due = pool.filter(p => st(p) && st(p).due <= date).sort(byDue);
    const later = pool.filter(p => st(p) && st(p).due > date).sort(byDue);
    const fresh = pool.filter(p => !st(p)).sort((a, b) => a.order - b.order);
    // New words: shuffle within the first lessons that still have new ones.
    const firstLessons = [...new Set(fresh.map(p => p.lesson))].slice(0, 2);
    const freshNext = shuffle(fresh.filter(p => firstLessons.includes(p.lesson)));
    const freshRest = fresh.filter(p => !firstLessons.includes(p.lesson));

    const chosen = [];
    const seen = new Set();
    const take = (list, max) => {
      for (const p of list) {
        if (chosen.length >= n || max <= 0) return;
        if (chosen.includes(p)) continue;
        if (distinct && p.de.split(" / ").concat(p.pl).some(t => seen.has(t))) continue;
        chosen.push(p);
        max--;
        for (const t of p.de.split(" / ").concat(p.pl)) seen.add(t);
      }
    };
    const newMax = Math.ceil(n * 0.4);
    take(due, n - Math.min(newMax, fresh.length));
    take(freshNext, newMax);
    take(freshRest, newMax);
    take(due, n);
    take(freshNext, n);
    take(freshRest, n);
    take(later, n);
    return shuffle(chosen);
  }

  function summary(words, totalPairs, top = 10, date = today()) {
    const entries = Object.entries(words).map(([pl, s]) => [pl, normalize(s)]);
    const asked = entries.reduce((n, [, s]) => n + s.asked, 0);
    const correct = entries.reduce((n, [, s]) => n + s.correct, 0);
    const rate = s => s.correct / s.asked;
    const weakest = entries
      .filter(([, s]) => s.box === 0 || s.correct < s.asked)
      .sort(([, a], [, b]) => a.box - b.box || rate(a) - rate(b) || b.asked - a.asked)
      .slice(0, top)
      .map(([pl, s]) => ({ pl, ...s }));
    return {
      words: entries.length,
      total: totalPairs,
      asked,
      correct,
      dueToday: entries.filter(([, s]) => s.due <= date).length,
      weakest,
    };
  }

  return { INTERVALS, today, addDays, normalize, update, merge, collectPairs, pick, summary };
})();

if (typeof window !== "undefined") window.vocabSrs = vocabSrs;

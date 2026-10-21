#!/usr/bin/env node
// Picks vocabulary for a /vocs round and keeps the learning stats in progress/stats.json.
//
//   node .claude/skills/vocs/vocs.mjs pick [n] [--lesson <key>]
//   node .claude/skills/vocs/vocs.mjs record "<pl>=1" "<pl>=0" ...
//   node .claude/skills/vocs/vocs.mjs stats [--top <n>]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const VOCAB = path.join(ROOT, "js/vocabulary.js");
const STATS = path.join(ROOT, "progress/stats.json");

function loadLessons() {
  const src = fs.readFileSync(VOCAB, "utf8");
  return new Function(`${src}; return lessons;`)();
}

// All pairs in file order, one entry per Polish word (first occurrence wins).
function loadPairs() {
  const pairs = new Map();
  for (const [key, lesson] of Object.entries(loadLessons())) {
    for (const p of lesson.pairs) {
      if (!pairs.has(p.pl)) pairs.set(p.pl, { pl: p.pl, de: p.de, lesson: key, label: lesson.labelDe });
    }
  }
  return pairs;
}

function loadStats() {
  try {
    return JSON.parse(fs.readFileSync(STATS, "utf8"));
  } catch {
    return { version: 1, words: {} };
  }
}

function saveStats(stats) {
  fs.mkdirSync(path.dirname(STATS), { recursive: true });
  const words = Object.fromEntries(Object.entries(stats.words).sort(([a], [b]) => a.localeCompare(b, "pl")));
  fs.writeFileSync(STATS, JSON.stringify({ ...stats, words }, null, 2) + "\n");
}

const accuracy = s => (s.asked ? s.correct / s.asked : 0);
const today = () => new Date().toISOString().slice(0, 10);

function pick(n, lessonKey) {
  const stats = loadStats();
  let pool = [...loadPairs().values()];
  if (lessonKey) pool = pool.filter(p => p.lesson === lessonKey);
  if (!pool.length) throw new Error(`Keine Vokabeln gefunden${lessonKey ? ` für Lektion ${lessonKey}` : ""}.`);

  const st = p => stats.words[p.pl];
  // Weak: asked before and under 80 % correct, worst and longest ago first.
  const weak = pool.filter(p => st(p) && accuracy(st(p)) < 0.8)
    .sort((a, b) => accuracy(st(a)) - accuracy(st(b)) || st(a).last.localeCompare(st(b).last));
  // New: never asked, random across all lessons.
  const fresh = pool.filter(p => !st(p)).sort(() => Math.random() - 0.5);
  // Review: everything else, least recently asked first.
  const review = pool.filter(p => st(p) && accuracy(st(p)) >= 0.8)
    .sort((a, b) => st(a).last.localeCompare(st(b).last));

  const chosen = [];
  const take = (list, max) => { for (const p of list) { if (chosen.length >= n || max-- <= 0) break; if (!chosen.includes(p)) chosen.push(p); } };
  take(weak, 2);
  take(fresh, 2);
  take(review, 1);
  take(weak, n); take(fresh, n); take(review, n);

  return chosen.map(p => ({
    pl: p.pl,
    de: p.de,
    lesson: p.label,
    ask: Math.random() < 0.5 ? "de>pl" : "pl>de",
    seen: st(p) ? `${st(p).correct}/${st(p).asked}` : "neu",
  }));
}

function record(args) {
  const stats = loadStats();
  const pairs = loadPairs();
  const out = [];
  for (const arg of args) {
    const i = arg.lastIndexOf("=");
    const pl = arg.slice(0, i);
    const ok = arg.slice(i + 1);
    if (i < 1 || !["0", "1"].includes(ok)) throw new Error(`Ungültig: "${arg}" (erwartet "<pl>=1" oder "<pl>=0")`);
    if (!pairs.has(pl)) throw new Error(`Unbekanntes Wort: "${pl}"`);
    const s = stats.words[pl] ||= { de: pairs.get(pl).de, asked: 0, correct: 0, last: "" };
    s.asked += 1;
    s.correct += Number(ok);
    s.last = today();
    out.push(`${pl}: ${s.correct}/${s.asked}`);
  }
  saveStats(stats);
  return out;
}

function summary(top) {
  const stats = loadStats();
  const entries = Object.entries(stats.words);
  const asked = entries.reduce((n, [, s]) => n + s.asked, 0);
  const correct = entries.reduce((n, [, s]) => n + s.correct, 0);
  const total = loadPairs().size;
  const weakest = entries.filter(([, s]) => accuracy(s) < 1)
    .sort(([, a], [, b]) => accuracy(a) - accuracy(b) || b.asked - a.asked)
    .slice(0, top)
    .map(([pl, s]) => `${pl} (${s.de}): ${s.correct}/${s.asked}`);
  return {
    geuebt: `${entries.length} von ${total} Wörtern`,
    abfragen: asked,
    quote: asked ? `${Math.round((correct / asked) * 100)} %` : "–",
    schwaechste: weakest,
  };
}

const [cmd, ...rest] = process.argv.slice(2);
const flag = name => { const i = rest.indexOf(name); return i >= 0 ? rest.splice(i, 2)[1] : undefined; };
try {
  if (cmd === "pick") {
    const lesson = flag("--lesson");
    console.log(JSON.stringify(pick(Number(rest[0]) || 5, lesson)));
  } else if (cmd === "record") {
    console.log(record(rest).join("\n"));
  } else if (cmd === "stats") {
    console.log(JSON.stringify(summary(Number(flag("--top")) || 10), null, 1));
  } else {
    console.log("Benutzung: vocs.mjs pick [n] [--lesson <key>] | record \"<pl>=1\" ... | stats [--top n]");
    process.exitCode = 1;
  }
} catch (e) {
  console.error(e.message);
  process.exitCode = 1;
}

#!/usr/bin/env node
// Picks vocabulary for a /vocs round and keeps the learning stats up to date.
// Word choice and the Leitner boxes come from js/srs.js, the same code the web app uses.
//
// The stats live on the server (api/stats.php). The key comes from $VOCS_KEY or the
// file .claude/skills/vocs/.key, the URL from $VOCS_API. Without key or server the
// stats are kept in progress/stats.json; the next server sync merges that file in.
//
//   node .claude/skills/vocs/vocs.mjs pick [n] [--lesson <key>]
//   node .claude/skills/vocs/vocs.mjs record "<pl>=1" "<pl>=0" ...
//   node .claude/skills/vocs/vocs.mjs stats [--top <n>]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const VOCAB = path.join(ROOT, "js/vocabulary.js");
const SRS = path.join(ROOT, "js/srs.js");
const STATS = path.join(ROOT, "progress/stats.json");
const KEY_FILE = path.join(ROOT, ".claude/skills/vocs/.key");
const API = process.env.VOCS_API || "https://phpexpert.de/vocs/api/stats.php";

const srs = new Function(`${fs.readFileSync(SRS, "utf8")}; return vocabSrs;`)();

function loadLessons() {
  const src = fs.readFileSync(VOCAB, "utf8");
  return new Function(`${src}; return lessons;`)();
}

function loadPairs() {
  return new Map(srs.collectPairs(loadLessons()).map(p => [p.pl, p]));
}

function serverKey() {
  if (process.env.VOCS_KEY) return process.env.VOCS_KEY.trim();
  try { return fs.readFileSync(KEY_FILE, "utf8").trim(); } catch { return ""; }
}

// POSTs stats to the server, which merges and returns the result.
// curl instead of fetch: curl honours the HTTPS proxy of sandboxed environments.
function postToServer(stats) {
  const key = serverKey();
  if (!key) throw new Error("kein Schlüssel ($VOCS_KEY oder .claude/skills/vocs/.key)");
  let out;
  try {
    out = execFileSync("curl", [
      "-sS", "-m", "20", "-w", "\n%{http_code}", "-X", "POST",
      "-H", "Content-Type: application/json", "-H", `X-Vocs-Key: ${key}`,
      "--data-binary", "@-", API,
    ], { input: JSON.stringify(stats), encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });
  } catch (e) {
    // e.message contains the command line including the key, so only report curl's own error.
    throw new Error(`nicht erreichbar (${String(e.stderr || "").trim().replace(/^curl: /, "")})`);
  }
  const i = out.lastIndexOf("\n");
  const status = out.slice(i + 1);
  if (status !== "200") throw new Error(`Server antwortet ${status}: ${out.slice(0, i).slice(0, 200)}`);
  return JSON.parse(out.slice(0, i));
}

function loadFile() {
  try {
    return srs.merge(JSON.parse(fs.readFileSync(STATS, "utf8")), null);
  } catch {
    return { version: 2, words: {} };
  }
}

// "server" or "datei": where the stats of this run come from and go to.
let storage = "datei";
let serverError = "";

function loadStats() {
  const file = loadFile();
  try {
    // Posting the file also merges anything that was only saved locally before.
    const stats = srs.merge(postToServer(file), null);
    storage = "server";
    return stats;
  } catch (e) {
    serverError = e.message.split("\n")[0];
    return file;
  }
}

function saveFile(stats) {
  fs.mkdirSync(path.dirname(STATS), { recursive: true });
  const words = Object.fromEntries(Object.entries(stats.words).sort(([a], [b]) => a.localeCompare(b, "pl")));
  fs.writeFileSync(STATS, JSON.stringify({ ...stats, words }, null, 2) + "\n");
}

function saveStats(stats) {
  if (storage === "server") {
    try {
      postToServer(stats);
      return "Gespeichert: Server";
    } catch (e) {
      serverError = e.message.split("\n")[0];
    }
  }
  saveFile(stats);
  return `Gespeichert: nur lokal in progress/stats.json (Server: ${serverError}) → committen`;
}

function pick(n, lessonKey) {
  const stats = loadStats();
  const pairs = [...loadPairs().values()];
  if (lessonKey && !pairs.some(p => p.lesson === lessonKey)) throw new Error(`Keine Vokabeln gefunden für Lektion ${lessonKey}.`);

  return srs.pick(pairs, stats.words, n, { lesson: lessonKey }).map(p => {
    const s = stats.words[p.pl];
    const out = {
      pl: p.pl,
      de: p.de,
      lesson: p.label,
      ask: Math.random() < 0.5 ? "de>pl" : "pl>de",
      seen: s ? `${s.correct}/${s.asked}, Fach ${s.box}` : "neu",
    };
    // Other Polish words with the same German meaning are also correct for de>pl.
    if (p.alt.length) out.ok = p.alt;
    return out;
  });
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
    const s = srs.update(stats.words, pl, pairs.get(pl).de, ok === "1");
    out.push(`${pl}: ${s.correct}/${s.asked}, Fach ${s.box}, wieder am ${s.due}`);
  }
  out.push(saveStats(stats));
  return out;
}

function summary(top) {
  const s = srs.summary(loadStats().words, loadPairs().size, top);
  return {
    speicher: storage === "server" ? "Server" : `lokal (Server: ${serverError})`,
    geuebt: `${s.words} von ${s.total} Wörtern`,
    heute_faellig: s.dueToday,
    abfragen: s.asked,
    quote: s.asked ? `${Math.round((s.correct / s.asked) * 100)} %` : "–",
    schwaechste: s.weakest.map(w => `${w.pl} (${w.de}): ${w.correct}/${w.asked}, Fach ${w.box}`),
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

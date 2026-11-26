// Checks the grammar course data (js/course-data.js) and the vocabulary file.
// Run: npm run check
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const load = (file, name) => new Function(`${fs.readFileSync(path.join(root, file), "utf8")}; return ${name};`)();

const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);

const GAP = "___";
const words = s => s.toLowerCase().split(/\s+/).map(t => t.replace(/[.,!?;:…„“"()]/g, "")).filter(Boolean);
const bag = list => list.reduce((m, w) => m.set(w, (m.get(w) || 0) + 1), new Map());
const fits = (need, have) => [...bag(need)].every(([w, n]) => (have.get(w) || 0) >= n);

const course = load("js/course-data.js", "course");
let steps = 0;
for (const [key, lesson] of Object.entries(course)) {
  if (!lesson.label) fail(key, "label fehlt");
  if (!Array.isArray(lesson.steps) || !lesson.steps.length) { fail(key, "keine Schritte"); continue; }
  if (lesson.steps[0].t !== "learn") fail(key, "beginnt nicht mit einer Erklärung");
  if (!lesson.steps.some(s => s.t === "build")) fail(key, "keine Anwenden-Aufgabe (build)");
  lesson.steps.forEach((s, i) => {
    steps++;
    const at = `${key}[${i}]`;
    switch (s.t) {
      case "learn":
        if (!s.title) fail(at, "Titel fehlt");
        for (const ex of s.ex || []) if (!Array.isArray(ex) || !ex[0]) fail(at, "Beispiel ohne Polnisch");
        break;
      case "choose":
        if (!s.de || !s.pl || !s.a) fail(at, "de/pl/a fehlt");
        if (s.pl.split(GAP).length !== 2) fail(at, `pl braucht genau eine Lücke ${GAP}`);
        if (!s.options.includes(s.a)) fail(at, `Antwort „${s.a}“ nicht unter den Optionen`);
        if (new Set(s.options).size !== s.options.length) fail(at, "doppelte Optionen");
        if (s.options.length < 2) fail(at, "zu wenige Optionen");
        break;
      case "type":
        if (!s.de || !s.pl || !s.a) fail(at, "de/pl/a fehlt");
        if (s.pl.split(GAP).length !== 2) fail(at, `pl braucht genau eine Lücke ${GAP}`);
        break;
      case "build": {
        if (!s.de || !s.a) fail(at, "de/a fehlt");
        const tiles = bag(words(s.a).concat((s.extra || []).map(w => w.toLowerCase())));
        for (const alt of s.alt || []) if (!fits(words(alt), tiles)) fail(at, `Alternative „${alt}“ lässt sich aus den Bausteinen nicht bauen`);
        for (const x of s.extra || []) if (words(s.a).includes(x.toLowerCase())) fail(at, `Zusatzbaustein „${x}“ steht schon in der Lösung`);
        break;
      }
      default:
        fail(at, `unbekannter Typ ${s.t}`);
    }
    if (s.t !== "learn" && !s.why) fail(at, "Erklärung (why) fehlt");
  });
}

const lessons = load("js/vocabulary.js", "lessons");
for (const [key, l] of Object.entries(lessons)) {
  if (!l.labelDe || !Array.isArray(l.pairs) || !l.pairs.length) fail(key, "Vokabel-Lektion unvollständig");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`OK: ${Object.keys(course).length} Kurs-Lektionen, ${steps} Schritte; ${Object.keys(lessons).length} Vokabel-Lektionen`);

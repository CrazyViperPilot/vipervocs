// Grammar course: short steps to understand a rule (learn), practise the form
// (choose, type) and use it in whole sentences (build). Content: js/course-data.js.
(function () {
  const PREFIX = "course:";
  const STORE = "course";
  const GAP = "___";
  const PL_CHARS = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"];

  // Compare answers without case, punctuation and extra spaces – but WITH Polish
  // letters: ą/a is often exactly the case ending being practised.
  const norm = s => s.toLowerCase().replace(/[.,!?;:…„“"()–-]/g, " ").replace(/\s+/g, " ").trim();
  const tokens = s => s.split(/\s+/).map(t => t.replace(/[.,!?;:…„“"()]/g, "")).filter(Boolean);

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; }
  }
  function saveProgress(p) {
    try { localStorage.setItem(STORE, JSON.stringify(p)); } catch (e) { /* not remembered */ }
  }

  function shuffled(list) {
    const a = [...list];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function h(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  function button(cls, text, onClick) {
    const b = h("button", cls, text);
    b.type = "button";
    b.addEventListener("click", onClick);
    return b;
  }

  const say = text => { if (typeof speak === "function") speak(text); };

  const state = { key: null, queue: [], total: 0, done: 0, exercises: 0, firstTry: 0, failed: new Set(), start: 0 };
  let root = null;

  function label(key) {
    return (loadProgress()[key] ? "✓ " : "") + course[key].label;
  }

  function start(key) {
    const lesson = course[key];
    if (!lesson) return;
    root = document.getElementById("course");
    document.getElementById("game-board").hidden = true;
    document.getElementById("lesson-rules").hidden = true;
    root.hidden = false;

    state.key = key;
    state.queue = lesson.steps.map((s, id) => ({ ...s, id }));
    state.total = state.queue.length;
    state.done = 0;
    state.exercises = lesson.steps.filter(s => s.t !== "learn").length;
    state.firstTry = 0;
    state.failed = new Set();
    state.start = Date.now();
    progress();
    next();
  }

  function progress() {
    const pct = state.total ? (state.done / state.total) * 100 : 0;
    document.getElementById("progress-fill").style.width = `${pct}%`;
    document.getElementById("progress-text").textContent = `${state.done} / ${state.total} Schritte`;
  }

  function next() {
    const step = state.queue.shift();
    if (!step) return finish();
    root.innerHTML = "";
    const card = h("section", "course-card fade-slide-in");
    const kind = step.t === "learn" ? ["📘 Verstehen", "learn"] : step.t === "build" ? ["🧩 Anwenden", "build"] : ["✏️ Üben", "practice"];
    const tag = h("div", `course-tag course-tag-${kind[1]}`, kind[0]);
    if (state.failed.has(step.id) && step.t !== "learn") tag.textContent += " · Wiederholung";
    card.appendChild(tag);
    root.appendChild(card);
    ({ learn, choose, type, build })[step.t](step, card);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- Step types ---

  function learn(step, card) {
    card.appendChild(h("h2", "course-title", step.title));
    if (step.text) card.appendChild(h("p", "course-text", step.text));
    if (step.ex && step.ex.length) {
      const list = h("ul", "course-examples");
      for (const [pl, de] of step.ex) {
        const li = h("li");
        const b = button("course-example", "", () => say(pl));
        b.appendChild(h("span", "course-pl", pl));
        b.lang = "pl";
        if (de) b.appendChild(h("span", "course-de", de));
        li.appendChild(b);
        list.appendChild(li);
      }
      card.appendChild(list);
    }
    const actions = h("div", "course-actions");
    const go = button("btn-primary", "Weiter", () => { state.done++; progress(); next(); });
    actions.appendChild(go);
    card.appendChild(actions);
    go.focus({ preventScroll: true });
  }

  function prompt(step, card) {
    card.appendChild(h("p", "course-prompt", step.de));
  }

  function sentence(pl, gapContent) {
    const p = h("p", "course-sentence");
    p.lang = "pl";
    const [before, after] = pl.split(GAP);
    if (before) p.appendChild(document.createTextNode(before));
    p.appendChild(gapContent || h("span", "course-gap", " "));
    if (after) p.appendChild(document.createTextNode(after));
    return p;
  }

  function choose(step, card) {
    prompt(step, card);
    const whole = step.pl.trim() === GAP;
    if (!whole) card.appendChild(sentence(step.pl));
    const opts = h("div", whole ? "course-options course-options-wide" : "course-options");
    const buttons = shuffled(step.options).map(o => {
      const b = button("course-option", o, () => {
        for (const x of buttons) x.disabled = true;
        const ok = o === step.a;
        b.classList.add(ok ? "correct" : "wrong");
        if (!ok) buttons.find(x => x.textContent === step.a).classList.add("correct");
        answered(step, card, ok);
      });
      b.lang = "pl";
      return b;
    });
    buttons.forEach(b => opts.appendChild(b));
    card.appendChild(opts);
  }

  function type(step, card) {
    prompt(step, card);
    const input = h("input", "course-input");
    input.type = "text";
    input.lang = "pl";
    input.autocomplete = "off";
    input.autocapitalize = "off";
    input.spellcheck = false;
    input.setAttribute("aria-label", "Antwort");
    card.appendChild(sentence(step.pl, input));
    if (step.hint) card.appendChild(h("p", "course-hint", `Hinweis: ${step.hint}`));

    const bar = h("div", "course-chars");
    for (const c of PL_CHARS) {
      const b = button("course-char", c, () => {
        const s = input.selectionStart ?? input.value.length;
        const e = input.selectionEnd ?? input.value.length;
        input.value = input.value.slice(0, s) + c + input.value.slice(e);
        input.focus();
        input.setSelectionRange(s + 1, s + 1);
      });
      b.addEventListener("mousedown", e => e.preventDefault()); // keep the cursor in the input
      bar.appendChild(b);
    }
    card.appendChild(bar);

    const actions = h("div", "course-actions");
    const check = button("btn-primary", "Prüfen", () => {
      if (!input.value.trim()) return input.focus();
      input.disabled = true;
      check.remove();
      bar.remove();
      const accepted = [step.a, ...(step.alt || [])].map(norm);
      const ok = accepted.includes(norm(input.value));
      input.classList.add(ok ? "correct" : "wrong");
      answered(step, card, ok);
    });
    input.addEventListener("keydown", e => { if (e.key === "Enter") check.click(); });
    actions.appendChild(check);
    card.appendChild(actions);
    input.focus({ preventScroll: true });
  }

  function build(step, card) {
    prompt(step, card);
    const line = h("div", "course-line");
    line.lang = "pl";
    const bank = h("div", "course-bank");
    bank.lang = "pl";
    const words = tokens(step.a).concat(step.extra || []);
    words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1); // don't give away the first word
    for (const w of shuffled(words)) {
      const tile = button("course-tile", w, () => {
        if (tile.disabled) return;
        (tile.parentNode === bank ? line : bank).appendChild(tile);
      });
      bank.appendChild(tile);
    }
    card.appendChild(line);
    card.appendChild(bank);

    const actions = h("div", "course-actions");
    const check = button("btn-primary", "Prüfen", () => {
      const tiles = [...line.children];
      if (!tiles.length) return;
      for (const t of card.querySelectorAll(".course-tile")) t.disabled = true;
      check.remove();
      const given = norm(tiles.map(t => t.textContent).join(" "));
      const ok = [step.a, ...(step.alt || [])].map(norm).includes(given);
      line.classList.add(ok ? "correct" : "wrong");
      answered(step, card, ok);
    });
    actions.appendChild(check);
    card.appendChild(actions);
  }

  // --- Feedback ---

  function solution(step) {
    if (step.t === "build") return step.a;
    if (!step.pl || step.pl.trim() === GAP) return step.a;
    return step.pl.replace(GAP, step.a);
  }

  function answered(step, card, ok) {
    if (ok) {
      state.done++;
      if (!state.failed.has(step.id)) state.firstTry++;
      if (navigator.vibrate) navigator.vibrate(40);
    } else {
      state.failed.add(step.id);
      state.queue.push(step); // comes back at the end of the lesson
      if (navigator.vibrate) navigator.vibrate([30, 40, 30]);
    }
    progress();

    const full = solution(step);
    const box = h("div", `course-feedback ${ok ? "ok" : "fail"}`);
    box.setAttribute("role", "status");
    box.appendChild(h("p", "course-feedback-title", ok ? "✓ Richtig!" : "✗ Richtig wäre:"));
    const pl = h("p", "course-feedback-pl", full);
    pl.lang = "pl";
    box.appendChild(pl);
    if (step.why) box.appendChild(h("p", "course-why", `💡 ${step.why}`));
    card.appendChild(box);
    say(full);

    const actions = h("div", "course-actions");
    const go = button("btn-primary", "Weiter", next);
    actions.appendChild(go);
    card.appendChild(actions);
    go.focus({ preventScroll: true });
    box.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function finish() {
    const keys = Object.keys(course);
    const pct = state.exercises ? Math.round((state.firstTry / state.exercises) * 100) : 100;
    const all = loadProgress();
    const prev = all[state.key];
    all[state.key] = { best: Math.max(pct, prev ? prev.best : 0), last: new Date().toISOString().slice(0, 10) };
    saveProgress(all);
    const option = document.querySelector(`option[value="${PREFIX}${state.key}"]`);
    if (option) option.textContent = label(state.key);

    const secs = Math.round((Date.now() - state.start) / 1000);
    root.innerHTML = "";
    const card = h("section", "course-card course-done fade-slide-in");
    card.appendChild(h("h2", "course-title", "Lektion geschafft! 🎉"));
    card.appendChild(h("p", "course-text", course[state.key].label));
    const stats = h("div", "stats");
    stats.appendChild(h("p", null, `✅ ${state.firstTry} von ${state.exercises} Übungen beim ersten Versuch richtig (${pct} %)`));
    stats.appendChild(h("p", null, `⏱ Zeit: ${Math.floor(secs / 60)}:${String(secs % 60).padStart(2, "0")}`));
    if (prev) stats.appendChild(h("p", null, `🏅 Bisher bestes Ergebnis: ${Math.max(pct, prev.best)} %`));
    card.appendChild(stats);

    const actions = h("div", "course-actions");
    actions.appendChild(button("btn-secondary", "Nochmal", () => start(state.key)));
    const nextKey = keys[keys.indexOf(state.key) + 1];
    if (nextKey) {
      const go = button("btn-primary", "Nächste Lektion", () => {
        const select = document.getElementById("lesson-select");
        select.value = PREFIX + nextKey;
        select.dispatchEvent(new Event("change"));
      });
      actions.appendChild(go);
    }
    card.appendChild(actions);
    root.appendChild(card);
  }

  window.COURSE_PREFIX = PREFIX;
  window.startCourse = start;
  window.courseLabel = label;
})();

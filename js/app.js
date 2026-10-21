document.addEventListener("DOMContentLoaded", () => {
  // --- Dark Mode Logic ---
  const themeToggle = document.getElementById("theme-toggle");
  
  function setTheme(themeName) {
    document.documentElement.dataset.theme = themeName;
    localStorage.setItem("theme", themeName);
  }

  function loadTheme() {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "dark" ? "light" : "dark");
  });

  loadTheme(); // Init theme

  // --- Sound (Polish pronunciation) ---
  const ttsToggle = document.getElementById("tts-toggle");
  function ttsOn() {
    try { return localStorage.getItem("tts") !== "off"; } catch (e) { return true; }
  }
  function renderTts() {
    ttsToggle.textContent = ttsOn() ? "🔊" : "🔇";
    ttsToggle.setAttribute("aria-pressed", String(ttsOn()));
  }
  ttsToggle.addEventListener("click", () => {
    try { localStorage.setItem("tts", ttsOn() ? "off" : "on"); } catch (e) { /* not persisted */ }
    renderTts();
  });
  renderTts();

  // --- Game Controls ---
  const lessonSelect = document.getElementById("lesson-select");
  const languageSelect = document.getElementById("language-select");
  languageSelect.hidden = languageSelect.options.length < 2; // only Polish for now

  // First entry: quick round across all lessons (due + new words), then every lesson.
  const quick = document.createElement("option");
  quick.value = QUICK_ROUND;
  quick.textContent = "⚡ Schnellrunde (fällige Wörter)";
  lessonSelect.appendChild(quick);
  if (typeof lessons !== "undefined") {
    for (const [key, data] of Object.entries(lessons)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = data.labelDe;
      lessonSelect.appendChild(option);
    }
  }

  try {
    const last = localStorage.getItem("lesson");
    if (last && [...lessonSelect.options].some(o => o.value === last)) lessonSelect.value = last;
  } catch (e) { /* start with the quick round */ }

  function startCurrentLesson() {
    window.initGame(lessonSelect.value, languageSelect.value);
  }

  lessonSelect.addEventListener("change", () => {
    try { localStorage.setItem("lesson", lessonSelect.value); } catch (e) { /* not remembered */ }
    startCurrentLesson();
  });
  languageSelect.addEventListener("change", startCurrentLesson);

  // --- Collapsible grammar rules ---
  const rulesToggle = document.getElementById("rules-toggle");
  const rulesBody = document.getElementById("rules-body");
  if (rulesToggle && rulesBody) {
    rulesToggle.addEventListener("click", () => {
      const expanded = rulesToggle.getAttribute("aria-expanded") === "true";
      rulesToggle.setAttribute("aria-expanded", String(!expanded));
      rulesBody.classList.toggle("collapsed", expanded);
    });
  }

  const btnReplay = document.getElementById("btn-replay");
  const btnMenu = document.getElementById("btn-menu");
  const modal = document.getElementById("completion-modal");

  btnReplay.addEventListener("click", () => {
    modal.close();
    startCurrentLesson();
  });

  btnMenu.addEventListener("click", () => {
    modal.close();
    lessonSelect.focus();
    try { lessonSelect.showPicker(); } catch (e) { /* not supported: focus is enough */ }
  });

  // --- Lernstand ---
  const statsModal = document.getElementById("stats-modal");
  const statsImport = document.getElementById("stats-import");

  function renderStats() {
    const s = vocabStats.summary(window.allVocabPairs().length);
    document.getElementById("stats-words").textContent = `${s.words} / ${s.total}`;
    document.getElementById("stats-due").textContent = s.dueToday;
    document.getElementById("stats-asked").textContent = s.asked;
    document.getElementById("stats-rate").textContent = s.asked ? `${Math.round((s.correct / s.asked) * 100)} %` : "–";
    const list = document.getElementById("stats-weakest");
    list.innerHTML = "";
    if (!s.weakest.length) {
      const li = document.createElement("li");
      li.textContent = "Noch keine Fehler – weiter so!";
      list.appendChild(li);
    }
    for (const w of s.weakest) {
      const li = document.createElement("li");
      li.textContent = `${w.pl} – ${w.de} (${w.correct}/${w.asked}, Fach ${w.box})`;
      list.appendChild(li);
    }
  }

  document.getElementById("stats-open").addEventListener("click", () => {
    renderStats();
    statsModal.showModal();
  });
  document.getElementById("stats-close").addEventListener("click", () => statsModal.close());
  document.getElementById("stats-export").addEventListener("click", () => vocabStats.exportFile());
  statsImport.addEventListener("change", async () => {
    const file = statsImport.files[0];
    if (!file) return;
    try {
      await vocabStats.importFile(file);
      renderStats();
    } catch (e) {
      document.getElementById("stats-weakest").textContent = `Import fehlgeschlagen: ${e.message}`;
    }
    statsImport.value = "";
  });

  // Start the game once the stats from /vocs are merged (at most 1.5 s, then start anyway).
  Promise.race([vocabStats.syncFromRepo(), new Promise(r => setTimeout(r, 1500))])
    .then(startCurrentLesson);

  // --- Service Worker Registration ---
  // Relative path, so the app also works under a sub path (e.g. GitHub Pages).
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(err => {
      console.log("SW registration failed: ", err);
    });
  }
});

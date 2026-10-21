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

  // --- Game Controls ---
  const lessonSelect = document.getElementById("lesson-select");
  const languageSelect = document.getElementById("language-select");
  
  // Populate the dropdown dynamically from the lessons object in vocabulary.js
  if (typeof lessons !== "undefined") {
    for (const [key, data] of Object.entries(lessons)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = data.labelDe;
      lessonSelect.appendChild(option);
    }
  }
  
  function startCurrentLesson() {
    window.initGame(lessonSelect.value, languageSelect.value);
  }

  lessonSelect.addEventListener("change", startCurrentLesson);
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
    // In a larger app, this might open a menu overlay. 
    // Here we just restart the lesson for simplicity.
    startCurrentLesson();
  });

  // --- Lernstand ---
  const statsModal = document.getElementById("stats-modal");
  const statsImport = document.getElementById("stats-import");

  function renderStats() {
    const s = vocabStats.summary();
    document.getElementById("stats-words").textContent = s.words;
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
      li.textContent = `${w.pl} – ${w.de} (${w.correct}/${w.asked})`;
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

  // Start the game initially
  startCurrentLesson();

  // --- Service Worker Registration ---
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").then(registration => {
        console.log("SW registered: ", registration);
      }).catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
    });
  }
});

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

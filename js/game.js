const QUICK_ROUND = "__quick";
const QUICK_ROUND_SIZE = 10;
const BOARD_SIZE = 5;
const RETRY_GAP = 2; // a missed pair comes back after this many new pairs

const gameState = {
  queue: [],          // pairs still to come
  left: [],           // pair per left slot (null = empty)
  right: [],          // pair per right slot
  leftEls: [],
  rightEls: [],
  selectedLeft: null, // slot index
  selectedRight: null,
  missed: new Set(),    // pair ids answered wrong at least once on the board
  recorded: new Set(),  // Polish words already counted in the stats this round
  completedCount: 0,
  errorCount: 0,
  startTime: null,
  totalPairs: 0
};

// Helper: Fisher-Yates Shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let nextId = 0;
function makePair(de, target) {
  return { id: String(nextId++), de, target };
}

let allPairsCache = null;
function allPairs() {
  return allPairsCache || (allPairsCache = vocabSrs.collectPairs(lessons));
}

function buildPool(lessonKey, targetLang) {
  if (lessonKey === QUICK_ROUND) {
    return vocabSrs.pick(allPairs(), vocabStats.load().words, QUICK_ROUND_SIZE, { distinct: true })
      .map(p => makePair(p.de, p.pl));
  }
  const lessonData = lessons[lessonKey];
  if (!lessonData) return null;
  return shuffle(lessonData.pairs.map(p => makePair(p.de, p[targetLang])));
}

// Initialize the Game
function initGame(lessonKey = QUICK_ROUND, targetLang = "pl") {
  const pool = buildPool(lessonKey, targetLang);
  if (!pool) return;

  gameState.queue = pool;
  gameState.missed = new Set();
  gameState.recorded = new Set();
  gameState.completedCount = 0;
  gameState.errorCount = 0;
  gameState.totalPairs = pool.length;
  gameState.startTime = Date.now();
  gameState.selectedLeft = null;
  gameState.selectedRight = null;

  const board = gameState.queue.splice(0, BOARD_SIZE);
  gameState.left = shuffle([...board]);
  gameState.right = shuffle([...board]);

  buildBoard();
  updateProgress();
  renderRules(lessons[lessonKey]);
}

// Show grammar rules under the cards (only for lessons that provide them)
function renderRules(lessonData) {
  const section = document.getElementById("lesson-rules");
  const body = document.getElementById("rules-body");
  if (!section || !body) return;

  if (lessonData && lessonData.rules) {
    body.textContent = lessonData.rules; // textContent keeps line breaks via CSS white-space
    section.hidden = false;
  } else {
    body.textContent = "";
    section.hidden = true;
  }
}

// Card elements are created once per round; afterwards only single slots change,
// so the other cards keep their place.
function buildBoard() {
  for (const side of ["left", "right"]) {
    const col = document.getElementById(side === "left" ? "col-left" : "col-right");
    col.innerHTML = "";
    const els = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "card";
      card.dataset.side = side;
      card.dataset.slot = i;
      card.addEventListener("click", () => handleCardClick(side, i));
      col.appendChild(card);
      els.push(card);
    }
    gameState[side + "Els"] = els;
  }
  for (let i = 0; i < BOARD_SIZE; i++) {
    renderSlot("left", i);
    renderSlot("right", i);
  }
}

function renderSlot(side, i) {
  const el = gameState[side + "Els"][i];
  const pair = gameState[side][i];
  el.className = "card";
  if (!pair) {
    el.textContent = "";
    el.classList.add("empty");
    el.disabled = true;
    return;
  }
  el.disabled = false;
  el.textContent = side === "left" ? pair.de : pair.target;
  el.lang = side === "left" ? "de" : "pl";
  // restart the entry animation
  void el.offsetWidth;
  el.classList.add("fade-slide-in");
}

function setSelected(side, slot) {
  const key = side === "left" ? "selectedLeft" : "selectedRight";
  const old = gameState[key];
  if (old !== null) gameState[side + "Els"][old].classList.remove("selected");
  gameState[key] = slot;
  if (slot !== null) {
    const el = gameState[side + "Els"][slot];
    el.classList.remove("error");
    el.classList.add("selected");
  }
}

function handleCardClick(side, slot) {
  const el = gameState[side + "Els"][slot];
  if (!gameState[side][slot] || el.classList.contains("success")) return;

  const key = side === "left" ? "selectedLeft" : "selectedRight";
  setSelected(side, gameState[key] === slot ? null : slot);

  if (gameState.selectedLeft !== null && gameState.selectedRight !== null) {
    checkMatch(gameState.selectedLeft, gameState.selectedRight);
  }
}

function swap(list, a, b) {
  [list[a], list[b]] = [list[b], list[a]];
}

function checkMatch(li, ri) {
  setSelected("left", null);
  setSelected("right", null);

  const l = gameState.left[li];
  const r = gameState.right[ri];

  if (l.id === r.id) return handleSuccess(li, ri);

  // Same text on two cards (e.g. one German word with two Polish translations):
  // any card with the right text counts. Swap the identical-looking cards so
  // the slots hold the solved pair.
  if (l.target === r.target) {
    swap(gameState.right, ri, gameState.right.indexOf(l));
    return handleSuccess(li, ri);
  }
  if (l.de === r.de) {
    swap(gameState.left, li, gameState.left.indexOf(r));
    return handleSuccess(li, ri);
  }
  handleFailure(li, ri);
}

function recordOnce(pair, correct) {
  if (gameState.recorded.has(pair.target)) return;
  gameState.recorded.add(pair.target);
  vocabStats.record(pair.target, pair.de, correct);
}

function handleSuccess(li, ri) {
  const pair = gameState.left[li];
  const leftCard = gameState.leftEls[li];
  const rightCard = gameState.rightEls[ri];
  leftCard.classList.add("success");
  rightCard.classList.add("success");

  recordOnce(pair, true);
  speak(pair.target);
  if (navigator.vibrate) navigator.vibrate(50);

  if (gameState.missed.has(pair.id)) {
    // Was wrong before: ask again shortly, as a fresh pair that has to be solved cleanly.
    gameState.queue.splice(Math.min(RETRY_GAP, gameState.queue.length), 0, makePair(pair.de, pair.target));
  } else {
    gameState.completedCount++;
    updateProgress();
  }

  setTimeout(() => replaceSlots(li, ri), 300); // wait for pop animation
}

function replaceSlots(li, ri) {
  const next = gameState.queue.shift() || null;
  gameState.left[li] = next;
  gameState.right[ri] = next;
  renderSlot("left", li);

  // Don't give away the new pair: sometimes the new Polish card takes the place
  // of another card on the right, which moves into the freed slot.
  const others = gameState.right.map((p, i) => i).filter(i => i !== ri && gameState.right[i]
    && !gameState.rightEls[i].classList.contains("success") && gameState.selectedRight !== i);
  if (next && others.length && Math.random() < 0.5) {
    const other = others[Math.floor(Math.random() * others.length)];
    swap(gameState.right, ri, other);
    renderSlot("right", other);
  }
  renderSlot("right", ri);

  if (gameState.left.every(p => !p)) showCompletionScreen();
}

function handleFailure(li, ri) {
  gameState.errorCount++;

  // The German card is the word being looked for; only that one counts as wrong.
  const pair = gameState.left[li];
  gameState.missed.add(pair.id);
  recordOnce(pair, false);

  const leftCard = gameState.leftEls[li];
  const rightCard = gameState.rightEls[ri];
  for (const card of [leftCard, rightCard]) {
    card.classList.remove("error");
    void card.offsetWidth;
    card.classList.add("error");
  }
  if (navigator.vibrate) navigator.vibrate([30, 40, 30]);
  setTimeout(() => {
    leftCard.classList.remove("error");
    rightCard.classList.remove("error");
  }, 600); // shake animation
}

// Reads the Polish word aloud (can be switched off in the header).
function speak(text) {
  if (!("speechSynthesis" in window)) return;
  try {
    if (localStorage.getItem("tts") === "off") return;
  } catch (e) { /* storage blocked: keep speaking */ }
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "pl-PL";
  const voice = speechSynthesis.getVoices().find(v => v.lang.toLowerCase().startsWith("pl"));
  if (voice) u.voice = voice;
  u.rate = 0.95;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function updateProgress() {
  const percent = gameState.totalPairs ? (gameState.completedCount / gameState.totalPairs) * 100 : 0;
  document.getElementById("progress-fill").style.width = `${percent}%`;
  document.getElementById("progress-text").textContent = `${gameState.completedCount} / ${gameState.totalPairs} Paare`;
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function showCompletionScreen() {
  const modal = document.getElementById("completion-modal");
  document.getElementById("stat-pairs").textContent = gameState.totalPairs;
  document.getElementById("stat-errors").textContent = gameState.errorCount;

  const timeElapsed = Date.now() - gameState.startTime;
  document.getElementById("stat-time").textContent = formatTime(timeElapsed);

  const due = vocabStats.summary(allPairs().length).dueToday;
  document.getElementById("stat-due").textContent = due;

  modal.showModal();
}

// Expose init
window.initGame = initGame;
window.QUICK_ROUND = QUICK_ROUND;
window.allVocabPairs = allPairs;

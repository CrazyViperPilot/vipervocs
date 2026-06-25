const gameState = {
  lessonPool: [],
  retryQueue: [],
  activePairs: [],
  leftCards: [],
  rightCards: [],
  selectedLeft: null,
  selectedRight: null,
  completedCount: 0,
  errorCount: 0,
  startTime: null,
  targetLanguage: "pl",
  totalPairs: 0,
  isProcessing: false
};

// Helper: Fisher-Yates Shuffle
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Helper: UUID for pairs
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Initialize the Game
function initGame(lessonKey = "seasons_months_weekdays", targetLang = "pl") {
  const lessonData = lessons[lessonKey];
  if (!lessonData) return;

  // Reset state
  gameState.lessonPool = lessonData.pairs.map(p => ({
    id: generateId(),
    de: p.de,
    target: p[targetLang]
  }));
  gameState.lessonPool = shuffle(gameState.lessonPool);
  
  gameState.retryQueue = [];
  gameState.activePairs = [];
  gameState.completedCount = 0;
  gameState.errorCount = 0;
  gameState.targetLanguage = targetLang;
  gameState.totalPairs = gameState.lessonPool.length;
  gameState.startTime = Date.now();
  gameState.selectedLeft = null;
  gameState.selectedRight = null;
  gameState.isProcessing = false;

  // Initial fill
  fillActivePairs();
  
  // Render
  renderGrid();
  updateProgress();
}

function fillActivePairs() {
  // We need up to 5 pairs
  while (gameState.activePairs.length < 5) {
    if (gameState.lessonPool.length > 0) {
      gameState.activePairs.push(gameState.lessonPool.pop());
    } else if (gameState.retryQueue.length > 0) {
      // Pull from retry queue if pool is empty
      gameState.activePairs.push(gameState.retryQueue.shift());
    } else {
      break; // No more pairs available
    }
  }
}

function renderGrid() {
  const colLeft = document.getElementById("col-left");
  const colRight = document.getElementById("col-right");
  
  colLeft.innerHTML = "";
  colRight.innerHTML = "";

  // Prepare shuffled lists for both columns
  gameState.leftCards = shuffle([...gameState.activePairs]);
  gameState.rightCards = shuffle([...gameState.activePairs]);

  // Render Left
  gameState.leftCards.forEach(pair => {
    const card = document.createElement("div");
    card.className = "card fade-slide-in";
    card.textContent = pair.de;
    card.dataset.id = pair.id;
    card.dataset.side = "left";
    if (gameState.selectedLeft === pair.id) card.classList.add("selected");
    card.addEventListener("click", () => handleCardClick(card));
    colLeft.appendChild(card);
  });

  // Render Right
  gameState.rightCards.forEach(pair => {
    const card = document.createElement("div");
    card.className = "card fade-slide-in";
    card.textContent = pair.target;
    card.dataset.id = pair.id;
    card.dataset.side = "right";
    if (gameState.selectedRight === pair.id) card.classList.add("selected");
    card.addEventListener("click", () => handleCardClick(card));
    colRight.appendChild(card);
  });
}

function handleCardClick(cardElement) {
  if (gameState.isProcessing) return;

  const side = cardElement.dataset.side;
  const id = cardElement.dataset.id;

  if (side === "left") {
    if (gameState.selectedLeft === id) {
      gameState.selectedLeft = null;
      cardElement.classList.remove("selected");
    } else {
      // Deselect old
      if (gameState.selectedLeft) {
        const oldCard = document.querySelector(`.card[data-side="left"][data-id="${gameState.selectedLeft}"]`);
        if (oldCard) oldCard.classList.remove("selected");
      }
      gameState.selectedLeft = id;
      cardElement.classList.add("selected");
    }
  } else {
    if (gameState.selectedRight === id) {
      gameState.selectedRight = null;
      cardElement.classList.remove("selected");
    } else {
      // Deselect old
      if (gameState.selectedRight) {
        const oldCard = document.querySelector(`.card[data-side="right"][data-id="${gameState.selectedRight}"]`);
        if (oldCard) oldCard.classList.remove("selected");
      }
      gameState.selectedRight = id;
      cardElement.classList.add("selected");
    }
  }

  // Check if both selected
  if (gameState.selectedLeft && gameState.selectedRight) {
    checkMatch();
  }
}

function checkMatch() {
  gameState.isProcessing = true;
  const leftId = gameState.selectedLeft;
  const rightId = gameState.selectedRight;
  
  const leftCard = document.querySelector(`.card[data-side="left"][data-id="${leftId}"]`);
  const rightCard = document.querySelector(`.card[data-side="right"][data-id="${rightId}"]`);

  if (leftId === rightId) {
    handleSuccess(leftId, leftCard, rightCard);
  } else {
    handleFailure(leftId, rightId, leftCard, rightCard);
  }
}

function handleSuccess(id, leftCard, rightCard) {
  leftCard.classList.add("success");
  rightCard.classList.add("success");
  
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }

  setTimeout(() => {
    // Remove the pair from activePairs
    const pairIndex = gameState.activePairs.findIndex(p => p.id === id);
    if (pairIndex > -1) {
      gameState.activePairs.splice(pairIndex, 1);
    }
    
    gameState.completedCount++;
    updateProgress();
    
    fillActivePairs();
    
    gameState.selectedLeft = null;
    gameState.selectedRight = null;
    
    if (gameState.activePairs.length === 0) {
      showCompletionScreen();
    } else {
      renderGrid();
    }
    
    gameState.isProcessing = false;
  }, 400); // wait for pop animation
}

function handleFailure(leftId, rightId, leftCard, rightCard) {
  gameState.errorCount++;
  
  leftCard.classList.add("error");
  rightCard.classList.add("error");

  // If wrong, we push both actual items to retry queue (we push the left one as a representative)
  // Actually, we just need to push the left card's pair object into retry queue, and maybe right card's pair object if we want both to be retried?
  // Usually, just pushing the pair that was selected on the left to retry queue is enough to ensure it appears again. But since activePairs are currently active, they are already in play.
  // Wait, if it's a failure, we need to move the pair from activePairs to retryQueue so it is replaced by a new one, keeping the game fresh.
  
  // Let's remove the leftId pair and rightId pair from activePairs and push them to retryQueue.
  // Then fill active pairs to 5 again.
  setTimeout(() => {
    // Remove from active
    const leftPairObj = gameState.activePairs.find(p => p.id === leftId);
    const rightPairObj = gameState.activePairs.find(p => p.id === rightId);
    
    gameState.activePairs = gameState.activePairs.filter(p => p.id !== leftId && p.id !== rightId);
    
    // Add to retry queue if not already there (we just add them to the end)
    if (leftPairObj) gameState.retryQueue.push(leftPairObj);
    // if rightPairObj is different and exists
    if (rightPairObj && rightPairObj.id !== leftId) gameState.retryQueue.push(rightPairObj);

    // Fill again
    fillActivePairs();
    
    gameState.selectedLeft = null;
    gameState.selectedRight = null;
    
    renderGrid();
    gameState.isProcessing = false;
  }, 600); // wait for shake animation
}

function updateProgress() {
  const percent = (gameState.completedCount / gameState.totalPairs) * 100;
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
  
  modal.showModal();
}

// Expose init
window.initGame = initGame;

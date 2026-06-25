# Implementierungsplan – ViperVocs PWA
*Version 1.1 – aktualisiert gemäß Feedback-Review*

---

## User Review Required

> [!IMPORTANT]
> **Kombinations-Lektion**: Die erste Lektion kombiniert Jahreszeiten (4), Monate (12) und Wochentage (7) zu einem Pool von **23 Wortpaaren**. Das Game startet immer mit 5 aktiven Paaren und schrumpft am Ende elegant.
>
> **Retry-Queue**: Falsch beantwortete Paare kommen am Ende der Lektion erneut dran. Eine Lektion gilt erst als abgeschlossen, wenn jedes Paar mindestens einmal korrekt gelöst wurde.
>
> **Dark Mode**: Folgt standardmäßig dem System-Theme, mit manuellem Toggle im Header (gespeichert in localStorage).
>
> **Touch-First**: Alle interaktiven Elemente sind für Touch optimiert (48px Mindestgröße, Ripple, kein Doppel-Tap-Zoom).

---

## Proposed Changes

### Phase 1 – Foundation & Assets

#### [NEW] [package.json](file:///c:/Users/daniel/Documents/Projekte/ViperVocs/package.json)
- Dev-Script: `"dev": "npx serve ."`
- Keine weiteren Dependencies (Vanilla Stack)

#### [NEW] Fonts – Self-Hosted
- Outfit (Regular 400, Medium 500, Bold 700) als WOFF2 in `/assets/fonts/Outfit/`
- Font-Face-Deklarationen in `styles.css`
- Im Service Worker gecacht für Offline-Betrieb

#### [NEW] PNG Icons für PWA
- `icon-192.png` (192×192) und `icon-512.png` (512×512) werden direkt generiert
- Stil: Modernes Pixel-Launcher-Icon (Snake / Viper-Motiv passend zum App-Namen, auf Material You Hintergrund)
- Gespeichert in `/assets/icons/`

---

### Phase 2 – Daten Layer

#### [NEW] [vocabulary.js](file:///c:/Users/daniel/Documents/Projekte/ViperVocs/js/vocabulary.js)

Vollständige Vokabeldaten – kombinierte Lektion mit allen 23 Paaren:

**Jahreszeiten (4 Paare):**
| Deutsch | Polnisch |
|---------|----------|
| Frühling | wiosna |
| Sommer | lato |
| Herbst | jesień |
| Winter | zima |

**Monate (12 Paare):**
| Deutsch | Polnisch |
|---------|----------|
| Januar | styczeń |
| Februar | luty |
| März | marzec |
| April | kwiecień |
| Mai | maj |
| Juni | czerwiec |
| Juli | lipiec |
| August | sierpień |
| September | wrzesień |
| Oktober | październik |
| November | listopad |
| Dezember | grudzień |

**Wochentage (7 Paare):**
| Deutsch | Polnisch |
|---------|----------|
| Montag | poniedziałek |
| Dienstag | wtorek |
| Mittwoch | środa |
| Donnerstag | czwartek |
| Freitag | piątek |
| Samstag | sobota |
| Sonntag | niedziela |

Struktur:
```javascript
const lessons = {
  seasons_months_weekdays: {
    labelDe: "Jahreszeiten, Monate & Wochentage",
    pairs: [ { de: "...", pl: "..." }, ... ]
  }
};
const supportedLanguages = { pl: "Polnisch" };
```

---

### Phase 3 – UI Struktur

#### [NEW] [index.html](file:///c:/Users/daniel/Documents/Projekte/ViperVocs/index.html)

- `<header>`: App-Logo/Name, Dropdowns (Lektion, Zielsprache), Dark-Mode-Toggle (☀️/🌙)
- `<div class="progress-pill">`: Pill-förmige Fortschrittsleiste mit Label `3 / 23 Paare`
- `<main class="game-board">`: Zwei-Spalten-Grid
  - `.column-left`: Quellsprach-Karten (Deutsch)
  - `.column-right`: Zielsprach-Karten (Polnisch)
- `<dialog class="completion-modal">`: Lesson-Complete-Overlay
  - ✅ `X Paare gelöst`
  - ❌ `X Fehlversuche`
  - ⏱ `Zeit: X:XX`
  - Buttons: „Nochmal" + „Anderes Thema"
- `<link rel="manifest" href="/manifest.json">`
- `<meta name="theme-color">` für Android-Browser-Farbe

---

### Phase 4 – Design System

#### [NEW] [styles.css](file:///c:/Users/daniel/Documents/Projekte/ViperVocs/css/styles.css)

**Design-Tokens (CSS Custom Properties):**
```css
:root[data-theme="light"] {
  --color-surface:     #f8f4ff;
  --color-surface-var: #ece6f0;
  --color-accent:      #6750A4;
  --color-on-accent:   #ffffff;
  --color-card-bg:     #ffffff;
  --color-card-border: #cac4d0;
  --color-text:        #1c1b1f;
  --color-success:     #386a20;
  --color-error:       #ba1a1a;
}
:root[data-theme="dark"] {
  --color-surface:     #1c1b1f;
  --color-surface-var: #2b2930;
  --color-accent:      #d0bcff;
  --color-on-accent:   #381e72;
  --color-card-bg:     #2b2930;
  --color-card-border: #49454f;
  --color-text:        #e6e1e5;
  --color-success:     #8dd461;
  --color-error:       #ffb4ab;
}
```

**Animationen (`@keyframes`):**
- `.shake` – 600ms horizontales Wackeln, roter Glow
- `.pop-success` – 400ms Scale 1→1.08→1, grüner Glow + Häkchen einblenden
- `.fade-slide-in` – neue Karte von unten/oben einschweben
- `.fade-slide-out` – gelöste Karte ausblenden
- `.card-swap` – Positions-Transition beim Grid-Shuffle

**Touch-Optimierungen:**
```css
.card {
  touch-action: manipulation;
  min-height: 48px;
  cursor: pointer;
}
.card:active { transform: scale(0.96); }
```

**Progress Pill:**
```css
.progress-pill {
  border-radius: 999px;
  background: var(--color-surface-var);
  overflow: hidden;
}
.progress-fill {
  background: var(--color-accent);
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

### Phase 5 – Game Engine

#### [NEW] [game.js](file:///c:/Users/daniel/Documents/Projekte/ViperVocs/js/game.js)

**Kernfunktionen:**
1. `initGame(lessonKey, targetLang)` – Lektion laden, State initialisieren, Timer starten
2. `renderGrid()` – Aktive Paare mit Fisher-Yates-Shuffle in beide Spalten rendern
3. `handleCardClick(side, pairId)` – Selektion verwalten, Pair-Check triggern
4. `checkMatch()` – Korrekt/Falsch auswerten
5. `handleSuccess()` – Pop-Animation, Vibration, nächstes Paar einladen, Shuffle, Fortschritt updaten
6. `handleFailure()` – Shake-Animation, Pair in retryQueue schieben, deselektieren
7. `checkLessonComplete()` – Prüft ob Pool + RetryQueue leer → Completion Screen
8. `showCompletionScreen()` – Zeit berechnen, Stats anzeigen, Modal öffnen

**Shuffle-Sicherheit**: Fisher-Yates-Algorithmus für echte Zufälligkeit. Linke und rechte Spalten werden immer **unabhängig** voneinander gemischt.

---

### Phase 6 – App Controller & PWA

#### [NEW] [app.js](file:///c:/Users/daniel/Documents/Projekte/ViperVocs/js/app.js)

- Service Worker registrieren (`/sw.js`)
- Dark-Mode-Initialisierung: `localStorage` → `prefers-color-scheme` → Fallback Light
- Dark-Mode-Toggle-Button Event-Handler
- Dropdown-Change-Listener → `game.initGame()` neu aufrufen
- „Nochmal"-Button → `game.initGame()` mit gleichen Parametern
- „Anderes Thema"-Button → Modal schließen, zurück zu Auswahl

#### [NEW] [manifest.json](file:///c:/Users/daniel/Documents/Projekte/ViperVocs/manifest.json)
- `name: "ViperVocs"`, `short_name: "ViperVocs"`
- `display: "standalone"`
- `theme_color: "#6750A4"`, `background_color: "#1c1b1f"`
- Icons: PNG 192×192 und 512×512

#### [NEW] [sw.js](file:///c:/Users/daniel/Documents/Projekte/ViperVocs/sw.js)
- Cache-Name: `vipervocs-v1`
- Alle statischen Assets beim `install`-Event in Cache schreiben
- `activate`: Alte Cache-Versionen löschen
- `fetch`: Cache-First-Strategie

---

## Verification Plan

### Dev-Setup
```bash
# Im Projektordner:
npm run dev
# → http://localhost:3000
```

### Manuelle Tests

| Test | Erwartetes Ergebnis |
|------|---------------------|
| Korrekte Zuordnung | Grüner Glow + Häkchen + Pop, neue Karte erscheint, Grid neu gemischt, Progress +1 |
| Falsche Zuordnung | Shake-Animation, roter Rahmen + roter Text, deselektiert, Retry-Queue +1 |
| Endphase (< 5 Paare) | Grid schrumpft, Karten zentrieren sich, keine leeren Lücken |
| Retry-Queue | Falsche Paare erscheinen erneut am Ende der Lektion |
| Lektions-Abschluss | Completion-Modal mit Zeit, Fehlern, Paarzahl + zwei Buttons |
| Dark Mode Toggle | Theme wechselt sofort, bleibt nach Reload erhalten |
| Offline | Nach einmaligem Laden: App startet ohne Internet (DevTools → Offline) |
| PWA Install | Chrome zeigt "App installieren"-Banner, installiert als Standalone |
| Touch | Karten reagieren auf Touch ohne Doppel-Tap-Zoom |

### Nicht in Scope (Phase 2)

- `localStorage`-Lernfortschritt
- Keyboard-Navigation
- Sound-Effekte *(explizit nicht gewünscht)*

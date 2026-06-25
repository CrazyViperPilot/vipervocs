# Architecture Document – ViperVocs
*Version 1.1 – aktualisiert gemäß Feedback-Review*

Dieses Dokument beschreibt das architektonische Layout, die Komponenten und algorithmischen Lösungen von ViperVocs.

---

## 1. Projektstruktur

```text
ViperVocs/
├── index.html              # HTML-Einstiegspunkt (Single Page)
├── manifest.json           # PWA Web App Manifest
├── sw.js                   # Service Worker (Caching, Offline)
├── package.json            # Dev-Script (npx serve .)
├── css/
│   └── styles.css          # Material You Design-System, Animationen, Dark/Light Mode
├── js/
│   ├── app.js              # App-Lifecycle, UI-Events, Dark-Mode-Toggle, SW-Registrierung
│   ├── vocabulary.js       # Vokabeldaten (alle Lektionen)
│   └── game.js             # Matching-Engine, State, Animationen, Refill-Algorithmus
└── assets/
    ├── icons/
    │   ├── icon-192.png    # PWA Icon 192×192 (PNG, direkt generiert)
    │   └── icon-512.png    # PWA Icon 512×512 (PNG, direkt generiert)
    └── fonts/
        └── Outfit/         # Self-hosted Google Font (WOFF2-Dateien)
```

---

## 2. Datenmodell (`js/vocabulary.js`)

### 2.1 Vokabelstruktur

Flache, mehrsprachig skalierbare Datenstruktur. Jede Sprache ist ein eigener Key, sodass neue Sprachen einfach ergänzt werden können:

```javascript
// Jedes Wortpaar-Objekt:
{ de: "Frühling", pl: "wiosna", es: "primavera" /* spätere Sprachen */ }
```

### 2.2 Lektionsstruktur

Eine Lektion ist eine benannte Sammlung mehrerer Teilthemen. Die erste Lektion kombiniert alle drei Themen zu einem einzigen Pool:

```javascript
const lessons = {
  seasons_months_weekdays: {
    labelDe: "Jahreszeiten, Monate & Wochentage",
    pairs: [
      // === Jahreszeiten (4 Paare) ===
      { de: "Frühling", pl: "wiosna" },
      { de: "Sommer",   pl: "lato"   },
      { de: "Herbst",   pl: "jesień" },
      { de: "Winter",   pl: "zima"   },
      // === Monate (12 Paare) ===
      { de: "Januar",   pl: "styczeń"    },
      // ... alle 12 Monate
      // === Wochentage (7 Paare) ===
      { de: "Montag",   pl: "poniedziałek" },
      // ... alle 7 Wochentage
    ]
  }
};
// Gesamt: 23 Paare in einer Lektion
```

> **Warum kombiniert?** Jahreszeiten allein hat nur 4 Paare, das Game braucht mindestens 5. Durch Kombination entsteht ein sinnvoller Lernpool.

---

## 3. Komponenten & Verantwortlichkeiten

### 3.1 UI/UX-Layer (`index.html` & `styles.css`)

**`index.html`** – Semantische SPA-Struktur:
- `<header>`: Dropdown (Lektion, Zielsprache), Dark-Mode-Toggle, App-Name/Logo
- `<div class="progress-bar">`: Pill-förmige Fortschrittsleiste
- `<main class="game-grid">`: Zwei Spalten (links: Quellsprache, rechts: Zielsprache)
- `<dialog class="completion-modal">`: Lesson-Complete-Screen mit Statistiken

**`styles.css`** – Material You Design-System:
- **CSS Custom Properties** für Light- und Dark-Mode-Paletten:
  ```css
  :root[data-theme="light"] { --surface: #f8f4ff; --accent: #6750A4; ... }
  :root[data-theme="dark"]  { --surface: #1c1b1f; --accent: #d0bcff; ... }
  ```
- Animationen via `@keyframes`:
  - `.shake` – horizontales Wackeln + roter Glow (Fehler)
  - `.pop-success` – kurze Scale-Up/Down-Animation + grüner Glow (Erfolg)
  - `.fade-slide-in` – neues Karte einblenden
  - `.fade-slide-out` – gelöste Karte ausblenden
  - `.card-swap` – Neupositionierung beim Shuffle
- **Touch-Optimierung**:
  - `touch-action: manipulation` auf alle interaktiven Karten
  - Mindest-Touch-Target: 48×48px
  - Press-State via `:active` (statt nur `:hover`)

---

### 3.2 Game Engine (`js/game.js`)

#### State-Objekt

```javascript
const gameState = {
  lessonPool:       [],   // Alle ungelösten Paare der Lektion (inkl. Retry-Paare)
  retryQueue:       [],   // Falsch beantwortete Paare zur Wiederholung
  activePairs:      [],   // Aktuell sichtbare Paare (max. 5)
  leftCards:        [],   // Aktuelle Reihenfolge linke Spalte
  rightCards:       [],   // Aktuelle Reihenfolge rechte Spalte
  selectedLeft:     null, // Ausgewählte Karte links
  selectedRight:    null, // Ausgewählte Karte rechts
  completedCount:   0,    // Korrekt gelöste Paare
  errorCount:       0,    // Fehlversuche gesamt
  startTime:        null, // Zeitstempel Spielstart (für Zeitanzeige)
  targetLanguage:   "pl", // Gewählte Zielsprache
};
```

#### Refill & Shuffle-Algorithmus (Kernmechanik)

```
NACH ERFOLGREICHEM MATCH:
1. Gelöstes Paar aus activePairs entfernen.
2. completedCount++, Fortschrittsbar aktualisieren.
3. Nächstes Paar aus lessonPool ziehen.
   - Falls lessonPool leer → aus retryQueue ziehen.
   - Falls beides leer → Lektion beendet.
4. Neues Paar zu activePairs hinzufügen (max. 5).
5. Neue Zufallsreihenfolge für leftCards & rightCards berechnen
   (Fisher-Yates-Shuffle, unabhängig für beide Seiten).
6. Alle aktiven Karten mit .card-swap-Animation neu rendern.
   → Kein 1:1-Lückenfüllen, alle Positionen können sich ändern.

NACH FALSCHEM MATCH:
1. errorCount++.
2. Shake-Animation auf beiden Karten.
3. Paar aus lessonPool nehmen & an retryQueue anhängen.
4. Karten de-selektieren (nach Animationsende, ~600ms).
```

#### Endphase (< 5 aktive Paare)

```
- activePairs.length < 5:
  → Grid zeigt nur so viele Karten wie Paare vorhanden.
  → CSS-Grid passt sich dynamisch an (auto-fill, keine Lücken).
  → Karten zentrieren sich elegant.
- Lektion endet wenn: lessonPool.length === 0 && retryQueue.length === 0.
```

---

### 3.3 App-Controller (`js/app.js`)

- **SW-Registrierung** beim App-Start.
- **Dark-Mode-Toggle**:
  - Liest `localStorage.getItem('theme')` beim Start.
  - Fällt auf `prefers-color-scheme` zurück.
  - Setzt `document.documentElement.dataset.theme`.
- **Dropdown-Listener**: Neustart der Game-Engine bei Wechsel von Lektion oder Zielsprache.
- **Haptisches Feedback**: `navigator.vibrate(50)` bei Erfolg (Feature-detect, kein Fehler wenn nicht unterstützt).

---

## 4. PWA-Architektur

### 4.1 Service Worker (`sw.js`)

- **Cache-Strategie**: Cache-First für alle statischen Assets, Network-Fallback.
- **Gecachte Assets**:
  - `/index.html`, `/manifest.json`
  - `/css/styles.css`
  - `/js/app.js`, `/js/vocabulary.js`, `/js/game.js`
  - `/assets/icons/icon-192.png`, `/assets/icons/icon-512.png`
  - `/assets/fonts/Outfit/*.woff2`
- **Lifecycle**: `install` → Assets cachen; `activate` → alte Cache-Versionen löschen.
- **Cache-Version**: Konstante `CACHE_VERSION = 'v1'` für Cache-Invalidierung bei Updates.

### 4.2 Web App Manifest (`manifest.json`)

```json
{
  "name": "ViperVocs",
  "short_name": "ViperVocs",
  "start_url": "/index.html",
  "display": "standalone",
  "theme_color": "#6750A4",
  "background_color": "#1c1b1f",
  "icons": [
    { "src": "/assets/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/assets/icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

### 4.3 Dev-Setup (`package.json`)

```json
{
  "name": "vipervocs",
  "scripts": {
    "dev": "npx serve ."
  }
}
```

---

## 5. Nicht in Scope (Phase 2)

| Feature | Begründung |
|---|---|
| `localStorage` Lernfortschritt | Explizit auf später verschoben |
| Keyboard-Navigation | Explizit auf später verschoben |
| Sound-Effekte | Explizit nicht gewünscht |

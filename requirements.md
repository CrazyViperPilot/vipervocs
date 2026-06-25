# Requirements Document – ViperVocs
*Version 1.1 – aktualisiert gemäß Feedback-Review*

ViperVocs ist eine moderne, web-basierte Progressive Web App (PWA) zum Lernen von Vokabeln mit einer interaktiven Karten-Matching-Mechanik, inspiriert vom Duolingo Practice Hub. Das Design orientiert sich an Google Pixel / Material Design 3 (Material You).

---

## 1. Functional Requirements

### 1.1 Sprach- & Themenauswahl

* **Dropdown-Menüs** im Header:
  * **Lernsprache (Zielsprache)**: Zunächst nur Polnisch (`Deutsch → Polnisch`). Architektur erlaubt spätere Erweiterung um weitere Sprachen.
  * **Lektion / Thema**: Eine Lektion enthält alle Vokabeln aus einer Themengruppe. Erste verfügbare Lektion:
    * *Jahreszeiten, Monate & Wochentage* (kombinierte Lektion aus allen drei Teilthemen – insgesamt 31 Wortpaare)
  * **Interface-Sprache (Menüsprache)**: Initial Deutsch. Die Menüsprache kann später togglebar sein (alle unterstützten Sprachen). Sie bestimmt gleichzeitig die **Quellsprache** im Matching-Game (linke Spalte).

* **Quellsprache = Menüsprache**: Im Game stehen links die Wörter in der Menüsprache, rechts die Übersetzungen in der Zielsprache.

* **Vokabeldaten**: Alle Vokabeln werden in JavaScript-Arrays/Objekten gespeichert.

---

### 1.2 Matching-Game-Logik

#### Spielstart
* Aus dem Lektions-Pool werden initial **5 Paare** zufällig gezogen.
* Die linke Spalte zeigt 5 Quellsprach-Wörter in **zufälliger Reihenfolge**.
* Die rechte Spalte zeigt die 5 Übersetzungen in **unabhängig zufälliger Reihenfolge**.

#### Selektionszustand
* Klick/Tap auf eine Karte links oder rechts selektiert sie (visueller Highlighted-State).
* Sobald je eine Karte links und rechts ausgewählt ist, wird sofort geprüft.

#### ✅ Erfolgsfall (korrekte Zuordnung)
* Kurze grüne Umrandung + Häkchen-Icon + „Pop"-Animation auf beiden Karten.
* Kurzes haptisches Feedback via `navigator.vibrate(50)` (sofern unterstützt).
* Karten faden aus.
* **Dynamisches Nachfüllen**: Das nächste Paar aus dem Pool wird geladen. Alle verbleibenden aktiven Karten **plus** das neue Paar werden in **neuer, zufälliger Anordnung** in beide Spalten eingesetzt – kein 1:1-Lückenfüllen.
* Fortschrittsanzeige wird aktualisiert.

#### ❌ Fehlerfall (falsche Zuordnung)
* Text beider ausgewählter Karten wird rot.
* Rahmen beider Karten wird rot.
* Beide Karten animieren kurz (horizontales Shake/Vibrations-Animation).
* Karten werden danach automatisch de-selektiert.
* **Das Paar wird in eine Retry-Queue geschoben**: Es zählt erst als abgeschlossen, wenn es in einem späteren Durchgang korrekt zugeordnet wurde.

#### Endphase (< 5 Paare übrig)
* Wenn weniger als 5 Paare im Pool übrig sind (inkl. Retry-Queue), werden nur noch so viele Boxen angezeigt, wie Paare vorhanden sind.
* Das Grid **schrumpft elegant** (Karten zentrieren sich, keine leeren Lücken).
* Die Lektion endet, wenn alle Paare – inklusive aller Retry-Paare – korrekt gelöst wurden.

#### Completion Screen
* Modal-Overlay nach Lektionsende mit:
  * ✅ Anzahl gelöster Paare
  * ❌ Anzahl Fehlversuche
  * ⏱ Benötigte Zeit
* Zwei Buttons: **„Nochmal"** (gleiche Lektion neu starten) und **„Anderes Thema"** (zurück zur Auswahl).

---

### 1.3 Fortschrittsanzeige

* **Pill-förmige Fortschrittsleiste** oben im Screen (Material You Stil).
* Format: `3 / 12 Paare` mit animierter Fill-Transition in der Akzentfarbe.
* Zählt nur korrekt abgeschlossene Paare.

---

### 1.4 PWA-Capabilities

* **Installation**: Installierbar auf Android-Geräten als Standalone-App.
* **Service Worker**: Cached alle Core-Assets für Offline-Betrieb (HTML, CSS, JS, Fonts, Icons, Manifest).
* **manifest.json**: App-Name `ViperVocs`, Icons (PNG 192×192 und 512×512), Theme-Farben, `display: standalone`.
* **App-Icons**: Werden direkt als PNG generiert (kein SVG). Mindestgrößen: 192×192 und 512×512.

---

## 2. Non-Functional Requirements

### 2.1 Design & UX (Google Pixel / Material You)

* **Visuelles Design**:
  * Große abgerundete Ecken (`border-radius: 28px` / `16px`).
  * Harmonische Pastelfarben-Palette, inspiriert von Android Dynamic Color.
  * Subtile Schatten, Glassmorphism-Akzente.
* **Typografie**: Self-hosted Google Font (z.B. `Outfit` oder `Inter`), lokal im `/assets/fonts/`-Verzeichnis und im Service Worker gecacht.
* **Animationen**: Flüssige Transitions, Card-Selection-States, Shake-Animation (Fehler), Pop-Animation (Erfolg), Ein-/Ausblend-Animation beim Nachfüllen.
* **Touch-Interaktion** (Mobile First):
  * Touch-Targets mindestens 48×48 px (Material Design Guidelines).
  * `touch-action: manipulation` gegen Doppel-Tap-Zoom.
  * Ripple/Press-Feedback bei Berührung.
  * Optimiert für tall Smartphone-Displays (Google Pixel Aspect Ratio).
* **Responsive Design**: Mobile-first, skaliert zu Desktop.

### 2.2 Dark Mode / Light Mode

* Standardmäßig folgt die App dem System-Theme (`prefers-color-scheme: dark`).
* Manueller Toggle im Header (☀️ / 🌙).
* Gewähltes Theme wird in `localStorage` persistiert.

### 2.3 Performance & Technischer Stack

* **Keine schweren Frameworks**: Reines HTML5, CSS3 (Vanilla), ES6+ JavaScript.
* **Offline-First**: Zuverlässiger Start ohne Internet nach einmaliger Installation.
* **Dev-Server**: `package.json` mit `dev`-Script (z.B. `npx serve .`).

### 2.4 Bewusst zurückgestellt (Phase 2)

* **Lernfortschritt-Persistenz** via localStorage: Speicherung von Statistiken und letzter Auswahl – kommt später.
* **Keyboard-Navigation** (Tab/Enter): Kommt später.
* **Sound-Effekte**: Explizit **nicht** gewünscht.

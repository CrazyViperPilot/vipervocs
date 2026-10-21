# ViperVocs

Persönlicher Vokabeltrainer Deutsch → Polnisch: kurze, schnelle Wiederholungen.
Läuft als PWA im Browser (auch offline) und als `/vocs`-Skill in Claude.

## Web-App

- **⚡ Schnellrunde** (Standard): 10 Paare über alle Lektionen. Zuerst die heute fälligen Wörter, dann ein paar neue aus den nächsten Lektionen.
- **Lektionen**: 100+ Themen, teils mit Grammatik-Regeln unter den Karten.
- Matching-Spiel mit 5 Paaren. Gelöste Paare werden an Ort und Stelle ersetzt; falsch zugeordnete Wörter kommen 2 Paare später wieder und müssen fehlerfrei gelöst werden.
- 🔊 liest das polnische Wort beim Treffer vor (Browser-Sprachausgabe, `pl-PL`).
- Die zuletzt gewählte Lektion wird gemerkt.

Lokal starten: `npm run dev` (oder irgendein statischer Webserver im Repo-Ordner).

## Lernstand & Wiederholung

Leitner-System (`js/srs.js`, gemeinsam für App und Skill): pro Wort ein Fach 0–6.
Richtig → ein Fach höher, wieder fällig nach 1, 2, 4, 8, 16, 32 Tagen; falsch → Fach 0, sofort wieder fällig.
In der App zählt pro Runde nur der erste Versuch je Wort.

Der Lernstand liegt auf dem Server (`api/stats.php` → `api/data/stats.json`, mit täglichem Backup der letzten 14 Tage).
App und /vocs schicken ihren Stand dorthin, der Server führt zusammen (pro Wort gilt der neuere Eintrag) und gibt das Ergebnis zurück.

- **App:** Beim ersten Start im 📊-Dialog den Server-Schlüssel eingeben. Danach synchronisiert sie beim Start, wenige Sekunden nach jeder Antwort und beim Schließen. Offline übt sie mit der Kopie im Browser weiter.
- **/vocs:** liest den Schlüssel aus `$VOCS_KEY` oder `.claude/skills/vocs/.key` (nicht im Repo). Ist der Server nicht erreichbar, landet der Stand in `progress/stats.json` und wird beim nächsten Mal auf den Server übernommen.
- Ohne PHP (z. B. GitHub Pages) liest die App nur `progress/stats.json`.

## Server (dogado, phpexpert.de/vocs)

Jeder Push auf `main` lädt die App per GitHub Action (`.github/workflows/deploy.yml`) hoch. Einmalig einrichten unter GitHub → Settings → Environments → **Dogado** (Environment secrets):

| Secret | Inhalt |
|---|---|
| `FTP_SERVER` | FTP-Host aus dem dogado-Kundenbereich |
| `FTP_USERNAME` / `FTP_PASSWORD` | FTP-Zugang |
| `VOCS_KEY` | selbst ausgedachter Schlüssel für die Lernstand-API |

Optionale Variables: `FTP_DIR` (Zielordner relativ zum FTP-Login, Standard `./` – der Login `h26331_vocs` startet schon in `/httpdocs/vocs`), `FTP_PROTOCOL` (`ftps`/`ftp`), `FTP_SECURITY` (`strict`/`loose`).
Der Server speichert nur den SHA-256 des Schlüssels (`api/config.php`, wird beim Deploy erzeugt). PHP 7.4+ reicht, keine Datenbank.

## /vocs (Claude)

`/vocs [Anzahl] [Lektions-Key]` – 5 Wörter, eine Frage pro Nachricht, abwechselnd de→pl und pl→de.
Regeln: `.claude/skills/vocs/SKILL.md`, Logik: `.claude/skills/vocs/vocs.mjs`.
Für claude.ai auf dem Handy: `mobile-skill/vocs/SKILL.md`.

## Dateien

| Datei | Inhalt |
|---|---|
| `js/vocabulary.js` | alle Lektionen (`lessons`) |
| `js/srs.js` | Leitner-Fächer, Wortauswahl, Statistik (Browser + Node) |
| `js/stats.js` | Lernstand im Browser, Abgleich mit dem Server |
| `js/game.js` | Matching-Spiel |
| `js/app.js` | Header, Dialoge, Start |
| `sw.js` | Offline-Cache (stale-while-revalidate, `api/` nie gecacht) |
| `api/stats.php` | Lernstand-API auf dem Server |

`requirements.md`, `architecture.md` und `implementation_plan.md` sind die ursprünglichen Planungsdokumente.

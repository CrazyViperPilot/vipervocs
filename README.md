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

- `/vocs` speichert in `progress/stats.json` und committet/pusht das.
- Die App speichert im Browser (`localStorage`) und führt beim Start `progress/stats.json` vom Server dazu (pro Wort gilt der neuere Eintrag).
- 📊 zeigt den Lernstand; Export/Import sichert bzw. führt Stände zwischen Geräten zusammen.

## /vocs (Claude)

`/vocs [Anzahl] [Lektions-Key]` – 5 Wörter, eine Frage pro Nachricht, abwechselnd de→pl und pl→de.
Regeln: `.claude/skills/vocs/SKILL.md`, Logik: `.claude/skills/vocs/vocs.mjs`.
Für claude.ai auf dem Handy: `mobile-skill/vocs/SKILL.md`.

## Dateien

| Datei | Inhalt |
|---|---|
| `js/vocabulary.js` | alle Lektionen (`lessons`) |
| `js/srs.js` | Leitner-Fächer, Wortauswahl, Statistik (Browser + Node) |
| `js/stats.js` | Lernstand im Browser, Abgleich mit `progress/stats.json` |
| `js/game.js` | Matching-Spiel |
| `js/app.js` | Header, Dialoge, Start |
| `sw.js` | Offline-Cache (stale-while-revalidate) |

`requirements.md`, `architecture.md` und `implementation_plan.md` sind die ursprünglichen Planungsdokumente.

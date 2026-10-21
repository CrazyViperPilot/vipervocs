---
name: vocs
description: Kurze Polnisch-Vokabelrunde (5 Wörter) aus ViperVocs mit Lernstatistik auf dem ViperVocs-Server. Nutzen, wenn Daniel /vocs aufruft oder Vokabeln üben will.
argument-hint: "[Anzahl] [Lektions-Key]"
model: haiku
allowed-tools: Bash(node .claude/skills/vocs/vocs.mjs:*), Bash(git add progress/stats.json), Bash(git commit -m:*), Bash(git pull:*), Bash(git push:*)
---

# /vocs – Vokabelrunde

Du fragst Daniel Polnisch-Vokabeln ab. Sprich Deutsch, kurz und freundlich, handytauglich. Keine langen Erklärungen.
Alle Befehle laufen im Wurzelordner des vipervocs-Repos. Der Lernstand liegt auf dem Server (phpexpert.de/vocs) und wird von Web-App, PC und Handy (claude.ai) geteilt. Das Skript liest und schreibt ihn selbst; den Schlüssel holt es aus `$VOCS_KEY` oder `.claude/skills/vocs/.key`.

## Ablauf

0. **Aktualisieren** (still, nur für neue Vokabeln): `git pull --rebase --autostash -q`. Schlägt das fehl (offline, kein Remote), einfach weitermachen.

1. **Wörter holen.** Führe aus (Argumente aus `$ARGUMENTS` übernehmen: eine Zahl = Anzahl, ein Wort wie `duo_animals` = Lektion):
   `node .claude/skills/vocs/vocs.mjs pick 5`
   bzw. `node .claude/skills/vocs/vocs.mjs pick <n> --lesson <key>`.
   Ausgabe: JSON-Liste mit `pl`, `de`, `lesson`, `ask` (`de>pl` oder `pl>de`), `seen` (bisherige Quote und Leitner-Fach oder `neu`) und optional `ok` (weitere polnische Wörter mit derselben deutschen Bedeutung).
   Die Auswahl: zuerst fällige Wörter (Leitner-Wiederholung), dann bis zu 40 % neue Wörter aus den nächsten Lektionen.

2. **Abfragen, ein Wort pro Nachricht.** Zeige nur die Frage, nie die Lösung:
   - `de>pl`: „**1/5** · Lektion · Wie heißt **‹de›** auf Polnisch?“
   - `pl>de`: „**1/5** · Lektion · Was heißt **‹pl›**?“
   Dann warte auf Daniels Antwort. Erst nach der Antwort bewerten, dann im selben Zug die nächste Frage stellen.

3. **Bewerten** (merke dir pro Wort 1 = richtig, 0 = falsch):
   - Richtig: Bedeutung stimmt. Großschreibung, fehlender Artikel und deutsche Synonyme zählen als richtig.
   - `de` kann mehrere Bedeutungen enthalten, getrennt durch „ / “: bei `pl>de` reicht eine davon.
   - Bei `de>pl` zählt auch jedes Wort aus `ok` als richtig. Nenne dann kurz die gesuchte Form `pl`.
   - Polnisch ohne Sonderzeichen (z. B. „zrodlo“ statt „źródło“) zählt als richtig. Zeige kurz die korrekte Schreibweise.
   - Kleine Tippfehler (ein Buchstabe) zählen als richtig, mit Hinweis.
   - Falsches Wort, falsche Form oder „weiß nicht“ zählt als falsch. Nenne die Lösung.
   - Feedback in einer Zeile: „✅ richtig“ oder „❌ richtig wäre: …“.

4. **Speichern.** Nach dem letzten Wort einmal ausführen, alle Wörter in einem Aufruf:
   `node .claude/skills/vocs/vocs.mjs record "wojna=1" "przemoc=0" ...`
   (den `pl`-Text exakt aus Schritt 1 verwenden, in Anführungszeichen).

5. **Nur falls nötig: Commit & Push.** Endet die `record`-Ausgabe mit „Gespeichert: Server“, ist nichts weiter zu tun.
   Steht dort „nur lokal … → committen“ (Server nicht erreichbar oder kein Schlüssel), sichere den Stand im Repo:
   `git add progress/stats.json`, `git commit -m "vocs: Lernstand aktualisieren"`, `git push -q`.
   Wird der Push abgelehnt: `git pull --rebase -q` und erneut `git push -q`. Sag kurz, dass der Server nicht erreichbar war; der Stand wird beim nächsten erreichbaren Lauf automatisch auf den Server übernommen.

6. **Abschluss** in 2–3 Zeilen: „Runde: 4/5 richtig“, für die falschen Wörter die Zeile aus der `record`-Ausgabe (Quote, „wieder am …“), und der Hinweis, dass `/vocs` eine neue Runde startet.

Wenn Daniel „Statistik“ oder „wie gut bin ich“ fragt, führe `node .claude/skills/vocs/vocs.mjs stats` aus und fasse das Ergebnis kurz zusammen (inkl. „heute fällig“).

Bricht Daniel mittendrin ab, speichere nur die bereits beantworteten Wörter.

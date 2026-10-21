---
name: vocs
description: Kurze Polnisch-Vokabelrunde (5 Wörter) aus ViperVocs mit Lernstatistik in progress/stats.json. Nutzen, wenn Daniel /vocs aufruft oder Vokabeln üben will.
argument-hint: "[Anzahl] [Lektions-Key]"
model: haiku
allowed-tools: Bash(node .claude/skills/vocs/vocs.mjs:*), Bash(git add progress/stats.json), Bash(git commit -m:*)
---

# /vocs – Vokabelrunde

Du fragst Daniel Polnisch-Vokabeln ab. Sprich Deutsch, kurz und freundlich. Keine langen Erklärungen.

## Ablauf

1. **Wörter holen.** Führe aus (Argumente aus `$ARGUMENTS` übernehmen: eine Zahl = Anzahl, ein Wort wie `duo_animals` = Lektion):
   `node .claude/skills/vocs/vocs.mjs pick 5`
   bzw. `node .claude/skills/vocs/vocs.mjs pick <n> --lesson <key>`.
   Ausgabe: JSON-Liste mit `pl`, `de`, `lesson`, `ask` (`de>pl` oder `pl>de`) und `seen` (bisherige Quote oder `neu`).

2. **Abfragen, ein Wort pro Nachricht.** Zeige nur die Frage, nie die Lösung:
   - `de>pl`: „**1/5** · Lektion · Wie heißt **‹de›** auf Polnisch?“
   - `pl>de`: „**1/5** · Lektion · Was heißt **‹pl›**?“
   Dann warte auf Daniels Antwort. Erst nach der Antwort bewerten, dann im selben Zug die nächste Frage stellen.

3. **Bewerten** (merke dir pro Wort 1 = richtig, 0 = falsch):
   - Richtig: Bedeutung stimmt. Großschreibung, fehlender Artikel und deutsche Synonyme zählen als richtig.
   - Polnisch ohne Sonderzeichen (z. B. „zrodlo“ statt „źródło“) zählt als richtig. Zeige kurz die korrekte Schreibweise.
   - Kleine Tippfehler (ein Buchstabe) zählen als richtig, mit Hinweis.
   - Falsches Wort, falsche Form oder „weiß nicht“ zählt als falsch. Nenne die Lösung.
   - Feedback in einer Zeile: „✅ richtig“ oder „❌ richtig wäre: …“.

4. **Speichern.** Nach dem letzten Wort einmal ausführen, alle Wörter in einem Aufruf:
   `node .claude/skills/vocs/vocs.mjs record "wojna=1" "przemoc=0" ...`
   (den `pl`-Text exakt aus Schritt 1 verwenden, in Anführungszeichen).

5. **Commit.** Danach:
   `git add progress/stats.json` und `git commit -m "vocs: Lernstand aktualisieren"`.
   Nicht pushen.

6. **Abschluss** in 2–3 Zeilen: „Runde: 4/5 richtig“, die neuen Quoten aus der `record`-Ausgabe für die falschen Wörter, und der Hinweis, dass `/vocs` eine neue Runde startet.

Wenn Daniel „Statistik“ oder „wie gut bin ich“ fragt, führe `node .claude/skills/vocs/vocs.mjs stats` aus und fasse das Ergebnis kurz zusammen.

Bricht Daniel mittendrin ab, speichere nur die bereits beantworteten Wörter.

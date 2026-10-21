---
name: "vocs"
description: "Polnisch-Vokabelrunde (5 Wörter) aus Daniels ViperVocs (GitHub CrazyViperPilot/vipervocs) mit Lernstatistik. Nutzen bei /vocs oder wenn er Polnisch-Vokabeln üben will."
---

# ViperVocs – Vokabelrunde

Daniels Vokabeltrainer liegt im GitHub-Repo `CrazyViperPilot/vipervocs`. Die Regeln für die Runde stehen im Repo unter `.claude/skills/vocs/SKILL.md`. Sie sind die einzige Wahrheit; dieser Skill sorgt nur dafür, dass das Repo da ist.

## Ablauf

1. **Repo verbinden** (einmal pro Chat, still, ohne Ankündigung):
   - Liegt schon ein Klon unter `/home/claude/vipervocs` (`git -C /home/claude/vipervocs rev-parse HEAD` klappt): `git -C /home/claude/vipervocs pull -q`.
   - Sonst: `add_repo` mit owner `CrazyViperPilot`, repo `vipervocs`, access `push`, danach `git clone --depth 1 https://github.com/CrazyViperPilot/vipervocs /home/claude/vipervocs`.
   - Server-Schlüssel ablegen: `printf '%s' "$VOCS_KEY_VALUE" > /home/claude/vipervocs/.claude/skills/vocs/.key`, wobei `$VOCS_KEY_VALUE` der Wert aus dem Abschnitt **Schlüssel** unten ist. Die Datei ist in `.gitignore` und wird nie committet.
   - Git-Autor setzen, falls leer: `git -C /home/claude/vipervocs config user.name "Daniel"` und `git -C /home/claude/vipervocs config user.email "CrazyViperPilot@users.noreply.github.com"`.
2. **`/home/claude/vipervocs/.claude/skills/vocs/SKILL.md` lesen** und genau danach handeln. Alle Befehle daraus mit `cd /home/claude/vipervocs && …` ausführen. Was nach `/vocs` steht, sind die Argumente (Anzahl, Lektions-Key).
3. **Git:** Der Lernstand liegt auf dem Server, ein Commit ist nur nötig, wenn `record` „nur lokal … → committen“ meldet. Dann direkt auf `main` committen und pushen. Wird ein eigener Branch erzwungen: Branch pushen, Pull Request nach `main` öffnen und über die REST-API mergen.

## Antworten

- Deutsch, Handy-tauglich: eine Frage pro Nachricht, kurz, keine Einleitung, keine Erklärung des Ablaufs.
- Fehlt der Zugriff aufs Repo (kein `add_repo`, Klon schlägt fehl) oder läuft `node` nicht: klar sagen, dass ViperVocs gerade nicht erreichbar ist. Keine Vokabeln aus dem Gedächtnis erfinden.

## Schlüssel

Diese Datei im Repo enthält keinen Schlüssel. In deiner hochgeladenen claude.ai-Kopie dieses Skills trägst du ihn hier ein:

`VOCS_KEY_VALUE=` *(hier den Server-Schlüssel eintragen)*

Damit /vocs den Server erreicht, muss `phpexpert.de` in den claude.ai-Einstellungen für Code-Ausführung als erlaubte Domain eingetragen sein. Ist der Server nicht erreichbar, speichert /vocs den Stand im Repo und überträgt ihn beim nächsten Mal.

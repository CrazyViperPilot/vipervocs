// Learning stats per Polish word, stored in this browser (localStorage).
// Same format as progress/stats.json written by the /vocs skill (see js/srs.js).
// On start the app merges progress/stats.json from the server, so practice
// from /vocs counts here too.
const STATS_KEY = "vipervocs-stats";

const vocabStats = {
  load() {
    try {
      const data = JSON.parse(localStorage.getItem(STATS_KEY));
      if (data && data.words) return data;
    } catch (e) { /* fall through to empty stats */ }
    return { version: 2, words: {} };
  },

  save(data) {
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("Lernstand konnte nicht gespeichert werden", e);
    }
  },

  record(pl, de, correct) {
    const data = this.load();
    vocabSrs.update(data.words, pl, de, correct);
    this.save(data);
  },

  merge(other) {
    if (!other || typeof other.words !== "object") throw new Error("Keine ViperVocs-Statistikdatei");
    this.save(vocabSrs.merge(this.load(), other));
  },

  // Pulls in the stats the /vocs skill committed to the repo. Silent if offline.
  async syncFromRepo() {
    try {
      const res = await fetch("progress/stats.json", { cache: "no-cache" });
      if (res.ok) this.merge(await res.json());
    } catch (e) { /* offline or not deployed with the repo */ }
  },

  summary(totalPairs, top = 10) {
    return vocabSrs.summary(this.load().words, totalPairs, top);
  },

  exportFile() {
    const blob = new Blob([JSON.stringify(this.load(), null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `vipervocs-stats-${vocabSrs.today()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  },

  // Merges a stats file into the stats on this device (newer entry per word wins).
  async importFile(file) {
    this.merge(JSON.parse(await file.text()));
  }
};

window.vocabStats = vocabStats;

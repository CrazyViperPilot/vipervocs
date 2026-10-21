// Learning stats per Polish word, stored in this browser (localStorage).
// Same format as progress/stats.json written by the /vocs skill:
// { version: 1, words: { "<pl>": { de, asked, correct, last } } }
const STATS_KEY = "vipervocs-stats";

const vocabStats = {
  load() {
    try {
      const data = JSON.parse(localStorage.getItem(STATS_KEY));
      if (data && data.words) return data;
    } catch (e) { /* fall through to empty stats */ }
    return { version: 1, words: {} };
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
    const s = data.words[pl] || (data.words[pl] = { de, asked: 0, correct: 0, last: "" });
    s.asked += 1;
    if (correct) s.correct += 1;
    s.last = new Date().toISOString().slice(0, 10);
    this.save(data);
  },

  summary(top = 10) {
    const entries = Object.entries(this.load().words);
    const asked = entries.reduce((n, [, s]) => n + s.asked, 0);
    const correct = entries.reduce((n, [, s]) => n + s.correct, 0);
    const rate = s => s.correct / s.asked;
    const weakest = entries
      .filter(([, s]) => s.correct < s.asked)
      .sort(([, a], [, b]) => rate(a) - rate(b) || b.asked - a.asked)
      .slice(0, top)
      .map(([pl, s]) => ({ pl, ...s }));
    return { words: entries.length, asked, correct, weakest };
  },

  exportFile() {
    const blob = new Blob([JSON.stringify(this.load(), null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `vipervocs-stats-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  },

  // Replaces the stats on this device with the content of a file.
  async importFile(file) {
    const data = JSON.parse(await file.text());
    if (!data || typeof data.words !== "object") throw new Error("Keine ViperVocs-Statistikdatei");
    this.save({ version: 1, words: data.words });
  }
};

window.vocabStats = vocabStats;

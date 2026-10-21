// Learning stats per Polish word, stored in this browser (localStorage).
// Same format as the stats of the /vocs skill (see js/srs.js).
// With a server (api/stats.php) the stats are synced there: the app posts its
// stats, the server merges and returns the result. Without one (GitHub Pages)
// the app only reads progress/stats.json.
const STATS_KEY = "vipervocs-stats";
const SERVER_KEY = "vipervocs-key";
const API_URL = "api/stats.php";

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
    this.scheduleSync();
  },

  merge(other) {
    if (!other || typeof other.words !== "object") throw new Error("Keine ViperVocs-Statistikdatei");
    this.save(vocabSrs.merge(this.load(), other));
  },

  serverKey() {
    try { return localStorage.getItem(SERVER_KEY) || ""; } catch (e) { return ""; }
  },

  setServerKey(key) {
    try { localStorage.setItem(SERVER_KEY, key.trim()); } catch (e) { /* not persisted */ }
  },

  // "ok" | "key" (key missing or wrong) | "offline" | "repo" (no server, read progress/stats.json)
  syncState: "offline",
  lastSync: null,

  async sync({ keepalive = false } = {}) {
    try {
      const body = JSON.stringify(this.load());
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Vocs-Key": this.serverKey() },
        body,
        cache: "no-store",
        keepalive: keepalive && body.length < 60000, // browsers cap keepalive bodies at 64 KB
      });
      if (res.status === 401) return (this.syncState = "key");
      if (res.ok) {
        this.merge(await res.json());
        this.lastSync = new Date();
        return (this.syncState = "ok");
      }
      // 404/405: static hosting without PHP (GitHub Pages)
      if (res.status !== 404 && res.status !== 405) return (this.syncState = "offline");
    } catch (e) {
      return (this.syncState = "offline");
    }
    // No server (e.g. GitHub Pages): at least read the stats from the repo.
    try {
      const res = await fetch("progress/stats.json", { cache: "no-cache" });
      if (res.ok) this.merge(await res.json());
    } catch (e) { /* offline */ }
    return (this.syncState = "repo");
  },

  // Sync a few seconds after the last answer, so a round makes one request.
  scheduleSync() {
    clearTimeout(this.syncTimer);
    this.syncTimer = setTimeout(() => this.sync(), 3000);
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

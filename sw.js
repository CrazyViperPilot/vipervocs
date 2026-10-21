// Bump when the list below changes. Content updates arrive without a bump:
// files come from the cache right away and are refreshed in the background.
const CACHE_NAME = 'vipervocs-v6';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/app.js',
  './js/srs.js',
  './js/stats.js',
  './js/vocabulary.js',
  './js/game.js',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/fonts/Outfit/fonts.css',
  './assets/fonts/Outfit/outfit-1.woff2',
  './assets/fonts/Outfit/outfit-2.woff2'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n))))
      .then(() => clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  // Learning stats: always fresh from the network, cache only as offline fallback.
  if (req.url.includes('/progress/stats.json')) {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: true }))
    );
    return;
  }

  // Everything else: stale-while-revalidate.
  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(req, { ignoreSearch: true }).then(cached => {
        const network = fetch(req)
          .then(res => {
            if (res.ok) cache.put(req, res.clone());
            return res;
          })
          .catch(() => cached);
        if (cached) event.waitUntil(network);
        return cached || network;
      })
    )
  );
});

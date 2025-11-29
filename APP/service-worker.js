const CACHE_NAME = "ledger-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "manifest.json",
  "service-worker.js",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>{
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(resp=>{
      return resp || fetch(e.request);
    })
  );
});

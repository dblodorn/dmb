const cacheName = 'v1::static';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        'js/app.js',
        'index.html',
        'data/15x19.json',
        'data/db13.json',
        'data/sls.json',
        'data/xiv.json',
        'data/zero-one.json'
      ]).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
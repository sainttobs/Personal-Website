
const cacheName = 'personal-site';

const staticAssets = [
  '../lib/bootstrap/css/bootstrap.min.css',
  '../lib/font-awesome/css/font-awesome.min.css',  
  '../lib/animate/animate.min.css', 
  '../lib/ionicons/css/ionicons.min.css',
  '../lib/lightbox/css/lightbox.min.css',
  '../lib/lightbox/css/lightbox.min.css'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll([
  '../lib/bootstrap/css/bootstrap.min.css',
  '../lib/font-awesome/css/font-awesome.min.css',  
  '../lib/animate/animate.min.css', 
  '../lib/ionicons/css/ionicons.min.css',
  '../lib/lightbox/css/lightbox.min.css',
  '../lib/lightbox/css/lightbox.min.css',
  'main.js'
]);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await caches.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req){
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
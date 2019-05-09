// var dataCacheName = 'Adeyefa Oluwatoba';
// var cacheName = 'Adeyefa Oluwatoba'; 

// var filesToCache = [
//   '/',
//   // '../views/layouts/layout.hbs',
//   '/lib/bootstrap/css/bootstrap.min.css',
//   '/lib/font-awesome/css/font-awesome.min.css',  
//   '/lib/animate/animate.min.css', 
//   '/lib/ionicons/css/ionicons.min.css',
//   '/lib/owlcarousel/assets/owl.carousel.min.css',
//   '/lib/lightbox/css/lightbox.min.css',
//   '/lib/lightbox/css/lightbox.min.css'
// ];


// self.addEventListener('install', function(e) {
//     console.log('[ServiceWorker] Install');
//     e.waitUntil(
//       caches.open(cacheName).then(function(cache) {
//         console.log('[ServiceWorker] Caching app shell');
//         return cache.addAll(filesToCache);
//       })
//     );
// });

// self.addEventListener('activate', function(e) {
//     console.log('[ServiceWorker] Activate');
//     e.waitUntil(
//       caches.keys().then(function(keyList) {
//         return Promise.all(keyList.map(function(key) {
//           if (key !== cacheName && key !== dataCacheName) {
//             console.log('[ServiceWorker] Removing old cache', key);
//             return caches.delete(key);
//           }
//         }));
//       })
//     );
//     return self.clients.claim();
// });
  
// self.addEventListener('fetch', function(e) {
//     console.log('[Service Worker] Fetch', e.request.url);
//     var dataUrl = 'https://www.adeyefatoba.tech';
//     if (e.request.url.indexOf(dataUrl) > -1) {
//       e.respondWith(
//         caches.open(dataCacheName).then(function(cache) {
//           return fetch(e.request).then(function(response){
//             cache.put(e.request.url, response.clone());
//             return response;
//           });
//         })
//       );
//     } else {
//       e.respondWith(
//         caches.match(e.request).then(function(response) {
//           return response || fetch(e.request);
//         })
//       );
//     }
// });
  


// function addToHomeScreen() {  var a2hsBtn = document.querySelector(".ad2hs-prompt");  // hide our user interface that shows our A2HS button
//   a2hsBtn.style.display = 'none';  // Show the prompt
//   deferredPrompt.prompt();  // Wait for the user to respond to the prompt
//   deferredPrompt.userChoice
//     .then(function(choiceResult){

//   if (choiceResult.outcome === 'accepted') {
//     console.log('User accepted the A2HS prompt');
//   } else {
//     console.log('User dismissed the A2HS prompt');
//   }

//   deferredPrompt = null;

// });}

//   addToHomeScreen();


const cacheName = 'personal-site';

const staticAssets = [
  '/',
  // '../views/layouts/layout.hbs',
  '/lib/bootstrap/css/bootstrap.min.css',
  '/lib/font-awesome/css/font-awesome.min.css',  
  '/lib/animate/animate.min.css', 
  '/lib/ionicons/css/ionicons.min.css',
  '/lib/lightbox/css/lightbox.min.css',
  '/lib/lightbox/css/lightbox.min.css'
];

self.addEventListener('install', async e => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
})
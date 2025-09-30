// Service Worker Code for PWA installation and caching

const CACHE_NAME = 'toolmancer-cache-v1';
const urlsToCache = [
  '/', // The start page of your app
  '/index.html',
  '/style.css',
  '/theme.js',
  // Add other necessary pages and assets here
  '/about.html',
  '/contact.html',
  // Add tool-specific files here:
  '/tools/image-to-pdf.html',
  '/tools/image-compressor.html',
  '/tools/image-resizer.html',
  '/tools/convert-png-jpg.html',
  '/tools/steganography.html',
  '/tools/text-diff.html',
  '/tools/text-encryptor.html',
  '/tools/text-to-pdf.html',
  '/tools/word-counter.html',
  '/tools/unit-converter.html',
  '/tools/document-scanner.html',
  '/tools/url-encoder.html',
  '/tools/hash-generator.html',
  '/tools/password-generator.html',
  '/tools/qr-generator.html',
  '/tools/image-to-prompt.html',
  '/tools/json-formatter.html',
  // Add external resources (like jspdf or font) if needed
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/Sortable/1.15.0/Sortable.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
];

// Install event: Cache all files listed in urlsToCache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: Serve content from cache if available, otherwise fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Return cached response
        }
        return fetch(event.request); // Fetch from network
      })
  );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

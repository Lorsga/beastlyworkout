self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

const IMAGE_CACHE_NAME = 'beastly-image-cache-v1';
const IMAGE_EXTENSIONS = /\.(avif|gif|jpg|jpeg|png|svg|webp)(\?.*)?$/i;

function isFirebaseStorageImageRequest(request) {
  if (request.method !== 'GET') return false;
  try {
    const url = new URL(request.url);
    const isStorageHost =
      url.hostname === 'firebasestorage.googleapis.com' ||
      url.hostname.endsWith('.firebasestorage.app');
    if (!isStorageHost) return false;
    return request.destination === 'image' || IMAGE_EXTENSIONS.test(url.pathname);
  } catch {
    return false;
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (!isFirebaseStorageImageRequest(request)) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(IMAGE_CACHE_NAME);
      const cached = await cache.match(request);
      const networkFetch = fetch(request)
        .then((response) => {
          if (response.ok) {
            void cache.put(request, response.clone());
          }
          return response;
        })
        .catch(() => null);

      if (cached) {
        event.waitUntil(networkFetch);
        return cached;
      }

      const fresh = await networkFetch;
      if (fresh) return fresh;
      throw new Error('image-fetch-failed');
    })(),
  );
});

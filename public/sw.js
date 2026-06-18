const CACHE = "nexus-v1"
const STATIC = [
  "/",
  "/servicios",
  "/galeria",
  "/contacto",
]

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(STATIC))
  )
})

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  )
})

// Service worker minimal — nécessaire pour que Chrome propose le bouton
// "Installer l'application". Ne met rien en cache : chaque chargement va
// chercher la dernière version en ligne, pour ne jamais afficher de données
// périmées (important pour un outil financier).

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Passe-plat : on laisse toujours le réseau répondre normalement.
  event.respondWith(fetch(event.request));
});

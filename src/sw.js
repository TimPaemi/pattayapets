/* PattayaPets service worker. Precache list + version injected by build.js. */
var VERSION = "__VERSION__";
var CACHE_PREFIX = "pattayapets-";
var CACHE = CACHE_PREFIX + VERSION;
var PRECACHE = __PRECACHE__;

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) {
      return c.addAll(PRECACHE);
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k.indexOf(CACHE_PREFIX) === 0 && k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.origin !== location.origin) return;

  if (req.mode === "navigate") {
    var navigation = fetch(req);
    var navigationUpdate = navigation.then(function (res) {
      if (res.ok && res.type !== "opaque" && !url.search) {
        return caches.open(CACHE).then(function (c) { return c.put(req, res.clone()); });
      }
    });
    e.waitUntil(navigationUpdate.catch(function () { /* Offline is handled below. */ }));
    e.respondWith(navigation.catch(function () {
        return caches.match(req).then(function (r) {
          return r || caches.match("/offline");
        });
      }));
    return;
  }

  if (url.pathname.indexOf("/assets/") !== 0 && url.pathname !== "/search-index.json" &&
      url.pathname !== "/manifest.webmanifest") return;

  var network = fetch(req);
  var assetUpdate = network.then(function (res) {
    if (res.ok && res.type !== "opaque") {
      return caches.open(CACHE).then(function (c) { return c.put(req, res.clone()); });
    }
  });
  e.waitUntil(assetUpdate.catch(function () { /* A cached copy may still be available. */ }));
  e.respondWith(caches.match(req).then(function (cached) {
    return cached || network;
  }));
});

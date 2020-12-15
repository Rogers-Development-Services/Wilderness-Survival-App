importScripts("workbox-v6.0.2/workbox-sw.js")

workbox.setConfig({modulePathPrefix: 'workbox-v6.0.2'})

const precacheManifest = [];

workbox.precaching.supressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);

const dataCacheConfig = {
    cacheName: 'app-precache'
};

workbox.routing.registerRoute(/.Tools/, workbox.strategies.cacheFirst(dataCacheConfig), 'GET');
workbox.routing.registerRoute(/.Location/, workbox.strategies.cacheFirst(dataCacheConfig), 'GET');
workbox.routing.registerRoute(/.Notes/, workbox.strategies.cacheFirst(dataCacheConfig), 'GET');
workbox.routing.registerRoute(/.Checklist/, workbox.strategies.cacheFirst(dataCacheConfig), 'GET');

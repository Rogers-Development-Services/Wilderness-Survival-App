const workbox = require("workbox-build");

workbox.generateSW({
    cacheId: "image_cache",
    globDirectory: "./",
    globPatterns: [
        "**/*.{jpg,png,jpeg}"
    ],
    swDest: "./service-worker.js",
    swSrc: "./service-worker.js",
    runtimeCaching: [
        {
            urlPattern: /\.(?:html|htm|xml)$/,
            handler: "CacheFirst",
            options: {
                cacheName: "markup",
                expiration: {
                    maxAgeSeconds: 30 * 24 * 60 * 60
                }
            }
        }
    ]
})
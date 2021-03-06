'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "584ca4e7abaf495ad7428d701cede3c3",
"assets/assets/fonts/DinNextBold.ttf": "f9647dbe6416edf3e315ae5a51a6c90e",
"assets/assets/fonts/DinNextLight.ttf": "8d788e7a28894adff55cfcae31fbb1bd",
"assets/assets/fonts/DinNextMedium.ttf": "4fce1ebed0bb2b5944e80280b4c2d72b",
"assets/assets/img/address-border-icon.png": "44e70e08341b42b9a1c6a0000db0d727",
"assets/assets/img/address-pin.png": "031a9b226cfd74f3c0be8dae1aee703f",
"assets/assets/img/address-trash.png": "2265f9a2fc376c8b60ef1ce1d28d12aa",
"assets/assets/img/anonymous.png": "11de5603895db2b707bf383e1e310d3a",
"assets/assets/img/app-uc.png": "e1411a9c41c2df1169986f743c8ac0c2",
"assets/assets/img/appbar.png": "c4c9411cb6b23dc218688d48f6bf514c",
"assets/assets/img/boarding-bg.jpg": "578931db62ce791abbe8a467c9e4429f",
"assets/assets/img/branch.png": "977b837ba6bab2017a4e5e1e03a3bed8",
"assets/assets/img/callus-icon.png": "17b05a6cb0b5b881ebee7101a55066c1",
"assets/assets/img/cat-individuals.png": "7a348252bc079db61674fd922151d405",
"assets/assets/img/change-icon.png": "fd1ea0209228d480af3fcfdd839dc8ea",
"assets/assets/img/check.png": "c5774f2cca4ca72e3abb882df0011ddc",
"assets/assets/img/client-icon.png": "b51953185f87a67a9970e1d037898a13",
"assets/assets/img/contract-icon.png": "7e97c0bd82f58f2831d7f6846835a6b7",
"assets/assets/img/contracts-border-icon.png": "9c74c218388fbc5b977dd145a80dac0e",
"assets/assets/img/doneicon.png": "2de18f5aba588ed9541fba1da8548ee1",
"assets/assets/img/driverimg.png": "68b2424cdda4b840bd9672c148959dc5",
"assets/assets/img/facebook.png": "23820fc0cddc5d3f860d185c889d9640",
"assets/assets/img/flag_anguilla.png": "ad606cf84f1ac132ba238e662329ab56",
"assets/assets/img/flag_antarctica.png": "10d272be7b06853072705b0107f4e3e6",
"assets/assets/img/flag_antigua_and_barbuda.png": "67e40d530958a7cc7b024c2f9c52687e",
"assets/assets/img/flag_argentina.png": "6c4f28f9de7d6f9a2d96d5fe3a96fe8f",
"assets/assets/img/flag_armenia.png": "6e70a059aee9a3a7f0542de9f1b8da9f",
"assets/assets/img/flag_aruba.png": "0f836acdf595def2e792be03007e2a13",
"assets/assets/img/from-app.png": "abbf4bbda1fb85fee83d84333f53858f",
"assets/assets/img/from-branch.png": "b8b3b5b5fbcbf7ec9da47c574b71dec5",
"assets/assets/img/gif.gif": "1617c2b477b3708ac7304a0b8270de91",
"assets/assets/img/gift.png": "85ab7dc5e229319df1da46cd5297d29d",
"assets/assets/img/google-maps.png": "3f52a778db4b741e7773eb753565a1f6",
"assets/assets/img/help-icon.png": "dcff1795fca3b1a7c47f98322be51931",
"assets/assets/img/home-icon.png": "7311e112594e58ee656b1951b629ae97",
"assets/assets/img/hourly-img.png": "645ba7294daf766e6c143b72ebcce833",
"assets/assets/img/Icon-172-.png": "71d1d63c1ac272e069521bb25e711339",
"assets/assets/img/Icon-172.png": "22cd26329ede22903cde1d1d00cffc09",
"assets/assets/img/instagram.png": "4dba0470f581afa0d5ee2ceac1a682a9",
"assets/assets/img/iosloader.gif": "9e0373c2b4410c49439dfd822c5fd16e",
"assets/assets/img/lang-icon.png": "d948ef24e3791b269718738e4076e06a",
"assets/assets/img/linkedin.png": "317a92805ffacb38879214c12be164ba",
"assets/assets/img/loader.gif": "fe0e0684cca9f26beae1660265391d11",
"assets/assets/img/logout-icon.png": "9660d085b95e569f64d1653287acc527",
"assets/assets/img/maid-delivery.png": "6768f213cc53e03fcddc6f888dee1c64",
"assets/assets/img/myaccount-icon.png": "e0218067c3fd2146c5034754609dbb41",
"assets/assets/img/noData.png": "87ea1ba2d909ff5f2dac2e5ac8ca8848",
"assets/assets/img/noFlag.png": "8beffd694eae44ff7877810312e455f9",
"assets/assets/img/on-b-1.png": "2b8a8272d093e08f3877178175aa3625",
"assets/assets/img/on-b-2.png": "e57e4b6c464439b68bad62e9ac7c6c3e",
"assets/assets/img/on-b-3.png": "6d58718f7c584ed43977c1edc5382941",
"assets/assets/img/on-b-down-bg.png": "3da342ba19078ae46531c38627aa163f",
"assets/assets/img/option2.png": "489d3affc1f209d3c08616c068008263",
"assets/assets/img/order-icon.png": "645b3ddaaac2750be181bf913be2a08e",
"assets/assets/img/phone.png": "8fecdab1105b641a6879a11b0cf282fa",
"assets/assets/img/skip-icon.png": "348a8fab94b52470dd90fab31c6782fd",
"assets/assets/img/success-check.png": "9f50a3d648fdb1e2ae69c8973bab9fdf",
"assets/assets/img/twitter.png": "313eb977af1af5e892c1968bbceecbb2",
"assets/assets/img/visit-icon.png": "57d47cd06e68238190810e3f9987f047",
"assets/assets/img/whatsapp.png": "774352deeaa60ebe04164a1e28489771",
"assets/assets/img/worker-icon.png": "0e4af8544454ac000960d2c52a48c0e8",
"assets/assets/img/worker.png": "bffa691ad1823f8e06a32a9e3b02f994",
"assets/assets/img/youtube.png": "0e79eb1e20eb790df476c4ecaf808b1d",
"assets/FontManifest.json": "1bd8fb006596406d121a68bfe43c26fc",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/i18n/ar.json": "1543cc34ec75e72735f08a1526bfad56",
"assets/i18n/en.json": "491a8c053509d32c57dac12a1be0d9f9",
"assets/NOTICES": "60d25ca6c3e3568e04f396021b02f6a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "b3985330ca69bf5486c995b78043ce71",
"/": "b3985330ca69bf5486c995b78043ce71",
"main.dart.js": "b40ab455481fafa78153ba823df7c3f2",
"manifest.json": "0c7828875e70aa16f52b2e65fc2d061c",
"version.json": "f0bed9e54a68ee60655bcaf41d84f08f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

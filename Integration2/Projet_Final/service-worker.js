//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v4';


//Add list of files to cache here.
const FILES_TO_CACHE = [
    'index.html',
    'admin.html',
    'ajout_pilote.html',
    'pilote.html',
    'pilotes.html',
    'style/style.css',
    'style/style.css.map',
    'style/font.css',
    'style/font.css.map',
    'style/anime.css',
    'bootstrap-4.5.0-dist/css/bootstrap.css',
    'bootstrap-4.5.0-dist/css/bootstrap.css.map',
    'bootstrap-4.5.0-dist/css/bootstrap.min.css',
    'bootstrap-4.5.0-dist/css/bootstrap.min.css.map',
    'bootstrap-4.5.0-dist/css/bootstrap-grid.css',
    'bootstrap-4.5.0-dist/css/bootstrap-grid.css.map',
    'bootstrap-4.5.0-dist/css/bootstrap-grid.min.css',
    'bootstrap-4.5.0-dist/css/bootstrap-grid.min.css.map',
    'bootstrap-4.5.0-dist/css/bootstrap-reboot.css',
    'bootstrap-4.5.0-dist/css/bootstrap-reboot.css.map',
    'bootstrap-4.5.0-dist/css/bootstrap-reboot.min.css',
    'bootstrap-4.5.0-dist/css/bootstrap-reboot.min.css.map',
    'bootstrap-4.5.0-dist/js/bootstrap-bundle.js',
    'bootstrap-4.5.0-dist/js/bootstrap-bundle.js.map',
    'bootstrap-4.5.0-dist/js/bootstrap-bundle.min.js',
    'bootstrap-4.5.0-dist/js/bootstrap-bundle.min.js.map',
    'bootstrap-4.5.0-dist/js/bootstrap.js',
    'bootstrap-4.5.0-dist/js/bootstrap.js.map',
    'bootstrap-4.5.0-dist/js/bootstrap.min.js',
    'bootstrap-4.5.0-dist/js/bootstrap.min.js.map',
    'bootstrap-4.5.0-dist/jquery-3.4.1.min.js',
    'js/install.js',
    'js/anime.js',
    'service-worker.js',
    'manifest.json',
    'font/concieliancondital.ttf',
    'font/concielianboldital.ttf',
    'font/concieliancond.ttf',
    'font/Prime-Regular.ttf',
    'img/icons/eGT3.png',
    'img/icons/icon-256.png',
    'img/icons/icon-512.png',
    'img/icons/Julien_Hebert.png',
    'img/photos/Background_inscription.png',
    'img/photos/Background_Pilotes.png',
    'img/photos/AC2%20%20%202020-09-23%2008_58_59.jpg',
    'img/photos/AC2%20%20%202020-09-04%2020_26_18.jpg',
    'img/photos/805550_20200904221751_1.jpg',
    'img/photos/805550_20200904222134_1.jpg',
    'img/photos/AC2%20%20%202020-09-04%2020_40_52.jpg',
    'img/photos/805550_20200904230925_1.jpg',
    'img/photos/AC2%20%20%202020-09-04%2020_41_01.jpg',
    'img/photos/AC2%20%20%202020-09-23%2009_43_31.jpg',
    'img/photos/805550_20200904233229_1.jpg',
    'img/photos/AC2%20%20%202020-09-23%2009_41_19.jpg',
    'img/photos/805550_20200905090328_1.jpg',
    'img/photos/805550_20200905090930_1.jpg',
    'img/photos/voitures/gt4/compressor/Aston_Martin_V8_GT4_1.jpg',
    'img/photos/voitures/gt4/compressor/Aston_Martin_V8_GT4_2.jpg',
    'img/photos/voitures/gt4/compressor/Porsche_Cayman_GT4_1.jpg',
    'img/photos/voitures/gt4/compressor/Porsche_Cayman_GT4_2.jpg',
    'img/photos/voitures/gt4/compressor/McLaren_570S_GT4_1.jpg',
    'img/photos/voitures/gt4/compressor/Ginetta_G55_GT4_1.jpg',
    'img/photos/voitures/gt4/compressor/BMW_M4_GT4_1.jpg',
    'img/photos/voitures/gt4/compressor/KTM_Xbow_GT4_1.jpg',

];


self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    // Precache static resources here.
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});


self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');

    //Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache',
                        key);
                    return caches.delete(key);
                }
            }));
        })
    );

    self.clients.claim();
});


self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    //Add fetch event handler here.
    if (evt.request.mode !== 'navigate') {
        // Not a page navigation, bail.
        return;
    }
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match('/Projet_Final/index.html' );
                    });
            })
    );
});
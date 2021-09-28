//AQUI IRAN TODOS LOS ELEMENTOS QUE HAY EN MI CACHE, ES DECIR, LAS RUTAS DE SCRIPTS Y LINKS
const CACHE_ELEMENTS = [
    './',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css',
    'https://unpkg.com/react@17/umd/react.production.min.js',
    'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
    'https://unpkg.com/@babel/standalone/babel.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/js/mdb.min.js',
    './components/Contador.js',
    './index.js',
    './register.js'
]

//NOMBRE DEL CACHE
const CACHE_NAME = 'v2_cache_contador_react'

//INSTALANDO LOS CACHE
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS)
            .then( () => {
                self.skipWaiting();
            })
            .catch(error => console.log(error))
        })
    );
});

//ACTIVACION DE SW, ELIMINACION DE CACHE AL CAMBIAR VERSION
self.addEventListener("activate", (e) => {

    const cacheWhiteList = [CACHE_NAME];

    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    return (
                        cacheWhiteList.indexOf(cacheName) === -1 && caches.delete(cacheName) //ELIMINAR CACHES ANTIGUOS
                    );
                })
            );
        })
    );
});


//FETCH SW (Hacer peticiones de nuestros elementos en cache)
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((res) => {
            if (res) {
                return res;
            }

            return fetch(e.request);
        })
    );
});
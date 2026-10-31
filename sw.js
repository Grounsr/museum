/* Таърихи саноати Тоҷикистон — офлайн-кэш. © 2026 Сайдалиев Алиакбар. Build SA-IN-2026-B46CF7-209D6C */
const C='sanoat-SA-IN-2026-DD00E3-E65404';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request).then(r=>{if(r&&r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));}return r;}).catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('./index.html'))));});

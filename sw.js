/* Таърихи саноати Тоҷикистон. © 2026 Сайдалиев Алиакбар. Build SA-IN-2026-1278AC-879E74 — офлайн-кэш отключён */
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll({type:'window'})).then(cs=>cs.forEach(c=>c.navigate(c.url))));});

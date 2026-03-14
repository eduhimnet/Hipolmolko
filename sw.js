const C='smkt-v4';
const A=['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A).catch(()=>{})));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=e.request.url;
  if(u.includes('api.github.com')||u.includes('fonts.googleapis'))return;
  e.respondWith(caches.match(e.request).then(cached=>{
    if(cached)return cached;
    return fetch(e.request).then(r=>{
      if(!r||r.status!==200)return r;
      const cl=r.clone();
      caches.open(C).then(c=>c.put(e.request,cl));
      return r;
    }).catch(()=>caches.match('./index.html'));
  }));
});

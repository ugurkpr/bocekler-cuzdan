// Uygulamayı internetsiz de açılabilir yapar. Sürümü değiştirince telefonlar yeni dosyaları alır.
const CACHE = 'bocekler-v6';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Takvim hatırlatıcısı: .ics dosyası telefonda üretilir, hiçbir sunucuya gitmez
  if (url.origin === location.origin && url.pathname.endsWith('/takvim.ics')) {
    const name = (url.searchParams.get('n') || 'hatirlatici.ics').replace(/[^\w.-]/g, '');
    e.respondWith(new Response(url.searchParams.get('d') || '', {
      headers: { 'Content-Type': 'text/calendar; charset=utf-8', 'Content-Disposition': `attachment; filename="${name}"` }
    }));
    return;
  }
  // Kur verisi her zaman canlı alınır, önbelleğe girmez
  if (url.origin !== location.origin && !url.hostname.startsWith('fonts.')) return;
  // Sayfanın kendisi: önce internet (güncel sürüm), yoksa kayıtlı kopya
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => { caches.open(CACHE).then(c => c.put('./index.html', res.clone())); return res; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Diğer her şey (simgeler, yazı tipleri): önce kayıtlı kopya, arkada güncelle
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => { if (res.ok || res.type === 'opaque') caches.open(CACHE).then(c => c.put(req, res.clone())); return res; }).catch(() => hit);
    return hit || net;
  }));
});

// Android: telefon izin verdiği sıklıkta (genelde günde bir) yaklaşan ödemeleri kontrol eder
const pad = n => String(n).padStart(2, '0');
const today = () => { const d = new Date(); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`; };
function idb() { return new Promise((res, rej) => { const r = indexedDB.open('bocekler', 1); r.onupgradeneeded = () => r.result.createObjectStore('kv'); r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error); }); }
async function idbGet(k) { const db = await idb(); return new Promise(res => { const q = db.transaction('kv').objectStore('kv').get(k); q.onsuccess = () => res(q.result); q.onerror = () => res(undefined); }); }
async function idbSet(k, v) { const db = await idb(); return new Promise(res => { const tx = db.transaction('kv', 'readwrite'); tx.objectStore('kv').put(v, k); tx.oncomplete = () => res(); tx.onerror = () => res(); }); }

async function checkDue() {
  const list = (await idbGet('reminders')) || [];
  const sent = (await idbGet('sent')) || {};
  const t = today();
  for (const r of list) {
    if (t < r.from || sent[r.key] === t) continue;
    const n = Math.round((new Date(r.due + 'T12:00') - new Date(t + 'T12:00')) / 864e5);
    if (n < -7) continue;
    const title = n < 0 ? `${r.name}: ödeme ${-n} gün gecikti` : n === 0 ? `${r.name}: son ödeme günü bugün` : `${r.name}: son ödemeye ${n} gün kaldı`;
    const day = new Date(r.due + 'T12:00').toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });
    await self.registration.showNotification(title, { body: day + (r.amt ? ' · ' + r.amt : ''), tag: r.key, icon: 'icon-192.png' });
    sent[r.key] = t;
  }
  await idbSet('sent', sent);
}
self.addEventListener('periodicsync', e => { if (e.tag === 'odeme-kontrol') e.waitUntil(checkDue()); });
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(ws => ws.length ? ws[0].focus() : clients.openWindow('./')));
});

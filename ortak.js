// Böcekler: bütün bölümlerin (ana ekran, Mobil Bank, Sağlık) ortak teması ve küçük yardımcıları.
// Renk, görünüm ve profil Mobil Bank verisinde (cuzdan-defteri-v1) durur; diğer bölümler buradan okur.
(() => {
const PALETTES = {"sari": {"name": "Sarı", "light": {"bg": "#FFFAEB", "surface": "#FFFFFF", "sunk": "#FDF0C9", "line": "#F3E3B2", "ink": "#262006", "muted": "#76683A", "accent": "#F2B600", "accentInk": "#241C00", "accentText": "#9A6E00", "accentSoft": "#FFEDB0", "hero": "linear-gradient(135deg,#FFD83D 0%,#F5A800 100%)", "in": "#1E9E57", "out": "#E5484D", "warn": "#F08C00", "alarm": "#E5484D", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}, "dark": {"bg": "#0C0C0F", "surface": "#18181E", "sunk": "#23232B", "line": "#30303A", "ink": "#F8F6EE", "muted": "#A9A69C", "accent": "#FFD23F", "accentInk": "#1A1500", "accentText": "#FFD23F", "accentSoft": "#3A3212", "hero": "linear-gradient(135deg,#FFE066 0%,#FFB300 100%)", "in": "#3DD68C", "out": "#FF6B6B", "warn": "#FF9F1A", "alarm": "#FF6B6B", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}}, "turuncu": {"name": "Turuncu", "light": {"bg": "#FFF6EC", "surface": "#FFFFFF", "sunk": "#FDE7D0", "line": "#F3D6B8", "ink": "#2A1A0E", "muted": "#7D6250", "accent": "#C65400", "accentInk": "#FFFFFF", "accentText": "#B65200", "accentSoft": "#FFE2C2", "hero": "linear-gradient(135deg,#E06400 0%,#B54300 100%)", "in": "#1E9E57", "out": "#E5484D", "warn": "#F5A300", "alarm": "#E5484D", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}, "dark": {"bg": "#0D0B0C", "surface": "#1A1618", "sunk": "#252023", "line": "#342C30", "ink": "#FFF3EA", "muted": "#BBA79C", "accent": "#FF8A1F", "accentInk": "#1F0F00", "accentText": "#FF9A3D", "accentSoft": "#4A2A10", "hero": "linear-gradient(135deg,#FFA040 0%,#FF6A00 100%)", "in": "#3DD68C", "out": "#FF6B6B", "warn": "#FFC53D", "alarm": "#FF6B6B", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}}, "kirmizi": {"name": "Kırmızı", "light": {"bg": "#FFF4F4", "surface": "#FFFFFF", "sunk": "#FDE2E2", "line": "#F5CDCD", "ink": "#2B0F10", "muted": "#7E4F50", "accent": "#D7263D", "accentInk": "#FFFFFF", "accentText": "#B81D33", "accentSoft": "#FFD9DD", "hero": "linear-gradient(135deg,#DC2A3C 0%,#B0102A 100%)", "in": "#1E9E57", "out": "#B8234A", "warn": "#F5A300", "alarm": "#6E0A1C", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}, "dark": {"bg": "#0E0A0C", "surface": "#1C1216", "sunk": "#281A1F", "line": "#38242B", "ink": "#FFEFF1", "muted": "#C9A3A9", "accent": "#FF4D5E", "accentInk": "#2A0006", "accentText": "#FF6B7A", "accentSoft": "#4A1820", "hero": "linear-gradient(135deg,#FF7070 0%,#FF3352 100%)", "in": "#3DD68C", "out": "#FF8FA3", "warn": "#FFC53D", "alarm": "#FFC2CA", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}}, "pembe": {"name": "Pembe", "light": {"bg": "#FFF4F9", "surface": "#FFFFFF", "sunk": "#FCE1EE", "line": "#F6CCDF", "ink": "#2E0D1C", "muted": "#85546A", "accent": "#D6336C", "accentInk": "#FFFFFF", "accentText": "#B8245A", "accentSoft": "#FFDCEA", "hero": "linear-gradient(135deg,#DB3D7C 0%,#B5154F 100%)", "in": "#1E9E57", "out": "#E5484D", "warn": "#F5A300", "alarm": "#C81E1E", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}, "dark": {"bg": "#100810", "surface": "#1F1220", "sunk": "#2B182C", "line": "#3D223F", "ink": "#FFEFF7", "muted": "#D0A2BE", "accent": "#FF6FA8", "accentInk": "#2B0016", "accentText": "#FF85B6", "accentSoft": "#4A1A3A", "hero": "linear-gradient(135deg,#FF85B6 0%,#E91E63 100%)", "in": "#3DD68C", "out": "#FF6B6B", "warn": "#FFC53D", "alarm": "#FF5A4E", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}}, "mor": {"name": "Mor", "light": {"bg": "#F8F4FF", "surface": "#FFFFFF", "sunk": "#EBE1FC", "line": "#DDD0F5", "ink": "#1E1033", "muted": "#6B5A8A", "accent": "#6D28D9", "accentInk": "#FFFFFF", "accentText": "#6D28D9", "accentSoft": "#EADDFF", "hero": "linear-gradient(135deg,#7E46EA 0%,#5B21B6 100%)", "in": "#1E9E57", "out": "#E5484D", "warn": "#F5A300", "alarm": "#E5484D", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}, "dark": {"bg": "#0B0816", "surface": "#171028", "sunk": "#21183A", "line": "#30234F", "ink": "#F4EEFF", "muted": "#AFA0D0", "accent": "#A78BFA", "accentInk": "#160A33", "accentText": "#B79CFF", "accentSoft": "#2E1F55", "hero": "linear-gradient(135deg,#C7A6FF 0%,#9D6CFA 100%)", "in": "#3DD68C", "out": "#FF6B6B", "warn": "#FFC53D", "alarm": "#FF6B6B", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}}, "lacivert": {"name": "Lacivert", "light": {"bg": "#F3F6FD", "surface": "#FFFFFF", "sunk": "#E2E9F8", "line": "#CFDAF0", "ink": "#0E1530", "muted": "#57618A", "accent": "#1F3A93", "accentInk": "#FFFFFF", "accentText": "#1F3A93", "accentSoft": "#DCE5FB", "hero": "linear-gradient(135deg,#3360E0 0%,#14246B 100%)", "in": "#1E9E57", "out": "#E5484D", "warn": "#F5A300", "alarm": "#E5484D", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}, "dark": {"bg": "#060A18", "surface": "#0F1730", "sunk": "#17213F", "line": "#23305A", "ink": "#EEF2FF", "muted": "#9AA6CF", "accent": "#5B8CFF", "accentInk": "#061033", "accentText": "#7FA4FF", "accentSoft": "#1B2B5C", "hero": "linear-gradient(135deg,#8AAAFF 0%,#5C82FF 100%)", "in": "#3DD68C", "out": "#FF6B6B", "warn": "#FFC53D", "alarm": "#FF6B6B", "mid": "color-mix(in oklch, var(--accent), var(--alarm))"}}, "turkuaz": {"name": "Turkuaz", "light": {"bg": "#F0FAFA", "surface": "#FFFFFF", "sunk": "#D7F1F1", "line": "#BFE5E5", "ink": "#08201F", "muted": "#4C7372", "accent": "#0E7C86", "accentInk": "#FFFFFF", "accentText": "#0B6A73", "accentSoft": "#C9F0F0", "hero": "linear-gradient(135deg,#0B8790 0%,#086470 100%)", "in": "#1E9E57", "out": "#E5484D", "warn": "#F5A300", "alarm": "#E5484D", "mid": "#F5A300"}, "dark": {"bg": "#041112", "surface": "#0B1E20", "sunk": "#11292C", "line": "#1A3A3E", "ink": "#E8FBFB", "muted": "#92BDBD", "accent": "#2DD4D9", "accentInk": "#022224", "accentText": "#2DD4D9", "accentSoft": "#0F3C3F", "hero": "linear-gradient(135deg,#4FEAEE 0%,#0EA5B0 100%)", "in": "#3DD68C", "out": "#FF6B6B", "warn": "#FFC53D", "alarm": "#FF6B6B", "mid": "#FFC53D"}}, "yesil": {"name": "Yeşil", "light": {"bg": "#F2FBF5", "surface": "#FFFFFF", "sunk": "#DCF3E5", "line": "#C6E8D3", "ink": "#0C2416", "muted": "#4F7360", "accent": "#0F7D4D", "accentInk": "#FFFFFF", "accentText": "#0F7D4D", "accentSoft": "#CFF3DF", "hero": "linear-gradient(135deg,#14935A 0%,#0B6B42 100%)", "in": "#0F7D4D", "out": "#E5484D", "warn": "#F5A300", "alarm": "#E5484D", "mid": "#F5A300"}, "dark": {"bg": "#050F0A", "surface": "#0D1C14", "sunk": "#14281D", "line": "#1E392A", "ink": "#EAFBF1", "muted": "#93BBA5", "accent": "#2EE59D", "accentInk": "#032015", "accentText": "#2EE59D", "accentSoft": "#10402B", "hero": "linear-gradient(135deg,#47F2AE 0%,#12B76A 100%)", "in": "#2EE59D", "out": "#FF6B6B", "warn": "#FFC53D", "alarm": "#FF6B6B", "mid": "#FFC53D"}}};
const TOKENS = {bg:'--bg',surface:'--surface',sunk:'--sunk',line:'--line',ink:'--ink',muted:'--muted',accent:'--accent',accentInk:'--accent-ink',accentText:'--accent-text',accentSoft:'--accent-soft',alarm:'--alarm',mid:'--mid',hero:'--hero',in:'--in',out:'--out',warn:'--warn'};
const BANK_KEY = "cuzdan-defteri-v1";
const bankSettings = () => { try { return (JSON.parse(localStorage.getItem(BANK_KEY) || "null") || {}).settings || {}; } catch(e){ return {}; } };
// Her bölümün kendi rengi: Mobil Bank altın sarısı (para, birikim), Sağlık yeşil (sağlık, tazelik). Profil'den değiştirilir.
const VARSAYILAN = {banka: "sari", saglik: "yesil"};
const bolumAdi = () => /saglik\.html$/.test(location.pathname) ? "saglik" : "banka";
const renkOf = (bolum, s) => { s = s || bankSettings(); const id = bolum === "saglik" ? (s.colorSaglik || VARSAYILAN.saglik) : (s.color || VARSAYILAN.banka); return PALETTES[id] ? id : VARSAYILAN[bolum]; };
function applyTheme(bolum){
  const s = bankSettings(), pal = PALETTES[renkOf(bolum || bolumAdi(), s)], t0 = s.theme || "system";
  const dk = t0 === "dark" || (t0 === "system" && matchMedia("(prefers-color-scheme: dark)").matches);
  const v = pal[dk ? "dark" : "light"], st = document.documentElement.style;
  for(const k in TOKENS) st.setProperty(TOKENS[k], v[k]);
  st.colorScheme = dk ? "dark" : "light";
  if(t0 === "system") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", t0);
  const m = document.querySelector("meta[name=theme-color]"); if(m) m.setAttribute("content", v.bg);
  return dk;
}
try { matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => applyTheme()); } catch(e){}

/* Bölüm geçişi: üstteki ev simgesine basınca alttan açılan pencere */
const SAYFALAR = [
  {id: "banka", ad: "Mobil Bank", alt: "Gelir, gider, birikim, kartlar", url: "banka.html", ikon: "ikon-banka.jpg"},
  {id: "saglik", ad: "Sağlık", alt: "Kalori, kilo, su, uyku, tarifler", url: "saglik.html", ikon: "ikon-saglik.jpg"}
];
function gecisCss(){
  if(document.getElementById("gecis-css")) return;
  const st = document.createElement("style"); st.id = "gecis-css";
  st.textContent = `#gecis{position:fixed;inset:0;z-index:70}
#gecis .gs{position:absolute;inset:0;background:rgb(0 0 0 / .45);opacity:0;transition:opacity .2s}
#gecis .gp{position:absolute;left:0;right:0;bottom:0;background:var(--surface);color:var(--ink);border-radius:22px 22px 0 0;padding:6px 16px calc(18px + env(safe-area-inset-bottom,0px));transform:translateY(100%);transition:transform .25s cubic-bezier(.2,.8,.2,1);box-shadow:0 -10px 30px rgb(0 0 0 / .2)}
#gecis.on .gs{opacity:1} #gecis.on .gp{transform:none}
#gecis .gi{max-width:560px;margin:0 auto;display:grid;gap:14px}
#gecis .gg{height:26px;display:grid;place-items:center;touch-action:none;cursor:grab}
#gecis .gg::before{content:"";width:44px;height:5px;border-radius:3px;background:var(--line)}
#gecis .gh{display:flex;align-items:center;justify-content:space-between;gap:8px}
#gecis .gh b{font-family:var(--display);font-size:20px}
#gecis .gh button{border:1px solid var(--line);background:var(--surface);color:inherit;border-radius:12px;min-height:44px;padding:0 14px;font:inherit;font-weight:600}
#gecis .gt{display:grid;grid-template-columns:1fr 1fr;gap:10px}
#gecis .gt a{position:relative;display:grid;gap:8px;padding:14px;border-radius:18px;text-decoration:none;min-height:150px;align-content:start}
#gecis .gt a img{width:58px;height:58px;border-radius:17px;box-shadow:0 4px 12px rgb(0 0 0 / .18),0 0 0 2px rgb(255 255 255 / .5)}
#gecis .gt a b{font-family:var(--display);font-size:19px;line-height:1.1}
#gecis .gt a small{font-size:12.5px;opacity:.85;line-height:1.3}
#gecis .gt a em{position:absolute;top:10px;right:10px;font-style:normal;font-size:11px;font-weight:700;background:rgb(255 255 255 / .85);color:#1b1b1b;border-radius:999px;padding:3px 8px}
#gecis .gl{display:grid;grid-template-columns:1fr 1fr;gap:10px}
#gecis .gl a{display:flex;align-items:center;justify-content:center;gap:8px;min-height:50px;border-radius:14px;background:var(--sunk);color:inherit;text-decoration:none;font-weight:600}
#gecis .gl a[aria-current]{outline:2px solid var(--accent)}
@media (prefers-reduced-motion: reduce){#gecis .gs,#gecis .gp{transition:none}}`;
  document.head.appendChild(st);
}
function gecis(){
  if(document.getElementById("gecis")) return;
  gecisCss();
  const s = bankSettings(), dk = document.documentElement.style.colorScheme === "dark", burada = /saglik\.html$/.test(location.pathname) ? "saglik" : /banka\.html$/.test(location.pathname) ? "banka" : /profil\.html$/.test(location.pathname) ? "profil" : "ana";
  const esc = x => String(x).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const box = document.createElement("div"); box.id = "gecis"; box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Bölüm değiştir");
  box.innerHTML = `<div class="gs"></div><div class="gp"><div class="gi"><div class="gg"></div>
    <div class="gh"><b>Nereye gidelim?</b><button type="button" data-gk>Kapat</button></div>
    <div class="gt">${SAYFALAR.map(p => { const pal = PALETTES[renkOf(p.id, s)].light; return `<a href="${p.url}" style="background:${pal.hero};color:${pal.accentInk}"${burada === p.id ? ' aria-current="page"' : ""}>${burada === p.id ? "<em>Buradasın</em>" : ""}<img src="${p.ikon}" alt=""><b>${esc(p.ad)}</b><small>${esc(p.alt)}</small></a>`; }).join("")}</div>
    <div class="gl"><a href="./"${burada === "ana" ? ' aria-current="page"' : ""}>🏠 Ana ekran</a><a href="profil.html"${burada === "profil" ? ' aria-current="page"' : ""}>👤 Profil</a></div>
  </div></div>`;
  document.body.appendChild(box);
  requestAnimationFrame(() => requestAnimationFrame(() => box.classList.add("on")));
  const panel = box.querySelector(".gp");
  const kapat = () => { box.classList.remove("on"); panel.style.transform = ""; setTimeout(() => box.remove(), 260); document.removeEventListener("keydown", esc2); };
  const esc2 = e => { if(e.key === "Escape") kapat(); };
  document.addEventListener("keydown", esc2);
  box.querySelector(".gs").onclick = kapat; box.querySelector("[data-gk]").onclick = kapat;
  box.querySelectorAll("a[aria-current]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); kapat(); }));
  // aşağı çekerek kapatma
  let y0 = null, dy = 0;
  panel.addEventListener("pointerdown", e => { if(e.target.closest("a,button")) return; y0 = e.clientY; dy = 0; panel.style.transition = "none"; panel.setPointerCapture(e.pointerId); });
  panel.addEventListener("pointermove", e => { if(y0 == null) return; dy = Math.max(0, e.clientY - y0); panel.style.transform = `translateY(${dy}px)`; });
  const birak = () => { if(y0 == null) return; y0 = null; panel.style.transition = ""; if(dy > 90) kapat(); else panel.style.transform = ""; };
  panel.addEventListener("pointerup", birak); panel.addEventListener("pointercancel", birak);
}
// Bölümlerin sol üstündeki ev simgesi: doğrudan ana ekrana gitmek yerine geçiş penceresini açar
document.addEventListener("click", e => { const a = e.target.closest("a.brand.home"); if(!a) return; e.preventDefault(); gecis(); });

/* Gizli mod: başkalarına gösterirken tutarlar ₺••• görünür. Göz simgesiyle açılıp kapanır;
   "açılışta gizli başlasın" tercihi bu telefonda saklanır, anlık durum uygulama kapanana kadar sürer. */
const GIZ_KEY = "bocekler-gizli";
const gizliTercih = () => { try { return localStorage.getItem(GIZ_KEY) === "1"; } catch(e){ return false; } };
const gizli = () => { try { const s = sessionStorage.getItem("gizli"); return s === null ? gizliTercih() : s === "1"; } catch(e){ return gizliTercih(); } };
const gizliYap = v => { try { sessionStorage.setItem("gizli", v ? "1" : "0"); } catch(e){} };
const gizliTercihYap = v => { try { localStorage.setItem(GIZ_KEY, v ? "1" : "0"); } catch(e){} gizliYap(v); };
const gozIkon = () => gizli()
  ? '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l18 18"/><path d="M10.6 5.1A10.4 10.4 0 0 1 12 5c6 0 9.5 7 9.5 7a17 17 0 0 1-3.1 3.9M6.6 6.6C3.9 8.4 2.5 12 2.5 12s3.5 7 9.5 7c1.6 0 3-.4 4.3-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/></svg>'
  : '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"/><circle cx="12" cy="12" r="3"/></svg>';
// Bölümler birbirine kısa özet bırakır (ana ekrandaki kutucuklar için)
const snap = (k, v) => { try { const all = JSON.parse(localStorage.getItem("bocekler-ozet") || "{}"); all[k] = {...v, at: Date.now()}; localStorage.setItem("bocekler-ozet", JSON.stringify(all)); } catch(e){} };
const snaps = () => { try { return JSON.parse(localStorage.getItem("bocekler-ozet") || "{}"); } catch(e){ return {}; } };
window.Bocekler = { PALETTES, applyTheme, bankSettings, snap, snaps, renkOf, gecis, gizli, gizliYap, gizliTercih, gizliTercihYap, gozIkon };
applyTheme();
})();

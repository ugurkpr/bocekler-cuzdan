// kaynak/*.src.html → saglik.html, profil.html (çalıştır: node kaynak/build-saglik.js)
// Mobil Bank'ın görünüm kuralları, pencere kaydırma ve ipucu motoru sayfalara eklenir.
const fs = require('fs'), path = require('path'), D = path.join(__dirname, '..');
const bank = fs.readFileSync(path.join(D, 'banka.html'), 'utf8');
const css = bank.match(/<style>([\s\S]*?)<\/style>/)[1];
const swipe = bank.slice(bank.indexOf('// Pencereyi aşağı çekerek kapatma'), bank.indexOf("document.addEventListener('keydown', e => { if(e.key==='Escape'"));
let engine = bank.slice(bank.indexOf('let tipOn = false;'), bank.indexOf('new MutationObserver(() => {\n  const q = id'));
engine = engine.replace(/key\.startsWith\('form-'\)/g, "TIP_FORM(key)").replace(/^const currentTipKey = .*\n/m, '');
if(!swipe.includes('touchstart') || !engine.includes('function runTips')) throw new Error('parça bulunamadı');
const head0 = fs.readFileSync(path.join(D, 'index.html'), 'utf8').split('<title>')[0];
for(const [src0, out0, ikon] of [['saglik.src.html', 'saglik.html', 'ikon-saglik.jpg'], ['profil.src.html', 'profil.html', 'icon-192.png']]){
  let src = fs.readFileSync(path.join(__dirname, src0), 'utf8');
  const head = head0.replace('<link rel="icon" href="icon-192.png">', `<link rel="icon" href="${ikon}">`);
  src = src.replace('/*BANKCSS*/', () => css).replace('/*SWIPE*/', () => swipe).replace('/*TIPENGINE*/', () => "const TIP_FORM = k => k === 's-ekle' || k === 's-miktar';\n" + engine);
  const out = head + src;
  for(const m of out.matchAll(/<script>([\s\S]*?)<\/script>/g)) new Function(m[1]);
  fs.writeFileSync(path.join(D, out0), out);
  console.log(out0, out.length);
}

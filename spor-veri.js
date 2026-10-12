// Böcekler Spor: hareketler, hazır programlar, hedefe göre öneri kuralları ve yürüyüş planı.
// Kaynaklar: ACSM, WHO 2020, NHS, Mayo Clinic; MET değerleri 2024 Adult Compendium kategorilerinden (yaklaşık).
// g: isinma | alt | ust | core | kardiyo | esneme · z: zorluk 1-3 · s: varsayılan süre (sn) · tk: tekrar önerisi
// statik: tek poz (sadece "b" görseli) · zipla: zıplama içerir (zıplamasız filtrede çıkar) · ek: gereken eşya
window.SPOR_GRUP = {isinma:'Isınma', alt:'Bacak ve kalça', ust:'Üst vücut', core:'Karın ve core', kardiyo:'Kardiyo', esneme:'Esneme'};
window.HAREKETLER = [
  {id:'yerinde-yuruyus', ad:'Yerinde yürüyüş', en:'March in place', g:'isinma', kas:'Tüm vücut', z:1, s:60, met:3.5,
   ip:['Dik dur, omuzlar geride','Dizleri kalça hizasına kadar kaldır','Kolları ters yönde salla','Burnundan düzenli nefes al'], hata:'Kamburlaşmak', kolay:'Dizleri daha az kaldır', zor:'Yüksek dize geç'},
  {id:'kol-cevirme', ad:'Kol çevirme', en:'Arm circles', g:'isinma', kas:'Omuz', z:1, s:30, met:2.8,
   ip:['Kolları yana, omuz hizasında aç','Küçük daireler çiz','Daireleri yavaşça büyüt','Yarısında yönü değiştir'], hata:'Omuzları kulaklara kaldırmak', kolay:'Tek kolla yap', zor:'Ellerde küçük şişelerle yap'},
  {id:'kalca-cevirme', ad:'Kalça çevirme', en:'Hip circles', g:'isinma', kas:'Kalça, bel', z:1, s:30, met:2.8,
   ip:['Eller belde, ayaklar omuz genişliğinde','Kalçayla geniş bir daire çiz','Gövdeyi sabit tut','Yarısında yön değiştir'], hata:'Dizleri kilitlemek', kolay:'Daha küçük daire çiz', zor:'Tek ayak üstünde dengeyle yap'},
  {id:'bacak-sallama', ad:'Bacak sallama', en:'Leg swings', g:'isinma', kas:'Kalça önü, arka bacak', z:1, s:40, tk:'Her bacak 10', met:2.8,
   ip:['Bir elinle duvara tutun','Bacağı rahatça ileri geri salla','Gövde dik ve sabit kalsın','Yarısında bacak değiştir'], hata:'Bacağı kontrolsüz savurmak', kolay:'Açıyı küçük tut', zor:'Yana salınım da ekle', ek:'duvar'},
  {id:'squat', ad:'Squat', en:'Bodyweight squat', g:'alt', kas:'Ön bacak, kalça', z:1, s:40, tk:'12 tekrar', met:3.8,
   ip:['Ayaklar omuz genişliğinde','Kalçayı sandalyeye oturur gibi geri it','Dizler ayak uçlarıyla aynı yöne baksın','Topuklardan iterek kalk'], hata:'Dizlerin içe çökmesi, topuğun kalkması', kolay:'Sandalyeye otur-kalk', zor:'3 saniyede in ya da ellerde şişe tut'},
  {id:'geri-lunge', ad:'Geri lunge', en:'Reverse lunge', g:'alt', kas:'Ön bacak, kalça', z:2, s:40, tk:'Her bacak 10', met:3.8,
   ip:['Bir adım geri at','İki diz de 90 dereceye insin','Gövde dik, eller belde','Ön topuktan iterek başa dön'], hata:'Ön dizin ayak ucunu fazla geçmesi', kolay:'Duvara tutunarak yap', zor:'Ellerde şişe tut'},
  {id:'kopru', ad:'Köprü', en:'Glute bridge', g:'alt', kas:'Kalça, arka bacak', z:1, s:40, tk:'15 tekrar', met:3.5,
   ip:['Sırtüstü yat, dizler bükülü','Kalçayı sıkarak yukarı kaldır','Omuz, kalça ve diz düz çizgi olsun','Yavaşça in'], hata:'Beli aşırı kavislemek', kolay:'Daha az kaldır', zor:'Tek bacakla yap', ek:'mat'},
  {id:'duvar-oturusu', ad:'Duvar oturuşu', en:'Wall sit', g:'alt', kas:'Ön bacak', z:2, s:30, met:3.5, statik:true,
   ip:['Sırtını duvara yasla','Uyluklar yere paralel olana kadar kay','Dizler ayak bileklerinin üstünde','Nefesini tutma'], hata:'Ellerle dizlere bastırmak', kolay:'Daha yüksekte (45°) dur', zor:'60 saniye ya da tek bacak', ek:'duvar'},
  {id:'basamak', ad:'Basamak çıkma', en:'Step-up', g:'alt', kas:'Kalça, ön bacak', z:2, s:40, tk:'Her bacak 10', met:4.0,
   ip:['Sağlam bir basamak seç','Ayağın tamamını basamağa koy','Öndeki bacakla yüksel','Kontrollü in'], hata:'Arkadaki ayakla itmek', kolay:'Alçak basamak kullan', zor:'Ellerde şişe ya da yukarıda diz çek', ek:'basamak'},
  {id:'parmak-ucu', ad:'Parmak ucu kalkışı', en:'Calf raise', g:'alt', kas:'Baldır', z:1, s:30, tk:'15 tekrar', met:2.8,
   ip:['Duvara hafifçe tutun','Parmak uçlarına yüksel','Tepede 1 saniye bekle','Yavaşça in'], hata:'Hızlı hızlı zıplatmak', kolay:'İki ayakla yap', zor:'Tek ayakla ya da basamak kenarında'},
  {id:'yan-lunge', ad:'Yan lunge', en:'Side lunge', g:'alt', kas:'İç bacak, kalça', z:2, s:40, tk:'Her taraf 8', met:3.8,
   ip:['Yana geniş bir adım at','Kalçayı geri it, dizi bük','Diğer bacak düz kalsın','Göğüs yukarıda, başa dön'], hata:'Gövdeyi öne düşürmek', kolay:'Yarım açıyla in', zor:'Göğüste şişe tut'},
  {id:'sinav', ad:'Şınav', en:'Push-up', g:'ust', kas:'Göğüs, arka kol, omuz', z:2, s:40, tk:'8-10 tekrar', met:3.8,
   ip:['Eller omuzdan biraz geniş','Baştan topuğa düz bir çizgi','Göğsü yere yaklaştır','Dirsekler yaklaşık 45 derece'], hata:'Kalçanın sarkması', kolay:'Duvarda ya da dizler yerde', zor:'Ayakları yükseğe koy'},
  {id:'dips', ad:'Sandalye dips', en:'Chair dip', g:'ust', kas:'Arka kol', z:2, s:40, tk:'10 tekrar', met:3.8,
   ip:['Sabit bir sandalyenin kenarına tutun','Kalçayı öne al','Dirsekleri geriye doğru bük','Kollarla iterek kalk'], hata:'Omuzların öne kapanması', kolay:'Dizler bükülü kalsın', zor:'Bacakları düz uzat', ek:'sandalye'},
  {id:'omuz-press', ad:'Şişeyle omuz press', en:'Overhead press', g:'ust', kas:'Omuz', z:1, s:40, tk:'12 tekrar', met:3.5,
   ip:['1,5 litrelik şişeleri omuz hizasında tut','Karnını sık','Kolları yukarı it','Yavaşça indir'], hata:'Beli kavislemek', kolay:'Oturarak yap', zor:'Daha ağır bidon kullan', ek:'sise'},
  {id:'cekis', ad:'Şişeyle eğilerek çekiş', en:'Bent-over row', g:'ust', kas:'Sırt, ön kol', z:1, s:40, tk:'12 tekrar', met:3.5,
   ip:['Kalçadan öne eğil, sırt düz','Şişeleri göbeğe doğru çek','Kürek kemiklerini sık','Kontrollü indir'], hata:'Sırtı yuvarlamak', kolay:'Tek kolla, sandalyeye dayanarak', zor:'Yavaş tempoyla yap', ek:'sise'},
  {id:'inchworm', ad:'Inchworm', en:'Inchworm', g:'ust', kas:'Omuz, core, arka bacak', z:2, s:40, tk:'6 tekrar', met:3.8,
   ip:['Öne eğil, elleri yere koy','Ellerle yürüyerek plank pozisyonuna gel','Ellerle geri yürü','Yavaşça doğrul'], hata:'Plankta kalçanın sarkması', kolay:'Dizleri bükerek yap', zor:'Plankta bir şınav ekle'},
  {id:'plank', ad:'Plank', en:'Forearm plank', g:'core', kas:'Karın, omuz', z:1, s:30, met:2.8, statik:true,
   ip:['Dirsekler omuzların altında','Baştan topuğa düz çizgi','Karnı ve kalçayı sık','Düzenli nefes al'], hata:'Kalçanın sarkması ya da yükselmesi', kolay:'Dizler yerde', zor:'60 saniye ya da kol kaldırarak', ek:'mat'},
  {id:'yan-plank', ad:'Yan plank', en:'Side plank', g:'core', kas:'Yan karın', z:2, s:40, tk:'Her taraf 20 sn', met:2.8, statik:true,
   ip:['Dirsek omzun altında','Ayaklar üst üste','Kalçayı kaldır, vücut düz','Yarısında taraf değiştir'], hata:'Kalçanın düşmesi', kolay:'Alttaki diz yerde', zor:'Üstteki bacağı kaldır', ek:'mat'},
  {id:'olu-bocek', ad:'Ölü böcek', en:'Dead bug', g:'core', kas:'Derin karın', z:1, s:40, tk:'Her taraf 8', met:2.8,
   ip:['Sırtüstü, kollar tavana, dizler 90°','Belini yere bastır','Karşı kol ve bacağı uzat','Yavaşça geri dön, taraf değiştir'], hata:'Belin yerden kalkması', kolay:'Sadece bacakları hareket ettir', zor:'Her tekrarda 3 saniye bekle', ek:'mat'},
  {id:'kus-kopek', ad:'Kuş-köpek', en:'Bird dog', g:'core', kas:'Bel, kalça, karın', z:1, s:40, tk:'Her taraf 8', met:2.8,
   ip:['Dört ayak pozisyonuna geç','Karşı kol ve bacağı uzat','2 saniye tut','Kalça dönmeden geri gel'], hata:'Beli çukurlaştırmak', kolay:'Sadece bacağı uzat', zor:'Dirsekle dizi altta birleştir', ek:'mat'},
  {id:'bisiklet', ad:'Bisiklet mekiği', en:'Bicycle crunch', g:'core', kas:'Yan karın', z:2, s:40, tk:'20 tekrar', met:3.8,
   ip:['Eller şakaklarda, hafifçe','Omzu karşı dize doğru döndür','Diğer bacağı uzat','Kontrollü, iki yana sırayla'], hata:'Elleriyle boynu çekmek', kolay:'Ayakları yere yakın tut', zor:'Yavaş tempoyla yap', ek:'mat'},
  {id:'superman', ad:'Superman', en:'Superman', g:'core', kas:'Bel, kalça', z:1, s:30, tk:'12 tekrar', met:2.8,
   ip:['Yüzüstü yat, kollar önde','Kol ve bacakları birlikte hafifçe kaldır','2 saniye tut','Bakış yerde'], hata:'Başı geriye atmak', kolay:'Sadece kolları kaldır', zor:'5 saniye tut', ek:'mat'},
  {id:'jumping-jack', ad:'Jumping jack', en:'Jumping jack', g:'kardiyo', kas:'Tüm vücut', z:1, s:30, met:7.5, zipla:true,
   ip:['Zıplarken bacakları aç','Kolları başın üstünde birleştir','Ayak uçlarına yumuşak in','Ritmini koru'], hata:'Topuklara sert inmek', kolay:'Zıplamadan yana adım at', zor:'Squat jack yap'},
  {id:'yuksek-diz', ad:'Yüksek diz', en:'High knees', g:'kardiyo', kas:'Kalça önü, kardiyo', z:2, s:30, met:7.5, zipla:true,
   ip:['Dik dur','Dizleri hızla kalça hizasına çek','Kollar ritimle eşlik etsin','Ayak uçlarında hafif kal'], hata:'Geriye yaslanmak', kolay:'Yerinde yürüyerek yap', zor:'Sprint temposuna çık'},
  {id:'dagci', ad:'Dağcı', en:'Mountain climber', g:'kardiyo', kas:'Core, omuz, kardiyo', z:2, s:30, met:7.5,
   ip:['Yüksek plank pozisyonu','Dizleri sırayla göğse çek','Kalça alçakta kalsın','Eller omuzların altında'], hata:'Kalçayı havaya dikmek', kolay:'Eller sandalyede, yavaş', zor:'Hızlı tempoyla yap'},
  {id:'squat-zipla', ad:'Squat zıplama', en:'Jump squat', g:'kardiyo', kas:'Bacak, kardiyo', z:3, s:30, tk:'10 tekrar', met:7.5, zipla:true,
   ip:['Squat pozisyonuna in','Güçlü bir şekilde yukarı zıpla','Dizler bükük, yumuşak in','Hemen yeni squata geç'], hata:'Dizler kilitliyken inmek', kolay:'Squat + parmak ucu kalkışı', zor:'Ara vermeden sürekli tempo'},
  {id:'burpee', ad:'Burpee', en:'Burpee', g:'kardiyo', kas:'Tüm vücut', z:3, s:30, tk:'8 tekrar', met:7.5, zipla:true,
   ip:['Squat yap, elleri yere koy','Ayakları geri atıp plank pozisyonuna geç','Ayakları geri getir','Kollar yukarıda zıpla'], hata:'Plankta belin sarkması', kolay:'Adım adım, zıplamadan', zor:'Plankta bir şınav ekle'},
  {id:'golge-boksu', ad:'Gölge boksu', en:'Shadow boxing', g:'kardiyo', kas:'Omuz, core', z:1, s:45, met:5.5,
   ip:['Dizler hafif bükülü, yumruklar çenede','Karnını sık','Düz ve kroşe yumruklar at','Ayaklarınla hafifçe sek'], hata:'Kolu tam kilitleyip savurmak', kolay:'Yavaş tempoyla yap', zor:'Hızlan ya da küçük şişe tut'},
  {id:'kedi-inek', ad:'Kedi-inek', en:'Cat-cow', g:'esneme', kas:'Omurga', z:1, s:45, met:2.3,
   ip:['Dört ayak pozisyonuna geç','Nefes alırken beli çukurlaştır, başı kaldır','Nefes verirken sırtı yuvarla','Yavaş ve nefesle uyumlu'], hata:'Hızlı yapmak', kolay:'Sandalyede oturarak yap', zor:'Her pozda 3 nefes kal', ek:'mat'},
  {id:'hamstring', ad:'Arka bacak esnemesi', en:'Hamstring stretch', g:'esneme', kas:'Arka bacak', z:1, s:60, tk:'Her bacak 30 sn', met:2.3, statik:true,
   ip:['Topuğu alçak bir yere koy','Sırt düz, kalçadan öne eğil','Ağrı değil, gerilme hisset','Yarısında bacak değiştir'], hata:'Yaylanmak', kolay:'Dizi hafif bük', zor:'Sırtüstü, havluyla çekerek', ek:'basamak'},
  {id:'kalca-esneme', ad:'Kalça ve göğüs esnemesi', en:'Hip flexor & chest stretch', g:'esneme', kas:'Kalça önü, göğüs', z:1, s:60, tk:'Her taraf 30 sn', met:2.3, statik:true,
   ip:['Bir diz yerde, lunge pozisyonu','Kalçayı hafifçe öne it','Kolları arkada birleştir, göğsü aç','Yarısında taraf değiştir'], hata:'Beli çukurlaştırmak', kolay:'Ayakta, kapı kenarında yap', zor:'Kolu yukarı uzat', ek:'mat'}
];
// Hazır programlar (hareket kimlikleri, çalışma/dinlenme saniyesi, tur)
window.PROGRAMLAR = [
  {id:'p-7dk', ad:'7 dakika sabah', em:'☀️', sev:2, is:30, din:10, tur:1, aciklama:'Bilimsel 7 dakika antrenmanı: tüm vücut, kısa ve yoğun.',
   liste:['jumping-jack','duvar-oturusu','sinav','bisiklet','basamak','squat','dips','plank','yuksek-diz','geri-lunge','inchworm','yan-plank']},
  {id:'p-hiit', ad:'20 dk yağ yakım', em:'🔥', sev:2, is:40, din:20, tur:3, turArasi:60, aciklama:'Isınma, 3 tur yoğun blok ve soğuma. Kalp atışını yükseltir.',
   isinma:['yerinde-yuruyus','kol-cevirme','kalca-cevirme','bacak-sallama'], liste:['squat-zipla','dagci','yuksek-diz','burpee'], sogu:['kedi-inek','hamstring','kalca-esneme']},
  {id:'p-baslangic', ad:'Başlangıç tüm vücut', em:'🌱', sev:1, is:30, din:30, tur:2, aciklama:'4 haftalık başlangıç. Haftada 3 gün; her hafta süre biraz artar.',
   liste:['squat','sinav','kopru','omuz-press','geri-lunge','olu-bocek','plank','kus-kopek']},
  {id:'p-core', ad:'Herkese karın', em:'🎯', sev:1, is:40, din:20, tur:2, aciklama:'Belini koruyan, karnı güçlendiren sakin bir core seti.',
   liste:['olu-bocek','kus-kopek','kopru','plank','yan-plank','bisiklet','superman']},
  {id:'p-ofis', ad:'Ofis molası esneme', em:'🪑', sev:1, is:40, din:5, tur:1, aciklama:'5 dakikada boyun, sırt ve kalçayı aç. Her 1-2 saatte bir.',
   liste:['kol-cevirme','kedi-inek','kalca-esneme','hamstring','parmak-ucu']},
  {id:'p-sessiz', ad:'Sessiz kardiyo', em:'🤫', sev:1, is:45, din:15, tur:3, aciklama:'Zıplamasız, alt komşu dostu. Terletir ama ses çıkarmaz.',
   liste:['yerinde-yuruyus','golge-boksu','squat','dagci','yan-lunge','parmak-ucu']}
];
// Hedefe göre öneri: hangi gruptan ne ağırlıkla hareket seçilir, çalışma/dinlenme ve öneriler
window.SPOR_HEDEF = [
  {id:'yag', ad:'Yağ yakımı ve kilo verme', em:'🔥', agirlik:{kardiyo:3, alt:2, ust:1, core:1}, is:40, din:20, prog:['p-hiit','p-7dk','p-sessiz'],
   oneri:'Haftada 4-5 gün hareket et: 2-3 gün bu tür devre antrenmanı, diğer günler tempolu yürüyüş. Kilo vermenin asıl anahtarı kalori açığı; Sağlık’taki hedefinle birlikte ilerle.', yuruyus:'Her gün 30-45 dk tempolu yürüyüş (8.000+ adım)'},
  {id:'kardiyo', ad:'Kardiyo ve kondisyon', em:'❤️', agirlik:{kardiyo:4, alt:1, core:1}, is:30, din:15, prog:['p-hiit','p-sessiz'],
   oneri:'Nefesin hızlanmalı ama konuşabilmelisin. Haftada 150 dk orta ya da 75 dk yüksek yoğunluk hedefle.', yuruyus:'Haftada 2 gün aralıklı yürüyüş (3 dk hızlı / 3 dk yavaş)'},
  {id:'guc', ad:'Güç ve sıkılaşma', em:'💪', agirlik:{alt:3, ust:3, core:2}, is:45, din:15, prog:['p-baslangic','p-7dk'],
   oneri:'Haftada en az 2-3 gün, aynı kas grubunu art arda iki gün çalıştırma. Kolaylaşınca zor varyasyona geç.', yuruyus:'Dinlenme günlerinde 20-30 dk rahat yürüyüş'},
  {id:'core', ad:'Karın ve core', em:'🎯', agirlik:{core:5, alt:1}, is:40, din:20, prog:['p-core'],
   oneri:'Sadece mekik değil: plank, ölü böcek ve kuş-köpek beli korurken karnı güçlendirir. Göbek eritmek için kardiyo ve beslenme de şart.', yuruyus:'Günlük yürüyüşle birlikte'},
  {id:'bacak', ad:'Bacak ve kalça', em:'🍑', agirlik:{alt:5, core:1}, is:45, din:15, prog:['p-baslangic'],
   oneri:'Kalça için köprü ve geri lunge en etkili hareketler. Tekrar sayısını haftadan haftaya artır.', yuruyus:'Yokuşlu yürüyüş kalçayı ekstra çalıştırır'},
  {id:'esneklik', ad:'Esneklik ve duruş', em:'🧘', agirlik:{esneme:4, core:2, isinma:1}, is:45, din:10, prog:['p-ofis','p-core'],
   oneri:'Masa başında çalışıyorsan her gün 5-10 dk yeter. Esnemede yaylanma, nefesle birlikte yavaşça ilerle.', yuruyus:'Kısa öğle yürüyüşleri'},
  {id:'stres', ad:'Stres ve rahatlama', em:'🌿', agirlik:{esneme:3, isinma:2, core:1}, is:45, din:15, prog:['p-ofis'],
   oneri:'Yavaş tempo ve derin nefes: burundan 4 saniye al, ağızdan 6 saniyede ver. Akşam yürüyüşü uykuyu da iyileştirir.', yuruyus:'Akşam 20-30 dk sakin yürüyüş'}
];
// 8 haftalık yürüyüş planı (haftada 5 gün; ısınma ve soğuma 5'er dk yavaş tempo)
// bolum: [dakika, tempo] — tempo: yavas | rahat | tempolu | hizli
window.YURUYUS_PLAN = [
  {h:1, adim:'Başlangıç + 500', not:'Rahat tempo', bolum:[[5,'yavas'],[10,'rahat'],[5,'yavas']]},
  {h:2, adim:'Başlangıç + 1.000', not:'Rahat, son 5 dk tempolu', bolum:[[5,'yavas'],[10,'rahat'],[5,'tempolu'],[5,'yavas']]},
  {h:3, adim:'~6.000', not:'10 dk tempolu', bolum:[[5,'yavas'],[10,'rahat'],[10,'tempolu'],[5,'yavas']]},
  {h:4, adim:'~6.500', not:'20 dk tempolu', bolum:[[5,'yavas'],[20,'tempolu'],[5,'yavas']]},
  {h:5, adim:'~7.000', not:'Aralıklı: 3 dk hızlı / 3 dk yavaş × 4', bolum:[[5,'yavas'],[3,'hizli'],[3,'yavas'],[3,'hizli'],[3,'yavas'],[3,'hizli'],[3,'yavas'],[3,'hizli'],[3,'yavas'],[2,'yavas']]},
  {h:6, adim:'~7.500', not:'30 dk tempolu', bolum:[[5,'yavas'],[30,'tempolu'],[5,'yavas']]},
  {h:7, adim:'~8.000', not:'Aralıklı × 5, mümkünse hafif yokuş', bolum:[[5,'yavas'],[3,'hizli'],[3,'yavas'],[3,'hizli'],[3,'yavas'],[3,'hizli'],[3,'yavas'],[3,'hizli'],[3,'yavas'],[3,'hizli'],[3,'yavas'],[5,'yavas']]},
  {h:8, adim:'8.000-10.000', not:'35 dk tempolu, sürdür', bolum:[[5,'yavas'],[35,'tempolu'],[5,'yavas']]}
];
window.YURUYUS_TEMPO = {yavas:{ad:'Yavaş', met:2.8, ses:'Yavaşla, rahat bir tempoda yürü'}, rahat:{ad:'Rahat', met:3.5, ses:'Rahat tempoda yürü'}, tempolu:{ad:'Tempolu', met:4.3, ses:'Tempoyu artır. Konuşabilirsin ama şarkı söyleyemezsin'}, hizli:{ad:'Hızlı', met:5.0, ses:'Hızlan! Kollarını salla, adımlarını sıklaştır'}};

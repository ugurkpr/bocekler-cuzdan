// Böcekler Sağlık: gömülü gıda listesi (internetsiz çalışır).
// Her satır: ad | kategori | 100 g (içeceklerde 100 ml) için kcal | protein g | karbonhidrat g | yağ g | porsiyonlar (ad:gram, virgülle)
// Değerler genel besin tablolarına (TÜRKOMP, USDA) dayalı yaklaşık ortalamalardır; ev yemeklerinde tarife göre değişir.
window.GIDA_KATEGORI = {mey:'Meyve', seb:'Sebze', tah:'Ekmek ve tahıl', bak:'Baklagil', et:'Et, tavuk, balık', sut:'Süt ürünleri ve yumurta', kur:'Kuruyemiş ve tohum', kah:'Kahvaltılık, yağ ve sos', cor:'Çorba', yem:'Ev yemekleri', fas:'Fast food ve sokak lezzetleri', tat:'Tatlılar', atis:'Atıştırmalık ve paketli', ic:'İçecekler'};
window.GIDALAR = `
Elma|mey|52|0.3|14|0.2|1 orta boy:180,1 küçük:130,1 dilim:25
Yeşil elma|mey|48|0.4|13|0.2|1 orta boy:170
Armut|mey|57|0.4|15|0.1|1 orta boy:180
Muz|mey|89|1.1|23|0.3|1 orta boy:120,1 küçük:90,1 büyük:140
Portakal|mey|47|0.9|12|0.1|1 orta boy:150
Mandalina|mey|53|0.8|13|0.3|1 adet:80
Greyfurt|mey|42|0.8|11|0.1|yarım:150
Limon|mey|29|1.1|9|0.3|1 adet:60,1 yemek kaşığı suyu:15
Çilek|mey|32|0.7|8|0.3|1 adet:12,1 su bardağı:150
Kiraz|mey|63|1.1|16|0.2|10 adet:70,1 su bardağı:140
Vişne|mey|50|1|12|0.3|1 su bardağı:150
Üzüm|mey|69|0.7|18|0.2|1 salkım küçük:150,10 tane:50
Karpuz|mey|30|0.6|8|0.2|1 dilim:300,1 kase:150
Kavun|mey|34|0.8|8|0.2|1 dilim:200
Şeftali|mey|39|0.9|10|0.3|1 orta boy:150
Kayısı|mey|48|1.4|11|0.4|1 adet:35
Erik|mey|46|0.7|11|0.3|1 adet:30
İncir|mey|74|0.8|19|0.3|1 adet:50
Nar|mey|83|1.7|19|1.2|yarım:140,1 kase tanesi:90
Kivi|mey|61|1.1|15|0.5|1 adet:75
Ananas|mey|50|0.5|13|0.1|1 dilim:80
Mango|mey|60|0.8|15|0.4|1 adet:200
Avokado|mey|160|2|9|15|yarım:70,1 adet:140
Böğürtlen|mey|43|1.4|10|0.5|1 su bardağı:140
Yaban mersini|mey|57|0.7|14|0.3|1 su bardağı:140
Ahududu|mey|52|1.2|12|0.7|1 su bardağı:125
Ayva|mey|57|0.4|15|0.1|1 adet:250
Hurma|mey|282|2.5|75|0.4|1 adet:8
Hurma (Medjool)|mey|277|1.8|75|0.2|1 adet:24
Kuru kayısı|mey|241|3.4|63|0.5|1 adet:8
Kuru üzüm|mey|299|3.1|79|0.5|1 yemek kaşığı:10,1 avuç:30
Kuru incir|mey|249|3.3|64|0.9|1 adet:20
Kuru erik|mey|240|2.2|64|0.4|1 adet:9
Dut kurusu|mey|300|10|67|1.5|1 avuç:30
Hindistan cevizi (taze)|mey|354|3.3|15|33|1 parça:40
Trabzon hurması|mey|70|0.6|19|0.2|1 adet:170
Domates|seb|18|0.9|3.9|0.2|1 orta boy:120,1 dilim:20
Çeri domates|seb|18|0.9|3.9|0.2|1 adet:15
Salatalık|seb|15|0.7|3.6|0.1|1 orta boy:150
Biber (yeşil sivri)|seb|20|0.9|4.6|0.2|1 adet:25
Kapya biber|seb|31|1|6|0.3|1 adet:120
Dolmalık biber|seb|20|0.9|4.6|0.2|1 adet:100
Patlıcan|seb|25|1|6|0.2|1 orta boy:250
Kabak|seb|17|1.2|3.1|0.3|1 orta boy:200
Havuç|seb|41|0.9|10|0.2|1 orta boy:70
Soğan|seb|40|1.1|9|0.1|1 orta boy:110
Taze soğan|seb|32|1.8|7|0.2|1 adet:15
Sarımsak|seb|149|6.4|33|0.5|1 diş:4
Patates (çiğ)|seb|77|2|17|0.1|1 orta boy:170
Patates (haşlanmış)|seb|87|1.9|20|0.1|1 orta boy:150
Tatlı patates|seb|86|1.6|20|0.1|1 orta boy:130
Brokoli|seb|34|2.8|7|0.4|1 kase:90
Karnabahar|seb|25|1.9|5|0.3|1 kase:100
Lahana|seb|25|1.3|6|0.1|1 kase:90
Kırmızı lahana|seb|31|1.4|7|0.2|1 kase:90
Brüksel lahanası|seb|43|3.4|9|0.3|1 adet:20
Ispanak|seb|23|2.9|3.6|0.4|1 kase:30,1 demet:250
Marul|seb|15|1.4|2.9|0.2|1 yaprak:15,1 kase:50
Roka|seb|25|2.6|3.7|0.7|1 kase:20
Maydanoz|seb|36|3|6|0.8|1 demet:50,1 yemek kaşığı:4
Dereotu|seb|43|3.5|7|1.1|1 demet:40
Nane (taze)|seb|44|3.3|8|0.7|1 demet:30
Semizotu|seb|20|2|3.4|0.4|1 kase:50
Pancar|seb|43|1.6|10|0.2|1 adet:100
Turp|seb|16|0.7|3.4|0.1|1 adet:10
Kereviz (kök)|seb|42|1.5|9|0.3|1 adet:300
Pırasa|seb|61|1.5|14|0.3|1 adet:200
Enginar|seb|47|3.3|11|0.2|1 adet:120
Bamya|seb|33|1.9|7|0.2|1 kase:100
Taze fasulye|seb|31|1.8|7|0.2|1 kase:110
Bezelye|seb|81|5.4|14|0.4|1 kase:145
Mısır (haşlanmış)|seb|96|3.4|21|1.5|1 koçan:150,1 kase:150
Mantar|seb|22|3.1|3.3|0.3|1 kase:70,1 adet:18
Kuşkonmaz|seb|20|2.2|3.9|0.1|1 adet:16
Zeytin (yeşil)|kah|145|1|3.8|15|1 adet:4,10 adet:40
Zeytin (siyah)|kah|200|1.6|6|20|1 adet:4,10 adet:40
Turşu (karışık)|seb|15|0.6|3|0.2|1 kase:80
Beyaz ekmek|tah|265|8.9|49|3.2|1 dilim:30,1 ince dilim:20,çeyrek ekmek:60
Tam buğday ekmeği|tah|247|13|41|3.4|1 dilim:30
Çavdar ekmeği|tah|259|8.5|48|3.3|1 dilim:30
Kepekli ekmek|tah|240|10|43|3|1 dilim:30
Ekşi mayalı ekmek|tah|245|9|47|1.5|1 dilim:35
Lavaş|tah|275|9|55|1.5|1 adet:60
Bazlama|tah|270|8|52|3|1 adet:120
Pide ekmeği|tah|275|9|55|1.2|1 dilim:50
Simit|tah|330|10|60|5|1 adet:110,yarım:55
Poğaça (sade)|tah|380|8|42|20|1 adet:80
Açma|tah|390|7|45|20|1 adet:90
Kruvasan|tah|406|8|46|21|1 adet:60
Galeta|tah|410|12|72|8|1 adet:8
Grissini|tah|412|12|68|10|1 adet:5
Bulgur (pişmiş)|tah|83|3.1|19|0.2|1 porsiyon:150,1 su bardağı:180
Bulgur (çiğ)|tah|342|12|76|1.3|1 su bardağı:160
Pirinç pilavı|tah|160|2.8|30|3.5|1 porsiyon:150,1 kepçe:80
Pirinç (çiğ)|tah|360|6.6|79|0.6|1 su bardağı:190
Esmer pirinç (pişmiş)|tah|123|2.7|26|1|1 porsiyon:150
Makarna (pişmiş)|tah|158|5.8|31|0.9|1 porsiyon:200,1 kase:140
Makarna (çiğ)|tah|371|13|75|1.5|1 porsiyon:80
Tam buğday makarna (pişmiş)|tah|149|6|30|1.7|1 porsiyon:200
Erişte (pişmiş)|tah|138|4.5|25|2|1 porsiyon:180
Kuskus (pişmiş)|tah|112|3.8|23|0.2|1 porsiyon:150
Kinoa (pişmiş)|tah|120|4.4|21|1.9|1 porsiyon:150
Yulaf ezmesi|tah|379|13|68|6.5|1 yemek kaşığı:10,1 su bardağı:90,yarım su bardağı:45
Granola|tah|471|10|64|20|1 kase:50
Mısır gevreği|tah|378|7|84|0.9|1 kase:30
Müsli|tah|367|10|66|6|1 kase:50
Un (beyaz)|tah|364|10|76|1|1 su bardağı:120,1 yemek kaşığı:10
Tam buğday unu|tah|340|13|72|2.5|1 su bardağı:120
Pirinç patlağı|tah|387|8|81|2.8|1 adet:9
Tortilla|tah|310|8|50|8|1 adet:45
Hamburger ekmeği|tah|280|9|50|4.3|1 adet:60
Bebe bisküvisi|atis|440|7|72|13|1 adet:8
Kırmızı mercimek (pişmiş)|bak|116|9|20|0.4|1 kase:200
Yeşil mercimek (pişmiş)|bak|116|9|20|0.4|1 kase:200
Kırmızı mercimek (çiğ)|bak|352|24|60|1.1|1 su bardağı:190
Nohut (haşlanmış)|bak|164|8.9|27|2.6|1 kase:160,1 yemek kaşığı:15
Nohut (çiğ)|bak|378|20|63|6|1 su bardağı:180
Kuru fasulye (haşlanmış)|bak|127|8.7|23|0.5|1 kase:180
Barbunya (haşlanmış)|bak|124|8.7|22|0.5|1 kase:180
Börülce (haşlanmış)|bak|116|7.7|21|0.5|1 kase:170
Bakla (taze)|bak|72|5.6|12|0.6|1 kase:110
Edamame|bak|121|12|9|5|1 kase:155
Leblebi|kur|370|19|58|5.5|1 avuç:30
Humus|kah|166|7.9|14|9.6|1 yemek kaşığı:15,1 kase:120
Soya fasulyesi (haşlanmış)|bak|173|17|10|9|1 kase:170
Dana kıyma (orta yağlı)|et|250|17|0|20|100 gram:100
Dana kıyma (yağsız)|et|170|20|0|10|100 gram:100
Dana bonfile|et|180|27|0|8|1 porsiyon:150
Dana antrikot|et|250|24|0|17|1 porsiyon:200
Kuzu pirzola|et|280|25|0|20|1 adet:60
Kuzu eti (but)|et|230|26|0|14|1 porsiyon:150
Kavurma|et|330|25|0|25|1 porsiyon:100
Köfte (ızgara)|et|240|18|5|16|1 adet:30,1 porsiyon (6 adet):180
Tavuk göğüs (ızgara)|et|165|31|0|3.6|1 porsiyon:150,1 adet:200
Tavuk göğüs (çiğ)|et|120|23|0|2.6|1 adet:200
Tavuk but (derisiz, pişmiş)|et|209|26|0|11|1 adet:120
Tavuk kanat|et|266|27|0|17|1 adet:35
Tavuk baget|et|195|24|0|11|1 adet:90
Hindi füme|et|105|17|2|3|1 dilim:15
Hindi göğüs|et|135|30|0|1|1 porsiyon:150
Ciğer (dana, pişmiş)|et|175|27|5|5|1 porsiyon:120
Somon (fırın)|et|206|22|0|13|1 porsiyon:150,1 dilim:120
Levrek (ızgara)|et|124|24|0|2.6|1 adet:250
Çupra (ızgara)|et|130|24|0|3.5|1 adet:250
Hamsi (tava)|et|240|20|8|14|1 porsiyon:150
Hamsi (ızgara)|et|180|22|0|10|1 porsiyon:150
Uskumru|et|205|19|0|14|1 adet:150
Sardalya|et|208|25|0|11|1 adet:30
Ton balığı (suda)|et|116|26|0|0.8|1 kutu (süzülmüş):120
Ton balığı (yağlı)|et|198|29|0|8|1 kutu (süzülmüş):120
Karides|et|99|24|0.2|0.3|1 porsiyon:100,1 adet:8
Kalamar (tava)|et|175|18|8|7.5|1 porsiyon:150
Midye dolma|fas|170|7|22|6|1 adet:25
Sucuk|kah|452|22|2|40|1 dilim:8,5 dilim:40
Pastırma|kah|250|30|1|14|1 dilim:8
Salam|kah|336|14|2|30|1 dilim:10
Sosis|kah|300|11|3|27|1 adet:50
Jambon (hindi)|kah|110|17|2|3.5|1 dilim:15
Yumurta|sut|143|13|0.7|9.5|1 adet:55,1 büyük:60
Yumurta akı|sut|52|11|0.7|0.2|1 adet:33
Haşlanmış yumurta|sut|155|13|1.1|11|1 adet:50
Sahanda yumurta|sut|196|14|0.8|15|1 adet:55
Omlet (sade)|sut|154|11|0.6|12|2 yumurtalı:120
Süt (tam yağlı)|sut|61|3.2|4.8|3.3|1 su bardağı:200,1 bardak:250
Süt (yarım yağlı)|sut|46|3.3|4.8|1.6|1 su bardağı:200
Süt (yağsız)|sut|35|3.4|5|0.1|1 su bardağı:200
Laktozsuz süt|sut|47|3.3|4.8|1.5|1 su bardağı:200
Yoğurt (tam yağlı)|sut|61|3.5|4.7|3.3|1 kase:150,1 yemek kaşığı:20
Yoğurt (yarım yağlı)|sut|46|3.8|5|1.5|1 kase:150
Süzme yoğurt|sut|97|9|4|5|1 kase:150,1 yemek kaşığı:25
Yunan yoğurdu (yağsız)|sut|59|10|3.6|0.4|1 kase:150
Kefir|sut|52|3.4|4.5|2|1 su bardağı:200
Ayran|ic|36|1.8|2.6|1.9|1 bardak:200,1 küçük kutu:170
Beyaz peynir (tam yağlı)|sut|264|16|1.5|21|1 dilim:30,1 kibrit kutusu:30
Beyaz peynir (az yağlı)|sut|190|19|2|12|1 dilim:30
Kaşar peyniri|sut|380|26|1.5|30|1 dilim:20,1 ince dilim:12
Tulum peyniri|sut|370|22|1|31|1 dilim:30
Lor peyniri|sut|90|12|3|3|1 yemek kaşığı:20,1 kase:100
Labne|sut|245|7|4|23|1 yemek kaşığı:20
Krem peynir|sut|342|6|4|34|1 yemek kaşığı:20
Hellim|sut|320|22|2|25|1 dilim:30
Çökelek|sut|100|14|4|3|1 yemek kaşığı:20
Mozzarella|sut|280|28|3|17|1 dilim:20
Parmesan|sut|431|38|4|29|1 yemek kaşığı rendesi:5
Dil peyniri|sut|300|23|2|22|1 porsiyon:30
Tereyağı|kah|717|0.9|0.1|81|1 tatlı kaşığı:5,1 yemek kaşığı:14
Krema|sut|340|2|3|36|1 yemek kaşığı:15
Kaymak|sut|560|3|3|60|1 yemek kaşığı:20
Zeytinyağı|kah|884|0|0|100|1 tatlı kaşığı:5,1 yemek kaşığı:13
Ayçiçek yağı|kah|884|0|0|100|1 yemek kaşığı:13
Fındık|kur|628|15|17|61|1 avuç:30,10 adet:14
Ceviz|kur|654|15|14|65|1 adet içi:5,1 avuç:30
Badem|kur|579|21|22|50|10 adet:12,1 avuç:30
Antep fıstığı|kur|560|20|28|45|1 avuç:30
Yer fıstığı|kur|567|26|16|49|1 avuç:30
Kaju|kur|553|18|30|44|1 avuç:30
Ay çekirdeği (iç)|kur|584|21|20|51|1 yemek kaşığı:9,1 avuç:30
Kabak çekirdeği (iç)|kur|559|30|11|49|1 yemek kaşığı:9
Chia tohumu|kur|486|17|42|31|1 yemek kaşığı:12
Keten tohumu|kur|534|18|29|42|1 yemek kaşığı:10
Susam|kur|573|18|23|50|1 yemek kaşığı:9
Fıstık ezmesi|kah|588|25|20|50|1 yemek kaşığı:16
Tahin|kah|595|17|21|54|1 yemek kaşığı:15
Pekmez|kah|293|0|72|0|1 yemek kaşığı:20
Tahin pekmez|kah|440|8|47|26|1 yemek kaşığı:20
Bal|kah|304|0.3|82|0|1 tatlı kaşığı:7,1 yemek kaşığı:21
Reçel|kah|250|0.4|62|0.1|1 tatlı kaşığı:10,1 yemek kaşığı:20
Fındık kreması (kakaolu)|kah|539|6.3|58|31|1 yemek kaşığı:20
Toz şeker|kah|387|0|100|0|1 çay kaşığı:4,1 küp:3,1 yemek kaşığı:12
Ketçap|kah|112|1.2|26|0.1|1 yemek kaşığı:15
Mayonez|kah|680|1|0.6|75|1 yemek kaşığı:14
Light mayonez|kah|300|0.9|9|29|1 yemek kaşığı:15
Hardal|kah|66|4|6|3.3|1 tatlı kaşığı:5
Domates salçası|kah|82|4.3|19|0.5|1 yemek kaşığı:16
Biber salçası|kah|90|3.5|15|1.5|1 yemek kaşığı:16
Nar ekşisi|kah|260|0.5|65|0|1 yemek kaşığı:15
Menemen|yem|105|5.5|5|7|1 porsiyon:200
Mercimek çorbası|cor|58|3.5|8.5|1.2|1 kase:250
Ezogelin çorbası|cor|60|2.8|9|1.5|1 kase:250
Tavuk suyu çorba|cor|45|3|5|1.5|1 kase:250
Yayla çorbası|cor|55|2.5|6.5|2|1 kase:250
Domates çorbası|cor|50|1.2|7|2|1 kase:250
Tarhana çorbası|cor|55|2|8|1.6|1 kase:250
İşkembe çorbası|cor|75|6|3|4.5|1 kase:250
Sebze çorbası|cor|35|1.2|5.5|1|1 kase:250
Mantar çorbası|cor|60|1.6|5|3.8|1 kase:250
Kuru fasulye yemeği|yem|110|6|14|3.5|1 porsiyon:250
Nohut yemeği|yem|120|6|15|4|1 porsiyon:250
Etli nohut|yem|135|8|13|5.5|1 porsiyon:250
Zeytinyağlı taze fasulye|yem|70|1.6|7|4|1 porsiyon:200
Etli taze fasulye|yem|85|5|6|4.5|1 porsiyon:250
Türlü|yem|75|3|7|4|1 porsiyon:250
Karnıyarık|yem|150|6|8|10|1 adet:250
İmam bayıldı|yem|120|1.7|9|9|1 adet:250
Musakka|yem|130|6|8|8|1 porsiyon:250
Etli kuru köfte|yem|240|18|6|16|1 adet:30
Izgara köfte porsiyon|yem|240|18|5|16|1 porsiyon:180
İnegöl köfte|yem|260|17|4|20|1 porsiyon:200
Kadınbudu köfte|yem|240|14|12|15|1 adet:70
İzmir köfte|yem|125|8|8|7|1 porsiyon:300
Mercimek köftesi|yem|160|6|28|3|1 adet:30
Çiğ köfte (etsiz)|fas|170|5|33|2|1 adet:30,1 dürüm:200
İçli köfte|yem|250|10|26|12|1 adet:80
Etli yaprak sarma|yem|160|7|14|8|1 adet:30
Zeytinyağlı yaprak sarma|yem|160|2.8|22|7|1 adet:25
Biber dolması (etli)|yem|135|7|13|6|1 adet:150
Lahana sarması (etli)|yem|120|6|12|5|1 adet:60
Mantı|yem|190|8|25|6.5|1 porsiyon:250
Su böreği|yem|260|10|24|14|1 dilim:120
Kol böreği (peynirli)|yem|300|9|30|16|1 dilim:100
Ispanaklı börek|yem|240|7|25|13|1 dilim:100
Patatesli börek|yem|250|5|30|12|1 dilim:100
Sigara böreği|yem|290|9|25|17|1 adet:30
Gözleme (peynirli)|yem|240|10|30|9|1 adet:200
Gözleme (patatesli)|yem|230|5|35|8|1 adet:200
Tavuk sote|yem|135|17|5|5|1 porsiyon:250
Fırın tavuk (but)|yem|210|23|1|13|1 adet:150
Tavuk şiş|yem|160|25|2|6|1 porsiyon:180,1 şiş:90
Adana kebap|fas|275|17|2|22|1 porsiyon:180,1 şiş:90
Urfa kebap|fas|260|18|2|20|1 porsiyon:180
İskender|fas|190|11|14|10|1 porsiyon:400
Döner (et, porsiyon)|fas|230|19|4|15|1 porsiyon:150
Tavuk döner (porsiyon)|fas|185|20|3|10|1 porsiyon:150
Et döner dürüm|fas|245|13|23|11|1 adet:280
Tavuk döner dürüm|fas|210|13|23|7|1 adet:280
Tavuk döner ekmek arası|fas|230|13|27|7.5|1 adet:250
Lahmacun|fas|235|10|33|7|1 adet:150
Pide (kıymalı)|fas|255|12|31|9|1 adet:350,1 dilim:60
Pide (kaşarlı)|fas|280|12|32|12|1 adet:330
Pide (kuşbaşılı)|fas|245|14|29|8|1 adet:350
Kokoreç (yarım ekmek)|fas|265|12|22|14|1 adet:250
Islak hamburger|fas|260|10|30|11|1 adet:120
Tantuni dürüm|fas|210|12|22|8|1 adet:250
Balık ekmek|fas|210|12|22|8|1 adet:300
Kumpir|fas|170|4.5|19|8.5|1 adet:500
Pilav üstü tavuk|fas|165|10|22|4|1 porsiyon:350
Nohutlu pilav|tah|165|4.5|29|3.5|1 porsiyon:250
Bulgur pilavı|tah|130|3|22|3.5|1 porsiyon:150
Şehriye pilavı|tah|165|3|29|4|1 porsiyon:150
Patates kızartması|fas|312|3.4|41|15|1 porsiyon küçük:110,1 porsiyon orta:150,1 porsiyon büyük:200
Fırın patates|yem|130|2|18|5.5|1 porsiyon:200
Patates püresi|yem|105|2|15|4.2|1 porsiyon:200
Çoban salata|yem|45|1|4|3|1 kase:200
Mevsim salata|yem|40|1.3|4|2.5|1 kase:200
Gavurdağı salatası|yem|110|2.5|6|9|1 kase:200
Kısır|yem|150|3.5|22|5.5|1 porsiyon:150
Piyaz|yem|135|5|15|6|1 porsiyon:200
Cacık|yem|45|2.5|3.5|2.5|1 kase:200
Haydari|kah|160|6|4|13|1 yemek kaşığı:20
Ezme|kah|60|1.5|8|2.5|1 yemek kaşığı:20
Sezar salata|yem|155|7|7|11|1 porsiyon:300
Ton balıklı salata|yem|105|9|5|5.5|1 porsiyon:300
Tavuklu salata|yem|110|11|4|5.5|1 porsiyon:300
Makarna (domates soslu)|yem|135|4.5|24|2.5|1 porsiyon:300
Makarna (kıymalı soslu)|yem|165|8|21|5.5|1 porsiyon:300
Fettuccine Alfredo|yem|240|8|25|12|1 porsiyon:300
Pizza (karışık)|fas|266|11|33|10|1 dilim:110,1 orta pizza:880
Pizza (margarita)|fas|250|10|31|9.5|1 dilim:100
Hamburger|fas|250|13|25|11|1 adet:220
Cheeseburger|fas|265|14|23|13|1 adet:240
Tavuk burger|fas|240|12|25|10|1 adet:200
Tavuk nugget|fas|296|15|17|19|1 adet:17,6 adet:100
Hot dog|fas|265|10|24|15|1 adet:130
Tost (kaşarlı)|fas|300|13|33|13|1 adet:120
Karışık tost|fas|310|14|31|15|1 adet:150
Kaşarlı sandviç|fas|280|12|32|11|1 adet:150
Wrap (tavuklu)|fas|210|12|21|8.5|1 adet:250
Sushi (somonlu rulo)|fas|150|6|25|2.8|1 parça:30,8 parça:240
Falafel|fas|333|13|32|18|1 adet:17
Kumru|fas|255|12|28|10|1 adet:250
Waffle (meyveli)|tat|300|6|42|12|1 adet:250
Baklava|tat|428|6.5|52|22|1 dilim:40
Fıstıklı baklava|tat|440|7|50|24|1 dilim:40
Şöbiyet|tat|450|7|49|25|1 adet:45
Kadayıf|tat|370|5|56|14|1 porsiyon:120
Künefe|tat|340|9|40|16|1 porsiyon:200
Sütlaç|tat|125|3.4|21|3|1 kase:200
Fırın sütlaç|tat|135|3.5|22|3.5|1 kase:200
Kazandibi|tat|150|3.5|25|4|1 porsiyon:150
Tavuk göğsü (tatlı)|tat|150|5|24|3.5|1 porsiyon:150
Muhallebi|tat|130|3.5|21|3.5|1 kase:150
Keşkül|tat|160|4|22|6.5|1 kase:150
Aşure|tat|160|3|33|2|1 kase:200
Revani|tat|330|4.5|55|10|1 dilim:80
Şekerpare|tat|420|5|60|18|1 adet:40
Tulumba tatlısı|tat|380|3|55|17|1 adet:25
Lokma|tat|360|4|50|16|1 adet:15
İrmik helvası|tat|390|5|55|17|1 porsiyon:100
Tahin helvası|tat|516|12|55|29|1 dilim:30
Kabak tatlısı|tat|150|0.8|36|0.3|1 porsiyon:150
Ayva tatlısı|tat|180|0.6|44|0.5|yarım ayva:200
Güllaç|tat|170|4|30|4|1 dilim:150
Profiterol|tat|330|5|30|21|1 porsiyon:150
Trileçe|tat|240|5|33|10|1 dilim:150
Cheesecake|tat|321|5.5|26|22|1 dilim:120
Brownie|tat|466|6|50|29|1 dilim:60
Yaş pasta (çikolatalı)|tat|370|5|45|19|1 dilim:120
Yaş pasta (meyveli)|tat|280|4.5|38|12|1 dilim:120
Kek (sade)|tat|380|6|55|15|1 dilim:60
Islak kek|tat|370|5|50|17|1 dilim:80
Kurabiye|tat|480|6|62|23|1 adet:20
Tiramisu|tat|283|4.5|28|17|1 dilim:120
Dondurma (sade)|tat|207|3.5|24|11|1 top:50,1 külah:100
Dondurma (çikolatalı)|tat|216|3.8|28|11|1 top:50
Meyveli dondurma (sorbe)|tat|130|0.5|32|0.3|1 top:50
Lokum|tat|360|0.2|90|0.2|1 adet:15
Pişmaniye|tat|490|3|72|21|1 porsiyon:30
Cevizli sucuk|tat|385|6|60|14|1 dilim:40
Sütlü çikolata|atis|535|7.6|59|30|1 kare:5,1 tablet (80 g):80
Bitter çikolata (%70)|atis|598|7.8|46|43|1 kare:5,1 tablet:80
Beyaz çikolata|atis|539|5.9|59|32|1 kare:5
Çikolatalı gofret|atis|520|6|62|27|1 adet (36 g):36
Çikolata kaplı bisküvi|atis|500|6|64|25|1 adet:30
Kremalı bisküvi|atis|480|5|68|21|1 adet:10
Sade bisküvi (petibör)|atis|440|7|74|12|1 adet:6
Yulaflı bisküvi|atis|470|7|66|20|1 adet:12
Kraker|atis|460|9|65|18|1 avuç:30
Patates cipsi|atis|536|7|53|34|1 küçük paket:30,1 avuç:20
Mısır cipsi|atis|500|7|62|25|1 küçük paket:30
Patlamış mısır (tuzlu)|atis|430|9|59|17|1 kase:20,1 sinema boy:90
Kek (paketli, kakaolu)|atis|420|5|55|20|1 adet:45
Protein bar|atis|380|30|38|12|1 adet:50
Müsli bar|atis|420|6|64|16|1 adet:25
Şekerleme (meyveli jöle)|atis|340|6|78|0|1 adet:4,1 paket:80
Sakız (şekerli)|atis|360|0|95|0.3|1 adet:3
Kuru meyve karışımı|atis|450|9|50|25|1 avuç:30
Su|ic|0|0|0|0|1 su bardağı:200,1 şişe (500 ml):500
Maden suyu|ic|0|0|0|0|1 şişe:200
Çay (şekersiz)|ic|1|0|0.3|0|1 ince belli:100,1 kupa:250
Çay (1 şekerli)|ic|17|0|4|0|1 ince belli:100
Türk kahvesi (sade)|ic|7|0.3|1|0|1 fincan:70
Türk kahvesi (orta)|ic|20|0.3|4.5|0|1 fincan:70
Filtre kahve|ic|2|0.1|0|0|1 kupa:250
Espresso|ic|9|0.1|1.7|0.2|1 shot:30
Americano|ic|2|0.1|0|0|1 orta boy:350
Latte (tam yağlı süt)|ic|56|3|4.6|3|1 orta boy:350
Latte (yağsız süt)|ic|35|3.3|5|0.1|1 orta boy:350
Cappuccino|ic|45|2.4|3.8|2.4|1 orta boy:300
Flat white|ic|55|3|4.5|3|1 adet:180
Mocha|ic|80|3|10|3.5|1 orta boy:350
Buzlu latte|ic|45|2.3|3.7|2.4|1 orta boy:350
Frappuccino (karamel)|ic|95|1.5|16|3|1 orta boy:350
Sıcak çikolata|ic|90|3.5|12|3.5|1 kupa:250
Salep|ic|95|3|15|2.8|1 kupa:250
Hazır kahve (3'ü 1 arada)|ic|450|4|75|15|1 paket:18
Kola|ic|42|0|10.6|0|1 kutu:330,1 küçük şişe:250,1 litre:1000
Kola (şekersiz)|ic|0.3|0|0|0|1 kutu:330
Gazoz|ic|40|0|10|0|1 kutu:330
Meyveli soda|ic|25|0|6|0|1 şişe:200
Portakal suyu (taze)|ic|45|0.7|10|0.2|1 su bardağı:200
Meyve suyu (paketli)|ic|50|0.2|12|0|1 kutu:200,1 su bardağı:200
Limonata|ic|45|0.1|11|0|1 bardak:250
Buzlu çay (şeftali)|ic|30|0|7.5|0|1 kutu:330
Enerji içeceği|ic|45|0|11|0|1 kutu:250
Şalgam suyu|ic|10|0.2|2|0|1 bardak:250
Boza|ic|100|1|22|0.5|1 bardak:200
Kefir (meyveli)|ic|70|3|10|1.8|1 şişe:250
Sütlü kakao içeceği|ic|75|3.2|11|2|1 kutu:200
Smoothie (meyveli)|ic|60|1|14|0.3|1 bardak:300
Protein shake (sütle)|ic|80|10|5|2|1 bardak:300
Bira|ic|43|0.5|3.6|0|1 kutu:330,1 büyük:500
Alkolsüz bira|ic|20|0.2|4.5|0|1 kutu:330
Kırmızı şarap|ic|85|0.1|2.6|0|1 kadeh:150
Beyaz şarap|ic|82|0.1|2.6|0|1 kadeh:150
Rakı|ic|260|0|0|0|1 tek:35,1 duble:70
Viski|ic|250|0|0|0|1 tek:35
Votka|ic|231|0|0|0|1 tek:35
Kokteyl (ortalama)|ic|160|0|15|0|1 kadeh:200
`.trim().split('\n').map((row, i) => {
  const [ad, kat, kcal, p, k, y, por] = row.split('|');
  return {id: 'g' + i, ad, kat, kcal: +kcal, p: +p, k: +k, y: +y, por: (por || '').split(',').filter(Boolean).map(x => { const j = x.lastIndexOf(':'); return {ad: x.slice(0, j), g: +x.slice(j + 1)}; })};
});

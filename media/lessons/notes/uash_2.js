let questions = [
  {
    question: "Prostatitda:",
    answer: "o'tkir infektsiya qorinning pastki o'ng kvadrantida og'riq bilan kechadi",
    options: ["potentsiayaning keskin pasayishi", "o'tkir infektsiya qorinning pastki o'ng kvadrantida og'riq bilan kechadi", "2 hafta davomida antibiotiklar buyurish yetarli", "qattiq og'riqda - ibuprofen beriladi"]
  },
  {
    question: "Ichakning irritabiy sindromining eng ko'p uchraydigan belgilari:",
    answer: "asosan ich qotishi",
    options: ["asosan ich qotishi", "defekatsiya chastotasining o'zgarishi", "defekatsiyadan oldin qorin og'rig'i", "sutli parhezni tayinlagandan keyin simptomlarning yaxshilanishi"]
  },
  {
    question: "Ichakning irritabiy sindromi diagnostikasi mezonlari:",
    answer: "malinali jele najas",
    options: ["ertalab ko'ngil aynishi", "belbog‘dagi og‘riq", "malinali jele najas", "to'liq bo'shatilish hissi"]
  },
  {
    question: "Bolalarda qizilo'ngach-oshqozon reflyuksi quyidagi belgilar bilan tavsiflanadi:",
    answer: "pnevmoniyaning rivojlanish xavfi",
    options: ["kam vazn ortishi bilan oziq-ovqat regürjitatsiyasi", "stridorli nafas olish", "pnevmoniyaning rivojlanish xavfi", "oziq-ovqat regürjitatsiyasi va normal jismoniy rivojlanish"]
  },
  {
    question: "Gastrofibroduodenoskopiyaning afzalliklari nimada?",
    answer: "oshqozon-ichak trakti patologiyasini tasdiqlash yoki istisno qilish imkonini beradi",
    options: ["oshqozon-ichak trakti patologiyasini tasdiqlash yoki istisno qilish imkonini beradi", "GU va 12-o'n ikki barmoqli ichak yarasi uchun skrining uchun foydalanish mumkin", "asemptomatik bosqichda saraton skriningi uchun foydalanish mumkin", "qurilmaga ehtiyotkorlik bilan ishlov berishni talab qilmaydi"]
  },
  {
    question: "Vismut sulfatning yon ta'siri",
    answer: "najasning quyuq rangi",
    options: ["me'da shirasining ikkilamchi gipersekresiyasi", "nefrokalsinoz", "ich qotishi", "najasning quyuq rangi"]
  },
  {
    question: "Quyidagilardan qaysi biri astsit haqida to'g'ri emas?",
    answer: "jigar sirrozining kam uchraydigan asoratlaridan biri",
    options: ["jigar sirrozining kam uchraydigan asoratlaridan biri", "astsit sariqlik bilan kechadi", "o'ng qorincha etishmovchiligi belgisi bo'lishi mumkin", "SLEda kuzatilishi mumkin"]
  },
  {
    question: "O'ng gipoxondriyadagi og'riq quyidagilarga xos emas:",
    answer: "o'n ikki barmoqli ichak yarasi",
    options: ["xolelitiyoz", "pankreatit", "xoletsistit", "o'n ikki barmoqli ichak yarasi"]
  },
  {
    question: "Sariqlik teri qichishi bilan kechadi:",
    answer: "xoletsistit bilan",
    options: ["Propranalolo bilan zaharlanish", "xoletsistit bilan", "virusli gepatit bilan", "jigarning alkogolli sirrozi bilan"]
  },
  {
    question: "Pankreatitning klinik ko'rinishiga quyidagilar kiradi:",
    answer: "qorin bo'shlig'idagi kuchli belbog' og'rig'i xurujlari",
    options: ["astsitlar", "sariqlik", "isitma", "qorin bo'shlig'idagi kuchli belbog' og'rig'i xurujlari"]
  },
  {
    question: "Bolaning ovqatlanishiga nisbatan(noto'g'ri javobni tanlang):",
    answer: "emizikli bolaga 6 oylikdan boshlab sigir suti buyuriladi",
    options: ["emizish tavsiya etiladi", "emizikli bolaga 6 oylikdan boshlab sigir suti buyuriladi", "birinchi qo'shimcha ovqat sifatida temir bilan boyitilgan bo'tqalartavsiyaetiladi", "mumkin bo'lgan allergik reaktsiyalarni aniqlash uchun 2-4 kun oralig'ida yangi mahsulotlar beriladi"]
  },
  {
    question: "Javoblar orasida qaysi biri noto’g’ri:",
    answer: "qizamiq, otit va sinusitning asoratlari",
    options: ["3 haftadan 2 oygacha bo'lgan bolalarda ichak sanchig'i kuzatiladi", "ichak sanchig'ida xolinoblakatarni berish kerak", "pastki markaziy tishlar birinchi bo'lib chiqadi", "tish chiqishi paytida bolaning qattiq bezovtalik va yig'lashida siz paratsetamolni berishingiz mumkin"]
  },
  {
    question: "Bolalardagi ich qotishi (noto'g'ri javobni tanlang):",
    answer: "kattalarga xos bo'lgan najasning chastotasi bolada 7 yoshgacha shakllanadi",
    options: ["umumiy sabab - to'yib ovqatlanmaslik", "kattalarga xos bo'lgan najasning chastotasi bolada 7 yoshgacha shakllanadi", "1", "5 yoshdan katta bola", "qabziyatning oldini olish uchun", "sharbatlar", "sabzavot", "guruch iste'mol qilishi", "yurishi kerak", "chaqaloqlarda uzoq davom etgan ich qotishida biz Girshsprung kasalligidan shubhalanamiz"]
  },
  {
    question: "Javoblar orasida qaysi biri noto’g’ri:",
    answer: "qizamiq, otit va sinusitning asoratlari",
    options: ["o'tkir epiglottit isitma", "holsizlik", "so'lak oqishi bilan kechadi", "6 oydan 6 yoshgacha bo'ladi", "o'tkir epiglottitni parainfluenza viruslari qo'zg'atadi", "krup bilan kuchli", "qo'ng'iroqli yo'tal va nafas olishda shovqin bor", "epiglottitda sefalosporinlar samarali"]
  },
  {
    question: "Ko'ngil aynishi va qayt qilishning metabolik sabablari:",
    answer: "uremiya",
    options: ["migren", "dori vositalari bilan zaharlanish", "Menyer kasalligi", "uremiya"]
  },
  {
    question: "Yarani jarrohlik yo'li bilan davolashga ko'rsatmalar:",
    answer: "yomon xulqlilik",
    options: ["yomon xulqlilik", "anemiya", "BMIning 27 dan past bo'lishi", "tez-tez yurak urishi"]
  },
  {
    question: "B12 tanqisligi sabablari:",
    answer: "Barcha javoblar to'g'ri",
    options: ["Qattiq vegetarian dietasi.", "P malabsorbtsiya", "Kronkasalligi", "Barcha javoblar to'g'ri"]
  },
  {
    question: "Quyidagilar to’g’rimi?:",
    answer: "gerpes elementlari paydo bo’lishidan avval qichishish, sanchish, dizuriya kuzatiladi",
    options: ["Agepatitida–inkubatsion davr 30-50kun", "sariqlik bilan kechadi", "virus tashuvchilik bor", "passiv immunizatsiya o’tkazilmaydi", "Bgepatitida –inkubatsion davr 40-180 kun", "sariqlik", "artalgiya", "toshma bilan kechadi", "virus tashuvchilik bor", "passiv immunizatsiya o’tkaziladi", "C gepatitida -inkubatsion davr 15-45 kun", "sariqlik kuzatilmasligi mumkin", "virus tashuvchilik yo’q", "passiv immunizatsiya o’tkazilmaydi", "D gepatitida–inkubatsion davr 15-45 kun", "sariqlik kuzatilmasligi mumkin", "virus tashuvchilik yo’q", "passiv immunizatsiya o’tkaziladi"]
  },
  {
    question: "Revmatoid artritga xos:",
    answer: "kasallik asosini autoimmun jarayon tashkil etadi",
    options: ["asosan erkaklar kasallanadi", "kasallik asosini autoimmun jarayon tashkil etadi", "davolovchi jismoniy tarbiya mumkin emas", "bo‘g‘inlardagi og‘riq mexanik xarakterga ega"]
  },
  {
    question: "Otoskleroz",
    answer: "kapsulaning muhrlanishi va uzengi mahkamlanishi bilan tavsiflanadi",
    options: ["irsiy kasallik", "xarakterli - erkaklarda keksalikda", "kapsulaning muhrlanishi va uzengi mahkamlanishi bilan tavsiflanadi", "quloq pardasining qalinlashishi bilan xarakterlanadi"]
  },
  {
    question: "Yangi tug'ilgan chaqaloqlarning reflekslariga nisbatan, bu noto'g'ri:",
    answer: "Moro refleksi umurtqa pog'onasi bo'ylab orqa terisining tirnash xususiyati tufayli yuzaga keladi",
    options: ["Odatda og'iz avtomatizmining reflekslari 6 oyga kamayadi", "himoya refleksi bolaning oyoq-qo'llarining kengayishidan kelib chiqadi va yangi Tug'ilgan chaqaloqning qo'llarini yon tomonga olib borishi bilan namoyon bo'ladi", "Babkin refleksi kaft sohasiga bosim natijasida yuzaga keladi va bola og'zini ochadi va boshini egadi", "Moro refleksi umurtqa pog'onasi bo'ylab orqa terisining tirnash xususiyati tufayli yuzaga keladi"]
  },
  {
    question: "Yuqumli bo'lmagan kelib chiqishi oshqozon-ichak patologiyasi tufayli ko'ngil aynishi va qayt qilish sabablari:",
    answer: "o'tkir qorin",
    options: ["ovqatdan zaharlanish", "o'tkir qorin", "homilador ayollarning toksikozi", "enterobioz"]
  },
  {
    question: "Bemorda ochlik, yurak urishi, ich qotishi, epigastriumda og'riqlar. Avval qanday tekshiruvdan o'tish kerak?",
    answer: "oshqozon-ichak traktining rentgenogrammasi",
    options: ["me'da shirasining tahlili", "oshqozon-ichak traktining rentgenogrammasi", "EGDFS", "kolonoskopiya"]
  },
  {
    question: "Jigar sirrozining klinik belgilari:",
    answer: "ishtahaning yo'qolishi, ko'ngil aynishi, qusish",
    options: ["ishtahaning yo'qolishi", "ko'ngil aynishi", "qusish", "qorinning ko'payishi", "astsit", "jigar kattalashishi", "palpatsiyada og'riq", "o'rgimchak tomirlari", "kaftlarning qizarishi"]
  },
  {
    question: "Jigar sirozining asoratlariga muhim emas:",
    answer: "uremiya",
    options: ["portal gipertenziya", "ensefalopatiya", "jigar etishmovchiligi", "uremiya"]
  },
  {
    question: "Xolelitiyozga xosdir:",
    answer: "titroq bilan birga isitma, o'ng gipoxondrida og'riq, sariqlik",
    options: ["sariqlik", "jigar kattalashishi", "palpatsiyada og'riq palmalarning qizarishi", "astsit", "obstruktiv sariqlik", "epigastral va bel og'rig'i", "o't pufagining kattalashishi", "vazn yo'qotish", "holsizlik", "charchoq", "diareya", "titroq bilan birga isitma", "o'ng gipoxondrida og'riq", "sariqlik", "o'ng gipoxondriyadagi kuchli og'riq", "sariqlik", "isitma", "jigarning kattalashishi", "ko'ngil aynishi va qusish", "SARS belgilari"]
  },
  {
    question: "O'tkir xoletsistit uchun quyidagi belgilar xos emas:",
    answer: "og'riq xurujlari 20 minutgacha",
    options: ["o'ng gipoxondriyadagi og'riq", "o'tning ko'ngil aynishi va qayt qilish", "qattiq sariqlik", "og'riq xurujlari 20 minutgacha"]
  },
  {
    question: "Asoratsiz o'n ikki barmoqli ichak yarasi bo'lgan bemorlarda:",
    answer: "gemoptiz",
    options: ["qonli axlat", "gemoptiz", "epigastriumda mahalliy og'riq", "isitma"]
  },
  {
    question: "Quyidagi belgilar jigar sirroziga mos keladimi?",
    answer: "arterial gipotenziya",
    options: ["gemorragik sindrom", "ich qotishi", "arterial gipotenziya", "asab tizimining astenizatsiyasi"]
  },
  {
    question: "Sariqlik haqida nimasi to'g'ri emas:",
    answer: "obstruktiv sariqlik engil najas bilan ifodalanadi",
    options: ["obstruktiv sariqlik engil najas bilan ifodalanadi", "jigar suprasimon sariqlik", "to'g'ridan-to'g'ri bilirubin tufayli giperbilirubinemiya", "gemolitik sariqlik bilan siydikda bilirubinuriya qayd etiladi", "jigar sariqligi bilan bilvosita bilirubinning konjugatsiya jarayoni buziladi"]
  },
  {
    question: "Disfagiya yuzaga keladigan kasalliklarni belgilang:",
    answer: "skleroderma",
    options: ["oshqozon yarasi", "ichak tutilishi", "skleroderma", "appenditsit"]
  },
  {
    question: "Oshqozon yarasi bilan og'rigan bemorlarni o'rgatishda to'g'ri gaplarni tanlang",
    answer: "qora najas bo'lsa - darhol shifokor bilan maslahatlashing",
    options: ["aspirin mutlaqo kontrendikedir", "kechki 6 dan keyin ovqatlanmang", "Ovqatdan keyin 2 soatdan keyin antasidlarni qabul qiling", "qora najas bo'lsa - darhol shifokor bilan maslahatlashing"]
  },
  {
    question: "Ich ketishini keltirib chiqaruvchi vositalarni belgilang:",
    answer: "antidepressantlar",
    options: ["antidepressantlar", "adrenomimetika", "kortikosteroidlar", "antasidlar"]
  },
  {
    question: "O'n ikki barmoqli ichak yarasiga qanday belgilar xos EMAS?",
    answer: "ich qotishi",
    options: ["yurak urishi", "epigastral sohada och og'riqlar", "ich qotishi", "vazn yo'qotish"]
  },
  {
    question: "Gepatit B to'g'rimi?",
    answer: "artropatiya bilan kechishi mumkin",
    options: ["doim sariqlik bilan kechadi", "bitta bemorda ikki marta paydo bo'lishi mumkin", "artropatiya bilan kechishi mumkin", "yuqori isitma", "titroq", "ko'ngil aynishi", "qusish bilan boshlanadi"]
  },
  {
    question: "Xoletsistit to'g'rimi?",
    answer: "o'tkir xoletsistitni ochlik dietasi bilan davolash samarasiz va xavfli",
    options: ["o'tkir sifatsiz ovqat bilan zaharlangandan keyin qayd etiladi", "orqa tarafga tarqaladigan epigastral og'riqlar bilan kechadi", "75% hollarda koʻngil aynishi va oʻt qusishi bilan kechadi", "o'tkir xoletsistitni ochlik dietasi bilan davolash samarasiz va xavfli"]
  },
  {
    question: "Yuqori o'ng kvadrantda lokalizatsiya qilingan qorindagi og'riqlar sabablari:",
    answer: "o'ng tomonlama pnevmoniya",
    options: ["nospesifik yarali kolit", "churra", "o'tkir miokard infarkti", "o'ng tomonlama pnevmoniya"]
  },
  {
    question: "Pastki chap kvadrantda lokalizatsiya qilingan qorinda og'riq sabablari:",
    answer: "ektopik homiladorlik",
    options: ["o'tkir miokard infarkti", "konjestif gepatomegaliya", "divertikulit", "ektopik homiladorlik"]
  },
  {
    question: "20 yoshli qiz o'ng yonbosh sohasiga o'tgan kindik mintaqasidagi sanchiq og'rig'iga shikoyat qiladi, shuningdek, isitmasi ko'tariladi, anoreksiya bor. Eng to'g'ri tashxis nima?",
    answer: "o‘tkir appenditsit",
    options: ["o‘tkir appenditsit", "Kron kasalligi", "o'tkir xoletsistit", "nonspesifik yarali kolit"]
  },
  {
    question: "18 yoshli qizda to'satdan kuchli epigastral og'riqlar orqa tarafga tarqaladi. Oqargan.Ko'ngil aynishi, qusish, isitma qayd etiladi.Palpatsiyada epigastriumda og'riq.Ichak tovushlari zaiflashadi. Eng to'g'ri tashxis nima?",
    answer: "o'tkir pankreatit",
    options: ["o'tkir xoletsistit", "o'tkir pankreatit", "o'tkir virusli gepatit", "o'tkir appenditsit"]
  },
  {
    question: "16 yoshli bola qon va shilimshiq aralash ich ketishiga shikoyat qiladi. Anamnezdan - ratsiondagi kam tolali.O'rtacha qorin og'rig'i, isitma, zaiflik, vazn yo'qotish.",
    answer: "Kron kasalligi",
    options: ["o'tkir divertikulit", "Kron kasalligi", "nonspesifik yarali kolit", "irritabiy ichak sindromi"]
  },
  {
    question: "GUda qon ketish asoratining to‘g‘ri belgisini ko‘rsating:",
    answer: "\"kofe qoldiqlari\" va melena qusish",
    options: ["diffuz xarakterdagi kuchli og'riq", "oshqozonda to'yish hissi va yaqinda iste'mol qilingan ovqatni qusish", "\"kofe qoldiqlari\" va melena qusish", "dispepsiya", "vazn yo'qotish"]
  },
  {
    question: "GU malign degeneratsiyasining to'g'ri belgisini ko'rsating:",
    answer: "40 yoshdan oshgan, dispepsiya, vazn yo‘qotish",
    options: ["40 yoshdan oshgan", "dispepsiya", "vazn yo‘qotish", "orqa tarafga tarqaladigan doimiy og'riq", "oshqozonda to'yish hissi va yaqinda iste'mol qilingan ovqatni qusish", "«quyuq kofe» va melena qusish"]
  },
  {
    question: "Ochlik og'rig'i, yurak urishi, ich qotishi bilan og'rigan bemorda epigastriumda og'riq bor. Avval qanday tekshiruvdan o'tish kerak?",
    answer: "EFGDS",
    options: ["me’da shirasining tahlili", "oshqozon-ichak traktining rentgenogrammasi", "EFGDS", "irrigoskopiya"]
  },
  {
    question: "Ichak tutilishining sabablari:",
    answer: "irritabiy ichak sindromi",
    options: ["irritabiy ichak sindromi", "gelmintlarning invaziyasi", "mashq qilish", "beta-blokerlarning haddan tashqari dozasi"]
  },
  {
    question: "O'tkir pankreatitda qorinda og'riq kuchayadi:",
    answer: "yotgan holatda",
    options: ["chuqur nafas olish", "harakatlanayotganda yoki yo'talayotganda", "yotgan holatda", "spirtli ichimliklar va / yoki ko'p yog'li ovqatlar ichish"]
  },
  {
    question: "O'tkir appenditsitda qorin og'rig'i kuchayadi:",
    answer: "chuqur nafas olish",
    options: ["chuqur nafas olish", "ovqatlanayotganda", "harakatlanayotganda yoki yo'talayotganda", "spirtli ichimliklar va / yoki ko'p yog'li ovqatlar ichish"]
  },
  {
    question: "Chaqaloqlarda ichak sanchig'iga nisbatan to'g'ri deb hisoblanadi:",
    answer: "hujumlar tushdan keyin sodir bo'ladi",
    options: ["neonatal davrda paydo bo'ladi", "1 haftagacha davom etishi", "hujumlar tushdan keyin sodir bo'ladi", "ko'pincha sezaryen bilan tug'ilgan bolalarda"]
  },
  {
    question: "Yo'g'on ichak poliplari bo'yicha operatsiya qilingan 45 yoshli erkak qorin og'rig'i, takroriy qusish, axlatni ushlab turishdan shikoyat qiladi. Ob'ektiv: bemor qo'zg'aluvchan, qorin simmetrik shishgan, ichak peristaltikasi ko'rinadi. Qorin auskultatsiyasida tushgan tomchi tovushi eshitiladi. Eng ehtimoliy tashxisni ayting:",
    answer: "ichak tutilishi",
    options: ["ichak tutilishi", "tutqich tomirlarining trombozi", "yo'g'on ichak saratoni", "divertikulit"]
  },
  {
    question: "Bolalarda ich qotishining predispozitsiya qiluvchi omillari:",
    answer: "sutli parhezning ustunligi",
    options: ["sutli parhezning ustunligi", "disaxaridaza etishmovchiligi", "hipotiroidizm", "Kushing kasalligi"]
  },
  {
    question: "Ko'ngil aynishi va qusishni davolash quyidagilarni o'z ichiga olmaydi:",
    answer: "qattiq yotoqda dam olish",
    options: ["anamnezni diqqat bilan olish", "najasni tahlil qilish", "yosh ayollar uchun homiladorlik testi", "qattiq yotoqda dam olish"]
  },
  {
    question: "Oshqozon yarasini davolash quyidagilarni o'z ichiga oladi:",
    answer: "yotoqda dam olish va maxsus ovqatlanish",
    options: ["yotoqda dam olish va maxsus ovqatlanish", "H. Piloriyani yo'q qilish uchun uch karra terapiya", "aminoglikozidlar guruhidan antibiotiklar", "12-18 hafta davomida omeprazol"]
  },
  {
    question: "Osteoporozning oldini olishda samarali:",
    answer: "45 yildan keyin, menopauza boshlanishidan 3-4 yil oldin",
    options: ["har qanday yoshda", "35 yildan keyin", "45 yildan keyin", "menopauza boshlanishidan 3-4 yil oldin", "menopauza boshlanganidan keyin"]
  },
  {
    question: "Sizga 54 yoshli erkak 3 oydan beri sternum orqasida yonish hissi va sternum orqasidagi og'riq, bo'yinga nurlanish shikoyati bilan keldi. Yonish hissi odatda antasidlarni qabul qilgandan keyin yo'qoladi. Ushbu alomatlar va jismoniy faoliyat o'rtasida hech qanday bog'liqlik yo'q. Tekshiruvda A\D",
    answer: "ALT, CPK uchun EKG + tahlilini o'tkazing",
    options: ["psixiatrga murojaat qiling va konsultatsiyani yakunlang", "EKG ni olish", "EKG qiling va normal bo'lsa", "omeprazol bering", "ALT", "CPK uchun EKG + tahlilini o'tkazing"]
  },
  {
    question: "Dispepsiya bilan og'rigan bemorlarga quyidagi tavsiyalar to'g'ri:",
    answer: "karavotning bosh uchini ko'taring",
    options: ["kuniga 2 martadan ko'p bo'lmagan ovqatlanish", "ovqatdan 3 soat oldin suv ichmaslik", "karavotning bosh uchini ko'taring", "500 ml gacha gazlangan mineral suv olinadi"]
  },
  {
    question: "2-12 oylik bolada yo'tal borligida, nafas olish tezlashishi haqida 1 daqiqada NSni ko'rsatadi:",
    answer: "1 daqiqada 50 danoshadi.",
    options: ["1 daqiqada 50 danoshadi.", "1 daqiqada 20-40", "1 daqiqada 40 danoshadi", "1 minutda 16-20."]
  },
  {
    question: "Yo'talayotganda quyidagi ma'lumotlarni aniqlashning hojati yo'q:",
    answer: "nikturiya mavjudligi",
    options: ["yo'talning davomiyligi", "bola ichishi mumkin", "ishtahaning paydo bo'lishi", "nikturiya mavjudligi"]
  },
  {
    question: "Bolada og'ir pnevmoniya mavjudligi simptomlar bilant asdiqlanadi, bundan mustasno:",
    answer: "isitma yo'q",
    options: ["pastki ko'krak devorining ichkariga kirishi", "burun qanotlarining kuchlanishi yoki tebranishi", "nafas olishning kuchayishi", "isitma yo'q"]
  },
  {
    question: "Agar bolada isitma bo'lsa, quyidagi ma'lumotlarni aniqlash kerak (bundan tashqari):",
    answer: "bosh og'rig'ining mavjudligi",
    options: ["isitmaning davomiyligi", "allergik toshmalar mavjudligi", "bo'yinning qattiqligi", "bosh og'rig'ining mavjudligi"]
  },
  {
    question: "Bolaning hayoti uchun xavf belgilari quyidagilardan tashqari:",
    answer: "letargiya",
    options: ["letargiya", "bo'yin mushaklari qattiqligi", "koma", "quloqlardan yiringli oqmalar"]
  },
  {
    question: "Javoblar orasida qaysi biri noto’g’ri:",
    answer: "qizamiq, otit va sinusitning asoratlari",
    options: ["Yog' ko'krak sutidagi umumiy kaloriyalarning taxminan 50% ni tashkil qiladi.", "Oziqlantirish boshida sut suvli bo'ladi", "Og’iz sutda kamroq laktoza mavjud", "Ko‘krak sutida to‘yinmagan yog‘ kislotalari miqdori sigir sutiga qaraganda ko‘proq."]
  },
  {
    question: "Ko'krak suti vitaminlariga nisbatan noto'g'ri hisoblanadi:",
    answer: "Ona sutidagi foliy kislotasining miqdori uning ona organizmidagi zahiralariga bog'liq emas",
    options: ["Og'iz suti A vitaminining yaxshi manbaidir", "Yangi tug'ilgan chaqaloqdagi D vitamini homiladorlik va laktatsiya davrida onaning organizmida D vitaminining mavjudligi darajasiga bog'liq.", "Ona sutidagi foliy kislotasining miqdori uning ona organizmidagi zahiralariga bog'liq emas", "Odam suti ruxining bio-mavjudligi yuqori va formulali sinkga qaraganda yaxshiroq so'riladi."]
  },
  {
    question: "Quyidagilardan qaysi biri chaqaloqlarni ko‘krak suti bilan boqishning sog‘liq uchun foydalari qatoriga kirmaydi?",
    answer: "Bolalarda tishlash ko’nikmasi rivojlanishiga ta'sir qilmaydi",
    options: ["Bolalarda tishlash ko’nikmasi rivojlanishiga ta'sir qilmaydi", "O'rta otit va takroriy otitlar bilan kasallanishni kamaytiradi", "Ko'p to'yinmagan yog'li kislotalar ko'rish keskinligini va psixomotor rivojlanishni yaxshilaydi", "Keyingi bolalik davrida semirib ketish xavfini kamaytiradi"]
  },
  {
    question: "Quyidagilardan qaysi biri ona uchun emizishning sog‘liq uchun foydali emas?",
    answer: "Onaning organizmidagi temir moddasining yaxshilanishiga ta'sir qilmaydi",
    options: ["Tug'ruqdan keyingi bepushtlik davrini oshiradi", "Tezlashtirilgan vazn yo'qotish va homiladorlikdan oldingi vaznga qaytish", "Onaning organizmidagi temir moddasining yaxshilanishiga ta'sir qilmaydi", "Premenopozal yoshdagi ko'krak saratoni xavfini kamaytiradi"]
  },
  {
    question: "Emizishga yordam bermaydigan usullar:",
    answer: "Jadvalga muvofiq oziqlantirish",
    options: ["Jadvalga muvofiq oziqlantirish", "Tug'ilgandan so'ng darhol emizish", "Talab bo'yicha tez-tez ovqatlanish", "Bolaning o'z-o'zidan orqaga suyanishiga ruxsat berish"]
  },
  {
    question: "Javoblar orasida qaysi biri noto’g’ri:",
    answer: "qizamiq, otit va sinusitning asoratlari",
    options: ["Ko‘pchilik sog‘lom bolalar 6 oylik tana vaznini ikki baravar oshiradi.", "6 oydan keyin siz qo'shimcha ovqatlarni kiritishingiz kerak", "Qo'shimcha ovqatlar birinchi 12 oy davomida ona sutini to'liq almashtirishi kerak.", "Qo'shimcha oziqlantirish davrida ona suti hajmini saqlab qolish uchun tez-tez emizishni davom ettiring."]
  },
  {
    question: "Muvaffaqiyatli emizish yo'lida noto'g'ri qadamni tanlang:",
    answer: "Yangi tug‘ilgan chaqaloqlarga emizishdan tashqari suv ham bering.",
    options: ["Yangi tug‘ilgan chaqaloqlarga emizishdan tashqari suv ham bering.", "Barchahomiladorayollargaemizishningfoydalarihaqidama'lumotberish", "Onava bola uchunbirxonada 24/7 birgauxlashnimashqqiling", "Talabbo'yichaemizishnirag'batlantirish"]
  },
  {
    question: "Javoblar orasida qaysi biri noto’g’ri:",
    answer: "qizamiq, otit va sinusitning asoratlari",
    options: ["OIV infeksiyasi onaning ona suti orqali bolasiga yuqadi.", "Silga qarshi barcha dorilar emizish bilan mos keladi", "Ona sutida gepatit C virusining aniqlanishi chaqaloqni infektsiya xavfi ostida qoldiradi", "Sigaret chekadigan ayollarda prolaktik darajasi past bo'ladi"]
  },
  {
    question: "Emizish va onaning dori-darmonlari (noto'g'ri javobni tanlang):",
    answer: "Agar ona psixotrop va antikonvulsant dorilarni qabul qilsa, emizishni davom ettiring",
    options: ["Qo'llash mumkin bo'lmagan - agar ona saratonga qarshi dorilarni ishlatsa", "Kontrendikedir – ona radio aktiv moddalardan foydalanganda", "Agar ona psixotrop va antikonvulsant dorilarni qabul qilsa", "emizishni davom ettiring", "Onaning metronidazol va tetratsiklindan foydalanish emizish davrida chaqaloq uchun xavfsizdir"]
  },
  {
    question: "Tirik vaksinalarga quyidagilar kirmaydi:",
    answer: "Qoqsholga qarshi emlash",
    options: ["parotitga qarshi emlash", "BSJ vaktsinasi", "Qoqsholga qarshi emlash", "Qizilchaga qarshi emlash"]
  },
  {
    question: "Noepileptik tutqanoqlari uchun xos emas",
    answer: "gipokalsemiya",
    options: ["takroriy takrorlash", "gipokalsemiya", "Giperinsulinizm", "uremik koma bosqichida paydo bo'lish qobiliyati"]
  },
  {
    question: "Javoblar orasida qaysi biri noto’g’ri:",
    answer: "qizamiq, otit va sinusitning asoratlari",
    options: ["fiziologik sariqlik hayotning 1-36 soatlarida paydo bo'ladi", "patologik sariqlik erta tug'ilgan chaqaloqlarda 2 haftadan ortiq davom etadi", "erta tug'ilgan chaqaloqlarda jigarning yetilmaganligi sariqlik darajasiga ta'sir qiladi", "bilirubinning haddan tashqari ko'p shakllanishi ona va homilaning qon guruhlari mos kelmasa sodir bo'ladi"]
  },
  {
    question: "Javoblar orasida qaysi biri noto’g’ri:",
    answer: "qizamiq, otit va sinusitning asoratlari",
    options: ["gemorragik toshmalarning sababi skarlatinadir", "qizamiq toshmasi pigmentatsiyani qoldiradi", "qizilcha toshmasi 3 kun davom etadi", "shish bilan birga allergik toshmalar"]
  },
  {
    question: "Javoblar orasida qaysi biri noto’g’ri:",
    answer: "qizamiq, otit va sinusitning asoratlari",
    options: ["raxit ORVI va pnevmoniyaning og'ir kechishiga yordam beradi", "Raxitni mahsus davolash butun yil davomida amalga oshiriladi", "Onaning ekstragenital kasalliklari bolalarda raxitning rivojlanishiga yordam beradi", "Raxitning oqibatlari - ko'plab tish karieslari"]
  },
  {
    question: "Yurakning funksional shovqini quyidagilarga xos emas:",
    answer: "EKGdagi o'zgarishlar bilan birga keladi",
    options: ["6—7 yilgacha saqlanadi", "qoʻltiq ostiga nurlanmaydi", "EKGdagi o'zgarishlar bilan birga keladi", "bolaning anatomik va fiziologik xususiyatlari bilan bog'liq"]
  },
  {
    question: "Salmonellyoz haqida quyidagi ma’lumot noto'g'ri:",
    answer: "antibiotiklar tavsiya etilmaydi",
    options: ["infektsiya manbalari odamlar", "parrandalar va hayvonlardir", "salmonellyoz bilan kasallangan yangi tug'ilgan chaqaloqlarda umumiy simptomlar oshqozon-ichak trakti belgilaridan ustun turadi.", "suvsizlanish asoratdir", "antibiotiklar tavsiya etilmaydi"]
  },
  {
    question: "Odam suti va sigir sutining farqlari quyidagilardan iborat:",
    answer: "sigir sutidagi oqsillarda muhim aminokislotalar mavjud emas",
    options: ["inson sutida sigir sutiga qaraganda 2-2", "5 marta ko'p protein mavjud", "sigir sutidagi oqsillarda muhim aminokislotalar mavjud emas", "ona sutida laktoza kamroq bo'ladi", "sigir sutida lizotsin inson sutiga qaraganda ko'proq"]
  },
  {
    question: "Chaqaloqlarga qo'shimcha oziq-ovqatlarni kiritish (noto'g'ri javobni tanlang):",
    answer: "6 oydan keyin qo'shimcha oziq-ovqatlarni kiritish bo'yni o’sishi va motorika rivojlanishiga ta'sir qilmaydi",
    options: ["qo'shimcha oziqlantirish – bu chaqaloqlarga ona sutidan tashqari oziq-ovqat va suyuqliklar berish", "6 oydan keyin qo'shimcha oziq-ovqatlarni kiritish bo'yni o’sishi va motorika rivojlanishiga ta'sir qilmaydi", "suyuqlik sifatida 9 oydan boshlab yangi sigir suti va sut mahsulotlarini iste'mol qilishni bosqichma-bosqich oshirish tavsiya etiladi", "1-bosqichda ovqatlanish chastotasi (qo'shimcha ovqatlar) kuniga 3 ta asosiy ovqat+ 2 ta engil gazak"]
  },
  {
    question: "Psixomotor rivojlanishning bolaning yoshiga noto'g'ri mos kelishini aniqlang:",
    answer: "yangi tug'ilgan bola - mushak tonusi kamayadi, yotganda boshni u yoqdan bu yoqqa aylantirmaydi",
    options: ["yangi tug'ilgan bola - mushak tonusi kamayadi", "yotganda boshni u yoqdan bu yoqqa aylantirmaydi", "3 oyligida - boshni tik holatda barqaror ushlab turadi; harakat doirasi ortdi", "muvofiqlashtirilmagan", "6 oyligida - qo'llab-quvvatlash bilan ham", "yordamisiz ham turishi mumkin; o'yinchoqni qattiq ushlab turishi va uni bermasligi mumkin", "12 oyligida - mustaqil yura boshlaydi; 2-4 ta so‘zni biladi va talaffuz qiladi"]
  },
  {
    question: "Bolalardagi o'tkir pnevmoniyaga nisbatan u noto'g'ri hisoblanadi:",
    answer: "pnevmoniya bilan og'rigan 12 oydan katta bolalarda nafas olish tezligi daqiqada 50 dan ortiq",
    options: ["ko'pincha 5 yoshgacha bo'lgan bolalarda", "katta yoshdagi bolalarda asosiy sabab Streptococcus pneumoniae hisoblanadi", "pnevmoniya bilan og'rigan 12 oydan katta bolalarda nafas olish tezligi daqiqada 50 dan ortiq", "ko'krak qafasi rentgenografiyasining mutlaq ko'rsatkichi 2 oygacha bo'lgan bolaning yoshi."]
  },
  {
    question: "B12 vitamini tanqisligi kamqonligini davolashda quyidagilar qo'llaniladi:",
    answer: "siyanokobalamin",
    options: ["B va C vitaminlari", "anabolic moddalar", "siyanokobalamin", "H qon quyish"]
  },
  {
    question: "Gemolitik anemiyaga xos bo'lmagan belgilarni ko'rsating?",
    answer: "umumiy qon tekshiruvida retikulotsitlar sonining ortishi",
    options: ["normositoz", "normoxrom anemiya", "umumiy qon tekshiruvida retikulotsitlar sonining ortishi", "to'g'ridan-to'g'ri bilirubin tufayli sariqlik"]
  },
  {
    question: "Gemolitik anemiyada quyidagilar kuzatilmaydi.",
    answer: "glyukuroniltransferaza fermenti etishmovchiligi",
    options: ["suyak iligida qizil qon tanachalari hosil bo'lishining buzilishi", "qizil qon tanachalarining tez buzilishi", "eritrotsitlarning proliferative funktsiyasining yomonlashishi", "glyukuroniltransferaza fermenti etishmovchiligi"]
  },
  {
    question: "IDA ning kam uchraydigan sabablarini ko'rsating:",
    answer: "surunkali qon yo'qotish",
    options: ["qon yo'qotish", "oshqozon va ichak o'smalari", "qon guruhining mos kelmasligi", "surunkali qon yo'qotish"]
  },
  {
    question: "Qanday hollarda B12- va foliy tanqisligi anemiyasi paydo bo'lishi mumkin?",
    answer: "vegetarianizm",
    options: ["ichki omil Castle sekretsiyasi yo'qligi", "vegetarianizm", "alkogolizm", "yuqoridagilarning barchasi to‘g‘ri"]
  },
  {
    question: "B12 tanqisligi anemiyasiga nima sabab bo'lmaydi?",
    answer: "aspirinning terapevtik dozalari",
    options: ["Kron kasalligi", "aspirinning terapevtik dozalari", "gastrektomiya", "vegetarian taomlarga rioya qilish"]
  },
  {
    question: "Makrositar anemiyaga nima sabab bo'lmaydi?",
    answer: "foliy kislotasi tanqisligi",
    options: ["alkogolizm", "foliy kislotasi tanqisligi", "dori vositalarining nojo'ya ta'siri", "o'tkir qon yo'qotish"]
  },
  {
    question: "Surunkali miyeloid leykemiya:",
    answer: "barcha javoblar to'g'ri",
    options: ["P o'rta yoshdagi odamlarda rivojlanadi", "70 yoshdan oshgan odamlarda P simptomatik davolashni talab qiladi", "P splenomegaliya bilan namoyon bo'ladi", "barcha javoblar to'g'ri"]
  },
  {
    question: "Folat tanqisligiga nima sabab bo'lmaydi?",
    answer: "amoksitsillin",
    options: ["daromadning etishmasligi - to'yib ovqatlanmaslik", "malabsorbtsiya", "amoksitsillin", "trimetoprim"]
  },
  {
    question: "C vitamini haqida quyidagilar to'g'ri kelmaydi:",
    answer: "inson organizmida C provitaminidan sintezlanishi mumkin",
    options: ["gem bo'lmagan temirning so'rilishini oshiradi", "kollagen sintezi uchun zarur", "antioksidant xususiyatga ega", "inson organizmida C provitaminidan sintezlanishi mumkin"]
  },
  {
    question: "Folik kislotaga nisbatan bu to'g'ri emas:",
    answer: "homiladorlik davrida foliy kislotasining etishmasligi mikrositar anemiya rivojlanishiga olib kelishi mumkin",
    options: ["foliy kislotasi hujayra o‘sishi va bo‘linishi uchun zarurdir", "homiladorlik davrida foliy kislotasining etishmasligi megaloblastic anemiya rivojlanishiga olib kelishi mumkin", "homiladorlik davrida foliy kislotasining etishmasligi mikrositar anemiya rivojlanishiga olib kelishi mumkin", "folat almashinuvi nerv naychalari va homila nuqsonlari bilan bog'liq"]
  },
  {
    question: "Temir haqida quyidagi fikrlar to‘g‘ri emas:",
    answer: "tanin temirning singishiga yordam beradi",
    options: ["temirning so'rilishi 5-20% gacha o'zgarishi mumkin", "gem tarkibiga kiruvchi temir nisbatan yaxshi so‘riladi 20-30%", "vitamin C", "hayvon oqsili va organik kislotalar gem bo'lmagan temirning so'rilishini yaxshilaydi", "tanin temirning singishiga yordam beradi"]
  },
  {
    question: "Eritropoezning inhibisyonu/buzilishi kuzatiladi:",
    answer: "barcha javoblar to'g'ri",
    options: ["B12 etishmasligi", "surunkali qon yo'qotish", "yuqumli kasalliklar", "barcha javoblar to'g'ri"]
  },
  {
    question: "Temirning singishiga nisbatan to'g'ri:",
    answer: "temirning so'rilishi o'nikki barmoqli ichakda va jejunumda sodir bo'ladi",
    options: ["uch valentli temir temir gaqaraganda yaxshiroq so'riladi", "temirning so'rilishi o'nikki barmoqli ichakda va jejunumda sodir bo'ladi", "askorbin kislota temirning so‘rilishini sekinlashtiradi", "fitohemag glyutin bilan erimaydigan kompleksla hosil bo'lishi"]
  },
  {
    question: "Laboratoriya ko'rsatkichlari bo'yicha temir tanqisligi anemiyasiga xos:",
    answer: "rang ko'rsatkichining pasayishi",
    options: ["retikulotsitlarning kamayishi", "trombotsitlar kamayishi", "leykotsitlarning ko'payishi", "rang ko'rsatkichining pasayishi"]
  },
  {
    question: "Vaqtdan oldin tug'ilgan bolalarda kamqonlikning oldini olishga to'g'ri keladi?",
    answer: "6 oylikgacha faqat emizishni davom ettirish",
    options: ["6 oylikgacha faqat emizishni davom ettirish", "emizishni muddatidan oldin to'xtatganda", "12 oygacha bo'lgan temir moddasi bo'lgan ozuqaviy formuladan foydalaning.", "12 oylikdan oldin to'liq sigir sutini iste'mol qilmaslik", "6 oydan kechiktirma ya nemiyani tekshirish"]
  },
  {
    question: "Temir preparatlarining nojo'ya ta'siri (to'g'ri javobni tanlang):",
    answer: "temirdan zaharlanish bolalarga qaraganda kattalarda tez-tez uchraydi",
    options: ["temir preparatlarining terapevtik dozasini qabul qilishda oshqozon-ichak kasalliklari kuchayganda", "temir preparatlarini to'xtatish kerak", "temir preparatlari axlatni qora rangga bo'yaydi", "temirdan zaharlanish bolalarga qaraganda kattalarda tez-tez uchraydi", "zaharlanishga olib keladigan elementar temir miqdori bolaning yoshiga bog'liq"]
  },
  {
    question: "Temir preparatlari bilan zaharlanish belgilariga taalluqli emas?",
    answer: "bel og'rig'i",
    options: ["haroratning oshishi", "bel og'rig'i", "P diareya", "P qoni vishining buzilishi"]
  },
  {
    question: "Temir preparatlari bilan zaharlanishda quyidagi choralar samarali hisoblanadi:",
    answer: "birinchi soat ichida – sut berish va qayt qilish",
    options: ["birinchi soatda - vena ichiga fiziologik eritma tomiziladi", "birinchi soat ichida – sut berish va qayt qilish", "birinchi soatda - 2 ta qaynatilgan tuxum iste'mol qiling", "zaharlanishning birinchi belgilaridan 1", "5 soat o'tgach – oshqozonni yuvish"]
  },
  {
    question: "Balansli ovqatlanish uchun mahsulotlarga kelsak, u noto'g'ri hisoblanadi:",
    answer: "sabzavot va ko‘katlarda folat yetarli bo‘lmaydi",
    options: ["go'sht", "baliq tarkibida temirning gem shakli mavjud", "tuxum", "urug'", "quritilgan mevalarda temirning gem bo'lmagan shakli mavjud", "karam", "bolgar qalampiri", "pomidor S vitaminiga boy", "sabzavot va ko‘katlarda folat yetarli bo‘lmaydi"]
  },
  {
    question: "Chaqaloqlarga qo'shimcha ovqatlarni muvaffaqiyatli joriy etish kamqonlikning oldini oladi, agar:",
    answer: "kleykovina o'z ichiga olgan donlarni tanlamang - bug'doy, irmik, jo'xoriuni",
    options: ["kleykovina o'z ichiga olgan donlarni tanlamang - bug'doy", "irmik", "jo'xoriuni", "6 oylikdan boshlab kiritilgan fermentlangan sut mahsulotlarini qaynatilgan suv bilan 1 nisbatda suyultirish", "sabzavot", "meva va sharbatlarni konservalangan holda ishlatish yaxshidir", "tavsiya etilgan pishirish turi - qaynatish", "yog'siz qovurish", "mikro to'lqinli pechda pishirish"]
  },
  {
    question: "Quyidagi mezonlardan qaysi biri salomatlik skriningidan o‘tkazilishi kerak?",
    answer: "Kasallik yashirin, asemptomatik fazaga ega bo'lishi kerak",
    options: ["Faqat hayot sifatiga sezilarli ta'sir ko'rsatadigan holat tekshiriladi", "Kasallik yashirin", "asemptomatik fazaga ega bo'lishi kerak", "Kasallikning dastlabki bosqichida davolanishi kerak", "Diagnostik test qimmat bo'lishi kerak"]
  },
  {
    question: "Urogenital tizimi kasalliklarida tekshiruvlar:",
    answer: "yashirin bakteriyani aniqlash uchun barcha homilador ayollar umumiy siydik tekshiruvidan o'tadilar",
    options: ["glomerulo nefrit uchun qorinning oddiy rentgenografiyasi urografiyaga qaraganda ko'proq ma'lumot beradi", "qorinning oddiy rentgenografiyasi asosan buyrak anomaliyalarini aniqlash uchun amalga oshiriladi", "kompyuter tomografiyasi buyrak shishlarini 100% aniqlik bilan aniqlaydi", "yashirin bakteriyani aniqlash uchun barcha homilador ayollar umumiy siydik tekshiruvidan o'tadilar"]
  },
  {
    question: "O'tkir asoratlanmagan siydik yo'llari infektsiyasining eng ko'p uchraydigan belgilarini tekshiring.",
    answer: "dizurik hodisalar",
    options: ["dizurik hodisalar", "isitma", "ko'ngil aynishi va qayt qilish", "bel og'rig'i"]
  },
  {
    question: "Siydik chiqarish yo'llari infektsiyalari uchun 10 kunlik antibiotik terapiyasi kursi tavsiya etilishi kerak bo'lgan bemorlar guruhlari:",
    answer: "homilador ayollar",
    options: ["homilador ayollar", "hipotiroidizm bilan", "IDA bilan", "65 yoshdan oshgan shaxslar"]
  },
  {
    question: "Ayollarda siydik yo'llari infektsiyasini dorisiz davolash bo'yicha maslahatlar:",
    answer: "tez-tez va uzoq vaqt cho'milish",
    options: ["tez-tez va uzoq vaqt cho'milish", "qattiq og'riq bilan – vannada siydik chiqarish", "siydik pufagiga isituvchi prokladka qo'ying", "sut mahsulotlarini iste'mol qilishni ko'paytirish"]
  },
  {
    question: "Siydik chiqarish yo'llari infektsiyasining qayta infektsiyasining oldini olish kiradi.",
    answer: "barcha javoblar to'g'ri",
    options: ["kuniga kamida 2 litr suyuqlik ichish", "tez-tez yuvinishdan saqlaning", "jinsiy aloqadan keyin siydik pufagini bo'shatish", "barcha javoblar to'g'ri"]
  },
  {
    question: "Sterilpiuriyaning sabablarini belgilang:",
    answer: "buyrak toshlari",
    options: ["buyrak toshlari", "tubule-interstitsial kasallik", "NSAIDlar bilan davolash", "OIV/OITS"]
  },
  {
    question: "Ayollarda sistitni davolash.",
    answer: "barcha javoblar to'g'ri",
    options: ["kuchli «kuyish» og'rig'I bilan - paratsetamol", "biseptol – birinchi tanlov preparati", "jinsiy aloqada spermitsidlardan saqlaning", "barcha javoblar to'g'ri"]
  },
  {
    question: "Prostata bezining yaxshi xulqli giperplaziyasiga kelsak, quyidagilar to'g'ri:",
    answer: "uning belgilari 50 yoshdan oshganlar 10 erkakdan 1 tasida uchraydi",
    options: ["uning belgilari 50 yoshdan oshganlar 10 erkakdan 1 tasida uchraydi", "prostata kattalashishi har doim ham simptomlarni keltirib chiqarmaydi", "kasallik erkaklarda harakatsizish bilan bog'liq", "oldingi prostatit eng katta xavf omilidir"]
  },
  {
    question: "Kattalardagi siydik ushlomaslik:",
    answer: "bemor semizlik bilan vaznini kamaytirishi kerak",
    options: ["faqat antibiotiklar bilan davolash", "bemor semizlik bilan vaznini kamaytirishi kerak", "suyuqlik iste'mol qilishdan qochish kerak", "jismoniy faollikni cheklash"]
  },
  {
    question: "Siydik chiqarishda qiyinchilik, spastik og'riqlar bilan birga keladi",
    answer: "gematuriya",
    options: ["stranguriya", "tenesm", "nikturiya", "gematuriya"]
  },
  {
    question: "Sistit bilan siyish paytida og'riq paydo bo'lishi mumkin:",
    answer: "siydik yo‘llari bo‘ylab",
    options: ["siydik yo‘llari bo‘ylab", "o'ng yon bosh sohada", "sonda", "moshonkada"]
  },
  {
    question: "OIV-infeksiyasiga nisbatan to’g’ri javoblarni tanlang:",
    answer: "kasallikni yuqtirgandan so’ng va OITSning belgilari paydo bo’lishi orasidagi vaqt o’rtacha 2 yilni tashkil qiladi",
    options: ["kasallikni yuqtirgandan so’ng va OITSning belgilari paydo bo’lishi orasidagi vaqt o’rtacha 2 yilni tashkil qiladi", "kasallikni yuqtirish va OITS paydo bo’lishi orasidagi vaqtni uzaytiruvchi preparat mavjud emas", "infeksion mononukleozni eslatadi", "simptomsiz fazasi bir yildan ko’p davom etmaydi"]
  },
  {
    question: "Quyidagilar to’g’rimi?:",
    answer: "gerpes elementlari paydo bo’lishidan avval qichishish, sanchish, dizuriya kuzatiladi",
    options: ["OIV bilan kasallangan ko’krak yoshidagi bolalarda OITS bir yildan keyin rivojlanadi", "oilaviy shifokorning ko’pincha OITS ning suyak-bo’g’im tizimining shikastlanishi bilan ishlashga to’g’ri keladi", "immun kimyoviy taxlil immun-ferment taxlilining manfiy natijalari olinganidan so’ng o’tkaziladi", "“belgisiz davr”(периодокна)-odam zararlangan", "biroq tashxish xali qo’yilmagan davr"]
  },
  {
    question: "OITSning klinik ko’rinishiga nisbatan quyidagilar to’g’rimi?:",
    answer: "limfodenopatiya noxush prognostik omil hisoblanadi",
    options: ["xos bo’lgan toshma – vezikula-pustulezli", "simptomsiz fazasi albatta o’tkir ifodalangan simptomlardan keyin kuzatiladi", "limfodenopatiya noxush prognostik omil hisoblanadi", "o’tkir fazasida A", "B gepatiti bilan differensiatsiya qilish zarur"]
  },
  {
    question: "OITSning medikamentoz davosi quyidagini o’z ichiga oladi:",
    answer: "didanozin",
    options: ["doksitsiklin", "atsiklovir", "remantadin", "didanozin"]
  },
  {
    question: "OITSni o’rganish natijalari bo’yicha umumiy amaliyot shifokori maslahatiga quyidagilar kiradi:",
    answer: "barcha javoblar to'g'ri",
    options: ["OIV infeksiyasi bo’yicha xavf guruxiga kirgan bemorga", "natija manfiy bo’lsa", "tekshiruvni takrorlang", "agar natija musbat bo’lsa", "yuqtirgan odamning kontaktini aniqlang", "agar natija musbat bo’lsa", "infeksion mononuklyozni istisno qiling", "barcha javoblar to'g'ri"]
  },
  {
    question: "18 yoshli qiz 5 kun avval jinsiy lablarida og’riqli yaralar paydo bo’lganidan shikoyat qiladi, ular dastlab pufakchalar ko’rinishida bo’lgan. Hozirda uning biroz isitmasi bor, bosh og’rig’I bezovta qilayapti, jinsiy lablarida va anusda katta yaralar bor, ular juda og’riqli. Shuningdek, chov limfa tugunlari kattalashgan. Sizning dastlabki tashxisingiz?",
    answer: "birlamchi gerpetik vulvit",
    options: ["dissemenatsiyalangan gonokokkli infeksiya", "birlamchi gerpetik vulvit", "ikkilamchi sifilis", "venerik limfogranulema"]
  },
  {
    question: "Steroid surtmalarni tashqi qo’llashga nisbatan to’g’ri javobni tanlang:",
    answer: "kortikosteroidlarni uzoq vaqt qo’llash teri shishishiga olib keladi",
    options: ["qichishish va toshma bo’lganida 1% ligidrokortizonatsetatni 3 kun davomida yuz terisiga surtish mumkin", "kortikosteroidlarni uzoq vaqt qo’llash teri shishishiga olib keladi", "yuqori faol bo’lgan kortikosteroidlar bilan davolashni birdan to’xtatish mumkin", "yuqori faol bo’lgan kortikosteroidlarni uzoq vaqt mahalliy qo’llash buyrak usti funksiyalarining bostirilishiga olib keladi"]
  },
  {
    question: "Quyidagilar botulizmning profilaktikasiga kiradi:",
    answer: "barcha javoblar to'g'ri",
    options: ["aholini yaroqlilik muddati to’g’ri bo’lgan mahsulotlarni iste’mol qilishga o’rgatish", "konservantlarni to’g’ri saqlash", "bombajlangan konservalarni yo’q qilish", "barcha javoblar to'g'ri"]
  },
  {
    question: "Quturish aniqlangan kuchuk bilan kontaktda bo’lganda birinchi yordam ko’rsatish:",
    answer: "yarani sovunli suv bilan yuvish",
    options: ["yarani sovunli suv bilan yuvish", "yarani tezda tikish", "3 haftadan kechiktirmasdan inson immunoglobulin yuborish", "antirabik vaksinani yuborish shart emas"]
  },
  {
    question: "Salmonellaning manbasi bo’lib hisoblanmaydi:",
    answer: "termik ishlov berilgan tuxum",
    options: ["uy hayvonlari", "uy qushlari", "termik ishlov berilgan tuxum", "salmonellez bilan og’rigan bemor"]
  },
  {
    question: "Salmonellez klinikasi o’z ichiga oladi:",
    answer: "kasallik simptomlari 6-72 soatdan keyin paydo bo’ladi",
    options: ["tez-tez og’riqli siyish", "kasallik simptomlari 3 hafta davom etishi mumkin", "kasallik simptomlari 6-72 soatdan keyin paydo bo’ladi", "isitmaning sekin-asta ko’tarilishi"]
  },
  {
    question: "Qorin tifi uchun xos:",
    answer: "toshma – qon quyilishlar ko’rinishida",
    options: ["toshma – qon quyilishlar ko’rinishida", "qisqa vaqtli isitma", "apatiya", "anoreksiya"]
  },
  {
    question: "Parotitning ko’p uchraydigan asoratini belgilang:",
    answer: "ensefalit",
    options: ["ensefalit", "artrit", "karlik", "pankreatit"]
  },
  {
    question: "Ko’k yo’talning ko’p uchraydigan asoratini belgilang:",
    answer: "ko’rlik",
    options: ["ko’rlik", "talvasa", "karlik", "to’liqfalajlik"]
  },
  {
    question: "Quyidagilar to’g’rimi?:",
    answer: "gerpes elementlari paydo bo’lishidan avval qichishish, sanchish, dizuriya kuzatiladi",
    options: ["Felinoz uchun regionar limfadenit xos", "Qizilcha uchun qo’ltiq osti limfa tugunlarining kattalashishi xos", "Kavasaki kasalligi uchun bo’yin limfa tugunlarining 3-5 mmgacha kattalashishi xos", "Infeksion mononukleoz uchun ensa limfa tugunlarining kattalashishi xos"]
  },
  {
    question: "B gepatiti uchun xos:",
    answer: "sariqlik davrining paydo bo’lishi bilan ahvolining og’irlashishi",
    options: ["sariqlik davrining paydo bo’lishi bilan ahvolining og’irlashishi", "inkubatsion davr 30- 70 kun", "100%sog’ayish", "surunkali gepatit kuzatilmaydi"]
  },
  {
    question: "Suvchechakka nisbatan to’g’ri javoblarni toping:",
    answer: "toshma bir hafta ichida dog’dan papulagacha zo’rayadi",
    options: ["kasallik sekin boshlanadi va isitma baland bo’lmaydi", "toshmalar gerpetikka juda o’xshash", "qichishishni kamaytirish uchun steroid surtma tavsiya etiladi", "toshma bir hafta ichida dog’dan papulagacha zo’rayadi"]
  },
  {
    question: "Virusli A gepatitning yuqish omillari:",
    answer: "barcha javoblar to'g'ri",
    options: ["bemorning idish-tovog’i", "o’pish", "qo’l berib so’rashish", "barcha javoblar to'g'ri"]
  },
  {
    question: "Erta yoshdagi bolalarda meningit belgilari:",
    answer: "liqildoqning cho’kib qolishi",
    options: ["liqildoqning cho’kib qolishi", "teri va shilliq qavatida pufakchalar ko’rinishidagi toshmalar", "es-hushning buzilishi", "tana haroratning pasayishi"]
  },
  {
    question: "Difteriya uchun nima xos emas?",
    answer: "miokardit",
    options: ["miokardit", "tomoqda kulrang karash", "limfa tugunlarining kattalashishi", "yutinganda kuchli og’riq"]
  },
  {
    question: "Skarlatina uchun xos:",
    answer: "Pastia simptomi",
    options: ["Pastia simptomi", "Tomoqdagi karash qiyin ajraladi", "Teri qichishishi", "Bbo’g’imlardagi og’riq"]
  },
  {
    question: "Ko’kyo’talning kataral davri uchun xos:",
    answer: "yengil yo’tal",
    options: ["ovozning bo’g’iqlashishi", "limfotsitoz", "yengil yo’tal", "xurujsimon yo’tal"]
  },
  {
    question: "Dizenteriya mikroblari yuqori sezgirlikka ega:",
    answer: "ftorxinolonlarga",
    options: ["aminoglikozidlarga", "sefalosporinlarga", "ftorxinolonlarga", "makrolidlarga"]
  },
  {
    question: "\"Malinalijele\" simptomi kuzatiladi:",
    answer: "amebalidizenteriyada",
    options: ["amebalidizenteriyada", "bacterial dizenteriyada", "xolerada", "qorin tifida"]
  },
  {
    question: "Difteriya uchun xos:",
    answer: "“buqa bo’yni”",
    options: ["stridor", "“buqa bo’yni”", "yuqori harorat", "og’iz burchaklarining bichilishi"]
  },
  {
    question: "Qizilchaga nisbatan to’g’ri:",
    answer: "toshma kasallikning yagona belgisi bo’lishi mumkin",
    options: ["qo’zg’atuvchisi DNK-saqlagan virus", "qizamiq qaqaraganda yuqish xavfi yuqori", "bemor toshma paydo bo’lganidan so’ng 15 kundan keyin yuqumli hisoblanadi", "toshma kasallikning yagona belgisi bo’lishi mumkin"]
  },
  {
    question: "Butun o’ldirilgan organizmlarni o’z ichiga olgan vaksinalar",
    answer: "ko’kyo’tal",
    options: ["ko’kyo’tal", "grippoz", "epidparotit", "BCJ"]
  },
  {
    question: "Tirik organizmlardan tarkib topgan vaksinalar",
    answer: "qizamiq",
    options: ["poliomiyelit", "qorintifi", "qizamiq", "gemofil"]
  },
  {
    question: "Ozuqa toksikoinfeksiyasining asoratini belgilang:",
    answer: "degidratatsion shok va o’tkir yurak yetishmovchiligi",
    options: ["anafilaktik shok", "degidratatsion shok va o’tkir yurak yetishmovchiligi", "bosh miyada qon aylanishining o’tkir buzilishi", "pnevmoniya"]
  },
  {
    question: "Bu kasallikning hatto yengil kechishi ham gospitalizatsiyani talab etadi:",
    answer: "botulizm",
    options: ["botulizm", "dizenteriya", "qizamiq", "qizilcha"]
  },
  {
    question: "Bemor chanqash, og’riqsiz suvli diareyaga shikoyat qildi. Ko’ruvda: ovozi xirillagan, yuz xususiyatlari o’tkirlashgan, terisi quruq, YUCh 100. Sizning tashxisingiz?",
    answer: "xolera",
    options: ["salmonellez", "dizenteriya", "xolera", "botulizm"]
  },
  {
    question: "Bemorda teri sariqligi (+++), bog’langanbilirubin - 80mmol/l, bog’lanmagan - 20 mmol/l, ALT- 1,2 mmol’/l, HBsAg-manfiy. gemoglobin -130g/l. Bemorni birinchi navbatda qaysi mutaxassis ko’rikdan o’tkazishi lozim",
    answer: "xirurg",
    options: ["gematolog", "ginekolog", "xirurg", "urolog"]
  },
  {
    question: "5 yoshli bola. Terisi limon rangida. Bilirubin bog’langan -15mmol/l, bog’lanmagan-95 mmol/l, ALT-1,6mmol/l, HBsAg - manfiy, gemoglobin-80,0 g/l, eritrotsit -2,5 mln. Sizning taktika",
    answer: "bolada – Agepatiti, zudlik bilan tomir ichiga dori vositalarini yuborish uchun yuqumli kasalliklar shifoxonasiga yuborish lozim",
    options: ["bolada – Agepatiti", "zudlik bilan tomir ichiga dori vositalarini yuborish uchun yuqumli kasalliklar shifoxonasiga yuborish lozim", "bolada –Agepatiti", "ahvolining monitoringini olib borish va va poliklinika sharoitida davolash: parhez", "ko’p suyuqlik ichish", "yotoq tartibi", "bolada – Bgepatiti", "infeksion kasalxona sharoitida barcha taxlillarni qayta tekshirish", "bolada kamqonlik – gematologiya bo’limida qon quyish zarur"]
  },
  {
    question: "3 yoshlibola, kasallikning 6 -mkuni, hushsiz holatda kasalxonaga yotqizilgan, temperatura- 400C, boshining soch qismi va tanasida polimorf toshma: pustula va vezikulalar. Taxminiy tashxisingiz?",
    answer: "ensefalit bilan asoratlangan suvchechak",
    options: ["intoksikatsion sindrom bilan asoratlangani yersinioz", "meningokokksemiya", "gemorragik isitma", "ensefalit bilan asoratlangan suvchechak"]
  },
  {
    question: "O’lat bilan kasallangan bemor bilan aloqada bo’lgan barcha shaxslarga tavsiya etiladi:",
    answer: "levomitsetin 0,5 g - 3 mahal ichish 5kun",
    options: ["streptomitsin 0.5g -2 mahal m/o 5 kun", "levomitsetin 0", "5 g - 3 mahal ichish 5kun", "penitsillin 1", "0 g– 4mahal m/o", "5 kun", "biseptol 480 –kuniga 2 marta ichish"]
  },
  {
    question: "Vabo bilan kasallangan bemor bilan aloqada bo’lgan barcha odamlar izolyatsiya qilinishi kerak:",
    answer: "14 kun",
    options: ["3 kun", "10 kun", "14 kun", "5 kun"]
  },
  {
    question: "Profilaktik emlashlarga qarshi ko’rsatma:",
    answer: "avvalgi vaksinatsiyaga kuchli reaksiya",
    options: ["gipotrofiya", "avvalgi vaksinatsiyaga kuchli reaksiya", "xavfli o’sma", "talvasa bilan kechuvchi MAT kasalliklari"]
  },
  {
    question: "Quyidagi ko’rsatkichlar virusli gepatitlar klinikasida rol o’ynaydi:",
    answer: "transaminazalar darajasi",
    options: ["transaminazalar darajasi", "elektrolitlar darajasi", "kreatinin va mochevina darajasi", "qondagi protrombin"]
  },
  {
    question: "Qizamiq o’tkazgan bola maktabga qatnashi mumkin",
    answer: "toshma paydo bo’lganidan so’ng 21 kundan keyin",
    options: ["toshma paydo bo’lganidan so’ng 21 kundan keyin", "toshma paydo bo’lganidan so’ng 17 kundan keyin", "toshma paydo bo’lganidan so’ng 1oydan keyin", "toshma paydo bo’lganidan so’ng 7 kundan keyin"]
  },
  {
    question: "Per oral regidratatsiya uchun qo’llaniladigan eritmalar:",
    answer: "regidron",
    options: ["smekta", "regidron", "5% liglyukoza", "0", "9% linatriyxlorid"]
  },
  {
    question: "Bezgak tashxisini qo’yishda alohida ahamiyatga ega:",
    answer: "barcha javoblar to'g'ri",
    options: ["umumiy qon taxlili", "epidemiologik anamnez", "eritrotsitlarda parazitlarning aniqlanishi", "barcha javoblar to'g'ri"]
  },
  {
    question: "Brutsellyozni tashxislashning maxsus testlarini belgilang:",
    answer: "Rayt va Xeddelson reaksiyasi",
    options: ["umumiy qon taxlili –eozinofiliyani aniqlash", "EChTni tekshirish", "har kuni tana haroratini uch marta o’lchash", "Rayt va Xeddelson reaksiyasi"]
  },
  {
    question: "Infeksion mononukleozning klinik simptomlari bo’lib hisoblanadi:",
    answer: "isitma, angina, toshma",
    options: ["isitma", "kataralbelgilar", "toshma", "isitma", "angina", "toshma", "isitma", "kataralbelgilar", "boshog’rig’i", "barcha javoblar to'g'ri"]
  },
  {
    question: "Xususiyat va uning ta'rifi o’rtasidagi muvofiqlikni toping:",
    answer: "demans-bu tuzatib bo’lmaydigan noto‘g’ri xulosa",
    options: ["demans-bu tuzatib bo’lmaydigan noto‘g’ri xulosa", "gallyutsinatsiyalar-haqiqat bilan bog’liq bo’lmagan hislar mavjud bo’lgan idrok buzilishi", "illuziyalar-illuziyalar", "gallyutsinatsiyalar va qo‘zg‘alish bilan o‘tkir psixoz", "deliryum-haqiqiy ob'ektlarni noto‘g‘ri idrok yetish"]
  },
  {
    question: "Depressiyaning diagnostik mezonlariga quyidagilar kiradi:",
    answer: "barcha javoblar to'g'ri",
    options: ["kayfiyatning pasayishi", "zavqni his qilish qobiliyatini yo‘qotish", "uyqusizlik", "erta uyg‘onish", "barcha javoblar to'g'ri"]
  },
  {
    question: "Depressiya quyidagi dorilar bilan davolanadi:",
    answer: "fluoksetin",
    options: ["anaprilin", "enalapril", "siklofosfamid", "fluoksetin"]
  },
  {
    question: "Anksiyete quyidagilar bilan tavsiflanadi:",
    answer: "asabiylashish va qo‘rqoqlik",
    options: ["o‘z joniga qasd qilish haqidagi fikrlar", "asabiylashish va qo‘rqoqlik", "jamoat transportidan qo‘rqish", "anoreksiya"]
  },
  {
    question: "Agar shaxsiyat o‘zgargan bo‘lsa, alkogolizmdan shubha qilish kerak va quyidagi belgilarning ijtimoiy harakati:",
    answer: "antisosial xatti-harakatlar",
    options: ["befarqlik", "befarqlik", "antisosial xatti-harakatlar", "haddan tashqari quvonch", "yolg‘on"]
  },
  {
    question: "Bolalardagi depressiya quyidagilar bilan tavsiflanadi:",
    answer: "barcha javoblar to'g'ri",
    options: ["ko‘zyoshlari", "o‘rganishga qiziqishning pasayishi", "charchoq", "kuchni yo‘qotish", "barcha javoblar to'g'ri"]
  },
  {
    question: "Depressiyaning xarakterli ko‘rinishlari:",
    answer: "o‘z joniga qasd qilishga urinishlar",
    options: ["bipolyar buzilish", "bulimiya", "yuqori kayfiyat", "o‘z joniga qasd qilishga urinishlar"]
  },
  {
    question: "Shizofreniyada quyidagi hodisalar mavjud:",
    answer: "barcha javoblar to'g'ri",
    options: ["bema'nilik", "gallyutsinatsiyalar", "o‘z mantig‘i", "barcha javoblar to'g'ri"]
  },
  {
    question: "Deliryumni davolash:",
    answer: "fizostigmin 0,5-2 mg / har 20 daqiqada, deliryum bartaraf yetilgunga qadar.",
    options: ["beta blokerlar", "diazepam 5-10 mg og’iz orqali bir marta", "fizostigmin 0", "5-2 mg / har 20 daqiqada", "deliryum bartaraf yetilgunga qadar.", "droperidol 5-10mg / m marta."]
  },
  {
    question: "Demansning asosiy sabablari:",
    answer: "miya arteriyalarining aterosklerozi",
    options: ["miya arteriyalarining aterosklerozi", "oshqozon yarasi", "yurak yetishmovchiligi 1-2 art", "jigar sirrozi"]
  },
  {
    question: "Manik hujumning asosiy belgilari:",
    answer: "fikrlarning sakrashiga qadar fikrlashni tezlashtirish",
    options: ["past kayfiyat", "jimjitlik", "depressiya", "fikrlarning sakrashiga qadar fikrlashni tezlashtirish"]
  },
  {
    question: "Psixostimulyatorlarni qabul qilishda quyidagi alomatlar paydo bo‘ladi:",
    answer: "barcha javoblar to'g'ri",
    options: ["tajovuzkorlik.", "ta'qiblardeliryum.", "asabiylashish.", "barcha javoblar to'g'ri"]
  },
  {
    question: "O‘z joniga qasd qilishga urinish jiddiy qilinganligini ko‘rsatadigan omillar:",
    answer: "urinishdan oldin baham ko‘rmaydiva boshqa odamlarga xabar bermaydi",
    options: ["uzoq muddatli niyat", "urinishdan oldin baham ko‘rmaydiva boshqa odamlarga xabar bermaydi", "oldindan vasiyat qilish", "o‘z joniga qasd qilish niyatlarini tan olish"]
  },
  {
    question: "Shizofreniya quyidagilar bilan tavsiflanadi:",
    answer: "psixikaning hissiy buzilishlari",
    options: ["qarilikda kasallanish", "noyob yeshitish gallyutsinatsiyalari", "psixikaning hissiy buzilishlari", "to‘liq tiklanish mumkin"]
  },
  {
    question: "Anksiyete holatlari quyidagilarga bo‘linadi:",
    answer: "barcha javoblar to'g'ri",
    options: ["tashvish nevrozi", "vahima buzilishi", "fobiyalar", "barcha javoblar to'g'ri"]
  },
  {
    question: "Miya qon aylanishining qanday buzilishida fokal simptomlarning yo‘qolishi 24 soat ichida kuzatiladi?",
    answer: "vaqtinchalik serebrovaskulyar avariya (PNMC)",
    options: ["migren", "ishemik insult", "gemorragik insult", "vaqtinchalik serebrovaskulyar avariya (PNMC)"]
  },
  {
    question: "Miya tomirlarining aterosklerozi bilan og‘rigan bemorda 10 soatdan keyin regressga uchragan chap tomonlama gepiparez keskin rivojlandi. Serebrovaskulyar patologiyaning qanday shakli sodir bo‘lgan?",
    answer: "ishemik insult",
    options: ["gemorragik insult", "diskirkulyatsion ensefalopatiya", "ishemik insult", "PNMC"]
  },
  {
    question: "Parkinson kasalligi qaysi kasalliklar guruhiga kiradi?",
    answer: "irsiy",
    options: ["travmatik", "qon tomir", "yallig‘lanish", "irsiy"]
  },
  {
    question: "Epilepsiya uchun anticonvulsant terapiyaga kelsak, bu to‘g‘ri deb hisoblanadi:",
    answer: "agar dastlabki minimal terapevtik doz samarasiz bo‘lsa, uni boshqa dori bilan almashtirish kerak",
    options: ["davolashning boshida bir vaqtning o‘zida ikkita dori buyurilishi kerak", "agar dastlabki minimal terapevtik doz samarasiz bo‘lsa", "uni boshqa dori bilan almashtirish kerak", "bir nechta antikonvulsanlarni tayinlash mutaxassis tomonidan amalga oshiriladi", "agar u samarali bo‘lsa", "lekin nojo‘ya ta'sirlar paydo bo‘lsa", "preparat bilan davolanishni davom ettiring"]
  },
  {
    question: "Jarohatdan keyin bemorda cho‘tka \"tirnoqli panjaga\"o‘xshaydi. Qaysi asab ta'sir qiladi?",
    answer: "tayanch-harakat",
    options: ["tayanch-harakat", "radial", "median", "aksillar"]
  },
  {
    question: "O‘zgarishlarning tabiati valezyonning lokalizatsiyasi o‘rtasidagi muvofiqlikni aniqlang",
    answer: "miya yarim korteksi - diplopiya – dizartriya",
    options: ["serebellum-ataksiya", "gipotenziya", "miya yarim korteksi - diplopiya – dizartriya", "miya poyasi – yuqori ekstremitalarning paraplegiyasi", "orqa miya-qattiqlik – titroq"]
  },
  {
    question: "Astma xuruji haqida 2 ta to'g'rimi?",
    answer: "engil xuruj bilan bemorda siyanoz yo'q, puls 110 urish / min dan kam, eng yuqori oqimdagi havo oqimi tezligi 200 l / min dan ortiq",
    options: ["engil xuruj bilan bemorda siyanoz yo'q", "puls 110 urish / min dan kam", "eng yuqori oqimdagi havo oqimi tezligi 200 l / min dan ortiq", "mo’tadil xuruj bilan bronxodilatatorning 4 marta inhalatsiyasi etarli.", "qattiq xuruj bilan bemor gapira oladi", "puls 100 zarba/min dan oshmaydi", "havo oqimi 200 l/min dan kam.", "bemor hayajonlansa tinchlantiruvchi dori beramiz."]
  },
  {
    question: "Anemiyaning ikkilamchi profilaktikasiga quyidagilar kirmaydi.",
    answer: "P temir preparatlari bilan ishlov berish",
    options: ["chekishni tashlash", "Muvozanatli ovqatlanishni saqlash", "Bachadondan qon ketishi bilan og'rigan ayollarni P tekshirish", "P temir preparatlari bilan ishlov berish"]
  },
  {
    question: "Anemiyaning oldini olish uchun temir dozalari - 7 oy davomida haftasiga 1 marta",
    answer: "12-18 oylik bolalar. - 60 mg temir va 400 mkg foliy kislotasi",
    options: ["6-12 oylik bolalar. - 30 mg temir siropi", "6-12 oylik bolalar. - 60 mg temir siropi", "12-18 oylik bolalar. - 60 mg temir va 400 mkg foliy kislotasi", "tug'ish yoshidagi ayollar - 60 mg temir va 400 mkg foliy kislotasi"]
  },
  {
    question: "Anemiyaning oldini olish uchun temir dozalari - 7 oy davomida haftasiga 1 marta (to'g'ri javobni tanlang):",
    answer: "emizikli ayollar - 120-180 mg temir va 400 mkg foliy kislotasi",
    options: ["homilador ayollar - 120-180 mg temir va 400 mkg foliy kislotasi", "homilador ayollar - 100-120 mg temir va 400 mkg foliy kislotasi", "emizikli ayollar - 120-180 mg temir va 400 mkg foliy kislotasi", "emizikli ayollar - 100-120 mg temir va 400 mkg foliy kislotasi"]
  },
  {
    question: "Anemiyani davolash to'g'rimi (noto'g'ri javobni tanlang):",
    answer: "homilador ayollar - 180 mg bezlar va kuniga 400 mkg foliy kislotasi - 3 - oy.",
    options: ["2-12 yoshda - 60 mg bezlar va kuniga 400 mkg foliy kislotasi - 3 - oy.", "o'smirlar va tug'ish yoshidagi ayollar - kuniga 120 mg bezlar va 400 mkg foliy kislotasi - 3 - oy.", "homilador ayollar - 120 mg bezlar va kuniga 400 mkg foliy kislotasi - 3 - oy.", "homilador ayollar - 180 mg bezlar va kuniga 400 mkg foliy kislotasi - 3 - oy."]
  },
  {
    question: "S vitamini haqida quyidagilar to'g'ri kelmaydi:",
    answer: "inson organizmida S provitaminidan sintezlanishi mumkin",
    options: ["gem bo'lmagan temirning so'rilishini oshiradi", "kollagen sintezi uchun zarur", "antioksidant xususiyatga ega", "inson organizmida S provitaminidan sintezlanishi mumkin"]
  },
  {
    question: "Tireotoksikozning klinik ko'rinishi quyidagilar bilan tavsiflanadi:",
    answer: "qo'zg'aluvchanlikning kuchayishi, xavotir bo‘lish",
    options: ["qo'zg'aluvchanlikning kuchayishi", "xavotir bo‘lish", "ishtahaning kuchayishi natijasida vazn ortishi", "arterial gipotenziya", "hirqiroq ovoz"]
  },
  {
    question: "Qalqonsimon bez gormonlari:",
    answer: "o'sish, rivojlanish, tana haroratini nazorat qilish",
    options: ["insulin va glyukagon ishlab chiqaradi", "o'sish", "rivojlanish", "tana haroratini nazorat qilish", "adrenalin va noradrenalin ishlab chiqaradi", "sekret hosil qiladi va spermatozoidlar uchun ozuqa muhiti hisoblanadi"]
  },
  {
    question: "Qalqonsimon bez disfunksiyasi holatida qalqonsimon bez gormonlari darajasidagi xarakterli o'zgarishlarni va boshqa ko'rsatkichlarni belgilang:",
    answer: "tireotoksikoz - TTG kamayadi, T3 va T4 ortadi",
    options: ["birlamchi gipotireoz - TTG ko'tarilgan", "T3 normal", "T4 ko'tarilgan.", "ikkilamchi gipotireoz (gipofizning shikastlanishi) - TTG", "T3 va T4 ko'tariladi", "tireotoksikoz - TTG kamayadi", "T3 va T4 ortadi", "eutireoz - TTG normada", "T3 va T4 ko'tariladi"]
  },
  {
    question: "Tug’ma gipotireozni (TG) ning xarakterli belgilarini belgilang:",
    answer: "TG skriningi TG klinik belgilarini aniqlashga asoslanadi",
    options: ["kech tashxis faqat o'sishning buzilishiga olib keladi", "TG skriningi TG klinik belgilarini aniqlashga asoslanadi", "o‘rin bosish terapiyasi hayotning 14-kunidan kechiktirmay boshlanadi", "erta bosqichda bilib olish juda oson"]
  },
  {
    question: "Sizga 60 yoshli bemor gipertoniya va surunkali obstruktiv bronxit bilan murojaat qildi. Quyidagi dorilardan qaysi birini ushbu bemor uchun maqbul deb hisoblaysiz:",
    answer: "anaprillin",
    options: ["anaprillin", "obzidan", "enam", "metoprolol"]
  },
  {
    question: "60 yoshli ayol poliklinikaga kelib, hamshira bo‘lib ishlayotgan dugonasi bir marta uning qon bosimini o‘lchab ko‘rganini va u yuqori ekanligini aytdi. Qanday chora ko'rasiz?",
    answer: "Undan qon bosimini tekshirishni so'rang: agar natija yuqori bo'lsa, 3 daqiqadan so'ng va ikki haftadan keyin yana tekshiring",
    options: ["U bilan kelishib", "davolanishni boshlash", "Qon bosimini faqat bir marta tekshiring", "Undan qon bosimini tekshirishni so'rang: agar natija yuqori bo'lsa", "3 daqiqadan so'ng va ikki haftadan keyin yana tekshiring", "Uni darhol kasalxonaga olib boring."]
  },
  {
    question: "Sizning oldingizga bir kishi keladi va siz uning qon bosimini ikki marta o'lchaysiz va quyidagi natijalarni topasiz. Ular gipertoniyadan aziyat chekishadimi?",
    answer: "169/95",
    options: ["169/95", "160/80", "139/85", "139/75"]
  },
  {
    question: "Tasdiqlangan gipertoniya tashxisi bo'lgan bemor qabulingizga kelib, dori qanday yordam berishini bilmaguncha qabul qilmasligini aytadi. Qanday tushuntirish berasiz?",
    answer: "Qon bosimini davolash insult o'limini 40% ga kamaytirishga olib keladi, bu har bir ikkinchi bemorning hayotini saqlab qoladi. Miokard infarktidan o'lim darajasi 20% ga kamayadi, bu esa har beshinchi bemorning hayotini saqlab qoladi.",
    options: ["Faqat undan dori ichishni talab qiling va boshqa tushuntirish bermang.", "Faqat farmakologik bo'lmagan davolanishni o'tkazish", "Yuqori qon bosimi bilan nogironlik xavfi 3-4 barobar ko'pligini ayting.", "Qon bosimini davolash insult o'limini 40% ga kamaytirishga olib keladi", "bu har bir ikkinchi bemorning hayotini saqlab qoladi. Miokard infarktidan o'lim darajasi 20% ga kamayadi", "bu esa har beshinchi bemorning hayotini saqlab qoladi."]
  },
  {
    question: "Quyidagi bemorlarning qaysi birida qon bosimi yuqori bo'lishi mumkin?",
    answer: "50 yoshli erkak, ishda doimiy stressda",
    options: ["40 yoshli erkaklar o'zlarini juda yaxshi his qiladilar", "50 yoshli erkak", "ishda doimiy stressda", "Yuragi juda zaif ekanligini da'vo qiladigan 70 yoshli ayol", "58 yoshli erkak", "kardiogen shok bilan asoratlangan miokard infarkti."]
  },
  {
    question: "Siz 60 yoshli erkakka gipertoniya tashxisini qo'ydingiz va u qandli diabet bilan kasallanganligi sababli uni juda yuqori xavf ostidagi bemorlar toifasiga kiritdingiz. Sizning birinchi davolanishingiz qanday bo'ladi?",
    answer: "Kompleks tarkibli tiazid diuretik va kaltsiy antagonistlari",
    options: ["Dibazol ukollari 3 kun", "APF ingibitorlaridan kundalik foydalanish (enalapril)", "Kompleks tarkibli tiazid diuretik va kaltsiy antagonistlari", "2 kun davomida papaverin in'ektsiyalari"]
  },
  {
    question: "Gipertenziya bilan og'rigan bemorni yurak-qon tomir asoratlari xavfi past bo'lgan bemorlarga tasniflasangiz, qaysi biri to'g'ri?",
    answer: "Yiliga bir marta EKGni tekshirish",
    options: ["Har oy qon bosimini tekshirish", "Yiliga bir marta EKGni tekshirish", "Siydikdagi glyukoza va oqsil miqdorini har 3 oyda bir marta tekshirish", "To'r pardani 3 yilda bir marta tekshirish."]
  },
  {
    question: "Gipertenziya bilan og'rigan odamlar uchun quyidagi xavf omillari mavjud:",
    answer: "Ortiqcha vazn",
    options: ["Nos (nasvoy) dan foydalanish", "Qonda xolesterinning yuqoriligi", "Ortiqcha vazn", "Kam harakatli turmush tarzi"]
  },
  {
    question: "Bo'lmachalar fibrilatsiyaning eng ko'p uchraydigan sabablari:",
    answer: "tinchlantiruvchi vositalarning me'yordan ortiq qabul qilinishi",
    options: ["tirotoksikoz", "tinchlantiruvchi vositalarning me'yordan ortiq qabul qilinishi", "aortal klapan stenozi", "glikozidlarning me'yordan ortiq qabul qilinishi"]
  },
  {
    question: "Chap qorincha etishmovchiligi belgilari:",
    answer: "oyoqlarda shish paydo bo'lishi",
    options: ["aorta ustidagi 2-ton aksenti", "o'pkaning pastki qismlarida nam xirillashlar", "assit", "oyoqlarda shish paydo bo'lishi"]
  },
  {
    question: "Stenokardiyaga quyidagilar xosdir:",
    answer: "jismoniy yoki hissiy yuklama paytida og'riq paydo bo'ladi",
    options: ["og'riq 15-20 minut davom etadi", "EKGda ishemiyadan tashqari", "repolarizatsiya jarayonlarining buzilishi", "jismoniy yoki hissiy yuklama paytida og'riq paydo bo'ladi", "nitrogliserin qabul qilgandan keyin og'riq yo'qolmaydi"]
  },
  {
    question: "Miokard infarktining asoratlari:",
    answer: "gemorragik shok",
    options: ["buyrak etishmovchiligi", "anevrizma", "gemorragik shok", "Damuaze sindromi"]
  },
  {
    question: "Nafas siqishi haqida gapiradigan bo'lsak, bu to'g'rimi:",
    answer: "yurak astmasida nafas siqishi ko'proq ekspirator bo'ladi",
    options: ["yurak astmasida nafas siqishi ko'proq ekspirator bo'ladi", "psixologik yuklamada nafas siqishi tez-tez uchraydi", "yurak kasalliklarida nafas siqishi ko'pincha tinch holatda sodir bo'ladi", "o'pka saratonida tez-tez nafas siqishi kuzatiladi"]
  },
  {
    question: "Yurakning funktsional shovqini quyidagilar bilan tavsiflanadi:",
    answer: "bo'yinturuq chuqurchasi sohasida eshitiladi",
    options: ["6-7 yilgacha davom etadi", "qo'ltiqqa irradiatsiyalanmaydi", "bo'yinturuq chuqurchasi sohasida eshitiladi", "EKGdagi o'zgarishlar bilan birga keladi"]
  },
  {
    question: "YuIK quyidagi belgilar bilan tavsiflanadi:",
    answer: "ayrim hollarda dam olish vaqtida ishemiyaning EKG belgilarining yo'qligi",
    options: ["kasallik asosan 34 yoshdan keyin sodir bo'ladi", "ayrim hollarda dam olish vaqtida ishemiyaning EKG belgilarining yo'qligi", "chap tomonda ijobiy bilak sindromi", "spirtli ichimliklarni uzoq muddat iste'mol qilish yurak tomirlari kasalligining oldini oladi"]
  },
  {
    question: "Qorincha paroksizmal taxikardiyasiga qanday EKG belgilar xosdir?",
    answer: "taxikardiyaning to'satdan boshlanishi va to'satdan tugashi",
    options: ["Yurak urishi 400 va undan ortiq", "deformatsiyalanmagan QRS komplekslari", "P-Q intervalining uzayishi", "taxikardiyaning to'satdan boshlanishi va to'satdan tugashi"]
  },
  {
    question: "EKG belgilari bo'yicha quyidagi holatlarni aniqlash mumkinmi?",
    answer: "o'ng bo'lmachaning gipertrofiyasi",
    options: ["giperkapniya belgilari", "dilyatatsion kardiomiopatiya", "yuqori kavak vena sindromi", "o'ng bo'lmachaning gipertrofiyasi"]
  },
  {
    question: "Mitral stenozning konservativ terapiyasi quyidagilarni o'z ichiga olishi kerak:",
    answer: "Antikoagulyantlarni buyurish",
    options: ["Nitrofuranlar bila profilaktika", "Antikoagulyantlarni buyurish", "Kortikosteroidlar", "NYQP lar"]
  },
  {
    question: "Bemor tez yordamga kuchli bosh og'rig'i shikoyati bilan keladi. AQB 240 / 140 mm.sm.ust. ko'z tubi tomirlarini tekshirish: ko'rish nervi diskining",
    answer: "Gipertoniya kasalligi xuruji (gipertonik kriz).",
    options: ["Meningit", "Buyrak arteriyalarining obstruktsiyasi.", "Kushing sindromi.", "Gipertoniya kasalligi xuruji (gipertonik kriz)."]
  },
  {
    question: "Yopishqoq, shishasimon balg'am quyidagilarga xosdir:",
    answer: "bronxoektaz",
    options: ["o'pka shishi", "bronxoektaz", "bronxial astma", "pnevmoniya"]
  },
  {
    question: "Qonli yo'talning keng tarqalgan sabablariga quyidagilar kiradi:",
    answer: "intubatsiya paytida traxeya shilliq qavatining shikastlanishi",
    options: ["faringit", "ko'krak qafasining shikastlanishi", "o'tkir bronxit", "intubatsiya paytida traxeya shilliq qavatining shikastlanishi"]
  },
  {
    question: "Sil kasalligining klinik ko'rinishiga quyidagilar kiradi:",
    answer: "subfebril harorat",
    options: ["balg'amli yo'tal", "quruq teri", "subfebril harorat", "taxikardiya"]
  },
  {
    question: "Yo'talish haqida fikr to'g'rimi?",
    answer: "kechalari tez-tez paydo bo'ladi - bronxial astma bilan",
    options: ["zaif - bronxit bilan", "paroksizmal - o'pka saratoni bilan", "kechalari tez-tez paydo bo'ladi - bronxial astma bilan", "nafas siqishi bilan kechadigan - limfoma bilan"]
  },
  {
    question: "Bronxoektazhaqida qaysi fikr to'g'ri?",
    answer: "plevral og'riq",
    options: ["bronxlarning qaytar mahalliy kengayishi bilan tavsiflanadi", "vaqti-vaqti bilan", "asosan tunda yo'tal", "xushtaksimon xirillash", "plevral og'riq"]
  },
  {
    question: "Asoratsiz bronxial astma uchun:",
    answer: "astma xurujida gorizontal holat bo'g'ilishni kamaytiradi",
    options: ["astma xurujidan tashqari o'pkada auskultativ ma'lumotlarning yo'qligi", "bronxlarni kengaytiruvchi ingalyatorlarni qabul qilishdni effektivmasligi", "astma xurujida gorizontal holat bo'g'ilishni kamaytiradi", "sianoz"]
  },
  {
    question: "Bronxial astma xuruji uchun xarakterlidir:",
    answer: "ekspirator bo'g'ilish",
    options: ["stress davrida tez-tez rivojlanadi", "ekspirator bo'g'ilish", "stridorli nafas olish", "inspirator bo'g'ilish"]
  },
  {
    question: "SOO'K (surunkali obstruktiv o'pka kasalligi) rivojlanishining keltirib chiqarivchi omillar:",
    answer: "chekish",
    options: ["stress omili", "laringospazm", "pnevmoniya", "chekish"]
  },
  {
    question: "Nafas olish tizimi kasalliklarida nafas siqishi haqidagi fikr to'g'rimi?",
    answer: "jismoniy zo'riqish paytida yuzaga keladi",
    options: ["nafas yo'llari infektsiyasida kuchayadi", "tez rivojlanadi", "jismoniy zo'riqish paytida yuzaga keladi", "unumsiz yo'tal bilan kechadi"]
  },
  {
    question: "Qaysi hollarda quyidagi belgilar \"astmatik status\" belgilari bo'lishimumkin?",
    answer: "ingalyatorlarning samaradorligi",
    options: ["ingalyatorlarning samaradorligi", "bir kundan ortiq to'xtovsiz astma xuruji", "bir oyda 15 marta astma xuruji", "glyukokortikoidlar kiritilgandan keyingina to'xtaydigan astma xuruji"]
  },
  {
    question: "Bronxial astma xurujidan oldin kuzatiladi?",
    answer: "xushtaksimon xirillash",
    options: ["xushtaksimon xirillash", "burundagi qichishish", "yosh oqishi", "qo'rquv hissi"]
  },
  {
    question: "Hayz sikli qanday fazalardan iborat?",
    answer: "Yuqoridagi fazalardan",
    options: ["Regeneratsiya bosqichi (desquamatsiy", "Proliferativ faza", "Sekretsiya fazasi", "Yuqoridagi fazalardan"]
  },
  {
    question: "Kombinatsiyalangan og'iz kontratseptivlarining ta'sir mexanizmi?",
    answer: "Keltirilgan barcha mexanizmlar",
    options: ["Ovulyatsiyani bostirish", "Bachadon bo'yni shilliq qavatining qalinlashishi", "Infektsiyani oldini olish", "Keltirilgan barcha mexanizmlar"]
  },
  {
    question: "KOKni qabul qilish qoidalariga quyidagilar kiradi:",
    answer: "Hayz davrining 1-5 kunlari boshlanishi",
    options: ["Tug‘ilgandan 6 oy o‘tgach", "Tug'ilgandan so'ng darhol", "Kuniga 2 tabletkadan", "Hayz davrining 1-5 kunlari boshlanishi"]
  },
  {
    question: "KOKni qo‘llashga ko‘rsatma:",
    answer: "Noto'g'ri hayz ko'rgan ayollar",
    options: ["Oshqozon-ichak kasalliklariga chalingan ayollar;", "Emizgan ayollar", "Noto'g'ri hayz ko'rgan ayollar", "Buyrakning yallig'lanish kasalliklari bilan og'rigan ayollar;"]
  },
  {
    question: "KOKni qo‘llashga mutlaq qarshi ko‘rsatmalar:",
    answer: "Tromboemboliya tarixi",
    options: ["Surunkali ich qotishi;", "Yurak nuqsonlari;", "Kalkulyoz xoletsistit;", "Tromboemboliya tarixi"]
  },
  {
    question: "Kombinatsiyalangan og'iz preparatlarining nojo'ya ta'siri:",
    answer: "bosh og'rig'i",
    options: ["akne", "amenoreya", "tushkun kayfiyat", "bosh og'rig'i"]
  },
  {
    question: "(sof) progestinli kontratseptivlarni tayinlash ko'rsatiladi?",
    answer: "emizikli onalar",
    options: ["emizikli onalar", "anamnezida tromboemboliya", "artrit", "gipotenziya bilan"]
  },
  {
    question: "Qaysi hollarda progestinli kontratseptivlarni buyurish mumkin emas?",
    answer: "Ko'krak o'smalari",
    options: ["Ko'krak o'smalari", "Emizgan ayollar", "Arterial gipertenziya bilan og'rigan ayollar", "Migrenli ayollar"]
  },
  {
    question: "Progestin tabletkalarini to'g'ri qabul qilish:",
    answer: "Tug'ruqdan keyingi 6 hafta",
    options: ["Tug‘ilgandan so‘ng darhol", "Tug‘ilgandan keyin bir yil o‘tgach", "Hayz davrining o'rtasida", "Tug'ruqdan keyingi 6 hafta"]
  },
  {
    question: "Progestinli kontratseptivlarni buyurish maqsadga muvofiqdir:",
    answer: "30 yoshgacha",
    options: ["30 yoshgacha", "Yuqori qon bosimi bilan", "Toksik buqoq bilan", "O'tkir gepatit bilan"]
  },
  {
    question: "Qabulda er-xotin 2 yil davomida bepushtlik bilan. Tadqiqotlar shuni ko'rsatdiki, eri azospermiya bilan kasallangan. Endi siz ularga shunday deyishingiz mumkin:",
    answer: "testdan bir kecha oldin jinsiy aloqa vaqtinchalik azospermiyaga olib kelishi mumkin; ko'p hollarda to'liq tekshiruv patologiyaning sababini ko'rsatadi",
    options: ["testdan bir kecha oldin jinsiy aloqa vaqtinchalik azospermiyaga olib kelishi mumkin; ko'p hollarda to'liq tekshiruv patologiyaning sababini ko'rsatadi", "donor sperma bilan sun'iy urug'lantirish bu vaziyatda eng to'g'ri usuldir", "bu patologiyaga ega erkaklarning ko'pchiligi davolab bo'lmaydi", "bu holat gepatit bilan bevosita bog'liq"]
  },
  {
    question: "Endometrioz quyidagilarga xos emas:",
    answer: "og'riqli siyish",
    options: ["ikkilamchi algomenoreya", "qorinning pastki qismida og'riq", "og'riqli siyish", "giperpolimenoreya"]
  },
  {
    question: "Menopauza sindromi har bir narsa bilan tavsiflanadi, bundan tashqari:",
    answer: "qin shilliq qavatining atrofiyasi va quruqligi",
    options: ["asabiylashish", "qorinning pastki qismida og'riq", "yurak urishi", "qin shilliq qavatining atrofiyasi va quruqligi"]
  },
  {
    question: "Menopauza davrida ayol hamma narsani qilishi kerak, bundan tashqari:",
    answer: "vazningizni kuzatib boring",
    options: ["vazningizni kuzatib boring", "mashq qilish", "jinsiy aloqani to'xtatish", "spirtli ichimliklar va qahvani kamroq iching"]
  },
  {
    question: "Spermatozoidlar jinsiy aloqadan keyin bachadon bo'shlig'iga quyidagi yo'llar bilan kiradi :",
    answer: "10-15 daqiqa",
    options: ["5 daqiqa", "10-15 daqiqa", "30-60 min", "2-3 soat"]
  },
  {
    question: "Homilador ayolni birinchi bo'lib ko'rganda umumiy shifokor nimani tekshirishi kerak?",
    answer: "bo'y, vazn, puls, qon bosimi, sut bezlari, teri, shilliq pardalar, qalqonsimon bez",
    options: ["bo'y", "vazn", "puls", "qon bosimi", "sut bezlari", "teri", "shilliq pardalar", "qalqonsimon bez", "vazn ortishi", "allergik reaktsiyalar", "tos suyagining kattaligi"]
  },
  {
    question: "32-haftada shifokor homilador ayolda qanday ko'rsatkichlarni aniqlashi kerak?",
    answer: "bachadon tubining balandligi, homilaning holati va ko'rinishi, homilaning yurak urishi",
    options: ["bachadon tubining balandligi", "homilaning holati va ko'rinishi", "homilaning yurak urishi", "ko'zgulardagi bachadon bo'yni holati", "jigar holati", "buyraklar holati"]
  },
  {
    question: "Homilador ayollarda tinimsiz qusish holatlarida:",
    answer: "markaziy asab tizimining zararlanishi",
    options: ["buyrakning shikastlanishi", "oshqozon-ichak trakti patologiyasi", "jigarning og'ir shikastlanishi", "allergik reaktsiyalar", "markaziy asab tizimining zararlanishi"]
  },
  {
    question: "Homilador ayolga ko'ngil aynishi va qayt qilish uchun shifokor tavsiyalari:",
    answer: "oz miqdorda ovqatlaning, hidlardan saqlaning",
    options: ["oz miqdorda ovqatlaning", "hidlardan saqlaning", "gazlangan ichimliklar ichmang", "tinchlantiruvchi vositalar qabul qilish", "temir preparatlarini qabul qilish"]
  },
  {
    question: "Agar kontratseptiv vositalardan foydalanmasdan muntazam jinsiy hayot mavjud bo'lganda, kamida quyidagi hollarda homiladorlik sodir bo'lmasa, nikoh bepusht deb hisoblanadi .",
    answer: "1 yil",
    options: ["0", "5 yil", "1 yil", "2", "5 yil", "5 yil"]
  },
  {
    question: "Homilador ayollar qizilcha kasalligi:",
    answer: "malformatsiyalarga olib keladi, homilaning intrauterin o'limiga olib kelishi mumkin",
    options: ["malformatsiyalarga olib keladi", "homilaning intrauterin o'limiga olib kelishi mumkin", "profilaktika maqsadida barcha homilador ayollarga qizilchaga qarshi sarum berish talab etiladi", "homilada ko‘rlikka sabab bo‘ladi", "homila o'limiga olib kelishi mumkin"]
  },
  {
    question: "Homilador ayollarning kamqonligi quyidagilardan kelib chiqadi:",
    answer: "aylanib yuruvchi qon hajmining oshishi",
    options: ["temirga bo'lgan ehtiyojning pasayishi", "aylanib yuruvchi qon hajmining oshishi", "temir ishlab chiqarishning kamayishi", "juda tez-tez qon tekshiruvi"]
  },
  {
    question: "Homiladorlik patologiyasi rivojlanishining xavf omillari:",
    answer: "18 yoshgacha bo'lgan homiladorlik",
    options: ["18 yoshgacha bo'lgan homiladorlik", "68 kg dan ortiq vazn ortishi", "baland", "uy-joy sharoitlari"]
  },
  {
    question: "Homilador ayolning akusherlik anamnezida qanday xavf omillari shifokorni ogohlantirishi kerak?",
    answer: "irsiy kasalliklar",
    options: ["tez-tez tug'ilish", "irsiy kasalliklar", "jinsiy a'zolarning yallig'lanish kasalliklari", "kechiktirilgan sezaryen"]
  },
  {
    question: "Asemptomatik bakteriuriya hisoblanadi",
    answer: "homilada patologiya rivojlanishiga olib keladi",
    options: ["buyrak parenximasining o'tkir yallig'lanishi", "homilada patologiya rivojlanishiga olib keladi", "o'tkir pielonefrit paydo bo'lishi mumkin bo'lgan kasallik", "qon bosimi ko'tarilgan kasallik"]
  },
  {
    question: "Preeklampsiyaga oid to‘g‘ri gapni ko‘rsating:",
    answer: "preeklampsiyani bartaraf etish uchun tug'ish tavsiya etiladi",
    options: ["preeklampsiyani bartaraf etish uchun tug'ish tavsiya etiladi", "agar yaxshilanish bo'lmasa", "darhol kasalxonaga yotqizish", "preeklampsiyani davolashda diuretiklardan foydalanish", "tuzsiz dietani belgilash"]
  },
  {
    question: "Og'ir preeklampsiya belgilarini ko'rsating:",
    answer: "aniq shish, qon bosimining 150/110 mm Hg dan oshishi",
    options: ["qon bosimining 120/10 mm Hg dan ortiq oshishi.", "aniq shish", "qon bosimining 150/110 mm Hg dan oshishi", "mushaklarning konvulsiv siqilishlari", "poliuriya"]
  },
  {
    question: "Homilador ayollarda kuyish haqida qaysi biri to‘g‘ri aytilgan?",
    answer: "asosiy sabab gastroezofagial reflyuks",
    options: ["xomilalik soch o'sishi bilan bog'liq", "asosiy sabab gastroezofagial reflyuks", "homilador ayollarda yurak kuyishini davolash - dori", "oziq-ovqat iste'molini cheklashni tavsiya eting"]
  },
  {
    question: "Homilador ayollarda gipertenziv sindromning xavf omillari :",
    answer: "qandli diabet kasalligi",
    options: ["qandli diabet kasalligi", "oligogidramnioz", "pielonefrit", "tez-tez tug'ilish"]
  },
  {
    question: "Homilador ayollarda gipertenziyani dori vositalari bilan davolash quyidagilarni o‘z ichiga oladi:",
    answer: "metildopa",
    options: ["prozazin", "dihidroxlorotiyazid", "metildopa", "diltiazem"]
  },
  {
    question: "Preeklampsiyada qanday alomatlar ko'proq uchraydi?",
    answer: "arterial gipertenziya, proteinuriya",
    options: ["arterial gipertenziya", "proteinuriya", "anuriya", "nokturiya", "poliuriya"]
  },
  {
    question: "Preeklampsi skriningi quyidagilarni o'z ichiga oladi:",
    answer: "homilador ayollarni doimiy tortish, qon bosimini muntazam o'lchash",
    options: ["yurak urish tezligini muntazam o'lchash", "siydikda eritrotsitlarni aniqlash", "har bir tekshirishda allergik reaksiyalarni aniqlash", "homilador ayollarni doimiy tortish", "qon bosimini muntazam o'lchash"]
  },
  {
    question: "Plasentaning muddatidan oldin ajralishi quyidagilar bilan tavsiflanadi:",
    answer: "vaginal qon ketish, qorinning pastki qismida og'riq",
    options: ["vaginal qon ketish", "qorinning pastki qismida og'riq", "pastki bel og'rig'i", "qon bosimini pasaytirish", "aniq tashxis MRT yordamida aniqlanadi"]
  },
  {
    question: "Homilador ayollarda kamqonlikning oldini olish uchun qanday hollarda temir preparatlarini buyurish kerak?",
    answer: "intergenetik interval 2 yildan ortiq",
    options: ["intergenetik interval 2 yildan ortiq", "20 yoshgacha", "kontratseptsiya uchun PPC dan uzoq muddat foydalanish", "kontratseptsiya uchun COClarni uzoq muddat qo'llash"]
  },
  {
    question: "Homilador ayollarda gl     yukoza bardoshlik testini qanday hollarda o'tkazish kerak?",
    answer: "ortiqcha vaznli ayol bilan (BMI 25 dan yuqori), agar tarixda katta homila bo'lsa",
    options: ["ortiqcha vaznli ayol bilan (BMI 25 dan yuqori)", "agar tarixda katta homila bo'lsa", "40 yoshdan katta", "30 yoshdan oshgan", "siydikda eritrotsitlar aniqlanadi"]
  },
  {
    question: "Xomilaga qanday dorilar teratogen ta'sir ko'rsatadi?",
    answer: "tetratsiklin",
    options: ["tetratsiklin", "ampitsillin", "metildopa", "kanefron"]
  },
  {
    question: "Kombinatsiyalangan estrogen-gestagen preparatlari quyidagi hollarda terapevtik maqsadlarda qo'llaniladi:",
    answer: "yuqoridagilarning barchasi",
    options: ["tuxumdonlar sklerosistozi tufayli giperandrogenizm bilan", "tuxumdon arrenoblastomasi tufayli giperandrogenizm bilan", "adrenogenital sindrom bilan", "yuqoridagilarning barchasi"]
  },
  {
    question: "Gipertonik sindromni davolash uchun qanday dorilarni qo‘llash kerak ?",
    answer: "enalapril",
    options: ["enalapril", "metildopa", "amlodipin", "nefidipin"]
  },
  {
    question: "Homilador ayollarda asemptomatik bakteriuriya?",
    answer: "homilador ayollarning taxminan 20% da uchraydi",
    options: ["homilador ayollarning taxminan 20% da uchraydi", "erta abort qilish xavfi ortishi bilan birga keladi", "anemiya bilan kechadigan", "homila anomaliyalarining ko'payishi bilan birga keladi"]
  },
  {
    question: "Homilador ayollarda gipertoniya sindromi bu:",
    answer: "homiladorlikning 20 xaftasidan keyin qon bosimi > 140/90 ortishi",
    options: ["diuretiklarni majburiy kiritishni talab qiladi", "homiladorlikning 20 xaftasidan keyin qon bosimi > 140/90 ortishi", "3-homiladorlik davrida tez-tez uchraydi", "homilaning intrauterin o'limi xavfi mavjud"]
  },
  {
    question: "Ektopik homiladorlikning xavf omillari:",
    answer: "bachadon naychasida oldingi operatsiyalar, bachadon va qo'shimchalarning anormal rivojlanishi",
    options: ["bachadon naychasida oldingi operatsiyalar", "bachadon va qo'shimchalarning anormal rivojlanishi", "anamnezda vaginit", "endometrit", "bartolinit"]
  },
  {
    question: "Preeklampsi uchun eng mos simptom komplekslarini tanlang:",
    answer: "bosh og'rig'i, uyquchanlik, ko'rishning buzilishi, arterial gipertenziya, oyoqlarda shish, siydikda oqsil",
    options: ["arterial gipotenziya", "bosh og'rig'i", "uyquchanlik", "ko'rishning buzilishi", "arterial gipertenziya", "oyoqlarda shish", "siydikda oqsil", "gipotenziya", "nafas qisilishi", "o'pka shishi", "poliuriya", "bradikardiya", "nafas qisilishi"]
  },
  {
    question: "Homilador ayollarning gipertenziv sindromi (HS) uchun xavf omillari, bundan mustasno:",
    answer: "birinchi tug'ilish",
    options: ["birinchi tug'ilish", "homila tomchisi", "semirish", "buyrak kasalligi"]
  },
  {
    question: "Yengil preeklampsiya uchun qaysi gaplar to'g'ri?",
    answer: "arterial gipertenziya aniqlanadi",
    options: ["jigar shikastlanishiga olib kelishi mumkin (HELLP)", "arterial gipertenziya aniqlanadi", "kuchli proteinuriya kuzatiladi", "konvulsiv sindromning rivojlanishi kuzatiladi"]
  },
  {
    question: "Plasenta previa uchun xarakteristikani tanlang:",
    answer: "tinch holatda vaginal qon ketishining paydo bo'lishi",
    options: ["tinch holatda vaginal qon ketishining paydo bo'lishi", "kuchli bel og'rig'i", "etkazib berish uchun mehnatni rag'batlantirish qo'llaniladi", "aniq diagnostika usuli - MRT"]
  },
  {
    question: "Homilador ayollarda gipertonik sindrom qanday asoratlarni keltirib chiqarishi mumkinligini homilador ayolga tushuntiring?",
    answer: "platsentaning muddatidan oldin ajralishi, intrauterin o'sishning kechikishi",
    options: ["yurak xuruji", "platsentaning muddatidan oldin ajralishi", "intrauterin o'sishning kechikishi", "HPN", "platsenta oldingi"]
  },
  {
    question: "Homiladorlikda homiladorlik qandli diabet uchun xavf omillari",
    answer: "irsiy omil, o'lik tug'ilish tarixi",
    options: ["irsiy omil", "o'lik tug'ilish tarixi", "1 yoki undan ortiq tug'ilish", "2 va undan ortiq tug'ilish", "onaning yoshi 25 yoshdan katta"]
  },
  {
    question: "Homilador ayolga homiladorlik qandli diabet qanday asoratlarni keltirib chiqarishi mumkinligini tushuntiring?",
    answer: "preeklampsiyaning rivojlanishi",
    options: ["preeklampsiyaning rivojlanishi", "homila nuqsonlari", "tug'ilish jarohatlari", "vazn yo'qotish", "asta-sekin progressiv retinopatiya"]
  },
  {
    question: "Ektopik homiladorlikda gumon qilinganda sizning taktikangiz:",
    answer: "shoshilinch tibbiy yordam uchun ginekologiyaga yotqizish",
    options: ["qonni umumiy tahlil qilish", "shoshilinch tibbiy yordam uchun ginekologiyaga yotqizish", "siydik tahlilini o'tkazish", "og'riqni yo'qotish uchun oshqozonga isitish yostig'i", "keyin uni ultratovushga yuboring"]
  },
  {
    question: "Qanday kasalliklar bir soat ichida ko'rish buzilishining tez rivojlanishiga olib keladi?",
    answer: "yuqoridagilarning barchasi to'g'ri",
    options: ["serebrovaskulyar avariya", "asr kolobomasi", "glaukoma", "katarakta"]
  },
  {
    question: "Konyunktivaning hissiy innervatsiyasida ishtirok etmaydigan nerv?",
    answer: "N. lakrimalis",
    options: ["N. maxillaris", "N. nasociliaris", "N. lakrimalis", "N. frontalis"]
  },
  {
    question: "Vaqtinchalik monokulyar (bir tomonlama) ko'rlikning sababi quyidagilar bo'lishi mumkin.",
    answer: "Markaziy retinal arteriyaning vaqtinchalik tiqilib qolishi",
    options: ["Shishasimon tananing degeneratsiyasi", "Gigant hujayrali arterit", "Idiopatik intrakranial gipertenziya", "Markaziy retinal arteriyaning vaqtinchalik tiqilib qolishi"]
  },
  {
    question: "O'tkir konyunktivitga quyidagilar xosdir:",
    answer: "Ko'zning siliyer giperemiyasi",
    options: ["Ko'zning siliyer giperemiyasi", "Fotofobiya", "Ko‘rish nervidagi yallig‘lanish jarayoni", "Shilliq-yiringli ajralmalar"]
  },
  {
    question: "Konyunktivaning talaffuz qilinadigan shishi nomi:",
    answer: "Kimoz",
    options: ["Rubeoz", "Koloboma", "Kimoz", "Anizokoriya"]
  },
  {
    question: "Blefarit - bu:",
    answer: "Ko'z qovoqlari chetlarining yallig'lanishi",
    options: ["Soch follikulasining abssessi", "Ko'z qovoqlari chetlarining yallig'lanishi", "Kekirdak negizida qobiq va tarozilar hosil bo'lishi", "Ko'z yoshi suyuqligining chiqishi buzilishi bilan kechadi"]
  },
  {
    question: "Glaukoma quyidagi belgilar bilan tavsiflanadi:",
    answer: "Burchakni yopish bilan - shishasimon tanadan ko'z ichi suyuqligini drenaj tizimiga etkazib berish buziladi",
    options: ["Ko'pincha kavkaz millatiga mansub odamlarda rivojlanadi", "Burchakni yopish bilan - shishasimon tanadan ko'z ichi suyuqligini drenaj tizimiga etkazib berish buziladi", "Yuqori ko'z qovog'ining tushishi", "Ko'z osti tubini tekshirganda - tubning og'ir giperemiyasi"]
  },
  {
    question: "To'r pardaning ajralishining klinik belgilari:",
    answer: "To'satdan ko'z oldida yorug'lik chaqnashlarining paydo bo'lishi",
    options: ["To'satdan ko'z oldida yorug'lik chaqnashlarining paydo bo'lishi", "Ikki tomonlama ko'rishning buzilishi", "Ko'zning og'rig'i va qizarishi", "Bosh og'rig'i"]
  },
  {
    question: "Glaukoma xurujida shoshilinch tibbiy yordam:",
    answer: "Pilokarpinning mahalliy 4% eritmasi",
    options: ["Issiq oyoq vannalari", "Diuretiklar", "Atropin sulfat og'iz orqali", "Pilokarpinning mahalliy 4% eritmasi"]
  },
  {
    question: "Traxomada differensial diagnostika (surunkali xlamidiya ko'zining shikastlanishi) quyidagi shartlar bilan o'tkaziladi:",
    answer: "Konyunktiva va shox pardaning travmatik shikastlanishi",
    options: ["Qatar bahorida", "Konyunktiva va shox pardaning travmatik shikastlanishi", "Follikulit", "Glaukoma"]
  },
  {
    question: "Orbita flegmonasiga kelsak, bu to'g'ri hisoblanadi:",
    answer: "Ko'z qovog'ining aniq ikki tomonlama shishishi va qizarishi xarakterlidir",
    options: ["Olisdagi jismlarning haqiqatda yomon farqlanishi", "Ko'z qovog'ining aniq ikki tomonlama shishishi va qizarishi xarakterlidir", "Paranasal sinuslar proektsiyasida palpatsiya paytida og'riq", "Ko'z oldida xarakterli rangli dog'lar paydo bo'ladi."]
  },
  {
    question: "Qariyalarda ko‘z qizarishining keng tarqalgan sabablari:",
    answer: "Glaukoma xuruji",
    options: ["Shox pardaning astigmatizmi", "Glaukoma xuruji", "Keratit", "Virusli kon'yunktivit"]
  },
  {
    question: "Optik nevrit uchun to'g'ri gaplarni tanlang:",
    answer: "Ikkala ko'zning ko'rish qobiliyatini yo'qotish",
    options: ["Ko'z rangi", "Ikkala ko'zning ko'rish qobiliyatini yo'qotish", "Ko'p skleroz sababi", "Ko'z qorachig'ining lezyonning qarama-qarshi tomonidagi yorug'likka bevosita reaktsiyasining zaiflashishi"]
  },
  {
    question: "Ko'zi qizargan bemorning diagnostikasi. 55 yoshli ayol o'ng ko'zi butunlay qizarib ketgan. ìrísí AOK qilinadi, ko'z qorachig'i mahkamlanadi va kattalashadi. Ko'z ichi bosimi yuqori. Eng ehtimoliy tashxisni tanlang.",
    answer: "Glaukoma",
    options: ["Glaukoma", "Irritatsiya", "Konyunktivit", "Konyunktival osti qon ketishi"]
  },
  {
    question: "Ko'zi qizargan bemorning diagnostikasi. 33 yoshli ayol og'riqli qizil ko'zdan shikoyat qiladi. Konyunktiva tomirlari AOK qilinadi. Iris, o'quvchi, shox parda va ko'z ichi bosimi normaldir. Kirpiklar bir-biriga yopishadi, ko'zlarda qum hissi",
    answer: "konyunktivit",
    options: ["glaukoma", "irritatsiya", "konyunktivit", "konyunktival osti qon ketishi"]
  },
  {
    question: "Ko‘z tubi va shishasimon tanasining tuzilishi haqida to‘g‘ri deb hisoblanadi:",
    answer: "Ko‘rish nervining to‘r pardadan chiqish nuqtasi optik diskga to‘g‘ri keladi",
    options: ["Ko‘rish nervining to‘r pardadan chiqish nuqtasi optik diskga to‘g‘ri keladi", "Markaziy chuqurcha aniq chegaralari bo'lgan yorqin nuqta bilan o'ralgan", "Vitreus tanasi loyqa jelatinli massa", "Shishasimon tanasi ko'z olmasining normal shaklini saqlashga hissa qo'shmaydi"]
  },
  {
    question: "Agar sizda ko'r yigit ko'z qovoqlarining buralishi va shox pardaning yarasi bo'lsa, qanday o'tmishdagi ko'z kasalligi haqida o'ylaysiz?",
    answer: "Gonokokk kon'yunktivit",
    options: ["Herpes simplex virusi", "Gonokokk kon'yunktivit", "Glaukoma", "Traxoma"]
  },
  {
    question: "O'tkir kon'yunktivit bilan bog'liq kasallik:",
    answer: "Traxoma",
    options: ["Gonoblenoreya", "Blefaroxalaz", "Pterigium", "Traxoma"]
  },
  {
    question: "Virusli konyunktivitni aniqlashda GP ning taktikasi:",
    answer: "Mikroskopiya va ajralish kulturasini tayinlash",
    options: ["Ko'zlarga sovuq kompres qo'yish", "Bandajni qo'llash", "Mikroskopiya va ajralish kulturasini tayinlash", "Xloramfenikol tomchilari"]
  },
  {
    question: "Blefaritga kelsak, bu to'g'ri:",
    answer: "Bir hafta ichida 1% tetratsiklin malhami",
    options: ["Ko'z qovoqlarining yallig'lanishi bilan tavsiflanadi", "To‘r pardaning buzilishi", "Lakrimatsiya va fotofobiya bilan xarakterlanadi", "Bir hafta ichida 1% tetratsiklin malhami"]
  },
  {
    question: "Glaukomaga kelsak, bu to'g'ri hisoblanadi:",
    answer: "Irsiy moyillik bor",
    options: ["Irsiy moyillik bor", "Shikoyatlar kasallikning rivojlanishining dastlabki bosqichida allaqachon paydo bo'ladi", "Ko‘z ichi bosimi 20 mm simob ustunigacha", "Lazerdan terapevtik foydalanish samarasiz"]
  },
  {
    question: "To'r pardaning ajralishi haqida to'g'ri deb hisoblanadi:",
    answer: "Og'ir miyopi",
    options: ["Og'ir miyopi", "Ikki tomonlama ko'rish buzilishi simptomi bilan", "Pilokarpin 0", "5% eritmasi tomchilarini tomizish orqali yordam bering va keyin oftalmologga murojaat qiling."]
  },
  {
    question: "Strabismusga oid quyidagi bayonotlar noto'g'ri hisoblanadi:",
    answer: "Davolanishni boshlash vaqti bolada ko'rish qobiliyatini yo'qotish tezligiga ta'sir qilmaydi.",
    options: ["Bolalarda strabismusni davolashni imkon qadar erta boshlash kerak", "Faqat tibbiy muolaja", "Sababi onadagi STI bo'lishi mumkin", "Davolanishni boshlash vaqti bolada ko'rish qobiliyatini yo'qotish tezligiga ta'sir qilmaydi."]
  },
  {
    question: "62 yoshli ayol, so‘nggi 5-6 oy davomida ko‘rishning buzilishi, ko‘zning qizarishi, davriy bosh og‘rig‘i va ko‘zda bir tomonlama og‘riqlar shikoyati bilan GP qabuliga keldi. Ushbu bemorga glaukoma tashxisi qo'yilgan. Ushbu bemorda qanday o'zgarishlar bo'lishi mumkin?",
    answer: "Fiziologik qazish ishlarining yo‘qligi",
    options: ["Ko'z ichi bosimining 21 mm Hg dan yuqori ko'tarilishi", "Optik diskning qazilishining kamayishi", "Diskning tomirlari yorqin va yaxshi aniqlangan", "Fiziologik qazish ishlarining yo‘qligi"]
  },
  {
    question: "Bolalardagi kataraktaga kelsak, bu to'g'ri hisoblanadi:",
    answer: "Umumiy sabab intrakranial tug'ilish travmasi",
    options: ["Umumiy sabab intrakranial tug'ilish travmasi", "Chaqaloqlarda ko'rishning buzilishiga olib kelmaydi", "Chaqaloqlarda uni aniqlash uchun oftalmoskopiya o'tkazilmaydi", "Yorug'lik refleksini o'zgartirib", "chaqaloqdagi kataraktaga shubha qilish mumkin"]
  },
  {
    question: "O'tkir kon'yunktivitni mahalliy davolashning asosiy usuli:",
    answer: "Antibakterial tomchilarni tez-tez tomizish",
    options: ["Blefarorafiya", "Monokulyar bandaj", "Antibakterial tomchilarni tez-tez tomizish", "Binokulyar bandaj"]
  },
  {
    question: "Bahor-yoz davrida ko'proq uchraydigan kon'yunktivit:",
    answer: "Allergik",
    options: ["Epidemik gemorragik", "Burchakli", "Allergik", "Xlamidiya"]
  },
  {
    question: "O'tkir virusli konyunktivitni davolash:",
    answer: "Qisman ambulatoriya",
    options: ["Qisman ambulatoriya", "Kasalxonada", "Kasalxonaning yuqumli kasalliklar bo'limida", "Kasalxonaning oftalmologiya bo'limida"]
  },
  {
    question: "Boladagi umumiy xafv belgilarini aniklang.",
    answer: "Xushining o’zidaligi",
    options: ["Talvasa", "ovqatdan so’ng qayd qilish", "Xushining o’zidaligi", "Ko’krakni ema oladi.", "Piyolada suyuklikni icha olmaydi."]
  },
  {
    question: "Nafas qiyinchiligi bor deb xisoblanadi, qachonki bolada:",
    answer: "Ko’krak qafasini tortilishi va stridor eshitilganda",
    options: ["1 daqiqada nafas soni 30 marotaba bo’lsa.", "Yo’tal uzoq vaqt davom etganda.", "Ko’krak qafasini tortilishi va stridor eshitilganda", "Nafas olganda xushtaksimon xirillash eshitilganda"]
  },
  {
    question: "Diareya kuzatilyotgan bolaning onasiga qanday savollar berish kerak.",
    answer: "Diareya qachondan buyon kuzatilmoqda va najasda qon kuzatildimi",
    options: ["Diareya qachondan buyon kuzatilmoqda va najasda qon kuzatildimi", "Teri burmasi tekislanadimi", "Qancha suyuqlik ichyapti", "Ko’zlari kirtayganmi"]
  },
  {
    question: "Agar bolada tana xarorati yuqori bo’lganda, qanday simptomlarni aniqlash kerak.",
    answer: "Ensa mushaklarini regidligini",
    options: ["Ensa mushaklarini regidligini", "Toshmalar", "tumov", "yo’tal", "ko’zning qizarishi va yiringi", "Quloqdan oqma oqishi", "Qo’l kaftlarini yaqqoloqligi"]
  },
  {
    question: "Oriqlik darajasini aniqlash maqsadida quyidagilarga axamiyat beriladi:",
    answer: "Qovurg’alar ravog’ini aniqligini",
    options: ["Qovurg’alar ravog’ini aniqligini", "Dumba soxasidagi yog’ qavatini notekis yig’ilganligini", "Qornining ichiga kirganligini", "Sonlaridagi burmalarning bo’lishiga"]
  },
  {
    question: "Qanday kasallik “Bakterial infeksiya extimoli” deb tavsiflanadi",
    answer: "Dizenteriya, pnevmoniya, quloqning o’tkir infeksiyasi",
    options: ["Dizenteriya", "pnevmoniya", "quloqning o’tkir infeksiyasi", "Kam vaznlik", "kamqonlik", "Mastoidit", "Yo’tal yoki shamollash", "qizamiq", ""]
  },
  {
    question: "Diareyani Breja bo’yicha davolash o’z ichiga oladi:",
    answer: "Ichining xar suyuq kelganida 100 ml ORV ichish tavsiya etiladi",
    options: ["Ichining xar suyuq kelganida 100 ml ORV ichish tavsiya etiladi", "Bolaning umumiy xolati xar 6 soatda qayta baxolanadi.", "1 yoshgacha bolaga 4soat davomida 400-700 ml ORVni berish tavsiya etiladi.", "Nazogastral zond orqali ORVni berish"]
  },
  {
    question: "Agar bolada Pnevmoniya bo’lganda qanday xolatlarda ona bolani QVP ga darxol olib kelishi kerak?",
    answer: "Axvoli og’irlashib, tana xarorati ko’tarilganda, suyuqlikni icha olmaganida",
    options: ["Axvoli og’irlashib", "tana xarorati ko’tarilganda", "suyuqlikni icha olmaganida", "Suyukliklarni ichishdan", "ovqatlanishdan bosh tortganida", "Kam vaznlik aniqlanganida", "Bo’yin limfa tugunlari paypastlanganida"]
  },
  {
    question: "Go'dakda qanday xolatlar kuzatilganda “Jiddiy bakterial infeksiya extimoli”deb tavsiflanadi:",
    answer: "Qulog’idan yiringli oqma kuzatilganda.",
    options: ["Ko’krak qafasini tortilishi va burun kataklarini kengayishi", "Uxlamay xarxasha qilganda.", "Ichi kelmaganida", "Qulog’idan yiringli oqma kuzatilganda."]
  },
  {
    question: "Oziqlantirish muammosining belgilari qanday?",
    answer: "Vaznini kamligi va qo’shimcha ovqatlarni kiritmaslik",
    options: ["Ko’krakni samarali emishi.", "Sutkasiga 8 marotabadan ortiq emishi", "Vaznini kamligi va qo’shimcha ovqatlarni kiritmaslik", "6 oydan boshlab qo’shimcha ovqatlarni kirishi"]
  },
  {
    question: "Ko’krak suti bilan oziqlantirishda UASH tavsiyalari:",
    answer: "Bolani talabiga kura kechasi va kunduzi emizish",
    options: ["Bolani talabiga kura kechasi va kunduzi emizish", "Bolani 1 yoshgacha emizish", "Sutkasiga 5-6 martadan kam bo’lmaganda emizish.", "Qo’shimcha ovqatlarni 3 oylikdan kiritish"]
  },
  {
    question: "Diareya kuzatilgan bolani ko’ruvi o’z ichiga oladi:",
    answer: "Teri burmasini tekislanish tezligi aniqlanadi",
    options: ["Minutiga nafas soni aniqlanadi", "Teri burmasini tekislanish tezligi aniqlanadi", "Terida toshmalarni aniqlash", "Limfa tugunlarini paypastlash"]
  },
  {
    question: "1 xaftalikdan 2 oygacha bo’lgan bolalar qaysi yosh guruxini o’z ichiga oladi?",
    answer: "7 kundan 1 oy 29 skunli",
    options: ["7 xaftali", "7 kundan 1 oy 29 skunli", "14 kunli", "48 kunli"]
  },
  {
    question: "2 oylikdan 1 yoshgacha bulgan bolalar uchun qanday son tezlashgan nafas deb xisoblanadi?",
    answer: "Minutiga 50 ta va undan ortiq",
    options: ["Minutiga 50 ta va undan ortiq", "Minutiga 48 ta", "Minutiga 39ta", "Minutiga 45 ta"]
  },
  {
    question: "1 xaftadan 2 oylikgacha bo’lgan bolalar uchun qanday son tezlashgan nafas deb xisoblanadi?",
    answer: "Minutiga 60 ta va undan ortiq",
    options: ["Minutiga 49ta", "Minutiga 39ta", "Minutiga 55ta", "Minutiga 60 ta va undan ortiq"]
  },
  {
    question: "12 oylikdan 5 yoshgacha bo’lgan bolalar uchun qanday son tezlashgan nafas deb xisoblanadi?",
    answer: "Minutiga 40 ta va undan ortiq",
    options: ["Minutiga 40 ta va undan ortiq", "Minutiga 39ta", "Minutiga 29ta", "Minutiga 25ta"]
  },
  {
    question: "Pnevmoniya deb tavfsiflangan 3 yoshli bolani onasi ambulatoriyaga qachon qayta ko’rik uchun olib kelishi kerak ?",
    answer: "2 kundan so’ng",
    options: ["2 kundan so’ng", "5 kundan so’ng", "7 kundan so’ng", "14 kundan so’ng"]
  },
  {
    question: "Diareya va Suvsizlanish yo’q deb tavfsiflangan 2 yoshli bolani onasi ambulatoriyaga qachon qayta ko’rik uchun olib kelishi kerak?",
    answer: "5 kundan so’ng",
    options: ["2kundan so’ng", "5 kundan so’ng", "7 kundan so’ng", "14 kundan so’ng"]
  },
  {
    question: "Asoratsiz istma deb tavfsiflangan 13 oylik bolani onasi ambulatoriyaga qachon qayta ko’rik uchun olib kelishi kerak ?",
    answer: "2kundan so’ng",
    options: ["2kundan so’ng", "5 kundan so’ng", "7 kundan so’ng", "14 kundan so’ng"]
  },
  {
    question: "4 yoshli bola “Streptokoksiz faringit va asoratsiz istma” deb tavfsiflandi, qanday belgilar kuzatilganda ambulatoriyaga darxol qaytib kelishi shart?",
    answer: "Suyuqlik icha olmasa, ema olmasa",
    options: ["Suyuqlik icha olmasa", "ema olmasa", "Istmasi ko’tarilganda", "Suyulikni yomon ichsa", "Axvoli yaxshilansa"]
  },
  {
    question: "Ko’krak qafasini tortilishi belgilari qanday?",
    answer: "Nafas olish aktida ko’krak qafasini pastki ravog’ini ichga tortilishi",
    options: ["Nafas olish aktida ko’krak qafasini pastki ravog’ini ichga tortilishi", "Nafas chiqarish aktida ko’krak qafasini pastki ravog’ini ichga tortilishi", "Nafas chiqarish aktida ko’krak qafasini xanjarsimon o’sig’ini tortilishi", "Nafas olish aktida ko’krak qafasini pastki ravog’ini kengayishi"]
  },
  {
    question: "Stridor nima?",
    answer: "Nafas olish aktida shovqinli nafas eshitilishi",
    options: ["Nafas chiqarish aktida shovqinli nafas eshitilishi", "Burun bitishida eshitiladigan nafas", "Nafas olish aktida shovqinli nafas eshitilishi", "Nafas olish va chiqarish aktida xushtaksimon nafas eshitilishi"]
  },
  {
    question: "“Yo’tal yoki tezlashgan nafas” bo’limida qanday simptomlar aniqlanadi?",
    answer: "Ko’krak qafasini tortilishi",
    options: ["Ko’krak qafasini tortilishi", "Ko’zlarining kirtayishi", "Suyuqlikni chanqoqlik bilan ichishi", "Auskultatsiyada krepitatsiya aniqlanishi"]
  },
  {
    question: "Amoksitsillin preparatini to’g’ri tavsiyasi qanday?",
    answer: "To’liq tuzalgunga qadar davolang",
    options: ["To’liq tuzalgunga qadar davolang", "Albatta onalar bilan maslaxatlashing", "Axvoli yaxshilanganida davoni to’xtating", "Birinchi kuni 3maxaldan", "keyingi kunlari 2 maxaldan bering"]
  },
  {
    question: "Qanday xolatlarda davolash uchun amoksitsillin buyuriladi?",
    answer: "Quloq o’tkir infeksiyasi, pnevmoniya.",
    options: ["Streptokokkli faringit", "Quloq o’tkir infeksiyasi", "pnevmoniya.", "Yo’tal yoki shamollash", "Oziqlanish buzilishi", "anemiya"]
  },
  {
    question: "Xalqum obssess tasnifi bilan qanday chora tadbirlar o’tkaziladi.",
    answer: "Antibakterial dori birinchi dozasi berilib, zudlikda gospitalizatsiya qilinadi.",
    options: ["Xavfsiz vositalar bilan tomoqni yumshatiladi.", "Antibakterial dori birinchi dozasi berilib", "zudlikda gospitalizatsiya qilinadi.", "Lyugol yoki gensial’violet eritmasi bilan tomoqni artish", "Ko’p suyuqliklar berish buyuriladi."]
  },
  {
    question: "Qanday xavfsiz vosita tomoqni yumshatib, yo’talni yengillashtiradi?",
    answer: "Iliqsut, qaynatilgan suv, ko’kraksuti.",
    options: ["Iliqsut", "qaynatilgan suv", "ko’kraksuti.", "Shirinchoy", "Sharbatlar", "Briliantko’ki"]
  },
  {
    question: "Mastoidit tasnifi belgilari?",
    answer: "Tomogida og’riq va qizarish",
    options: ["Quloqda og’riq", "Qulog’idan yiring oqishi.", "Quloq orqasida og’riqlishish", "Tomogida og’riq va qizarish"]
  },
  {
    question: "Streptokokkli faringit tasnifi qo’yish uchun bolada qanday belgilar bo’lishi kerak?",
    answer: "Tomog’ida yiring va limfa tugunlarini kattalashganida",
    options: ["Faqatgina bo’yin limfa tugunlari kattalashganida", "Tomog’ida yiring va limfa tugunlarini kattalashganida", "Tomog’i qizarganida", "Tomog’i og’rib", "suyuqlik ichmaganida"]
  },
  {
    question: "Streptokokkli faringitda bolani davolang:",
    answer: "Bitsillin-3, bitsillin-1, paratsetamol",
    options: ["Bitsillin-3", "bitsillin-1", "paratsetamol", "Lyugol eritmasi bilan tomoqni artish", "Tetratsiklin malxamini surtish", "Xech qanday davo preparatlarini buyurmang"]
  },
  {
    question: "Yurak-qon tomir kasalliklari rivojlanishining asosiy bo'lmagan xavf omilini ko'rsating:",
    answer: "qandli diabet tarixi",
    options: ["40 yoshdan oshgan", "bel atrofi (ayollar uchun 90 sm", "erkaklar uchun 100 sm)", "qonda tarixda erta yurak-qon tomir kasalliklar qarindoshlar", "qandli diabet tarixi"]
  },
  {
    question: "Maslahat berishning noto'g'ri qoidasini ko'rsating:",
    answer: "ma'lumot bermaydi",
    options: ["so'rang", "tinglang", "ma'lumot bermaydi", "maqtov"]
  },
  {
    question: "Qon bosimi 140/90 dan yuqori bo'lgan bemorni kasalxonaga yuborishning hojati yo'q va:",
    answer: "engil temir tanqisligi anemiyasi",
    options: ["homiladorlik", "periferik shish va proteinuriya", "engil temir tanqisligi anemiyasi", "ko'krak qafasidagi uzoq vaqt davomida hal qilinmagan og'riq"]
  },
  {
    question: "Yurak-qon tomir xavfini baholash uchun ko'rsatmalar quyidagilarni o'z ichiga olmaydi:",
    answer: "erkak, 30 yosh, BMI=25, chekmaydi",
    options: ["42 yoshli qandli diabet bilan kasallangan ayol", "BP=140/90 mm.cm.us va chekish", "BP=90/60 mm Hg va qondagi xolesterin darajasi = 7", "0 mmol/l", "erkak", "30 yosh", "BMI=25", "chekmaydi"]
  },
  {
    question: "Gipertenziya uchun dorisiz terapiya:",
    answer: "faqat 1-bosqich gipertenziyasi bo'lgan bemorlar uchun samarali davolash usuli hisoblanadi.",
    options: ["faqat 1-bosqich gipertenziyasi bo'lgan bemorlar uchun samarali davolash usuli hisoblanadi.", "qisqa muddatli davolash", "dori terapiyasiga bo'lgan ehtiyojni kamaytirishi mumkin", "dori terapiyasining samaradorligiga ta'sir qilmaydi"]
  },
  {
    question: "Quyidagi bemorlarning qaysi biriga darhol dori buyurasiz?",
    answer: "56 yoshli, qon bosimi 145/85 bo'lgan, sigaret chekadigan va siydikida oqsil bo'lgan erkak",
    options: ["40 yoshli", "qon bosimi 145/85 bo'lgan", "chekmaydigan va yuragi yo'q erkak kasalliklarning oilaviy tarixi", "56 yoshli", "qon bosimi 145/85 bo'lgan", "sigaret chekadigan va siydikida oqsil bo'lgan erkak", "30 yoshli ayol va qon bosimi 125/85", "30 haftalik homilador va qon bosimi 20/80 bo'lgan 25 yoshli ayol"]
  },
  {
    question: "Qandli diabetga tashxis qo‘yishning to‘g‘ri mezonlarini tekshiring:",
    answer: "shikoyatlar mavjud bo'lganda, bir marta ovqatdan keyin plazma glyukoza darajasi ≥ 11,1 mmol / l qayd etilgan.",
    options: ["shikoyatlar mavjud bo'lganda", "bir marta ro'za tutilgan plazma glyukoza darajasi ≥ 7 mmol / l", "shikoyatlar bo'lmasa", "ovqatdan keyin bir marta qayd etilgan plazma glyukoza darajasi ≥ 10", "2 mmol / l", "shikoyatlar bo'lmasa", "bir marta ro'yxatga olingan ochlik plazmasidagi glyukoza darajasi ≥ 5", "0 mmol / l", "shikoyatlar mavjud bo'lganda", "bir marta ovqatdan keyin plazma glyukoza darajasi ≥ 11", "1 mmol / l qayd etilgan."]
  },
  {
    question: "Sog'lom ovqatlanishning asosi:",
    answer: "haftasiga kamida 3 marta baliq iste'mol qilish",
    options: ["pishirishda yog'dan foydalanish", "haftasiga kamida 3 marta baliq iste'mol qilish", "o'rtacha miqdorda pechene", "keklarni iste'mol qilish", "yangi meva va sabzavotlar kuniga 100 g gacha etarli"]
  },
  {
    question: "Tavsiya etilgan tuz dozalari:",
    answer: "kuniga 5 g gacha",
    options: ["5-10 g/kun", "4-6 g/kun", "kuniga 5 g gacha", "10 - 15 g / kun"]
  },
  {
    question: "Quyidagilardan qaysi biri mutaxassisga murojaat qilish mezoni emas?",
    answer: "birinchi marta ko'krak qafasidagi og'riq",
    options: ["SBP ≥160 va/yoki DBP ≥95 mmHg Art.", "proteinuriya", "birinchi marta ko'krak qafasidagi og'riq", "SBP ≥200 va/yoki DBP ≥120 mmHg Art."]
  },
  {
    question: "Dori terapiyasi ko'rsatiladi:",
    answer: "barcha javoblar to'g'ri",
    options: ["qandli diabet va yurak-qon tomir kasalliklari bo'lgan barcha bemorlarkasalliklar", "albuminuriya", "retinopatiya", "chap tomonning gipertrofiyasi bo'lgan bemorlarqorincha", "doimiy yuqori qon bosimi ≥ 160/100 mm Hg bo'lgan bemorlar. Art.", "barcha javoblar to'g'ri"]
  },
  {
    question: "Arterial gipertenziya bilan og'rigan bemorlar uchun tez yordam xonasida qanday laboratoriya va instrumental tadqiqotlar o'tkazilishi kerak?",
    answer: "barcha javoblar to'g'ri",
    options: ["qon glyukoza testi", "siydikda oqsilni aniqlash", "kuz tubini tekshiruvi", "barcha javoblar to'g'ri"]
  },
  {
    question: "Yurak-qon tomir kasalliklari xavfi past bo'lgan bemorlarda quyidagilar bo'lishi kerak:",
    answer: "har 6 oyda qon bosimini tekshiring",
    options: ["har 6 oyda qon bosimini tekshiring", "siydikda oqsil miqdorini har 6 oyda aniqlash", "yiliga bir marta EKG", "yiliga 2 marta xolesterinni aniqlash"]
  },
  {
    question: "Qandli diabet bilan og'rigan bemorlarga:",
    answer: "barcha javoblar to'g'ri",
    options: ["BP ≥130/80 mmHg bo'lgan bemorlar uchun antihipertenziv dorilar. Art.", "statinlar ≥ 40 yoshdagi 2-toifa diabet bilan og'rigan barcha bemorlar uchun", "endokrinolog bilan birgalikda barcha bemorlar uchun insulin preparatlari", "barcha javoblar to'g'ri"]
  },
  {
    question: "Quyidagilardan qaysi biri ta'sir qilishi mumkin bo'lgan NCD uchun xulq-atvor xavf omili emas?",
    answer: "og'irlashgan irsiyat",
    options: ["chekish", "og'irlashgan irsiyat", "ortiqcha vazn - semirish", "nosog'lom ovqatlanish"]
  },
  {
    question: "2-toifa qandli diabetga tashxis qo‘yishning to‘g‘ri mezonlarini belgilang:",
    answer: "agar shikoyatlar bo'lsa, och qoringa glyukoza darajasi 8,5 mmol/l bilan ro‘yxatdan o‘tganda",
    options: ["agar shikoyatlar bo'lsa", "och qoringa glyukoza darajasi 8", "5 mmol/l bilan ro‘yxatdan o‘tganda", "shikoyatlar mavjud bo'lganda", "ovqatdan keyin bir marta qayd etilgan glyukoza darajasi - 7 mmol / l", "asabiylashish", "ko'z yoshi", "ko'ngil aynishi", "qusish"]
  },
  {
    question: "Voyaga yetmagan Romatoidartrit (JRA) bilan bog‘liq holda, bu to‘g‘ri hisoblanadi:",
    answer: "faqat monoartrit bilan namoyon bo‘ladi",
    options: ["revmatolog mutaxassisining maslahatini talab qilmaydi", "16 yoshdan boshlab", "faqat monoartrit bilan namoyon bo‘ladi", "ichki organlarning shikastlanishi bilan birga kelmaydi"]
  },
  {
    question: "Qandli diabetni (QD) dorisiz davolash tamoyillari:",
    answer: "yuqoridagilarning barchasi to'g'ri",
    options: ["parhez", "oyoqlar parvarishi", "xatti-harakat xavf omillarini bartaraf etish va nazorat qilish", "qandli diabet bilan og'rigan bemorlarni o'z-o'zini nazorat qilish va o'z-o'zini parvarish qilishni o'rgatish", "yuqoridagilarning barchasi to'g'ri"]
  },
  {
    question: "Osteoartritning klinik ko’rinishiga quyidagilar kiradi:",
    answer: "og’riq harakat va kuch bilan kuchayadi",
    options: ["bosh barmog‘ining metacarpal bo‘g‘imlarining assimetrik shikastlanishi", "birlamchi lezyon – gutdagi mag‘lubiyat", "og’riq harakat va kuch bilan kuchayadi", "uzoq muddatli qattiqlik"]
  },
  {
    question: "Kestirib, tug‘madislokatsiya (BBB):",
    answer: "BBB simptomatik davolash bilan barcha bolalar",
    options: ["sabab asetabulumning deformatsiyasi va oyoqning qisqarishi", "chaqaloqlarda rentgenografiya paytida majburiy o’zgarishlar aniqlanadi", "kestirib qo’shilishda oyoqni 90 0 gacha egganda va 450 gacha tortilganda chertish eshitiladi", "BBB simptomatik davolash bilan barcha bolalar"]
  },
  {
    question: "Oyoq ligamentlarining shikastlanishi, oyoq og‘rig‘iga olib keladi:",
    answer: "oyoqning medial chetini palpatsiya qilish paytida og‘riq",
    options: ["yallig‘lanish natijasida yuzaga keladi", "tik turish paytida oyoqdagi o‘tkir og‘riq xarakterlidir", "oyoqning medial chetini palpatsiya qilish paytida og‘riq", "o‘tkir shikastlanganda avval issiqlik", "keyin sovuq protseduralar tavsiya etiladi"]
  },
  {
    question: "Pastki bel og‘rig‘ining tabiati va uning kelib chiqishi o‘rtasidagi yozishmalarni aniqlang:",
    answer: "zonklama og‘rig‘i-suyak kasalliklari",
    options: ["chuqur og‘riqli to‘kilgan og‘riq-algomenoreya", "doimiy yuzaki diffuz og‘riq – Umurtqa ildiz yoki asabning tirnash xususiyati", "qattiq tortishish og‘rig‘i-mushaklarning shikastlanishi", "zonklama og‘rig‘i-suyak kasalliklari"]
  },
  {
    question: "Bel og‘rig’i shikoyati bilan kechadigan quyidagi kasalliklarda quyidagi laboratoriya va instrumental tadqiqotlar o‘tkaziladi:",
    answer: "Bexterev kasalligini istisno qilish uchun RF (Revmatoid omil) ni aniqlash",
    options: ["Bexterev kasalligini istisno qilish uchun RF (Revmatoid omil) ni aniqlash", "Uzoq muddatli og’riq holatida umurtqa pog’onasi rentgenogrammasi", "Reiter sindromiga shubha qilingan taqdirda ASLO tadqiqoti", "Osteoporoz belgilari uchun elektromiyografiya"]
  },
  {
    question: "Bronxial astma xuruji oldi xolatida kuzatiladi:",
    answer: "xushtaksimon xirillashlar",
    options: ["burun qichishi", "xushtaksimon xirillashlar", "ko‘z yoshi oqishi", "qo‘rquv xisi"]
  },
  {
    question: "2 yoshdan 5 yoshgacha bo‘lgan bolalarda og‘ir pnevmoniya belgilarini BKIUOB printsipi bo‘yicha sanab bering:",
    answer: "ko‘krak qafasini tortilishi",
    options: ["ko‘krak qafasini tortilishi", "tinch xolatda stridor", "ensa mushaklarini rigidligi", "limfa tugunlarini kattalashuvi"]
  },
  {
    question: "Bola xayotiga xavf soluvchi belgilarga kirmaydi (BKIUOBA):",
    answer: "bolaning bir marotaba qusishi",
    options: ["bolaning bir marotaba qusishi", "bolaning letargik xolati", "bola ko‘krakni ema olmaydi", "bola suv icha olmaydi"]
  },
  {
    question: "Bolaning ozg‘inlik darajasini baxolashda nimaga axamiyat berilmaydi (BKIUOB):",
    answer: "bola qovurg‘alarini konturini yaqqolligiga",
    options: ["bola qovurg‘alarini konturini yaqqolligiga", "dumba soxasidagi teri burmalarini xolatiga", "oyoqlarning ozg‘inligiga", "sonlarning xar xil kichrayishi", "son soxasida burmalarning paydo bo‘lishi"]
  },
  {
    question: "Bolalardagi o‘rta og‘irlikdagi suvsizlanish belgilarini ko‘rsatib bering BKIUOB bo‘yicha:",
    answer: "bola ko‘zlarin kirtayib qolishi",
    options: ["bola ko‘zlarin kirtayib qolishi", "teri burmalari juda sekin o‘z xolatiga keladi", "uzoq davom etuvchi diareya", "najasda qonning bo‘lishi"]
  },
  {
    question: "Bolada uzoq davom etgan diareyada onasiga nima taviyalar beriladi (BKIUOB):",
    answer: "sut va qatiq maxsulotlarini tavsiya etiladi",
    options: ["sut va qatiq maxsulotlarini tavsiya etiladi", "kompot va soklarni berish", "qovun va tarvuz berish", "o‘simlik yog‘larini berish"]
  },
  {
    question: "Chaqaloqlarda bakterial infektsiyani aniqlashda kuyidagidan tashqari kiradi (BKIUOB):",
    answer: "ko‘zlarning kirtayishi",
    options: ["ko‘zlarning kirtayishi", "shovqinli nafas", "burun qanotlarni nafasda ishtirok etishi - kindikni qizarishi"]
  },
  {
    question: "BKIUOB bo‘yicha yo‘tal yoki nafasning qiyinlashuviga kirmaydi :",
    answer: "ko‘zlarning kirtayishi",
    options: ["ko‘zlarning kirtayishi", "ko‘krak qafasining tortilishi", "tinch xolatdagi stridor", "nafas olish sonining ko‘payishi"]
  },
  {
    question: "BKIUOB da qo‘loqdagi muammoni baxolash mezoniga kirmaydi:",
    answer: "mastoidit belgilari",
    options: ["quloqdagi shovqin", "quloqdan ajralma kelishi", "mastoidit belgilari", "quloqda og‘riq"]
  },
  {
    question: "Ko‘krakka to‘g‘ri qo‘yish koidalariga kirmaydi:",
    answer: "ona bola boshini va bo‘ynini ikki qo‘li bilan ushlaydi",
    options: ["ona bola boshini va bo‘ynini bir qo‘li bilan ushlaydi", "bola tanasi ona tanasiga yaqinlashgan", "bola gavdasi ona tomonga qaragan", "ona bola boshini va bo‘ynini ikki qo‘li bilan ushlaydi"]
  },
  {
    question: "BKIUOB bo‘yicha bakterial infektsiyaga gumon deb klassifikatsiya qilinmaydi:",
    answer: "qizamiq",
    options: ["qizamiq", "dizenteriya", "mastoidit", "pnevmoniya"]
  },
  {
    question: "Diareya bilan kasallangan bolaning onasiga quyidagi savol berilmaydi (BKIUOB):",
    answer: "teri burmasi qanday o‘z xoliga qaytadi?",
    options: ["teri burmasi qanday o‘z xoliga qaytadi?", "diareya qachondan beri davom etadi?", "bolaning ko‘zlari kirtayganmi?", "bolaning axlatida qon bormi?"]
  },
  {
    question: "To‘g‘ri javobni toping. Bizning yurtimizda sog‘lom bolalar immunizatsiyasi :",
    answer: "BTSJ 1 – tug‘ruqxonada 3-5 kun",
    options: ["BTSJ 1 – tug‘ruqxonada 3-5 kun", "Qizamiqqa qarshi - 8 oyda", "AKDS №1 - 3 oyda", "Epid parotit - 1 yoshda"]
  },
  {
    question: "Piyelonefritga olib keluvchi sabablar. Noto'g‘ri javobni ko‘rsating:",
    answer: "kam vaznlik",
    options: ["kam vaznlik", "gijja kasalligi", "surunkali infpktsiya o‘chog‘i", "nasliy moyillik"]
  },
  {
    question: "Bolalarda gipoteriozni belgilari, notug‘ri javobni ko‘rsating:",
    answer: "tilning katta bo‘lishi, terining quruqligi",
    options: ["liqildoqlarni erta yopilishi", "psixomotor rivojlanishni orqada qolishi", "naysimon suyaklarni o‘sishini orqada qolishi", "tilning katta bo‘lishi", "terining quruqligi"]
  },
  {
    question: "Bolalarda suvchechakning belgilari:",
    answer: "mavsumiylik - yilinig sovuq faslida ko‘p uchraydi",
    options: ["mavsumiylik - yilinig sovuq faslida ko‘p uchraydi", "yashirin inkubatsion davri - 24-40 kun", "toshmaning polimorfligi", "burun lab uchburchagida toshmaning mavjudligi", "toshma o‘zidan keyin chandiq qoldiradi"]
  },
  {
    question: "Qo‘shimcha ovqat kiritish, noto‘g‘ri javobni ko‘rsating:",
    answer: "meva sharbatlari 2 oydan boshlab beriladi",
    options: ["meva sharbatlari 2 oydan boshlab beriladi", "qo‘shimcha ovqat bola 6 oyligidan boshlab beriladi", "qo‘shimcha ovqat sifatida manniy yormasi beriladi", "go‘sht maxsulotlari 6 oydan beriladi"]
  },
  {
    question: "Bolalarda suvsizlanishning asosiy belgilari:",
    answer: "chanqash",
    options: ["chanqash", "tinimsiz yig‘lash", "rektal xarortani oshishi", "ko‘p terlash"]
  },
  {
    question: "Bolalar diareyasida amalga oshiriladi:",
    answer: "ona suti bilan ovqatatlantirishni davom ettirish, ORV berish.",
    options: ["ona suti bilan ovqatatlantirishni davom ettirish", "ORV berish.", "tomir ichiga dori vositalarini yuborish ko‘proq natija", "ona sutini berishni to‘xtatish kerak", "antibiotiklar berish kerak"]
  },
  {
    question: "Noto‘g‘ri javobni tanlang:",
    answer: "bolalarda rinit kasalligida simpatomimetiklar berilishi shart",
    options: ["bolalarda rinit kasalligida simpatomimetiklar berilishi shart", "pnevmoniya kasalligida bolalarga tanlov antibiotiki bu amoksitsillin va eritromitsin", "tonzillitda ko‘p suyuqlik ichish tavsiya etiladi", "qizamiq asorati otit va sinusit xisoblanadi"]
  },
  {
    question: "Tireotoksikozda ko'z belgilari:",
    answer: "Ekzoftalm",
    options: ["Ekzoftalm", "Tor ko‘z bo‘shliqlari", "Grefe alomati", "Anizokoriya"]
  },
  {
    question: "Insulinga bog'liq qandli diabet (IBQD) quyidagilar bilan tavsiflanadi:",
    answer: "Ko'pincha irsiy moyillik",
    options: ["Kasallanishni yuqori bosqichi 10-30 yosh", "Kasallikning eng yuqori darajasi 40 yoshdan keyin", "Ko'pincha irsiy moyillik", "Kasallik asta-sekin", "ketoatsidozsiz boshlanadi"]
  },
  {
    question: "2-toifa diabet uchun skrining tekshiruvi o'tkaziladi:",
    answer: "40 yoshdan oshgan barcha shaxslar uchun",
    options: ["50 yoshdan oshgan barcha shaxslar uchun", "ortiqcha vaznli bemorlar uchun", "qandli diabetning irsiyatga bog‘liq bo‘lgan 20 yoshdan 30 yoshgacha bo'lgan bemorlar uchun", "40 yoshdan oshgan barcha shaxslar uchun"]
  },
  {
    question: "2-toifa qandli diabetni davolashda 1- navbatdagi dori:",
    answer: "gliklazid",
    options: ["gliklazid", "inson insulini", "metformin", "tiozolidindionlar"]
  },
  {
    question: "Qandli diabet aniqlangan bemorlar uchun glikemik nazorat o'tkaziladi:",
    answer: "har oy",
    options: ["har 3 oyda", "har oy", "har 2 oyda", "yiliga bir marta qonda glyukoza normallashganda"]
  },
  {
    question: "Qandli diabet bilan og'rigan bemorlar uchun maxsus tavsiyalar quyidagilardan iborat",
    answer: "yuqoridagilarning barchasi to'g'ri",
    options: ["vazn yo'qotish", "ovqatning hajmi va kaloriya miqdorining kamayishi", "uglevodlar manbai sifatida ko'proq loviya", "mosh", "yasmiq iste'mol qilish", "oftalmologning muntazam tekshiruvi va kuzatuvi", "yuqoridagilarning barchasi to'g'ri"]
  },
  {
    question: "Qandli diabet bilan og'rigan bemorlarda AQ bosimining (Arterial Qon bosimi) maqsadli darajasi:",
    answer: "130/80 mm sim/ust. dan past",
    options: ["140/90 mm sim/ust. dan past", "130/80 mm sim/ust. dan past", "100/70 mm sim/ust. dan past", "90/60 mm sim/ust. dan past"]
  },
  {
    question: "Og'ir gipoglikemiyaga xarakterlidir:",
    answer: "ongni chalkashishi, tirishishlar",
    options: ["terlash", "asabiylashish", "yurak urishi", "ochlik", "ongni chalkashishi", "tirishishlar", "qaltirash", "xolsizlik"]
  },
  {
    question: "Og'ir giperglikemiya uchun xarakterli:",
    answer: "qaltirash, xolsizlik",
    options: ["qonda qand miqdori > 18 mmol/l", "Kussmaul nafasi", "qaltirash", "xolsizlik", "terlash", "taxikardiya", "ko'ngil aynishi", "ishtahaning yo ‘qolishi"]
  },
  {
    question: "Bolalarda bo'yin og'rig'i quyidagi hollarda paydo bo'lishi mumkin:",
    answer: "bo`yin limfadenit",
    options: ["bo`yin limfadenit", "poliomielit", "bachadon bo'yni osteoxondrozi", "nevrit"]
  },
  {
    question: "Noto‘g‘ri javobni ko‘rsating:",
    answer: "krup bilan kuchli, qo'ng'iroqli yo'tal va nafas olishda shovqin bor.",
    options: ["agar bolada o'tkir respiratorli infektsiyalar bo'lsa", "u holda AKDS mumkin emas", "agar bolada oxirgi 3 kun ichida shok bo'lsa", "AKDS mumkin emas", "agar bolada tez-tez soqchilik va boshqa og'ir nevrologik kasalliklar bo'lsa AKDS mumkin emas", "agar bolada OITS bo'lsa", "u holda BCG mumkin emas"]
  },
  {
    question: "Skarlatinaga xos asoratlarni ko'rsating.",
    answer: "ensefalit",
    options: ["miokardit.", "ensefalit.", "gastrit", "ensefalit"]
  },
  {
    question: "Tonzillit uchun quyidagilar to'g'ri keladi:",
    answer: "ko'pincha beta-gemolitik streptokokklar ta'siri natijasida rivojlanadi",
    options: ["ko'pincha beta-gemolitik streptokokklar ta'siri natijasida rivojlanadi", "surunkali bo'lsa", "yoylar va tanglay bodomsimon bezlari o'rtasida tsikatrisial yopishishlarga olib keladi", "sinusit rivojlanishi", "tanlangan dori biseptol"]
  },
  {
    question: "To'g'rimi:",
    answer: "6 oyligida. bola 2 barmog'i bilan kichik narsalarni oladi",
    options: ["raxit gipovitaminoz D", "raxitning spesifik profilaktikasi yil davomida olib boriladi", "onaning qo'shimcha ekctragenital kasalliklari bolalarda raxitning rivojlanishiga yordam beradi", "raxitning oqibatlari - tish kariesi mavjud"]
  },
  {
    question: "To'g'rimi:",
    answer: "6 oyligida. bola 2 barmog'i bilan kichik narsalarni oladi",
    options: ["1 oyligida bolada fleksor gipertoniya bor", "2 oyligida chaqaloq o'yinchoqqa qo'l uzatadi va uni ushlaydi", "3-4 oyligida bola tayanch bilan o'tiradi", "6 oyligida. bola 2 barmog'i bilan kichik narsalarni oladi"]
  },
  {
    question: "Noto‘g‘ri javobni ko‘rsating:",
    answer: "krup bilan kuchli, qo'ng'iroqli yo'tal va nafas olishda shovqin bor.",
    options: ["birinchi 12 oy davomida qo'shimcha ovqatlar ona sutini to'liq almashtirishi kerak", "6 oydan keyin siz qo'shimcha ovqatlarni kiritishingiz kerak", "ko'pchilik sog'lom chaqaloqlar 6 oylik tana vaznini ikki baravar oshiradi", "qo'shimcha oziqlantirish davrida ona suti hajmini saqlab turish uchun tez-tez emizishni davom ettiring."]
  },
  {
    question: "Artralgiyani quyidagi sabablar keltirib chiqarishi mumkin emas:",
    answer: "surunkali gastrit",
    options: ["surunkali gastrit", "o'tkir artrit", "periartikulyar to'qimalarning yallig'lanishi", "yallig'lanishsiz bo'g'im kasalligi"]
  },
  {
    question: "Vaksinatsiyaning vaqtinchalik bekor qilishga quyidagilar kiradi:",
    answer: "surunkali yurak kasalliklarida kuchayish davri",
    options: ["bolani shoshilinch kasalxonaga yotqizish zarurati", "oilada tutqanoqlar tarixi", "surunkali yurak kasalliklarida kuchayish davri", "disbakterioz"]
  },
  {
    question: "Noto‘g‘ri javobni ko‘rsating:",
    answer: "krup bilan kuchli, qo'ng'iroqli yo'tal va nafas olishda shovqin bor.",
    options: ["suvchechakda toshma faqat papulyoz", "qizamiq toshmasi pigmentatsiyani qoldiradi", "qizilcha toshmasi taxminan 3 kun davom etadi", "gemorragik toshmalar sabab - skarlatina"]
  },
  {
    question: "Noto‘g‘ri javobni ko‘rsating:",
    answer: "krup bilan kuchli, qo'ng'iroqli yo'tal va nafas olishda shovqin bor.",
    options: ["o‘tkir epiglottit yo‘tal", "stridor", "inspirator shovqin bilan xarakterlanadi.", "o'tkir epiglottit isitma", "holsizlik", "so'lak oqishi bilan kechadi", "6 oydan 6 yoshgacha bo'ladi.", "krup bilan kuchli", "qo'ng'iroqli yo'tal va nafas olishda shovqin bor.", "epiglottitda sefalosporinlar samarali"]
  },
  {
    question: "Peritonsillar xo'ppoz quyidagi bilan tavsiflanadi:",
    answer: "qo‘zg‘atuvchisi Streptococcus pyogenes",
    options: ["qo‘zg‘atuvchisi Streptococcus pyogenes", "tanglay bodomsimonining yuqoriga siljishi", "tanglay bodomsimonining o'rtacha shishishi", "antibiotiklarni og'iz orqali yuborish samarali"]
  },
  {
    question: "Epididimo-orxitga quyidagilar xosdir:",
    answer: "qorin og'rig'i",
    options: ["asta-sekin boshlanish", "ko'pincha o'smirlik davrida sodir bo'ladi", "terining giperemiyasi", "qorin og'rig'i"]
  },
  {
    question: "Xulq-atvorga oid quyidagi fikrlar to'g'rimi, bolalar buni aniq belgilangan vaqtda bajara olishlari kerakmi?",
    answer: "3 yoshda oyoq bog‘ichlarini bog‘laydi",
    options: ["2 oyligida tabassum qiladi.", "onasini 6 oyligida taniydi.", "10 oyligida kosadan ichadi.", "3 yoshda oyoq bog‘ichlarini bog‘laydi"]
  },
  {
    question: "Qanday kasalliklar bir soat ichida ko'rish buzilishining tez rivojlanishiga olib keladi? Noto'g'ri javobni belgilang",
    answer: "migren",
    options: ["katarakta", "migren", "retinaning ajralishi", "optik nevrit"]
  },
  {
    question: "To'satdan ko'rlikning asosiy sabablariga quyidagilar kiradi, bundan tashqari:",
    answer: "makula degeneratsiyasi",
    options: ["makula degeneratsiyasi", "gemoftalmos", "retinaning ajralishi", "papilla shishi"]
  },
  {
    question: "Quyidagilarning barchasi glaukoma uchun to'g'ri keladi, bundan tashqari:",
    answer: "ob'ektlarni noto'g'ri idrok etish va ko'z oldida yorug'lik chaqnashlari.",
    options: ["ob'ektlarni noto'g'ri idrok etish va ko'z oldida yorug'lik chaqnashlari.", "ko‘z qorachig‘i kengaygan", "ko'rishning xiralashishi", "ko‘z atrofidagi iris doiralari"]
  },
  {
    question: "O'tkir konyunktivit quyidagilarga xos emas:",
    answer: "ko'zda chig'anoq yoki qum hissi;",
    options: ["fotofobiya", "ko'zda chig'anoq yoki qum hissi;", "ko'zning kiprikli giperemiyasi", "lakrimatsiya"]
  },
  {
    question: "To'r parda ajralishining klinik belgilari:",
    answer: "bosh og'rig'i",
    options: ["ko'z oldida yorug'likning to'satdan chayqalishi", "ikki tomonlama ko'rishning buzilishi", "ko'zning og'rig'i va qizarishi", "bosh og'rig'i"]
  },
  {
    question: "Bakterial konyunktivitni davolash uchun quyidagilar qo'llaniladi:",
    answer: "konyunktiva xaltasini va ko'z qovoqlarini sho'r suv bilan yuvish",
    options: ["konyunktiva xaltasini va ko'z qovoqlarini sho'r suv bilan yuvish", "doka bandaji", "vitaminli terapiya", "Atropin sulfatning 1% eritmasi"]
  },
  {
    question: "O'tkir dakriotsistitni davolash (ko'z yoshi qopining yallig'lanishi):",
    answer: "issiq kompresslar",
    options: ["issiq kompresslar", "burun va paranasal sinuslar patologiyasini N davolash.", "H 2% pilokarpin eritmasi tomiziladi", "H asiklovir moyini surtish"]
  },
  {
    question: "Subkonyunktival qon ketishiga nisbatan to'g'ri deb hisoblanadi:",
    answer: "7 kun davomida antibakterial malhamlardan foydalanish kerak emas",
    options: ["hech qanday sababsiz yuzaga kelishi mumkin", "arterial gipertenziya bilan bog'liq emas", "7 kun davomida antibakterial malhamlardan foydalanish kerak emas", "bir hafta ichida hal qilinadi"]
  },
  {
    question: "Qariyalarda ko‘z qizarishining keng tarqalgan sabablari bundan mustasno:",
    answer: "virusli kon'yunktivit",
    options: ["keratit", "glaukoma xuruji", "uveit", "virusli kon'yunktivit"]
  },
  {
    question: "Virusli konyunktivit bilan kasallangan bemorni topsangiz, qanday taktik chora-tadbirlar ko'rasiz?",
    answer: "bemorga ikkilamchi bakterial infeksiya yuzaga kelmasligi uchun gigienaga rioya qilish kerakligini tushuntiring",
    options: ["bemorga ikkilamchi bakterial infeksiya yuzaga kelmasligi uchun gigienaga rioya qilish kerakligini tushuntiring", "sun'iy ko'z yoshlar", "gormonal malhamlar", "bog`lam qo`yish"]
  },
  {
    question: "Erkak, 42 yosh, kompyuter muhandisi bo'lib ishlaydi. Achchiqlanish, vazn yo'qotish va yurak urishining ko'rinishi haqida shikoyatlar. Tekshiruv chog'ida siz ko'z olmasining oldinga siljishi, kon'yunktiva giperemik ekanligini qayd etdingiz. Ko'z qovoqlaridagi patologik o'zgarishlarga tegishli nomni ko'rsating:",
    answer: "periorbital shish",
    options: ["ekzoftalmos", "ko'z qovoqlarining tortilishi", "periorbital shish", "ptozis"]
  },
  {
    question: "Sizning uchrashuvingizda 7 yoshli bolangiz bor. Yuzni tekshirganda, yuqori ko'z qovog'ining cho'kishi aniqlanadi. Ko'z qovoqlaridagi patologik o'zgarishlarga tegishli nomni ko'rsating:",
    answer: "ptozis",
    options: ["ekzoftalm", "ko'z qovoqlarining tortilishi", "periorbital shish", "ptozis"]
  },
  {
    question: "Ko'z qizarishi lokalizatsiyasi va sindrom o'rtasidagi to'g'ri muvofiqlikni ko'rsating:",
    answer: "Glaukoma xuruji - kon'yunktiva, qovoqlarning ikki tomonlama qizarishi, ko'zda qum hissi.",
    options: ["Bakterial kon'yunktivit - chegaralangan qizarish", "bu sohada og'riq seziladi", "Virusli kon'yunktivit - ko'z qovoqlari", "follikullar kon'yunktivasining bir tomonlama qizarishi", "Glaukoma xuruji - kon'yunktiva", "qovoqlarning ikki tomonlama qizarishi", "ko'zda qum hissi.", "Konyunktival osti qon ketishi - asosan shox parda atrofida diffuz qizarish."]
  },
  {
    question: "Yangi tug'ilgan chaqaloqning 12 kunlik onasi yaqinda ko'zdan o'rtacha darajada shilliq yiringli oqindi paydo bo'lishidan shikoyat qiladi. Sizning taxminiy tashxisingiz:",
    answer: "gonokokk kon'yunktivit",
    options: ["xlamidiya kon'yunktiviti", "gonokokk kon'yunktivit", "virusli kon'yunktivit", "lakrimal kanalning obstruktsiyasi"]
  },
  {
    question: "Sizda ko'r yigit ko'z qovoqlari buralib, shox pardaning yarasi bor. O'tmishda qanday kasallik haqida o'ylaysiz:",
    answer: "traxoma",
    options: ["oddiy gerpes virusi", "xlamidiya kon'yunktiviti", "traxoma", "glaukoma"]
  },
  {
    question: "Ko'zdagi og'riq turi va ko'z kasalligi o'rtasidagi to'g'ri muvofiqlikni ko'rsating:",
    answer: "Allergik kon'yunktivit - ko'zda qum hissi, fotofobiya",
    options: ["Allergik kon'yunktivit - ko'zda qum hissi", "fotofobiya", "O'tkir iridotsiklit - og'riq qosh", "burun", "chakkaga tarqaladi", "fotofobi", "Keratit - ko'ngil aynishi va qayt qilish bilan birga kuchli og'riq", "Virusli kon'yunktivit - ko'zda qum hissi", "yonish"]
  },
  {
    question: "Yangi tug'ilgan chaqaloqning burun-lakrimal kanalining obstruktsiyasiga kelsak, u to'g'ri hisoblanadi:",
    answer: "ko'zdan doimiy oqindi bilan tavsiflanadi",
    options: ["lakrimal qopning infektsiyasi natijasida yuzaga keladi", "ko'zdan doimiy oqindi bilan tavsiflanadi", "lakrimal qopni massaj qilish kontrendikedir", "o'z-o'zidan ketmaydi"]
  },
  {
    question: "Virusli kon'yunktivitga kelsak, quyidagi fikrlar to'g'ri deb hisoblanadi:",
    answer: "o'ta yuqumli kasallik",
    options: ["kuniga 5 g gacha", "1 haftadan ortiq davom etmasligi mumkin", "ko'p miqdorda shilliq yiringli oqindi", "xarakterli yiringli oqindi"]
  },
  {
    question: "Oftalmolog maslahati uchun ko'rsatmalar:",
    answer: "glaukoma xuruji",
    options: ["ko'zdan oqindi mikroskop va madaniyat maqsadida", "glaukoma xuruji", "allergik kon'yunktivit", "virusli kon'yunktivit"]
  },
  {
    question: "Strabismusga oid quyidagi gaplar YOLG‘ON deb hisoblanadi:",
    answer: "strabismus - o'quvchilarning g'ayritabiiy holati",
    options: ["strabismus - o'quvchilarning g'ayritabiiy holati", "birga keladigan strabismus okulomotor mushaklar tonusining nomutanosibligi tufayli yuzaga keladi", "paralitik strabismus - bitta ko'z-motor mushakning parezi natijasida yuzaga keladi", "sabab onada STD bo'lishi mumkin"]
  },
  {
    question: "Bolalardagi kataraktaga kelsak, bu haqiqat deb hisoblanadi:",
    answer: "umumiy sabab intrakranial tug'ilish travması",
    options: ["umumiy sabab intrakranial tug'ilish travması", "chaqaloqlarda ko'rishning buzilishiga olib kelmaydi", "chaqaloqlarda uni aniqlash uchun oftalmoskopiya o'tkazilmaydi", "yorug'lik refleksining o'zgarishi bilan chaqaloqdagi kataraktaga shubha qilish mumkin"]
  },
  {
    question: "Yarani jarrohlik yo'li bilan davolashning asoratlari:",
    answer: "demping sindromi",
    options: ["giperglikemiya", "temir tanqisligi anemiyasi", "demping sindromi", "og'riqli qichishish"]
  },
  {
    question: "Qayta qayt qilishdan shikoyat qilgan bemorlarda:",
    answer: "analez yig`ish va sababini aniqlash",
    options: ["serukal buyuriladi", "oshqozonni yuvish", "analez yig`ish va sababini aniqlash", "agar bu homilador ayol bo'lsa", "umumiy siydik tahlilini o'tkazing"]
  },
  {
    question: "Qanday dorilar sariqlikni keltirib chiqarishi mumkin?",
    answer: "omeprazol",
    options: ["enalapril", "omeprazol", "propranolol", "D vitamini"]
  },
  {
    question: "Infektsiyalarga hos emas:",
    answer: "qoqshol qo'zg'atuvchisi shikastlangan shilliq pardalar va teri orqali organizmga kiritiladi",
    options: ["tetanusning inkubatsiya davri 1 oygacha davom etishi mumkin", "qoqshol qo'zg'atuvchisi shikastlangan shilliq pardalar va teri orqali organizmga kiritiladi", "qoqshol bilan klinik ko'rinishda isitma", "holsizlik", "bosh og'rig'i", "trismus", "opistotonis kuzatiladi.", "botulizm bilan diareya", "ko'ngil aynishi va qusish rivojlanadi", "keyin esa talvasalar va ongni yo'qotish."]
  },
  {
    question: "Javoblar orasida qaysi biri noto’g’ri:",
    answer: "qizamiq, otit va sinusitning asoratlari",
    options: ["bolalarda pnevmoniya uchun amoksitsillin va eritromitsin tanlanadi.", "tonzillitda ko'p suyuqlik ichish tavsiya etiladi; isitma uchun", "paratsetamol", "qizamiqning inkubatsiya davri 2-5 kungacha davom etishi mumkin", "qizamiq", "otit va sinusitning asoratlari"]
  },
  {
    question: "Ko‘krak qafasidagi og‘riqlar:",
    answer: "ko'krak qafasidagi og'riqsiz miokard infarkti qandli diabetda ko'proq uchraydi",
    options: ["stenokardiyada ko'krak qafasining istalgan qismiga lokalizatsiyalanadi", "emfizemasi bo'lgan yosh yigitda to'satdan ko'krak qafasidagi og'riq va nafas siqishi pnevmoniyadan dalolat beradi.", "ko'krak qafasidagi og'riqsiz miokard infarkti qandli diabetda ko'proq uchraydi", "umurtqa pog'onasi kasalliklari - ko'krak og'rig'iga olib kelishi mumkin emas"]
  },
  {
    question: "Surunkali sinusit uchun hos",
    answer: "burundan doimiy oqindi, ertalab ko'p miqdorda",
    options: ["burundan doimiy oqindi", "ertalab ko'p miqdorda", "paranasal sinuslarning yuqumli bo'lmagan kasalligi", "depressiya tufayli surunkali yo'tal", "tanlagan dori - 1-2 oy davomida amoksiklav"]
  },
  {
    question: "O'tkir laringit diagnostikasi",
    answer: "hirqiroq ovoz yoki ovoz yo'q",
    options: ["hirqiroq ovoz yoki ovoz yo'q", "tarixda - ovozli yuk", "qo'shimcha simptomlar: yurak urishi va qichishish tekshiruvda", "ovoz paychalarining to'liq yopilmasligi"]
  },
  {
    question: "Sistit rivojlanishining qanday xavf omillarini bilasiz?",
    answer: "siydik pufagidagi endoskopik manipulyatsiyalar",
    options: ["kuchli yuklar", "chekish", "siydik pufagidagi endoskopik manipulyatsiyalar", "prostatit"]
  },
  {
    question: "Prostatitning eng mumkin bo'lgan sabablarini belgilang:",
    answer: "barcha javoblar to'g'ri",
    options: ["siydik pufagini kateterizatsiya qilish", "tez-tez jinsiy aloqa qilish", "JYOYK (ЗППП)lar", "barcha javoblar to'g'ri"]
  },
  {
    question: "Prostata saratoni belgilariga quyidagilar kiradi:",
    answer: "siydik chiqarishning uzilishi",
    options: ["tez-tez siyish", "siydik chiqarishning uzilishi", "keying bosqichlarda simptomlarning yaxshilanishi", "orqa va perineumdagi og'riqlar"]
  },
  {
    question: "Asimptomatik bakteriuriya yuzaga keladi:",
    answer: "siydik yo'llari infektsiyalari xavfini oshiradi",
    options: ["jinsiy aloqada bo'lgan ayollarda ko'proq uchraydi", "homilador ayollarning 25% da uchraydi", "siydik yo'llari infektsiyalari xavfini oshiradi", "odatda siydik yo'llarining o'tkir infektsiyasidan oldin bo'ladi"]
  },
  {
    question: "Prostata adenomasi rivojlanishining sabablari:",
    answer: "uretrit",
    options: ["uretrit", "testosterone darajasining oshishi", "LG (lutein gormon) darajasining pasayishi", "40 yildan keyin gormonal nomutanosiblik"]
  },
  {
    question: "Gematuriyaning sabablarini belgilang:",
    answer: "barcha javoblar to'g'ri",
    options: ["siydik yo'llarining infektsiyalari", "buyrak papillalarining nekrozi", "urolitiyoz", "barcha javoblar to'g'ri"]
  },
  {
    question: "Surunkali buyrak yetishmovchiligida preparatlarni buyurish:",
    answer: "furosemid dozasini oshirish kerak",
    options: ["ACE (АПФ)inhibitörlarini dozasini kamaytirish zarur", "furosemid dozasini oshirish kerak", "sefalek sintez-tez yuboriladi", "fenitoin dozasini o'zgartirish talab qilinadi"]
  },
  {
    question: "SBE (ХПН)ning xarakterli belgilari:",
    answer: "oliguriya",
    options: ["oliguriya", "poliuriya", "azotemiya", "barcha javoblar to'g'ri"]
  },
  {
    question: "O‘tkir nefritik sindromga xos:",
    answer: "3,5 g/l dan yuqoriproteinuriya",
    options: ["3", "5 g/l dan yuqoriproteinuriya", "o'tkir rivojlangan gematuriya", "oliguriya", "piuriya"]
  },
  {
    question: "Gematuriya xarakterli alomatdir",
    answer: "urolitiyoz",
    options: ["buyrak shishi", "urolitiyoz", "surunkali pielonefrit", "barcha javoblar to'g'ri"]
  },
  {
    question: "Balanitning kelib chiqish sabablari:",
    answer: "shaxsiy gigiena qoidalariga rioya qilmaslik",
    options: ["shaxsiy gigiena qoidalariga rioya qilmaslik", "seboreya dermatiti", "lateksga allergiya", "antibiotik terapiyasining nojo'ya ta'siri"]
  },
  {
    question: "Varikosele:",
    answer: "erkaklar bepushtligining keng tarqalgan sabablaridan biri",
    options: ["paypaslanganda moyakning ko‘ndalang joylashishi bilan tavsiflanadi", "har doim moyakning ikki tomonlama shikastlanishi", "erkaklar bepushtligining keng tarqalgan sabablaridan biri", "uning belgilari tik turgan holatda yo'qoladi"]
  },
  {
    question: "Ikkilamchi pielonefrit rivojlanishiga moyillik:",
    answer: "homiladorlik",
    options: ["semizlik", "homiladorlik", "diureticlarni qabul qilish", "arterial gipertenziya"]
  },
  {
    question: "Surunkali pielonefritning kuchayishi belgilarini sanab bering:",
    answer: "isitma va titroq",
    options: ["yaqqol tarqalgan shish", "isitma va titroq", "og'riqli hayz ko'rish", "siydik miqdorining kamayishi"]
  },
  {
    question: "Pielonefrit bilan og'rigan bemorning siydik tahlili:",
    answer: "leykotsituriya",
    options: ["siydik zichligining pasayishi", "silindruriya", "gematuriya", "leykotsituriya"]
  },
  {
    question: "Surunkali pielonefrit bilan og'rigan bemorlarni dori-darmonsiz davolash quyidagilarni o'z ichiga oladi:",
    answer: "ko'p suv ichish",
    options: ["tuzni cheklash", "suyuqlikni cheklash", "ko'p suv ichish", "ratsiondagi oqsillarni cheklash"]
  },
  {
    question: "Surunkali buyrak etishmovchiligida konvulsiyalarning paydo bo'lishiga quyidagilar yordam beradi:",
    answer: "atsidoz",
    options: ["atsidoz", "alkaloz", "gipokalsemiya", "giperkalsemiya"]
  },
  {
    question: "Surunkali buyrak yetishmovchiligi bo’lgan bemorlarda kamqonlikning rivojlanishiga sabab bo‘ladigan omillarni belgilang:",
    answer: "tez-tez gemodializ",
    options: ["eritropoetin ishlab chiqarishning ko'payishi", "proteinuriya", "tez-tez gemodializ", "shishgan ichak shilliq qavati tomonidan temirning so'rilishining pasayishi"]
  },
  {
    question: "O'tkir glomerulonefritda OSh taktikasi:",
    answer: "kasalxonaga yuborish",
    options: ["kop suyuqlik buyurish", "qarindoshlariga kasallikning umidsizligi haqida xabar berish", "kasalxonaga yuborish", "ambulator kuzatuv va dietani tavsiya qiladi"]
  },
  {
    question: "O'tkir pielonefrit o'tkir glomerulonefritdan farq qiladi:",
    answer: "pielonefritda siydikda leykotsitlar ustunlik qiladi",
    options: ["pielonefritda siydikda leykotsitlar ustunlik qiladi", "pielonefrit bilan bel bo'shlig'ini urishning ijobiy belgisi xarakterlidir.", "pielonefrit bilan nefrotik sindrom ifodalanadi", "pielonefrit", "doimiy proteinuriya bilan kechadi"]
  },
  {
    question: "Bu to'g'rimi:",
    answer: "Proteinuriya buyrak glomerulini yemirganda kuzatiladi",
    options: ["1 ml siydikda 600 eritrotsit – patologik mikrogematuriya", "Og'ir jismoniy zo'riqishdan keyin paydo bo'lgan gematuriyani davolash kerak", "Proteinuriya buyrak glomerulini yemirganda kuzatiladi", "Sutka davomida siydikdagi oqsil miqdori doimiy"]
  },
  {
    question: "Buyrak sanchig’i quyidagi belgilar bilan tavsiflanadi:",
    answer: "Yalpi gematuriya",
    options: ["Kindik atrofiga tarqaladigan og'riq", "Yarim kun davomidagi hujumning davomiyligi", "Haroratning oshishi", "Yalpi gematuriya"]
  },
  {
    question: "Qon zardobidagi kreatinin kontsentratsiyasiga nisbatan quyidagilar to'g'ri deb hisoblanadi:",
    answer: "Surunkali glomerulonefritda uning ta'rifi va nazorati ko'rsatiladi",
    options: ["Surunkali glomerulonefritda uning ta'rifi va nazorati ko'rsatiladi", "Glomerulyar filtratsiya kuchayishi bilan kreatinin kontsentratsiyasi ortadi", "Silga qarshi preparatlar kreatinin kontsentratsiyasining pasayishiga yordam beradi.", "Kreatinin kontsentratsiyasining ortishi har doim umumiy siydik tekshiruvidagi o'zgarishlar bilan birga keladi."]
  },
  {
    question: "Pushti husn buzarlar yuzaga kelishining xavf omillarini ko’rsating:",
    answer: "barcha javoblar to'g'ri",
    options: ["insolyatsiya va qizib ketish", "stress", "doimiy sovqotish", "barcha javoblar to'g'ri"]
  },
  {
    question: "Husn buzarlar uchun xos bo’lmagan joyni belgilang:",
    answer: "oyoq-qo’llarning orqa yuzasi",
    options: ["yuz sohasi", "yelka va ko’krak sohasi", "oyoq-qo’llarning orqa yuzasi", "peshona va iyak sohasi"]
  },
  {
    question: "Shox masssalari bilan tiqilgan soch follikulalarining nomlanishi:",
    answer: "komedonlar",
    options: ["pustulez husn buzarlar", "teshik yo’llar", "keloidlar", "komedonlar"]
  },
  {
    question: "Toshmalarning klinikasi va joylashishinng xususiyatlariga ko’ra psoriaz quyidagilarga bo’linadi:",
    answer: "barcha javoblar to'g'ri",
    options: ["chegaralangan", "tarqoq", "seboreyali", "barcha javoblar to'g'ri"]
  },
  {
    question: "Psoriazning eng og’ir shakllariga kirmaydi:",
    answer: "papulez",
    options: ["pustulez", "papulez", "psoriatik eritrodermiya", "bullez"]
  },
  {
    question: "Saramasda shikastlangan soha:",
    answer: "ushlab ko’rilganda issiq, shishgan",
    options: ["ko’kimtir rangda va sog’lom teri ustidan bo’rtib turadi", "och pushti rangda", "yirik qipiqlanish bilan", "ushlab ko’rilganda issiq", "shishgan", "ushlab ko’rilganda sovuq"]
  },
  {
    question: "Fertil yoshdagi ayollarda husn buzarlar uchun xos emas:",
    answer: "polikistoz tuxumdonlar sindromining belgisi bo’lishi mumkin",
    options: ["anabolik gormonlarni qabul qilishning oqibati bo’lishi mumkin", "kombinirlangan kontratseptivlarni qabul qilishning oqibati bo’lishi mumkin", "progestinli kontratseptivlarni qabul qilishda kam uchraydi", "polikistoz tuxumdonlar sindromining belgisi bo’lishi mumkin"]
  },
  {
    question: "Kontagioz limollyuskning xarakterli joylashuvini belgilang:",
    answer: "tashqi jinsiy a’zolar, oraliq",
    options: ["boshning soch qismi", "bo’yin va tana qismi", "oyoqning tovon qismi", "tashqi jinsiy a’zolar", "oraliq"]
  },
  {
    question: "Lipomalarga nisbatan noto’g’ri tavsifni belgilang:",
    answer: "faqat 12 smdan katta o’lchamda bo’ladi",
    options: ["bitta yoki ko’p shishlar", "yumaloq yoki bo’lakli shaklga ega", "faqat 12 smdan katta o’lchamda bo’ladi", "bo’yinda", "yuzsohasida", "shuningdek orqa sohada yuzaga kelishi mumkin"]
  },
  {
    question: "Ekzemaning nomedikamentoz davosiga kiradi:",
    answer: "yumshoq charm qo’lqopda yuvish",
    options: ["atir sovun o’rniga xo’jalik sovunidan foydalanish", "shikastlangan terini spirtli eritma bilan artish", "yumshoq charm qo’lqopda yuvish", "terini kremlar bilan yumshatish"]
  },
  {
    question: "Birlamchi sifilisda shankrlar qayerda joylashadi?",
    answer: "barcha javoblar to'g'ri",
    options: ["jinsiy olat ichki qavati", "bachadon bo’yni va klitor", "sut bezlari", "barcha javoblar to'g'ri"]
  },
  {
    question: "Vulgardan farqli ravishda, pushti husn buzarlar uchun xos:",
    answer: "faqat keksa ayollarda uchraydi",
    options: ["faqat keksa ayollarda uchraydi", "qora tanli kishilar uchun xos", "komedonlar albatta aniqlanadi", "husnbuzarlar paydo bo’lguniga qadar qizib ketish xos"]
  },
  {
    question: "Gonoreyabilanog’riganbemorlaruchunxosbo’lmagan ko’p uchraydigan shikoyatlarni belgilang:",
    answer: "tenezmlar",
    options: ["siyishda og’riq va achishish", "defekatsiyada achishish va og’riq", "tenezmlar", "siydik chiqarish kanalidan yiringli ajralmaning kelishi"]
  },
  {
    question: "Kandidoz rivojlanishining xavf omillari:",
    answer: "barcha javoblar to'g'ri",
    options: ["qandli diabet", "semizlik", "ko’p terlash", "barcha javoblar to'g'ri"]
  },
  {
    question: "Psoriaz uchun xos:",
    answer: "Kebner fenomeni",
    options: ["Tangachalarsiz mayda blyashkalarning bo’lishi", "Toshmalarning oyoq-qo’llarning bukuluvchi yuzasida joylashishi", "Kebner fenomeni", "Doimiy qichishish"]
  },
  {
    question: "Toshmaning birlamchi elementini tanlang:",
    answer: "tangachalar",
    options: ["exkimoz", "blyashka", "eroziya", "tangachalar"]
  },
  {
    question: "Oyoq dermatofitiyasi quyidagi simptomlar bilan xarakterlanadi:",
    answer: "oyoqning qichishishi va noxush hid kelishi",
    options: ["oyoq sohasida tortishishlar", "oyoqning qichishishi va noxush hid kelishi", "keyinchalik toshmalar o’rnida chandiqlarning hosil bo’lishi", "xalqasimon eritema"]
  },
  {
    question: "Belbog’simon lishayning simptomlarini tanlang:",
    answer: "shikastlangan sohada giperesteziya",
    options: ["mahalliy og’riq", "shikastlangan sohada giperesteziya", "innervatsiya sohasida qizil dermagrofizm", "regionar limfa tugunlarining kattalashishi va og’riqsizligi"]
  },
  {
    question: "Gerpesning mahalliy davosiga kiradi:",
    answer: "atsiklovir kremi applikatsiyasi",
    options: ["atsiklovir kremi applikatsiyasi", "kumush nitratning 10% lieritmasi", "1 % litetrat siklin surtmasi", "1% ligidrokortizon surtmasi"]
  },
  {
    question: "Surunkali vena qon tomiri yetishmovchiligidagi yara uchun xos bo’lgan belgilarni ko’rsating:",
    answer: "boldir sohasida joylashadi",
    options: ["boldir sohasida joylashadi", "yara joyida kuchli og’riq bezovta qiladi", "boldir mushaklari atrofiyasi rivojlanadi", "yara – chuqur joylashgan", "qirralari tekis"]
  },
  {
    question: "Surunkali arterial qon tomiri yetishmovchiligidagi yara uchun xos bo’lgan belgilarni ko’rsating:",
    answer: "tovon sohasida joylashadi",
    options: ["tovon sohasida joylashadi", "oyoqlar terisi sovuq va atrofiya kuzatiladi", "periferik arteriyalarda ko’zga tashlanuvchi pul’satsiya", "teri giperpigmentatsiyasi"]
  },
  {
    question: "Yotoq yaralarning profilaktikasi:",
    answer: "barcha javoblar to'g'ri",
    options: ["har 2 soatda holatni o’zgartirib turish", "terini muntazam ko’rikdan o’tkazib turish", "to’laqonli ovqatlanish", "gigiyenaga rioya qilish", "barcha javoblar to'g'ri"]
  },
  {
    question: "So’gal haqidagi to’g’ri javoblarni tanlang:",
    answer: "bu yuqumli kasallik",
    options: ["zamburug’lar bilan chaqirilgan teri hosilasi", "bu yuqumli kasallik", "o’zidan-o’zi yo’qolmaydi", "A vitamini va retinoid preparatlari samara beradi"]
  },
  {
    question: "Vulgar husnbuzarlar uchun xos:",
    answer: "keksa yoshdagilar uchun xos",
    options: ["seboreya bilan bog’liq", "qizib ketish bilan bog’liq", "keksa yoshdagilar uchun xos", "yoshlar uchun xos"]
  },
  {
    question: "Gipertrixoz uchun xos:",
    answer: "ham erkaklar, hamayollarda uchraydi",
    options: ["ham erkaklar", "hamayollarda uchraydi", "steriod jinsiy gormonlar sekretsiyasiga bog’liq", "virilizatsiya bilan bog’liq", "tuxumdonlar polikistozi sindromi"]
  },
  {
    question: "Pigmentli dog’ning malignizatsiyasini bildiruvchi belgilar:",
    answer: "dog’ rangi vaqt o’tishi bilan o’zgaradi",
    options: ["dog’ shakli tezda o’zgaradi", "pigmentli dog’lar malignizatsiyaga uchramaydi", "aniq simmetrik cheagaralarga ega", "dog’ rangi vaqt o’tishi bilan o’zgaradi"]
  },
  {
    question: "Tugunli melanomada xavf omillarini ko’rsating:",
    answer: "ortiqcha insolyatsiya",
    options: ["so’gal oldi holati", "oila anamnezida kontagioz limollyuskning borligi", "to’qrang literi", "ortiqcha insolyatsiya"]
  },
  {
    question: "Qaysi dori vositalari psoriazning rivojlanishi uchun omil bo’lib hisoblanadi?",
    answer: "barcha javoblar to'g'ri",
    options: ["kortikosteroidlar", "litiy tuzlari", "betta-adrenoblakatorlar", "barcha javoblar to'g'ri"]
  },
  {
    question: "O’tkir ekzemaning asosiy klinik belgilari:",
    answer: "eritema",
    options: ["eritema", "lixenizatsiya", "qipiqlanish", "suvlipufaklar"]
  },
  {
    question: "Vitiligo bilan og’rigan bemorlarda klinik belgisi:",
    answer: "gipo- yoki depigmentatsiya",
    options: ["gipesteziya", "eritema", "qipiqlanish", "gipo- yoki depigmentatsiya"]
  },
  {
    question: "Soch to’kilishining kuchayishi kuzatilishi mumkin:",
    answer: "gipertrixozda",
    options: ["ekzemada", "gipertrixozda", "belbog’simon lishayda", "sideropenik sindromda"]
  },
  {
    question: "Quyidagilar to’g’rimi?",
    answer: "Gardnerella vaginalis vaginozning qo’zg’atuvchisi hisoblanadi",
    options: ["qattiq shankr ko’p ajralma ajralishi bilan og’riqli eroziya hisoblanadi", "regionar limfadenit qattiq shankr paydo bo’lishidan avval namoyon bo’ladi", "ikkilamchi sifilisni psoriaz bilan qiyoslash lozim", "latent sifilis yaqqol klinik belgilar va musbat serologik natijalar bilan kechadi"]
  },
  {
    question: "Ikkilamchi sifilisda kuzatiladigan klinik belgilarni ko’rsating:",
    answer: "teri, og’iz bo’shlig’i va jinsiy a’zolar shilliq qavatida rozeolavapapulalar",
    options: ["belgilar shankr paydo bo’lishidan 6-12 hafta oldin paydo bo’ladi", "periostit", "teri", "og’iz bo’shlig’i va jinsiy a’zolar shilliq qavatida rozeolavapapulalar", "uveit"]
  },
  {
    question: "Sifilitik gumma",
    answer: "bu dog’simon hosila",
    options: ["bu dog’simon hosila", "kuchli og’riq sindromi bilan xarakterlanadi", "suyak to’qimasi shikastlanganida sinishlar bilan asoratlanadi", "3- avlod sefalosporin yaxshi samara beradi"]
  },
  {
    question: "Gonoreya quyidagi metastatik shikastlanishlarni keltirib chiqaradi:",
    answer: "artrit, iridotsiklit",
    options: ["artrit", "iridotsiklit", "miokardit", "terida papula-pustulez toshmalar", "barcha javoblar to'g'ri"]
  },
  {
    question: "Ekzema bilan og’rigan bolaning ota-onasiga qanday maslahat berasiz?",
    answer: "har cho’miltirganda sovundan foydalanish",
    options: ["har kuni havon va quyosh vannalaridan foydalanish", "bolani iliq suvda cho’miltirish va yumshoq sochiq bilan artish", "har cho’miltirganda sovundan foydalanish", "tagliklardan faqat bola uxlaganida foydalanish"]
  },
  {
    question: "Psoriazni mahalliy davolash uchun qo’llaniladigan preparatlar:",
    answer: "kortikosteroidlar",
    options: ["antibacterial surtmalar", "kortikosteroidlar", "immunomodulyatorlar", "mikonazol"]
  },
  {
    question: "Toshmaning ikkilamchi elementlarini ko’rsating:",
    answer: "pustula",
    options: ["dog’", "eroziya", "eritema", "pustula"]
  },
  {
    question: "Tarqoq toshma quyidagilarda kuzatilishi mumkin:",
    answer: "psoriazda",
    options: ["psoriazda", "qo’tirda", "belbog’simon lishayda", "diffuz neyrodermitda"]
  },
  {
    question: "Quyidagilar to’g’rimi:",
    answer: "A guruxidagi streptokokk saramas qo’zg’atuvchisi bo’lib hisoblanadi",
    options: ["A guruxidagi streptokokk saramas qo’zg’atuvchisi bo’lib hisoblanadi", "saramas ko’pincha 3 yoshdan katta va yoshlarda rivojlanadi", "bullalarga qo’shiluvchi vezikulalar impetigodagi toshma elementi bo’lib hisoblanadi", "impetigoda toshma ko’pincha dumba sohasida joylashadi"]
  },
  {
    question: "Cellyulitga xos to’g’ri javobni toping:",
    answer: "limfangit va regionar limfadenopatiya bilan kechadi",
    options: ["ko’pincha erta yoshdagi bolalarda kuzatiladi", "Hemofilus Influenzauning qo’zg’atuvchisi hisobanadi", "asosan ko’krak va bo’yin sohasida joylashadi", "limfangit va regionar limfadenopatiya bilan kechadi"]
  },
  {
    question: "Melanoma:",
    answer: "nasldan-naslga o’tadi",
    options: ["ko’pincha terisi to’qrangli shaxslarda uchraydi", "nasldan-naslga o’tadi", "o’sishning 3 fazasiga ega: vertikal", "gorizontal va radial", "o’sishning vertikal fazasida deyarli metastaz kuzatilmaydi"]
  },
  {
    question: "Quyidagilar to’g’rimi?",
    answer: "Gardnerella vaginalis vaginozning qo’zg’atuvchisi hisoblanadi",
    options: ["Gardnerella vaginalis vaginozning qo’zg’atuvchisi hisoblanadi", "Qindan shilliqli-yiringli ajralma kelishi kandidozli vaginit uchun xos", "Isitmaning 390 dan yuqori bo’lishi xlamidiozli uretrit uchun xos", "Gonoreya va xlamidioz doksitsiklin bilan davolanadi"]
  },
  {
    question: "Quyidagilar to’g’rimi?:",
    answer: "gerpes elementlari paydo bo’lishidan avval qichishish, sanchish, dizuriya kuzatiladi",
    options: ["jinsiy a’zolar gerpesining dastlabki belgilari yuqtirgandan keyin ertasiga kuzatiladi", "gerpes elementlari paydo bo’lishidan avval qichishish", "sanchish", "dizuriya kuzatiladi", "jinsiy a’zolar gerpesi uchun limfa tugunlarining kattalashishi xos emas", "davoni erta boshlash retsidivlarning og’irlik darajasini kamaytiradi"]
  },
  {
    question: "Olti oy oldin 19 yoshli yigit, hech qanday sababsiz, tashvish kuchayaboshladi. U 'tushunish qobiliyatini yo‘qotishini' aytadi, yaxshi o‘qiganlarining mazmunini tushunmaydi va barcha so‘zlar bilan 'ikkinchi ma'no izlaydi'. Uning akademik ko‘rsatkichlari pasaygan, u sinfdoshlari uni biror narsada gumon qilishiga, uni 'ahmoq' deb hisoblashiga ishonadi. U avvalgi qiziqishlarini yo‘qotdi, o‘qishga befarq bo‘ldi, o‘ziga g‘amxo‘rlik qilmadi, do‘stlari bilan aloqalarni uzdi. Sizning ehtimoliy tashxisingiz:",
    answer: "obsesif-kompulsiv buzuqlik",
    options: ["obsesif-kompulsiv buzuqlik", "shizofreniya", "fobiyalar", "vahimabuzilishi"]
  },
  {
    question: "40 yoshli yerkaktez-tez ko‘krak og‘rig‘i, terlash, yurak urishi va yaqinlashib kelayotgan xavf hissi va bir necha daqiqa davom etadigan titroq epizodlaridan shikoyat qiladi. Sizning dastlabki tashxisingiz:",
    answer: "Vahima hujumi",
    options: ["Demans", "Anksiyete buzilishi", "Vahima hujumi", "Depressiya"]
  },
  {
    question: "Kasallik depressiyasiga nisbatan u to‘g‘ri deb hisoblanadi:",
    answer: "tashxis faqat bemorda kamida 2 ta og‘ir depressive hujum bo‘lgan taqdirda qo‘yiladi",
    options: ["o‘zini xayolparast holat sifatida namoyon qiladi", "kasallikning namoyon bo‘lmasligining sababi jamiyatdagi xurofot va stigma", "depressiyaning barcha epizodlarini kasallik deb hisoblash kerak", "tashxis faqat bemorda kamida 2 ta og‘ir depressive hujum bo‘lgan taqdirda qo‘yiladi"]
  },
  {
    question: "Katta depressiya mezonlari:",
    answer: "vazn ortishi, ishtahaning oshishi, qadrsizlik hissi, ishlashning pasayishi, kayfiyatning pasayishi",
    options: ["uyqusizlik", "ishtahaning pasayishi", "vazn yo‘qotish", "qiziqishlarning yetishmasligi", "zavqni his qilish qobiliyatini yo‘qotish", "kayfiyatning pasayishi", "uyquchanlik", "letargiya", "vazn ortishi", "ishtahaning oshishi", "qadrsizlik hissi", "ishlashning pasayishi", "kayfiyatning pasayishi"]
  },
  {
    question: "Kichkina depressiya mezonlari:",
    answer: "qisqa muddatli gallyutsinatsiyalar mumkin",
    options: ["vaqtinchalik kayfiyatning pasayishi", "kayfiyatning pasayishi tashqi sharoitlarga bog‘liq", "o‘z joniga qasd fikrlari kamdan-kam hollarda sodir", "lekin uzoq vaqt davomida", "qisqa muddatli gallyutsinatsiyalar mumkin"]
  },
  {
    question: "Bolalardagi depressiya:",
    answer: "somatic shikoyatlar bilan birga kelmaydi",
    options: ["somatic shikoyatlar bilan birga kelmaydi", "nochorlik va umidsizlik hissi xarakterli emas", "tashxis kattalardagi kabi mezonlarga muvofiq amalga oshiriladi", "o‘lim haqidagi noyob fikrlar"]
  },
  {
    question: "Qariyalardagi depressiya:",
    answer: "davolash uchun tanlangan dorilar-dozani oshirmasdan amitriptilin",
    options: ["bolalarga qaraganda aniqlash qiyinroq", "yaqqol tushum", "ko‘pincha psixoz sifatida qaraladi", "davolash uchun tanlangan dorilar-dozani oshirmasdan amitriptilin"]
  },
  {
    question: "Oilaviy shifokor tomonidan depressiya bilan og’rigan bemorlarni",
    answer: "o’z joniga qasd qilish xavfini baholash",
    options: ["uyqusizlik va vazn yo’qotish darajasini baholash", "o’z joniga qasd qilish xavfini baholash", "jismoniy holatni baholash", "elektrokonvulsiv terapiyani tayinlash", "chunki u xavfsiz va yuqori samarali"]
  },
  {
    question: "Depressiya uchun antidepressantlarni buyurish:",
    answer: "tanlov jinsga, yoshga va ularning yon ta'siri ehtimoliga bog‘liq",
    options: ["tanlov jinsga", "yoshga va ularning yon ta'siri ehtimoliga bog‘liq", "amitriptilin ortostatik gipertenziyaga olib kelishi mumkin", "davolashning butun davri uchun barqaror dozaga rioya qiling", "fluoksetin o’tkir siydikni ushlab turishiga olib kelishi mumkin"]
  },
  {
    question: "Chalkashlik sabablari:",
    answer: "barcha javoblar to'g'ri",
    options: ["depressiya", "dori-darmonlarni qabul qilish", "intoksikatsiya", "barcha javoblar to'g'ri"]
  },
  {
    question: "Ta'riflar va xususiyatlarga kelsak, bu haqiqatmi:",
    answer: "haqiqiy obektlarni noto‘g‘ri idrok etish-ongning chalkashligi",
    options: ["haqiqiy obektlarni noto‘g‘ri idrok etish-ongning chalkashligi", "idrok", "fikrlash – xotira-kognitiv funktsiyalar", "illuziyalar va gallyutsinatsiyalar bilan o‘tkir psixoz - deliryum", "vaqt", "joy va o‘z – o‘zini deliryumda disoriyentatsiya holati"]
  },
  {
    question: "O‘tkir chalkashliklarni davolash tamoyillari:",
    answer: "bemorning tajovuzkorlik darajasini baholash",
    options: ["bemorning tajovuzkorlik darajasini baholash", "ehtiyoj bo‘lmasa ham", "preparatni qo‘llash uchun kuch ishlatish kerak", "preparatni eng samarali qabul qilish har bir tomchi tomchilarda", "dori-darmonlarni buyurish faqat parenteral hisoblanadi"]
  },
  {
    question: "Sedativlarning yon ta'siri:",
    answer: "ko‘ngil aynish, diareya",
    options: ["isitma", "nafas olish depressiyasi", "arterial gipertenziya", "ko‘ngil aynish", "diareya"]
  },
  {
    question: "Bolalar va o‘smirlardagi ruhiy kasalliklarga kelsak, bu haqiqat deb hisoblanadi:",
    answer: "manik-depressiv psixoz ko‘pincha balog‘at yoshidan oldin sodir bo‘ladi",
    options: ["diqqat buzilishi va giperaktivlik sabab bo‘lishi mumkin", "manik-depressiv psixoz ko‘pincha balog‘at yoshidan oldin sodir bo‘ladi", "shizofreniya ko‘pincha balog‘at yoshidan oldin sodir bo‘ladi", "shizofreniya kattalarga qaraganda osonroq uchraydi"]
  },
  {
    question: "Xavotirga oid quyidagi bayonotlar to‘g‘ri:",
    answer: "anksiyete buzilishi ko‘pincha ruhiy travma bilan bog‘liq",
    options: ["anksiyete buzilishi ko‘pincha ruhiy travma bilan bog‘liq", "xavotirning og‘irligi faqat vahima darajasi bilan belgilanadi", "boshqa organlar va tizimlar (CCC", "oshqozon-ichak trakti) tomonidan o‘zgarishlar bilan birga emas", "qo‘rquv", "qo‘rquv bilan namoyon bo‘lishi mumkin"]
  },
  {
    question: "Simpatik asab tizimining ohangining oshishi:",
    answer: "bradikardiya",
    options: ["quruq og‘iz", "bradikardiya", "ich qotishi", "siydikni ushlab turish"]
  },
  {
    question: "Anksiyete nevrozi bilan oilaviy shifokorning taktikasi:",
    answer: "psixiatr maslahati",
    options: ["psixiatr maslahati", "dori terapiyasini afzal ko‘rish", "muntazam mashqlarni tavsiya eting", "ko’proq qahva va sharob iching"]
  },
  {
    question: "Vahima buzilishining belgilari:",
    answer: "terlash, qorin og‘rig‘i, nafas qisilishi",
    options: ["boshqalarning e'tiborini kuchaytirgan kutilmagan hujum", "asosan keksa ayollarda uchraydi", "isteriya", "yig‘lash", "terlash", "qorin og‘rig‘i", "nafas qisilishi"]
  },
  {
    question: "Vahima buzilishlarida oilaviy shifokorning taktikasi:",
    answer: "psixiatriya maslahati",
    options: ["bemorning qarindoshlariga uni boshqalardan ajratish uchun tushuntirish", "psixiatriya maslahati", "hujum paytida selofan paketga nafas oling", "hujum paytida diazepam iching"]
  },
  {
    question: "Fobiya bilan bog‘liq quyidagi bayonotlar to‘g‘ri:",
    answer: "barcha javoblar to'g'ri",
    options: ["genofobiya-jinsiy aloqadan qo‘rqish", "ijtimoiyfobiya – muloqotdan qo‘rqish", "karsinofobiya-malign kasalliklardan qo‘rqish", "barcha javoblar to'g'ri"]
  },
  {
    question: "Psixogen bosh og‘rig‘i quyidagilar bilan birga keladi:",
    answer: "bir necha daqiqa davomiyligi,",
    options: ["bir necha daqiqa davomiyligi", "", "hayajonlangan holat", "", "zerikarli doimiy og‘riq", "qusish", "ko‘ngil aynish"]
  },
  {
    question: "O‘choqli bilan birga keladigan alomatlar:",
    answer: "ko‘z oldida yorug‘lik chaqnashlari,",
    options: ["ko‘ngil aynishi", "qusish", "ko‘z oldida yorug‘lik chaqnashlari", "", "tananing bir tomonida paresteziya", "", "og‘riq va bo‘ynidagi qattiqlik hissi"]
  },
  {
    question: "Servikal osteoxondroz quyidagilar bilan tavsiflanadi:",
    answer: "boshning orqa qismidagi zerikarli og‘riq",
    options: ["boshning orqa qismidagi zerikarli og‘riq", "og‘riq kechasi tez-tez uchraydi", "bosh aylanganda ortadi", "bosh terisi paresteziyasi"]
  },
  {
    question: "Yepizodikongni yo‘qotishning umumiy sabablari:",
    answer: "barcha javoblar to'g'ri",
    options: ["aritmiyalar", "yo‘qlik", "gipoglikemiya", "barcha javoblar to'g'ri"]
  },
  {
    question: "Yaxshi intracranial gipertenziya quyidagilar bilan tavsiflanadi:",
    answer: "asosan semiz erkaklar azoblanadi",
    options: ["yeshitish buzilishi", "ko‘rish keskinligining pasayishi", "asosan semiz erkaklar azoblanadi", "ko‘ngil aynishi tez-tez uchraydigan alomatdir"]
  },
  {
    question: "Subaraknoid qonash bilan xarakterlanadi:",
    answer: "asta-sekin zerikarli bosh og‘rig‘ini oshirish",
    options: ["asta-sekin zerikarli bosh og‘rig‘ini oshirish", "oksipital mushaklarning og‘rig‘i va qattiqligi", "qusish", "ongni yo‘qotish"]
  },
  {
    question: "Tremor nisbatan, buhaqiqat deb:",
    answer: "muhim tremor-maqsadli harakatlar bilan paydo bo‘ladigan qo‘pol, keng ko‘lamli tremor, barmoq sinovini to‘g‘ri bajara olmaslik",
    options: ["qasddan tremor - hap prokat turiga ko‘ra qo‘llarning titrashi", "barmoq sinovi bilan tremor kamayadi", "muhim tremor-maqsadli harakatlar bilan paydo bo‘ladigan qo‘pol", "keng ko‘lamli tremor", "barmoq sinovini to‘g‘ri bajara olmaslik", "dam olish tremori – sekin tartibsiz fleksi yon va oyoq-qo‘llarning kengayishi-qanotlarning turiga qarab tremor", "postural tremor-noziktaneli tremor", "kontsentratsiya va cho‘zilgan qo‘llar bilan ortadi"]
  },
  {
    question: "Parkinson kasalligi quyidagilar bilan tavsiflanadi:",
    answer: "dam olish tremori",
    options: ["muhim titroq", "", "sekin titroq", "", "dam olish tremori", "konvulsiv tremor"]
  },
  {
    question: "Parkinson kasalligining dastlabki alomatlarini tanlang:",
    answer: "barcha javoblar to'g'ri",
    options: ["tez", "ritmik harakatlarni bajara olmaslik", "yurish bilan o‘z vaqtida qo‘l harakatlarining yetishmasligi", "mushak tonusining oshishi", "barcha javoblar to'g'ri"]
  },
  {
    question: "Parkinson kasalligini davolash quyidagi dorilar yordamida amalga oshiriladi:",
    answer: "fenotiazin",
    options: ["selegidin", "butirofen", "bromokriptin", "fenotiazin"]
  },
  {
    question: "Miasteniya gravis bilan tavsiflanadi:",
    answer: "niqoblangan yuz, kamdan-kam miltillaydi",
    options: ["mutafakkirning pozasi", "niqoblangan yuz", "kamdan-kam miltillaydi", "ptozis", "diplopiya", "tez bog’liq bo’lmagan nutq"]
  },
  {
    question: "30 yoshli ayolsizning oldingizga o‘ngdagi frontal sohada sodir bo’lgan kuchli zonklama bosh og‘rig’idan shikoyat bilan keldi, keyin boshning orqa tomoniga o‘tdi. Og’riq oyiga 2 marta ertalab to’satdan paydo bo‘ldi, ayniqsa hissiy haddan tashqari kuchlanishdan keyin va uyqu va qusishdan keyin o‘tdi. Avval qanday tashxis haqida o‘ylaysiz?",
    answer: "migren",
    options: ["surunkali charchoq", "menopauza sindromi", "migren", "servikal umurtqa osteoxondroz"]
  },
  {
    question: "Markaziy falaj quyidagilar bilan tavsiflanadi:",
    answer: "gipertonus",
    options: ["gipertonus", "arefleksiya", "gipotrofiya", "atrofiya"]
  },
  {
    question: "Xortonning bosh og‘rig‘i haqida to‘g‘ri bayonetni tanlang:",
    answer: "ko‘z atrofidagi og‘riq bilan birga",
    options: ["ko‘z atrofidagi og‘riq bilan birga", "beta blokerlarni qabul qilgandan keyin og‘riq hujumi to‘xtaydi", "og‘riq keskin sodir bo‘ladi", "og‘riq ko‘z oldida chivinlar yoki chaqnashlar bilan birga keladi"]
  },
  {
    question: "Klassik migrenning klinik ko‘rinishi:",
    answer: "bosh og‘rig‘i zolim tabiati",
    options: ["qorin og‘rig‘i bilan birga keladi", "bosh og‘rig‘i zolim tabiati", "qusish", "hujum kechqurun sodir bo‘ladi"]
  },
  {
    question: "O‘choqli davolashda quyidagi dorilar qo‘llaniladi:",
    answer: "aspirin",
    options: ["aspirin", "lidokain", "ergotamin", "nifedipin"]
  },
  {
    question: "Kuchlanish bosh og‘rig‘i:",
    answer: "bemorlar tomonidan burg‘ulash og‘rig‘i sifatida tasvirlangan",
    options: ["bemorlar tomonidan burg‘ulash og‘rig‘i sifatida tasvirlangan", "benign xarakterga ega", "steroidlar bilan muvaffaqiyatli davolanadi", "bosh og‘rig‘i hujumidan oldin aniq aur"]
  },
  {
    question: "Nonspesifik bosh og‘rig‘ining sabablari:",
    answer: "servikal umurtqa osteoxondroz",
    options: ["yoqimsiz hidning ta'siri", "affektiv buzilishlar.", "allergik omil.", "servikal umurtqa osteoxondroz"]
  },
  {
    question: "Gigant hujayrali arteritning xarakterli belgilari:",
    answer: "bosh terisidagi og‘riq.",
    options: ["temporal mintaqada ikki tomonlama zonklama og‘rig‘i", "bosh terisidagi og‘riq.", "yuzaki temporal arteriyaning qalinlashishi.", "yutish paytida og‘riq"]
  },
  {
    question: "Postural tremor quyidagi kasalliklarda uchraydi:",
    answer: "alkogolizm",
    options: ["feoxromotsitoma", "migren", "tirotoksikoz", "alkogolizm"]
  },
  {
    question: "Motor sohasini o‘rganishga quyidagilar kiradi:",
    answer: "bemorning yurishi va holati",
    options: ["bemorning yurishi va holati", "tendon reflekslari", "tovon-tizza sinovi", "ko‘rish keskinligining ta'rifi"]
  },
  {
    question: "Meningial alomatlar:",
    answer: "Pastiya",
    options: ["Pastiya", "Marinesku-Radovich", "Kushelevskiy", "Brudzinskiy"]
  },
  {
    question: "12 juft nervni o‘rganishda e'tibor bering:",
    answer: "yutish qobiliyati",
    options: ["xirillash yoki burun ovozining mavjudligi", "yutish qobiliyati", "yumshoq tanglayning holati", "tremorning mavjudligi"]
  },
  {
    question: "Ko‘p skleroz belgilari:",
    answer: "markaziy scotoma va ko‘z harakati bilan og‘riq",
    options: ["markaziy scotoma va ko‘z harakati bilan og‘riq", "diplopiya", "vestibulyar bosh aylanishi", "ekstremitalarda uyqusizlik va paresteziya"]
  },
  {
    question: "Vestibulyar nevritning xarakterli belgilari:",
    answer: "barcha javoblar to'g'ri",
    options: ["doimiy bosh aylanishi", "ko‘ngil aynishi", "qusish", "nomutanosiblik", "barcha javoblar to'g'ri"]
  },
  {
    question: "Meniyere sindromi bilan hujum quyidagicha tavsiflanadi:",
    answer: "barcha javoblar to'g'ri",
    options: ["vestibulyar vertigo", "quloqdagi shovqin", "ko‘ngil aynishi va qayt qilish", "barcha javoblar to'g'ri"]
  },
  {
    question: "Meniyere sindromini davolash:",
    answer: "diazepam 2.5-5mg vena ichiga, keyin 5mg og‘zakihar 8H.",
    options: ["bemorni tinchlantiring va ko‘proq qahva ichishni tavsiya eting", "natriy miqdori yuqori bo‘lgan parhezni belgilang", "diazepam 2.5-5mg vena ichiga", "keyin 5mg og‘zakihar 8H.", "kaltsiy antagonistlari"]
  },
  {
    question: "Yo‘qlikning namoyon bo‘lishi:",
    answer: "bola muzlaydi, murojaat qilingan nutqqa munosabat bildirmaydi, nigoh o‘rnatiladi",
    options: ["bola muzlaydi", "murojaat qilingan nutqqa munosabat bildirmaydi", "nigoh o‘rnatiladi", "hujum o‘rtacha 1-2 soat davom etadi", "qusish bilan birga keladi", "soqchilik kuniga bir martadan ko’p bo‘lmagan"]
  },
  {
    question: "Vaqtinchalik miya yarim ishemiyasining xarakterli belgilari:",
    answer: "vaqtinchalik monokulyar ko‘rlik",
    options: ["to‘satdan boshlanishi va buzilgan funktsiyalarning to‘liq yo‘qolishi", "hujumning davomiyligi odatda 30 minut.", "vaqtinchalik monokulyar ko‘rlik", "doimiy global amneziya"]
  },
  {
    question: "Epilepsiya bilan birga keladigan alomatlar:",
    answer: "beixtiyor siyish va defekatsiya.",
    options: ["qon bosimining keskin oshishi", "ko‘ngil aynishi", "qusish", "beixtiyor siyish va defekatsiya.", "bosh aylanishi"]
  },
  {
    question: "Markaziy falaj belgilari:",
    answer: "mushaklarning gipotenziyasi",
    options: ["atrofiyaning yo‘qligi", "mushaklarning gipotenziyasi", "chuqur reflekslarning kamayishi.", "patologik reflekslar mavjud emas"]
  },
  {
    question: "Periferik falaj belgilari:",
    answer: "atrofiya, atoniya",
    options: ["atrofiya", "atoniya", "giperrefleksiya", "elektromiyogrammadagi Stokning ritmi", "diplegiya"]
  },
  {
    question: "Amneziya turlari:",
    answer: "qisqa muddatli",
    options: ["hissiy", "motor", "qisqa muddatli", "motor"]
  },
  {
    question: "Nevrologik tekshiruvni o‘tkazishda quyidagilar amalga oshiriladi:",
    answer: "barcha javoblar to'g'ri",
    options: ["ruhiy holatni baholash", "CCC tekshiruvi - puls", "qon bosimi", "yurak auskultatsiyasi", "uyqu arteriyalari", "oftalmoskopiya", "barcha javoblar to'g'ri"]
  },
  {
    question: "Qisqa muddatli ongni yo‘qotish paytida o‘tkazilgan jismoniy testlar:",
    answer: "Tinnelsinovi",
    options: ["Tinnelsinovi", "Rotatsionsinov", "Halpikesinovi", "Romberg sinamasi"]
  },
  {
    question: "Febril konvulsiyalar:",
    answer: "o‘tkir respirator virusli infektsiyalarning umumiy sababi",
    options: ["o‘tkir respirator virusli infektsiyalarning umumiy sababi", "relapsga moyil emas", "ko‘pincha 5 yoshdan oshgan bolalarda uchraydi", "hech qachon epilepsiya namoyon bo‘lmaydi"]
  },
  {
    question: "Epileptik tutilish guvohlari uchun xulq-atvor qoidalari",
    answer: "bemorni tutqanoq paytida ushlab turish",
    options: ["bemorni bir joydan ikkinchi joyga o‘tkazmaslik", "og‘izga qoshiq yoki spatula soling", "orqangizga qo‘ying va iyagingizni ko‘taring", "bemorni tutqanoq paytida ushlab turish"]
  },
  {
    question: "Ushbu alomatlardan qaysi biri meningitga ko‘proq xosdir?",
    answer: "Veber",
    options: ["Kernig", "Veber", "Argil-Robertson", "Neri"]
  },
  {
    question: "Yuqori arterial gipertenziya bilan og’rigan bemorda 12 soatdan keyin o‘tgan fokal va miya belgilari keskin rivojlangan. Ushbu ko’rinishlarni serebrovaskulyar patologiyaning qaysi shakliga kiritish mumkin?",
    answer: "gemorragik insult",
    options: ["vaqtinchalik serebrovaskulyar avariya", "ishemik insult", "diskirkulyatsion ensefalopatiya", "gemorragik insult"]
  },
  {
    question: "Qisqa muddatli ongni buzishda qo‘zg‘atuvchi omillar:",
    answer: "barcha javoblar to'g'ri",
    options: ["jismoniy faoliyat", "qo‘rquv va og‘riq", "to‘satdan ko‘tarilish", "barcha javoblar to'g'ri"]
  },
  {
    question: "Botulizmda quyidagi nevrologik alomatlar",
    answer: "o‘quvchi reaktsiyasining yo‘qligi",
    options: ["progressive mushak gipertoni", "sezgirlikning buzilishi", "ongni buzish", "o‘quvchi reaktsiyasining yo‘qligi"]
  },
  {
    question: "Progestinli tabletkalarni buyurishning afzalliklarini sanab o'ting:",
    answer: "barcha javoblar to'g'ri",
    options: ["Darhol samaradorlik;", "Retseptsiz beriladi;", "Ko'ngil aynish", "bosh og'rig'iga olib kelmaydi;", "barcha javoblar to'g'ri"]
  },
  {
    question: "In'ektsion kontratseptivlarni buyurishga ko'rsatma:",
    answer: "amenoreya bilan og'rigan ayollar",
    options: ["emizikli ayollar", "hayz ko'rishi tartibsiz bo'lgan ayollar", "amenoreya bilan og'rigan ayollar", "ortiqcha vaznli ayollar"]
  },
  {
    question: "Umumiy amaliyot shifokori quyidagi hollarda IUDni o'rnatishni tavsiya qilishi mumkin:",
    answer: "Tug'ilgandan 6 hafta o'tgach, agar ayol emizikli bo'lmasa",
    options: ["Agar ayol emizikli bo'lsa", "Abortdan 7 kundan keyin", "Tug'ilgandan 6 hafta o'tgach", "agar ayol emizikli bo'lmasa", "Yuqoridagi barcha holatlarda"]
  },
  {
    question: "IUDning nojo‘ya ta’sirlarini sanab o‘ting:",
    answer: "Gemoglobinning pasayishi",
    options: ["Gemoglobinning pasayishi", "Bachadon shilliq qavatining yallig'lanishi", "Qorin og'rig'i", "Yuqoridagi barcha shartlar"]
  },
  {
    question: "Favqulodda kontratseptsiya uchun qanday usul qo'llaniladi?",
    answer: "spermitsidlar",
    options: ["dengiz floti", "in'ektsion progestinlar", "spermitsidlar", "jarrohlik usuli"]
  },
  {
    question: "Favqulodda kontratseptsiya uchun qanday dorilarni qo'llash mumkin ?",
    answer: "Depo Provera",
    options: ["Mikrogen", "Mastodinon", "Depo Provera", "N klimonorm"]
  },
  {
    question: "Ayollarni ixtiyoriy jarrohlik sterilizatsiyasiga ko'rsatma?",
    answer: "farzand ko`rishni istamaydigan yosh ayollar",
    options: ["farzand ko`rishni istamaydigan yosh ayollar", "bola tug'ilgandan keyin darhol", "homiladorlikning kontrendikatsiyasi bilan", "tug'ilish travmasi bilan"]
  },
  {
    question: "Ayollarni ixtiyoriy jarrohlik sterilizatsiyasi amalga oshirilmaydi?",
    answer: "ortiqcha vazn",
    options: ["qandli diabet bilan", "laktatsiya davrida", "ortiqcha vazn", "og'ir anemiya"]
  },
  {
    question: "Intrauterin kontratseptsiyaning asorati:",
    answer: "qon ketish",
    options: ["ich qotishi", "qon ketish", "spontan abort", "ko'krak og'rig'i"]
  },
  {
    question: "IUDni o'rnatish kontrendikedir:",
    answer: "fohishalik",
    options: ["algomenoreya bilan", "yurak nuqsonlari bilan", "immun tizimining buzilishida", "fohishalik"]
  },
  {
    question: "IUD ning kamchiliklari quyidagilardan iborat:",
    answer: "homiladorlik yoki chiqarib yuborish",
    options: ["ich qotishi", "homiladorlik yoki chiqarib yuborish", "ko'krak og'rig'i", "qon bosimini pasaytirish"]
  },
  {
    question: "Intrauterin kontratseptivlarni qo'llashga mutlaq qarshi ko'rsatmani belgilang?",
    answer: "anamnezda ektopik homiladorlik mavjudligi",
    options: ["yurak kasalligi", "genital organlarning o'tkir yallig'lanish kasalliklari", "immunitetning pasayishi", "anamnezda ektopik homiladorlik mavjudligi"]
  },
  {
    question: "Progestin tabletkalari uchun to‘g‘ri gapni ko‘rsating:",
    answer: "faqat progestinli gormonal kontratseptivlar",
    options: ["faqat progestinli gormonal kontratseptivlar", "kombinatsiyalangan gormonal preparat", "bir zumda klinik ta'sir ko'rsatish bilan", "harakat bir soatdan keyin boshlanadi", "intervalgacha foydalanish kontratseptiv ta'sirga ta'sir qilmaydi"]
  },
  {
    question: "Progestin tabletkalarining ta'sir qilish mexanizmiga quyidagilardan tashqari barcha kiradi:",
    answer: "bachadon bo'yni shilliq qavatining qalinlashishi",
    options: ["bachadon bo'yni shilliq qavatining qalinlashishi", "ovulyatsiyani bostirish", "endometriyal atrofiya", "hayz kunlarini oshiradi"]
  },
  {
    question: "Kontratseptsiyaning to‘siq usullariga quyidagilar kirmaydi:",
    answer: "dengiz floti",
    options: ["qopqoqlar", "dengiz floti", "prezervativlar", "diafragma"]
  },
  {
    question: "Kontratseptsiyaning tabiiy usullariga quyidagilardan tashqari barcha kiradi:",
    answer: "vaginaga kremni kiritish",
    options: ["bazal haroratni o'lchash", "kalendar usuli", "bachadon bo'yni shilliq qavatini tekshirish", "vaginaga kremni kiritish"]
  },
  {
    question: "Intrauterin kontratseptivlar uchun qaysi bayonot xos emas?",
    answer: "IUD bachadon naychalarining peristaltikasini kuchaytiradi",
    options: ["mis o'z ichiga olgan rulonlar 10 yil davomida ishlaydi", "homiladorlik 1 yil ichida 100 ayolga 0", "5-1 holatda bo'lishi mumkin", "IUD aseptik yallig'lanishni keltirib chiqaradi", "IUD bachadon naychalarining peristaltikasini kuchaytiradi"]
  },
  {
    question: "Favqulodda kontratseptiv tabletkalarning ta'sir qilish mexanizmi barcha jarayonlar bilan oldini oladi, bundan tashqari:",
    answer: "ovulyatsiyani oldini oladi",
    options: ["ovulyatsiyani oldini oladi", "urug'lanishni oldini oladi", "implantatsiyani oldini oladi", "bachadon bo'yni shilliq qavatining qalinlashishi"]
  },
  {
    question: "Kontratseptsiyaning baryer usullarining afzalliklari to‘g‘risida noto‘g‘ri gapni toping:",
    answer: "bachadon bo'yni qopqoqlari - shifokor tomonidan kiritiladi, bachadon prolapsasi bo'lgan ayollarga ko'rsatiladi",
    options: ["prezervativlar - keng tarqalgan bo'lib", "jinsiy yo'l bilan yuqadigan kasalliklardan himoya qiladi", "ayolning sog'lig'iga ta'sir qilmaydi", "vaginal diafragmalar - laktatsiyaga ta'sir qilmaydi", "jinsiy yo'llarni infektsiyadan himoya qiladi", "bachadon bo'yni qopqoqlari - shifokor tomonidan kiritiladi", "bachadon prolapsasi bo'lgan ayollarga ko'rsatiladi", "spermitsidlar qisqa muddatli ta'sir ko'rsatadi", "jinsiy yo'l bilan yuqadigan kasalliklardan himoya qilmaydi", "allergiya keltirib chiqaradi"]
  },
  {
    question: "Har bir narsa dengiz flotiga xosdir, bundan tashqari:",
    answer: "bachadon bo'yni kanali polipozi bo'lgan ayollarda kontrendikedir",
    options: ["tarkibida mis mavjud", "bachadon bo'yni kanali polipozi bo'lgan ayollarda kontrendikedir", "kamqonlik bilan og'rigan ayollarda kontrendikedir", "hayz kunlarini qisqartiradi"]
  },
  {
    question: "Erkaklarda ixtiyoriy jarrohlik kontratseptsiya uchun to'g'ri bayonotni tanlang:",
    answer: "kontratseptsiyaning yuqori samarali usuli",
    options: ["kontratseptsiyaning yuqori samarali usuli", "erkaklarning jinsiy funktsiyasiga ta'sir qiladi", "jinsiy a'zolar infektsiyalaridan himoya qiladi", "umumiy behushlik ostida bajariladigan murakkab operatsiya"]
  },
  {
    question: "Bachadon bo'yni saratoni uchun xavf omillari bundan mustasno:",
    answer: "jinsiy a'zolarning virusli kasalliklari",
    options: ["55 yoshdan katta", "o'smirlik davridagi jinsiy faollik", "jinsiy a'zolarning virusli kasalliklari", "sut bezlari patologiyasi"]
  },
  {
    question: "Bachadon bo'yni saratoni uchun xos emas:",
    answer: "40-55 yosh va qorinning pastki qismida og'riq",
    options: ["40-55 yosh va qorinning pastki qismida og'riq", "sitologik tadqiqotlardagi o'zgarishlar", "jinsiy aloqadan keyin qon ketishi", "qonli oqindi"]
  },
  {
    question: "Bachadon bo'yni saratoni uchun noto'g'ri bayonotni tanlang:",
    answer: "20 yoshgacha ayollarda uchramaydi",
    options: ["erta tashxis qo'yish uchun sitologik tekshiruvdan foydalaniladi", "saraton xavfi jinsiy faoliyatga bog'liq", "bakterial infektsiya bachadon bo'yni saratoni uchun xavf omilidir", "20 yoshgacha ayollarda uchramaydi"]
  },
  {
    question: "Bachadon bo'yni saratonining profilaktikasi quyidagilarni o'z ichiga oladi:",
    answer: "bitta jinsiy sherikning mavjudligi, bachadon bo'yni saratoni rivojlanishi uchun xavf omillari bo'lgan ayollarning yillik tekshiruvi (sitologiyasi), prezervativdan foydalanish va tsitrus mevalari va ko'katlardan foydalanish",
    options: ["bitta jinsiy sherikning mavjudligi", "bachadon bo'yni saratoni rivojlanishi uchun xavf omillari bo'lgan ayollarning yillik tekshiruvi (sitologiyasi)", "prezervativdan foydalanish va tsitrus mevalari va ko'katlardan foydalanish", "gepatit B virusiga qarshi emlash", "semizlik rivojlanishining oldini olish", "ichak infektsiyalarining oldini olish"]
  },
  {
    question: "Diffuz mastopatiya quyidagilarga xos emas:",
    answer: "hayz ko'rish bilan bog'liq bo'lmagan sut bezlarida og'riq",
    options: ["40 yoshdan oshgan", "bezlarda paypaslanadigan mayda tugunlar", "hayz ko'rish bilan bog'liq bo'lmagan sut bezlarida og'riq", "hayz ko'rish arafasida sut bezlarining kuchli og'rig'i va to'lib ketishi"]
  },
  {
    question: "Ko'krak bezi saratoni belgilarini sanab o'ting:",
    answer: "bosimning sezuvchanligi, ko'krak qafasining tortilishi, sut bezlarida shish paydo bo'lishi, limon qobig'i alomati",
    options: ["bosimning sezuvchanligi", "ko'krak qafasining tortilishi", "sut bezlarida shish paydo bo'lishi", "limon qobig'i alomati", "hayz davrining buzilishi", "arterial gipertenziya", "sut bezlari terisining rangi o'zgarishi", "bez hajmining oshishi.", "tugunlarning ta'rifi", "intoksikatsiya belgilari", "isitma va kuchli og'riq", "ko'krak qafasidagi og'riqlar", "hayzdan oldingi davrda sut bezlarining kattalashishi", "bosh og'rig'i va uyquning buzilishi."]
  },
  {
    question: "Ovulyatsiya og'rig'i quyidagilar bilan tavsiflanadi:",
    answer: "og'riq yonbosh sohada lokalize bo'lib, o'tirganda yo'qoladi, bir necha daqiqadan bir necha soatgacha davom etadi, sut bezlarining to'lib ketishi bilan kechadi va hayz davri bilan bog'liq",
    options: ["bo'shashgan najas", "ko'ngil aynishi", "isitma bilan kechadigan epigastral og'riq", "yonbosh sohada og'riq", "ko'ngil aynishi", "isitma", "bo'sh axlat qon bilan aralashgan.", "og'riq yonbosh sohada lokalize bo'lib", "o'tirganda yo'qoladi", "bir necha daqiqadan bir necha soatgacha davom etadi", "sut bezlarining to'lib ketishi bilan kechadi va hayz davri bilan bog'liq", "dizurik hodisalar bilan yonbosh sohasiga nurlanish bilan bel sohasidagi og'riq"]
  },
  {
    question: "Endometriozning differensial diagnostikasi qanday kasalliklar bilan amalga oshiriladi?",
    answer: "bel-sakral umurtqa pog'onasining osteoxondrozi",
    options: ["tuxumdon o‘smalari", "bachadon miomasi", "tuxumdon kistalari va bepushtlik", "yarali kolit", "irritabiy ichak sindromi", "bel-sakral umurtqa pog'onasining osteoxondrozi", "va siydik yo'llari infektsiyalari"]
  },
  {
    question: "Menorragiyaning sabablari quyidagilar bo'lishi mumkin.",
    answer: "Endometrioz, bachadon miomasi, endometrium saratoni",
    options: ["Endometrioz", "bachadon miomasi", "endometrium saratoni", "Pelvioperitonit", "Servitsit", "Endometrit"]
  },
  {
    question: "Kontaktdan qon ketish quyidagi hollarda yuz beradi:",
    answer: "Bachadon tanasining saratoni, psevdoeroziya",
    options: ["Bachadon tanasining saratoni", "psevdoeroziya", "Oophorit", "Tuxumdon kistasi", "Vaginit"]
  },
  {
    question: "JSST bo'yicha spermatozoidlarning normal ko'rsatkichlari:",
    answer: "Hajmi 2 ml dan ortiq, sperma kontsentratsiyasi 20 mln dan ortiq",
    options: ["Hajmi 2 ml dan ortiq", "sperma kontsentratsiyasi 20 mln dan ortiq", "Hajmi 0", "5 ml", "spermatozoidlarning konsentratsiyasi 15 mln.dan ortiq.", "Hajmi 1", "0 ml", "spermatozoid konsentratsiyasi 10 mln dan ortiq.", "Hajmi 1", "5 ml", "spermatozoidlar konsentratsiyasi 8 mln.dan ortiq."]
  },
  {
    question: "Klimakterik sindromning belgilari:",
    answer: "Neyrovegetativ va psixoemotsional buzilishlar",
    options: ["Neyrovegetativ va psixoemotsional buzilishlar", "Tizza bo'g'imining artriti", "Og'riqli siyish", "Qin shilliq qavatining gipertrofiyasi"]
  },
  {
    question: "Algomenoreyaning sabablari quyidagilar bo'lishi mumkin.",
    answer: "Endometrioz, intrauterin kontratseptsiya",
    options: ["Endometrioz", "intrauterin kontratseptsiya", "Nonspesifik yarali kolit", "Endoservitsit", "Vaginit"]
  },
  {
    question: "Abssession mastitda taktika:",
    answer: "Antibakterial terapiya, xo'ppozni ochish va drenajlash",
    options: ["Emizishni davom ettiring", "Konservativ davo", "Antibakterial terapiya", "xo'ppozni ochish va drenajlash", "Kortikosteroidlar"]
  },
  {
    question: "Qaytalanuvchi trichomonas vaginitni qanday davolash usullaridan foydalanish mumkin?",
    answer: "Metronidazol 7 kun, jinsiy sheriklarni davolash",
    options: ["Tsefalosporinlar 7 kun", "Tinidazol 500 mg dan sutkada 4 marta", "Metronidazol 7 kun", "jinsiy sheriklarni davolash", "Nistatin 14 kun"]
  },
  {
    question: "Menorragiya bilan og'rigan ayolda qanday zarur tekshiruv o'tkazasiz ?",
    answer: "Tos a'zolarini ultratovush tekshiruvi",
    options: ["Bachadon bo'yni ko'zgularda tekshirish", "sitologik tekshirish uchun bachadon bo'yni smetasini olish", "Tos a'zolarini ultratovush tekshiruvi", "Gisterosalpingografiya", "Tuxumdonlarni kompyuterda tekshirish"]
  },
  {
    question: "Endometriozning klinik belgilarini sanab bering:",
    answer: "Algomenoreya, tos a'zolaridagi og'riqlar",
    options: ["Algomenoreya", "tos a'zolaridagi og'riqlar", "To'g'ri bachadon bo'shlig'ida og'riqsiz shakllanish", "Bachadon hajmini kichraytirish", "Arterial gipotenziya"]
  },
  {
    question: "Klimakterik sindrom - bu:",
    answer: "issiq chaqnashlar, yurak urishi, bosh aylanishi, uyqu buzilishi",
    options: ["issiq chaqnashlar", "yurak urishi", "bosh aylanishi", "uyqu buzilishi", "qorinning pastki qismida dispeptik belgilar bilan og'riq", "vaginal oqindi ko'payishi", "homiladorlik."]
  },
  {
    question: "O'rnini bosuvchi terapiyaga qarshi ko'rsatmalar quyidagilar:",
    answer: "bachadon tanasining saratoni, doimiy arterial gipertenziya",
    options: ["osteoporoz", "bachadon tanasining saratoni", "doimiy arterial gipertenziya", "yurak ishemik kasalligi", "insult"]
  },
  {
    question: "Klimakterik sindromni qanday kasalliklar bilan farqlash kerak?",
    answer: "Depressiya, gipertiroidizm",
    options: ["Depressiya", "gipertiroidizm", "Qandli diabet kasalligi", "Gipotiroidizm", "Endometrioz"]
  },
  {
    question: "Gormonlarni almashtirish terapiyasining nojo'ya ta'siri:",
    answer: "Ko'krak qafasining to'lib ketishi, shish, qonli oqindi",
    options: ["Ich ketishi", "siydik rangining o'zgarishi", "gipotenziya", "Ko'krak qafasining to'lib ketishi", "shish", "qonli oqindi", "Mushaklarning spazmlari", "tizza bo'g'imlarining og'rig'i", "Terining sarg'ayishi", "epigastral og'riq"]
  },
  {
    question: "Menopauza quyidagi belgilar bilan tavsiflanadi:",
    answer: "Menopauza, osteoporoz, reproduktiv nuqson",
    options: ["Menopauza", "osteoporoz", "reproduktiv nuqson", "2 fazali hayz davri", "Follikulyar faza.", "Trombotsitopeniya"]
  },
  {
    question: "Endometrioz quyidagi belgilar bilan tavsiflanadi:",
    answer: "og'riqli hayz ko'rish, bepushtlik",
    options: ["og'riqli hayz ko'rish", "bepushtlik", "hayz ko'rishning kamligi.", "qinda qichishish", "tez-tez homiladorlik."]
  },
  {
    question: "Birlamchi algomenoreyaga quyidagilar xosdir.",
    answer: "Ko'pincha yosh qizlarda og'riq zerikarli yoki krampli, hushidan ketish",
    options: ["Ko'pincha yosh qizlarda og'riq zerikarli yoki krampli", "hushidan ketish", "Ko'pincha hayzdan keyin", "Bachadon miomasi", "Suyaklarning osteoporozi"]
  },
  {
    question: "Ikkilamchi algomenoreyaning sabablari quyidagilar bo'lishi mumkin.",
    answer: "endometrioz, intrauterin kontratseptsiya",
    options: ["endometrioz", "intrauterin kontratseptsiya", "gipertenziya", "vaginit", "irritabiy ichak sindromi"]
  },
  {
    question: "Jinsiy organlarning yallig'lanish kasalliklariga quyidagilar xosdir:",
    answer: "Hayz davrining buzilishi, qorinning pastki qismida og'riq, jinsiy yo'ldan yiringli oqmalar",
    options: ["Meteorizm", "diareya", "epigastral og'riq", "Hayz davrining buzilishi", "qorinning pastki qismida og'riq", "jinsiy yo'ldan yiringli oqmalar", "Yurak aritmi", "gipotenziya", "Quruq teri va qichishish"]
  },
  {
    question: "Kontaktli qon ketishi quyidagi sabablarga ko'ra yuzaga keladi:",
    answer: "bachadon tanasining saratoni, bachadon bo'yni psevdoeroziyasi",
    options: ["bachadon tanasining saratoni", "bachadon bo'yni psevdoeroziyasi", "tuxumdon kistasi", "vaginit", "bachadon bo‘yni polipi"]
  },
  {
    question: "Ektopik homiladorlikning asosiy belgilari:",
    answer: "dog'lar, qorinning pastki qismida og'riq",
    options: ["dog'lar", "qorinning pastki qismida og'riq", "sonning og'rig'i", "tashqi jinsiy a'zolarning qizarishi", "tez-tez siyish"]
  },
  {
    question: "(AMC) uchun anormal bachadondan qon ketishi xarakterlidir:",
    answer: "og'ir va uzoq hayz ko'rish",
    options: ["histerektomiyaga ko'rsatma", "og'ir va uzoq hayz ko'rish", "qorin palpatsiyasi og'riqsiz", "sonning og'rig'i"]
  },
  {
    question: "Kandidal vaginitda qanday belgilar aniqlanadi?",
    answer: "vaginada qichishish",
    options: ["tez-tez siyish", "sonning og'rig'i", "qindan sariq-yashil oqindi", "vaginada qichishish"]
  },
  {
    question: "Kandidal vaginitni davolash quyidagi dorilarni o'z ichiga oladi.",
    answer: "klotrimazol 500 mg bir marta; nistatinli shamlar 14 kun",
    options: ["klotrimazol 500 mg bir marta; nistatinli shamlar 14 kun", "1% dibazol bir marta", "NSAIDlar", "statinlar"]
  },
  {
    question: "Trichomoniasisga quyidagilar xosdir:",
    answer: "oq-kulrang, homila oqindi",
    options: ["oq-kulrang", "homila oqindi", "qorinning pastki qismida og'riq", "qichishish", "disparuniya"]
  },
  {
    question: "Trixomonozni davolash quyidagi usullar bilan amalga oshiriladi.",
    answer: "o'tkir infektsiyada metronidazol 400 mg dan kuniga 5 marta",
    options: ["o'tkir infektsiyada metronidazol 400 mg dan kuniga 5 marta", "homilador ayollarga klotrimazol 100 mg dan kuniga 3 marta", "12 kun buyuriladi", "turmush o'rtog'idan biriga munosabatda bo'lish", "nistatinli krem 5 kun."]
  },
  {
    question: "Hayz ko'rish kechikmagan ayollarda qorinning pastki qismidagi og'riqlar ko'pincha quyidagi kasalliklardan kelib chiqadi:",
    answer: "tuxumdon shishi",
    options: ["bartolinit", "tuxumdon shishi", "bachadon naychasining yorilishi", "algomenoreya"]
  },
  {
    question: "Hayz ko'rish kechikishi va qorin og'rig'i bilan og'rigan ayollarda jarrohning shoshilinch maslahatini talab qiladigan holatlar:",
    answer: "tuxumdon kistasi",
    options: ["kolpit", "tuxumdon kistasi", "endometrioz", "bachadon miomasi"]
  },
  {
    question: "Sitologiya testi bachadon bo'yni saratonini erta aniqlash uchun qo'llaniladi. Ushbu test qachon tavsiya etiladi?",
    answer: "xavf omillari bo'lgan ayollar har 3 yilda bir marta tekshiriladi",
    options: ["2 yilda bir marta o'tkaziladi", "xavf omillari bo'lgan ayollar har 3 yilda bir marta tekshiriladi", "birinchi tekshiruv nikohdan 10 yil o'tgach boshlanadi", "50 yoshdan oshgan ayollarda test o'tkazilmaydi"]
  },
  {
    question: "Umumiy amaliyot shifokori tomonidan ko'krak bezi saratonining instrumental diagnostikasi quyidagilardan tashqari hamma narsani o'z ichiga oladi:",
    answer: "kolposkopiya",
    options: ["sut bezlari ultratovush tekshiruvi", "mammografiya", "ko'krak qafasi rentgenogrammasi", "kompyuter tomografiyasi", "kolposkopiya"]
  },
  {
    question: "Qabulda 32 yoshli ayol, onasi ko'krak bezi saratoni bo'yicha operatsiya qilingan, shuning uchun u xavotirda. Ko'krak bezi saratoni uchun xavf omillarini sanab o'ting:",
    answer: "erta menopauza",
    options: ["20 yoshda birinchi tug'ilish", "ko'krak bezi o'smalarining mavjudligi", "3 va undan ortiq tug'ilish", "erta menopauza"]
  },
  {
    question: "Gipertenziyani davolashda birinchi bo'lib tanlanadigan dorilar:",
    answer: "angiotenzin II retseptorlari antagonistlari",
    options: ["angiotenzin II retseptorlari antagonistlari", "diuretiklar", "kaltsiy kanal blokerlari (kaltsiy antagonistlari)", "beta-blokerlar"]
  },
  {
    question: "Qanday choralar yurak-qon tomir xavfini kamaytirishga yordam bermaydi?",
    answer: "maqsadli organlarning shikastlanishining oldini olish",
    options: ["xavf omillari sonining kamayishi", "maqsadli qon bosimiga erishish", "plazma glikemiyasining maqsadli darajasiga erishish", "maqsadli organlarning shikastlanishining oldini olish"]
  },
  {
    question: "Gipertenziya va qandli diabet bilan kasallangan bemorni kuzatish rejasiga qanday tadbirlar kiritilmasligi kerak?",
    answer: "qon bosimi, vaznni nazorat qilish",
    options: ["qon bosimi", "vaznni nazorat qilish", "umumiy qon xolesterinini nazorat qilish", "nevrolog bilan maslahatlashuv", "koagulogramma"]
  },
  {
    question: "Gipertenziyani davolashda APF ingibitorlariga nisbatan murosasizlik yuzaga kelganda quyidagilarni tavsiya qilish kerak.",
    answer: "uzoq muddatli kaltsiy antagonistlari (amlodipin, felodipin va boshqalar)",
    options: ["simpatolitiklar (raunatin", "reserpin va boshqalar)", "qisqa ta'sir qiluvchi kaltsiy antagonistlari (korinfar", "farmodipin va boshqalar)", "uzoq muddatli kaltsiy antagonistlari (amlodipin", "felodipin va boshqalar)", "beta-blokerlar (atenolol", "bisoprolol va boshqalar)"]
  },
  {
    question: "Qandli diabet asoratlarining oldini olish quyidagilarni o'z ichiga oladi:",
    answer: "insulinni erta buyurish",
    options: ["qon ivishini nazorat qilish", "bemorlar tomonidan kunlik oyoq tekshiruvi", "oyoqlaringizni issiq suv bilan yuvish bo'yicha maslahatlar", "insulinni erta buyurish"]
  },
  {
    question: "Quyidagi dorilar qon bosimini oshirmaydi:",
    answer: "Amoksitsillin",
    options: ["NPVSlar", "Amoksitsillin", "Burun tomchilari", "Kortikosteroidlar"]
  },
  {
    question: "Laboratoriya ma'lumotlarisiz jadval yordamida yurak-qon tomir xavfini baholash uchun quyidagilarni bilishingiz kerak:",
    answer: "BMI qiymati, chekish holati",
    options: ["BMI qiymati", "chekish holati", "Bel atrofi", "Diastolik qon bosimi darajasi", "Spirtli ichimliklar birliklari soni"]
  },
  {
    question: "2-toifa diabetni davolash uchun tavsiya etilmaydi:",
    answer: "inson insulini - 3-qator dori sifatida.",
    options: ["Metformin 1-darajali dori sifatida", "2-darajali dorilar sifatida sulfoniluriya preparatlari", "inson insulini - 3-qator dori sifatida.", "Qon bosimi ≥ 140/90 mm bo'lgan bemorlarga antihipertenziv dorilarni buyurish. rt. St"]
  },
  {
    question: "Aspirin (atsetilsalitsil kislotasi) buyuriladi:",
    answer: "Yuqori/juda yuqori yurak xuruji xavfi bo'lgan barcha bemorlar",
    options: ["Birlamchi profilaktika maqsadida kuniga 300 mg dozada", "40 yoshdan oshgan barcha bemorlar", "Yuqori/juda yuqori yurak xuruji xavfi bo'lgan barcha bemorlar", "AH 150/90 mmHg va KVH xavfi past bo'lgan bemorlar"]
  },
  {
    question: "Sog'lom kattalardagi nafas olish tezligi dam olishda:",
    answer: "daqiqada 20-25 nafas",
    options: ["daqiqada 10 tagacha nafas olish", "daqiqada 10-12 nafas", "daqiqada 14-20 nafas", "daqiqada 20-25 nafas"]
  },
  {
    question: "Gipertenziyada zarar ko'rmaydigan maqsadli organlarni ko'rsating:",
    answer: "Jigar",
    options: ["Retina", "Yurak", "Yirik arteriyalar", "Jigar"]
  },
  {
    question: "Bronxial obstruksiya sindromi eng ko'p xosdir:",
    answer: "bronxial astma",
    options: ["o'pka xo'ppozi", "pnevmoniya", "bronxial astma", "o'tkir plevrit."]
  },
  {
    question: "KOAH rivojlanishining xavf omillari:",
    answer: "42 yoshli qandli diabet bilan kasallangan ayol",
    options: ["42 yoshli qandli diabet bilan kasallangan ayol", "ish joyidagi changning kuchli ta'siri", "chekish", "allergik kasalliklar tarixi"]
  },
  {
    question: "Astma va KOAH uchun dori-darmonsiz terapiya quyidagilarni o'z ichiga oladi:",
    answer: "barcha javoblar to'g'ri",
    options: ["vaznni nazorat qilish/kamaytirish", "emlash: pnevmokokk va gripp", "mashq qilish", "barcha javoblar to'g'ri"]
  },
  {
    question: "KOAHda antibiotik terapiyasiga ko'rsatmalar:",
    answer: "kasallikning kuchayishi, kuchli yo'tal va yiringli balg'am paydo bo'lishi bilan birga",
    options: ["o'pkada xirillash paydo bo'lishi bilan kechadigan kasallikning kuchayishi", "yo'talning kuchayishi bilan kechadigan kasallikning kuchayishi", "ajraladigan balg'am miqdorining ko'payishi bilan kechadigan kasallikning kuchayishi", "kasallikning kuchayishi", "kuchli yo'tal va yiringli balg'am paydo bo'lishi bilan birga"]
  },
  {
    question: "Quyidagi dorilarning qaysi biri bronxospazmni samarali bartaraf etadi?",
    answer: "ipratropium bromid",
    options: ["atropin", "ipratropium bromid", "aprofen", "metatsin"]
  },
  {
    question: "Qisqa ta'sirli b-agonistlarga quyidagi dorilar kiradi:",
    answer: "salbutamol",
    options: ["farmoterol", "teofedrin", "salbutamol", "eufillin"]
  },
  {
    question: "Surunkali obstruktiv o'pka kasalligida kortikosteroid terapiyasini tayinlash uchun ko'rsatmalar:",
    answer: "yordamchi nafas muskullarining ishtiroki",
    options: ["yordamchi nafas muskullarining ishtiroki", "balg'amning yiringli tabiati", "kuchayishi fonida beqaror qon bosimi va yurak urish tezligi", "markaziy siyanozning paydo bo'lishi"]
  },
  {
    question: "Quyidagilardan qaysi biri KOAH bo'yicha mutaxassisga murojaat qilish mezoni emas?",
    answer: "jismoniy mashqlar tolerantligining pasayishi",
    options: ["tashxisga shubha", "tez progressiv kurs", "antibiotik terapiyasini tanlash va buyurish", "jismoniy mashqlar tolerantligining pasayishi"]
  },
  {
    question: "BAni davolashning birinchi bosqichiga quyidagilar kiradi:",
    answer: "salbutamol inhalatsiyasi kerak bo'lganda",
    options: ["eufillin minimal dozada", "salbutamol inhalatsiyasi kuniga 3-4 marta", "beklometazon 200 mkg dozada", "salbutamol inhalatsiyasi kerak bo'lganda"]
  },
  {
    question: "BA bilan og'rigan bemorlarda qanday laboratoriya va instrumental tadqiqotlar o'tkazilmasligi kerak?",
    answer: "siydik tahlili",
    options: ["to'liq qon ro'yxati", "siydik tahlili", "ko'krak qafasi rentgenogrammasi", "spirometriya"]
  },
  {
    question: "KOAH bilan og'rigan bemorning nazorat monitoringi quyidagilarni o'z ichiga olmaydi:",
    answer: "yiliga bir marta spirometriya",
    options: ["eng yuqori oqim har 3 oyda", "yiliga bir marta EKG", "yiliga bir marta spirometriya", "har yili grippga qarshi emlash"]
  },
  {
    question: "Bronxial astmani davolash samarasizligi mezonlari:",
    answer: "tungi hujumlar",
    options: ["kunning ko'p qismida yo'tal", "xirillash va nafas qisilishining yo'qligi", "tungi hujumlar", "ß2 - adrenostimulyatorlarning past dozalarini qo'llash", "dori vositalarining nojo'ya ta'sirining yo'qligi"]
  },
  {
    question: "KOAH diagnostikasi quyidagi belgilar mavjud bo'lganda mumkin:",
    answer: "kunlik yoki tez-tez balg'amli yo'tal",
    options: ["ekzema yoki allergiya tarixi", "uzoq davom etadigan kunlik samarasiz yo'tal", "kunlik yoki tez-tez balg'amli yo'tal", "yuklangan irsiyat"]
  },
  {
    question: "Astma va KOAHda instrumental tadqiqotlarning quyidagi ko'rsatkichlarining noto'g'ri muvofiqligini aniqlang:",
    answer: "KOAHda - UQTda eozinofillar ko'payishi va kamayishi kuzatiladi",
    options: ["BAda- PSV biroz o'zgardi", "PSV - KOAHda bronxodilatatorlar bilan tekshirish fonida bir oz", "BA bilan - PSV ning 15% yoki undan ko'proq pasayishi", "KOAHda - UQTda eozinofillar ko'payishi va kamayishi kuzatiladi"]
  },
  {
    question: "Nafas bilan kasallangan bemorni kuzatish rejasiga qanday tadbirlar kiritilishi kerak?",
    answer: "yiliga 2 marta sozlash bosqichli terapiya",
    options: ["eng yuqori oqim yiliga bir marta", "yiliga 2 marta sozlash bosqichli terapiya", "har 3 oyda bir marta ko'krak qafasi rentgenogrammasi", "har 3 oyda astma nazoratini baholash"]
  },
  {
    question: "Astmaga moyil bo'lgan bolalarda astma rivojlanishiga yordam beruvchi xavf omillarini ko'rsating:",
    answer: "Tirnash xususiyati beruvchi moddalar (aerozollar, bo'yoqlar)",
    options: ["Mashq qilish", "Ob-havo o'zgarishi", "Uydagi allergenlar", "Tirnash xususiyati beruvchi moddalar (aerozollar", "bo'yoqlar)"]
  },
  {
    question: "Bolalarda astma tashxisi uchun xos emas:",
    answer: "Tarix: eramizning og'ir irsiyati",
    options: ["Tarix: eramizning og'ir irsiyati", "Jismoniy mashqlar natijasida kelib chiqqan bronxospazm haqida shikoyatlar", "Kun bo'yi davom etuvchi samarali/ho'l yo'tal haqida shikoyatlar", "Kulganda yoki yig'laganda nafas qisilishi"]
  },
  {
    question: "2 yoshdan katta bolalarda og'ir astma xurujining belgilari:",
    answer: "Barcha javoblar to'g'ri",
    options: ["O2 to'yinganligi <92%", "Gapirganda nafas qisilishi", "Ko'krak qafasining yordamchi mushaklarining ishtiroki", "Barcha javoblar to'g'ri"]
  },
  {
    question: "Bolalarda astmani samarali boshqarishga taalluqli emas:",
    answer: "Dori vositalarining nojo'ya ta'sirlari xavfini kamaytirish",
    options: ["Yo'talni kamaytirish", "Faoliyatning normal darajasini saqlab turish", "Kuchlanish xavfini kamaytirish", "Dori vositalarining nojo'ya ta'sirlari xavfini kamaytirish"]
  },
  {
    question: "Surunkali yuqumli bo'lmagan kasalliklarga chalingan bemorlarning o'z-o'zini parvarish qilish va o'zini o'zi boshqarishiga quyidagilar kiradi:",
    answer: "barcha javoblar to'g'ri",
    options: ["Qon bosimini to'g'ri o'lchash", "baholash va nazorat qilish", "Reabilitatsiya davrida jismoniy tolerantlikni baholash va nazorat qilish", "Qon glyukoza darajasini baholash va nazorat qilish", "eng yuqori oqim o'lchovini baholash va nazorat qilish (PSV)", "barcha javoblar to'g'ri"]
  },
  {
    question: "Tizzalardagi og‘riqga xos emas:",
    answer: "son va boldirlarga irradiyatsiyalanadi",
    options: ["og‘riq asosan bo‘g‘inlarni o‘zida kuzatiladi", "odatda tizzalarni oldi qismiga lokalizatsiyalanadi", "barcha xolatlarda og‘riq tizza osti chuqurchasiga lokalizatsiyalanadi", "son va boldirlarga irradiyatsiyalanadi"]
  },
  {
    question: "Yoshi katta insonlarni sonlaridagi og‘riq nimaga bog‘liq bo‘lishi mumkin:",
    answer: "paylartendenitlari",
    options: ["son suyagi bo‘ynini sinishi", "umirtkani 2 chi bel qismi kompression sinishi", "sinoviitlar", "paylartendenitlari"]
  },
  {
    question: "Bolalar sonida og‘riq kuzatiladi:",
    answer: "son suyagi boshchasini epifizeolizi",
    options: ["3 yoshgacha bolalarda o‘sish og‘rig‘i", "yassi oyoqlik", "Osguda-Shlattera kasalligi", "son suyagi boshchasini epifizeolizi"]
  },
  {
    question: "Reyter sindromiga kirmaydi:",
    answer: "spondilit",
    options: ["konyunktivit", "uveit", "spondilit", "artrit", "uretrit"]
  },
  {
    question: "Podagraning diagnostik kriteriyalari:",
    answer: "barcha javoblar to‘g‘ri",
    options: ["sinovialsuyuqlikdauratkristallarimavjudligi", "uratkristallarimavjudtofuslar", "bo'g’inlardagi asimmetrik shishlar va oyoq panjalarining bir tomonlama shikastlanishi", "barcha javoblar to‘g‘ri"]
  },
  {
    question: "Podagraning nomedikamentoz davosini ko‘rsating:",
    answer: "o‘tkir davri o‘tib ketguncha shikastlangan bo‘g‘inga dam berish",
    options: ["o‘tkir davri o‘tib ketguncha shikastlangan bo‘g‘inga dam berish", "chekishni tashlash", "shikastlangan bo‘g‘inga issiq vanna", "yog‘li baliq go‘shtini istemol qilish"]
  },
  {
    question: "Umurtqa bo‘yin qismi osteoxondrozaga xos:",
    answer: "ensa soxasida bir tomonlama to‘mtoq, simillovchi og‘riqlar",
    options: ["ensa soxasida bir tomonlama to‘mtoq", "simillovchi og‘riqlar", "pastki jag‘ga irradiatsiyalangan og‘riq", "chegaralanmagan og‘riqsiz xarakatlar", "yon tomonga va aylanma xarakatlarda og‘riqsiz"]
  },
  {
    question: "L-5 shikastlanishiga qaysi simptomlar xos?",
    answer: "bolder rotatsiyasi va oyoq kafti supinatsiyasida og‘riq",
    options: ["tovon bilan yurganda og‘riq kuchayishi", "bolder rotatsiyasi va oyoq kafti supinatsiyasida og‘riq", "oyoq panjalari tagida sezuvchanlikning buzilishi", "axillov refleksini pasayishi"]
  },
  {
    question: "Beldagi psixogen og‘riqga xarakterli:",
    answer: "tinch xolatda kuchayadi",
    options: ["oyoqlarga irradiatsiyalanuvchi ikki tomonlama og‘riq", "asosan kechasi kuchayadi", "tinch xolatda kuchayadi", "giporefleksiya"]
  },
  {
    question: "Umirtqa bo‘yin qismi osteoxondroziga xarakterli simptom:",
    answer: "bosh xarakatida cheklanish",
    options: ["bo‘yinda ikki tomonlama simmetrik og‘riq", "bosh xarakatida cheklanish", "yotgan xolatda bosh aylanishi", "xarakatda og‘riqni kuchayishi"]
  },
  {
    question: "Karpal tuneli sindromiga xarakterli:",
    answer: "sababi – o‘rta nerv siqilishi",
    options: ["odatda kechkurunlari katta barmoq parasteziyasi", "sababi – o‘rta nerv siqilishi", "Finkelshteyn probasi musbat", "odatda sportsmenlarda kuzatiladi"]
  },
  {
    question: "Kortikosteroidlarni bo‘g‘inlar ichiga yuborishga ko‘rsatma:",
    answer: "revmatoid artrit",
    options: ["revmatoid artrit", "osteoartroz", "infektsionartrit", "posttravmatik artrit"]
  },
  {
    question: "Tizimli sklerodermiyaga xos belgilarni ko‘rsating:",
    answer: "barcha javoblar to‘g‘ri",
    options: ["terining qalinlashishi", "disfagiya", "Reyno sindromi", "barcha javoblar to‘g‘ri"]
  },
  {
    question: "Ankilozirlovchi spondil artritga xos xarakterli:",
    answer: "umirtqalaroro bo‘g‘inlarni zararlanishi",
    options: ["pasti asimptomi musbat", "umirtqalaroro bo‘g‘inlarni zararlanishi", "og‘riqlarni tunda kuchayishi", "lixoradka"]
  },
  {
    question: "Osteoartrozga xarakterli belgilarni ko‘rsating:",
    answer: "bo‘g’inlar atrofidagi mushaklar atrofiyasi",
    options: ["mayda bo‘g‘inlarni shikastlanishi", "birdan kuchli og‘riq", "bo‘g’inlar qotishi", "bo‘g’inlar atrofidagi mushaklar atrofiyasi"]
  },
  {
    question: "Karpal tuneli sindromi bilan kechuvchi xolatlarni ko‘rsating:",
    answer: "tireotoksikoz",
    options: ["tireotoksikoz", "xomiladorlik", "bilaklar osteoartrozi", "infektsion artrit"]
  },
  {
    question: "Tizzada og’riq sindromidagi taktikani ko‘rsating:",
    answer: "zararlangan bo‘g’inichiga kortikosteroidlar yuborish",
    options: ["o‘tkir davrida issiq vannalar qilish", "og‘riqsizlantirish maqsadida - paratsetamol", "zararlangan bo‘g‘inga gips qo‘yish", "zararlangan bo‘g’inichiga kortikosteroidlar yuborish"]
  },
  {
    question: "Yelkadagi og’rik sabablari:",
    answer: "ko’krak umurtqasining osteoxondrozi",
    options: ["umirtka ko’krak sohasi osteoartriti", "ko’krak umurtqasining osteoxondrozi", "o‘pka saratoni", "umirtka bel sohasi osteoartriti"]
  },
  {
    question: "Yelka og‘rig’iga kelsak, bu haqiqat deb hisoblanadi:",
    answer: "revmatik polimiyalgiya yoshlarda yelka og‘rig’ining keng tarqalgan sababidir",
    options: ["C4 – C6 darajasidaosteoxondrozniistisnoqilishkerak", "revmatik polimiyalgiya yoshlarda yelka og‘rig’ining keng tarqalgan sababidir", "ultratovush-elka bo‘g’imining mushak manjetining shikastlanishini tashxislashning samarasiz usuli", "agar og’riqning sababi yelka tendo vaginiti bo‘lsa", "NPVS tayinlash yetarli"]
  },
  {
    question: "Penitsillamin 1 ning eng keng tarqalgan yot ta'siri",
    answer: "allergik teri reaktsiyalari",
    options: ["trombotsitopeniya", "allergik teri reaktsiyalari", "ta'mning o‘zgarishi", "obstruktiv sindrom"]
  },
  {
    question: "45 yoshli yerkak, I metatarsophalangeal bo‘g‘inda kuchli og‘riqlar bilan o‘tkir artritning qaytalanishini kuzatildi. O‘tkir simptomlarni bartaraf etish uchun eng samarali dori:",
    answer: "kolxitsin",
    options: ["allopurinol", "kolxitsin", "butadion", "indometazin"]
  },
  {
    question: "Agar bachadon bo‘yni umurtqa pog‘onasi zararlangan bo‘lsa, quyidagilar bo‘lishi mumkin:",
    answer: "barcha javoblar to’g’ri",
    options: ["migrenga o‘xshash bosh og‘rig‘i", "quloq og‘rig‘i", "ko‘rish buzilishi", "barcha javoblar to’g’ri"]
  },
  {
    question: "Bu haqiqatmi:",
    answer: "tizza og‘rig‘ining asosiy diagnostic usuli qondagi Revmatoid omilni aniqlash",
    options: ["tizza og‘rig‘ining asosiy diagnostic usuli qondagi Revmatoid omilni aniqlash", "gemartrozda jarohatdan bir kun keyin tizza bo‘g‘imining kattalashishi sodir bo‘ladi", "psevdopodagrada tizza bo‘g‘imining o‘tkir artriti namoyon bo‘lishi mumkin", "bolalarda tizza og‘rig‘ining eng keng tarqalgan sababi osteoartritdir"]
  },
  {
    question: "Revmatik kasalliklarning eng katta chastotasi quyidagilar bilan bog‘liqligi to‘g‘rimi:",
    answer: "yoshligida-SQYu, reaktiv artrit bilan",
    options: ["qarilikda-gonokokk artriti bilan", "yoshligida-SQYu", "reaktiv artrit bilan", "bolalikda-psoriatik artrit bilan", "o‘rtayoshda-yuqumli artrit bilan"]
  },
  {
    question: "Podagra bilan bog’liq holda, bu haqiqatmi:",
    answer: "siydik kislotasi chiqarilishining buzilishi diuretiklar, alkogolva aspirin ta'siri bilan bog‘liq",
    options: ["menopauza paytida ayollarga ta'sir qiladi", "siydik kislotasi chiqarilishining buzilishi diuretiklar", "alkogolva aspirin ta'siri bilan bog‘liq", "tofuslarning mavjudligi o‘tkir gut artritiga xosdir", "ratsionda hayvon oqsillariga boy ovqatlar bo‘lishi kerak"]
  },
  {
    question: "Osteoartroz:",
    answer: "jismoniy faollik paytida og‘riqlar kuchayadi",
    options: ["bo‘g‘inlar tog‘aylarini yo‘qolishi bilan xarakterlanadi", "erkaklar orasida eng keng tarqalgan", "jismoniy faoliyat turiga yugurish kiradi", "jismoniy faollik paytida og‘riqlar kuchayadi"]
  },
  {
    question: "Revmatizmga nisbatan, bu haqiqatmi:",
    answer: "revmatizmni -A guruhidagi streptokokklar keltiribchiqaradi",
    options: ["revmatizm bilan orqa miya ta'sirlanadi", "revmatizmni -A guruhidagi streptokokklar keltiribchiqaradi", "revmatizm-jarohatdankeyinyomonlashishimumkin", "revmatizmasta-sekinboshlanishibilantavsiflanadi"]
  },
  {
    question: "Bo‘g‘inlarningtuzilishivafunktsiyasigakelsak, u to‘g‘rihisoblanadi",
    answer: "SBOD hosil qiluvchi suyaklar artikulyar xaftaga bilan qoplangan",
    options: ["kattahajmdagiharakatlarbilanbo‘g‘inlar intervertebral bo‘g‘imlardir", "harakat doirasi cheklangan bo‘g‘inlar tizza bo‘g‘imlari", "SBOD hosil qiluvchi suyaklar bir-biriga tegadi", "SBOD hosil qiluvchi suyaklar artikulyar xaftaga bilan qoplangan"]
  },
  {
    question: "Quyida keltirilgan rentgenologik belgilar va bo‘g’imlarning kasalliklari o’rtasidagi muvofiqlikni aniqlang:",
    answer: "osteoartrit-artikulyar bo’shliqning torayishi, osteofitlar, osteoskleroz",
    options: ["revmatoidartrit – osteoskleroz zonasi bilan o’ralgan eroziya kistalari", "osteoartrit-artikulyar bo’shliqning torayishi", "osteofitlar", "osteoskleroz", "podagra-laboratoriya parametrlarining o‘zgarishi fonida rentgenologik o‘zgarishlarning yo‘qligi", "revmatik isitma - artikulyarbo‘shliqning torayishi", "kistalar", "marginal eroziya", "osteoporoz"]
  },
  {
    question: "Qalqonsimon bezning faoliyatini baholash uchun qo'llaniladi:",
    answer: "qonning radioimmunologik taxlili",
    options: ["qalqonsimon bezning ultratovush tekshiruvi", "umumiy qon taxlili", "qonning radioimmunologik taxlili", "biokimyoviy qon taxlili"]
  },
  {
    question: "Yoshlik davridagi qandli diabet kasalligi:",
    answer: "Ko'pincha bu insulinga bog'liq bo ‘lgan qandli diabet (IBQD - 1-toifa)",
    options: ["Ko'pincha bu insulinga bog'liq bo ‘lgan qandli diabet (IBQD - 1-toifa)", "Umumiy etiologik omil – o ‘tkazilgan stress oqibatida", "Alomatlar triadasi xarakterlidir - gipertermiya", "poliuriya", "glyukozuriya", "Sezilarli vazn ortishi"]
  },
  {
    question: "Qandli diabetning o‘tkir asoratlariga quyidagilar kiradi",
    answer: "diabetik ketoatsidoz",
    options: ["diabetik retinopatiya", "diabetik ketoatsidoz", "diabetik nefropatiya", "diabetik neyropatiya"]
  },
  {
    question: "Semizlik uchun xavf omillari:",
    answer: "irsiy moyillik",
    options: ["erkak jinsi", "chekish", "irsiy moyillik", "2 yoshgacha emizish"]
  },
  {
    question: "Ko‘zning ko‘rligi, qovoqlarning qayrilishi shox pardaning yarasi kuzatilmoqda, o‘tkazilgan qaysi kasallik to‘g‘risida o‘ylash mumkin:",
    answer: "traxoma",
    options: ["traxoma", "xlamidiyali kon'yunktivit", "gonokokkli kon'yunktivit", "glaucoma"]
  },
  {
    question: "Chaqaloqlarda burun ko‘z yosh kanali yopilib qolishi belgilari qaysi javobda to‘g‘ri ko‘rsatilgan?",
    answer: "ko‘zdan doimiy ravishda yoshning oqishi",
    options: ["ko‘zdan doimiy ravishda yoshning oqishi", "virusga qarshi dori vositalari berish kerak", "o‘z – o‘zidan o‘tib ketmaydi", "ko‘z yosh qopchasini massaj qilish mumkin emas"]
  },
  {
    question: "Olingan churraning predispozitsiya qiluvchi omillari",
    answer: "qarilik",
    options: ["keskin vazn yo'qotish", "yoshlik", "qarilik", "jinsiy yo'l bilan yuqadigan kasalliklar"]
  },
  {
    question: "Churraga oid quyidagi fikrlardan qaysi biri to‘g‘ri hisoblanadi?",
    answer: "qiya inguinal churralarning qaytarilmasligi churra teshiklarining torayishi bilan bog'liq",
    options: ["churralar faqat orttirilgan", "son suyagi churrasi inguinal churraga qaraganda ancha tez-tez uchraydi", "qiya inguinal churralarning qaytarilmasligi churra teshiklarining torayishi bilan bog'liq", "son suyagi churrasi erkaklarda ko'proq uchraydi"]
  },
  {
    question: "Strangulyatsiyalangan churraga quyidagilar xosdir:",
    answer: "barcha javoblar to'g'ri",
    options: ["qorin bo'shlig'ida kramp og'rig'i", "ko'ngil aynishi va qayt qilish", "axlatni ushlab turish", "barcha javoblar to'g'ri"]
  },
  {
    question: "Churra bilan og'rigan bemorlarni davolash taktikasiga kelsak, bu to'g'ri:",
    answer: "son suyagi churrasi jarrohlik uchun mutlaq ko'rsatma emas",
    options: ["son suyagi churrasi jarrohlik uchun mutlaq ko'rsatma emas", "churra buzilgan taqdirda shoshilinch operatsiya ko'rsatilmaydi", "asemptomatik inguinal churrasi bo'lgan bemorlarni konservativ davolash mumkin", "churra kamayguncha elastik bandaj kiyish"]
  },
  {
    question: "40 yoshli ayol o'ng yonbosh sohasidagi kramp og'rig'iga, defekatsiyadan keyin kamayib ketishiga, ovqatdan keyin paydo bo'ladigan ich ketishiga shikoyat qiladi. Shuningdek, ayol charchoqni, ishtahani yo'qotishni va ko'ngil aynishni qayd etadi. U so'nggi paytlarda to'plar shaklida najas bilan ich qotishi borligidan xavotirda. Sizning taxminiy tashxisingiz:",
    answer: "yo'g'on ichak saratoni",
    options: ["haqida. appenditsit", "haqida. xoletsistit", "irritabiy ichak sindromi", "yo'g'on ichak saratoni"]
  },
  {
    question: "Ichakning irritabiy sindromiga shubha qilinganda GP ning taktikasiga quyidagilar kiradi:",
    answer: "yo'g'on ichak saratonini istisno qilish uchun kasalxonaga yotqizish",
    options: ["yo'g'on ichak saratonini istisno qilish uchun kasalxonaga yotqizish", "tolaga boy ovqatlardan saqlaning", "ruhiy kasalliklar uchun - trisiklik antidepressantlar", "Kreonni ovqatdan oldin qabul qilishni tavsiya eting"]
  },
  {
    question: "Qaysi dorilar Helicobacter pylori ga qarshi samarali?",
    answer: "barcha javoblar to'g'ri",
    options: ["vismut subsalitsilati", "metronidazol", "amoksitsillin", "barcha javoblar to'g'ri"]
  },
  {
    question: "Omeprazolning ta'sir qilish mexanizmi:",
    answer: "proton nasos inhibitori",
    options: ["H1 retseptorlari blokatori", "H2 retseptorlari blokatori", "proton nasos inhibitori", "sitoprotektiv dori"]
  },
  {
    question: "Og'riqli siyish quyidagilarga xosdir:",
    answer: "o'tkir prostatit",
    options: ["homiladorlik davrida", "o'tkir balanit", "o'tkir prostatit", "o'tkir glomerulonefrit"]
  },
  {
    question: "Kecha sisiydik ushlomaslik quyidagilardan farqlanadi:",
    answer: "siydik yo'llarining anormal rivojlanishi",
    options: ["siydik yo'llarining infektsiyasi", "qandli diabet", "siydik yo'llarining anormal rivojlanishi", "barcha javoblar to'g'ri"]
  },
  {
    question: "Ko'z ichi bosimini o'lchash majburiy",
    answer: "40 yoshdan oshgan barcha odamlar",
    options: ["o'rtacha darajadagi kamqonlik bilan og'rigan tug'ish yoshidagi ayollar", "40 yoshdan oshgan barcha odamlar", "o'rta maktabda o'rta maktab o'quvchilari", "bosh suyagi shikastlangandan keyin o'smirlar"]
  },
  {
    question: "Rostmi:",
    answer: "elektr shikastlanishi paytida asosiy zarar ko'pincha elektr tokining kirish va chiqish joyi yaqinida lokalizatsiya qilinadi.",
    options: ["elektr jarohati bo'lsa", "umurtqa pog'onasi va quvurli suyaklarning sinishi bo'lishi mumkin", "o'zgaruvchan tok to'g'ridan-to'g'ri oqimga qaraganda ko'proq zarar keltiradi", "elektr shikastlanishining tashqi ko'rinishlari kuchli talaffuz qilinadi", "elektr shikastlanishi paytida asosiy zarar ko'pincha elektr tokining kirish va chiqish joyi yaqinida lokalizatsiya qilinadi."]
  },
  {
    question: "Anafilaktik shokga kelsak, bu haqiqat",
    answer: "bu 2-toifa yuqori sezuvchanlik reaktsiyasi",
    options: ["umumiy sabablar - antibiotiklar", "aspirin", "NPVS", "bu 2-toifa yuqori sezuvchanlik reaktsiyasi", "yurak tomondan gipertoniya", "taxikardiya.", "bir-ikki soat ichida rivojlanadi"]
  },
  {
    question: "Anafilaktik shokda birinchi yordam:",
    answer: "adrenalin 1:1000, 0,5 ml s / s yoki / m",
    options: ["bemorni yotqizish", "boshini ko'tarish.", "adrenalin 1:1000", "0", "5 ml s / s yoki / m", "gidrokortizon 700 mg IV har 12 soatda", "beklozon bilan nafas olish"]
  },
  {
    question: "Epiglotit quyidagi belgilar bilan tavsiflanadi:",
    answer: "isitma, yo'tal, nafas olishda shovqinli nafas olish.",
    options: ["isitma", "yo'tal", "nafas olishda shovqinli nafas olish.", "N - yordam berishda bolani yotqizadi", "tinchlantiradi va kislorod beradi", "6 oylikdan 6 yoshgacha bo'lgan bolalarda uchraydi", "antibiotiklarni tanlashda levomitsetin afzalro"]
  },
  {
    question: "Kichkina jarrohlikdan keyin bemorga tavsiyalar",
    answer: "Infektsiyani oldini olish uchun bandajni toza sellofan bilan yoping",
    options: ["Kasal qismini iloji boricha ko'chiring", "bu esa kamroq qon ketishiga yordam beradi", "Ta'sirlangan a'zoni birinchi 24-36 soat davomida qulay ko'tarilgan holatda ushlab turing", "Shishish va og'riqni kamaytirish uchun isitish padini qo'llang", "Infektsiyani oldini olish uchun bandajni toza sellofan bilan yoping"]
  },
  {
    question: "PHS darajasidagi shoshilinch jarrohlik manipulyatsiyasi va operatsiyalariga quyidagilar kiradi:",
    answer: "parafimoz uchun jarrohlik",
    options: ["parafimoz uchun jarrohlik", "lipomani olib tashlash", "tirnoq gematomasi ostidagi drenaj", "jarohatlar va kuyishlarni parvarish qilish", "bog'lash"]
  },
  {
    question: "PHC darajasida rejalashtirilgan operatsiyalarga quyidagilar kiradi:",
    answer: "o'sgan tirnoqni qisman yoki to'liq olib tashlash",
    options: ["jarohatda qon ketishini to'xtatish", "paronixiyaning ochilishi va drenajlanishi", "o'sgan tirnoqni qisman yoki to'liq olib tashlash", "burundan qon ketish uchun oldingi tamponada"]
  },
  {
    question: "Epileptik tutqanoqlar bilan:",
    answer: "birinchi yordam - diazepam 5-20 mg, iv, sekin",
    options: ["epistatus bilan", "tutilishlar orasidagi intervallarda ong tiklanadi.", "epistatus faqat ongni yo'qotish va gipotenziya bilan birga bo'lishi mumkin.", "birinchi yordam - diazepam 5-20 mg", "iv", "sekin", "klonazepam va tiopental ishlatilmasligi kerak."]
  },
  {
    question: "Ilon chaqishi rostmi?",
    answer: "sovuq qo'llash kerak, tishlash joyiga turniket qo'yiladi",
    options: ["P - ko'ngil aynishi", "qusish", "bosh og'rig'i", "loyqa ko'rish bo'lishi mumkin", "intoksikatsiya belgilari albatta mavjud", "sovuq qo'llash kerak", "tishlash joyiga turniket qo'yiladi", "oyoq-qo‘lni harakatsiz qilib bo‘lmaydi"]
  },
  {
    question: "Arpa chaqishi rostmi?",
    answer: "chayon chaqishi uchun sovuq tampon yoki muz qo'ying.",
    options: ["chaqishni siqib chiqarishingiz mumkin", "a'zo harakatni cheklamaydi va issiqlikni qo'llaydi", "tishlash joyini novokain malhami bilan yog'lash mumkin", "chayon chaqishi uchun sovuq tampon yoki muz qo'ying."]
  },
  {
    question: "Keksa yoshdagi o'tkir appenditsit quyidagilar bilan tavsiflanadi:",
    answer: "aniq og'riq xuruji yo'q",
    options: ["og'ir alomatlar", "aniq og'riq xuruji yo'q", "engil qorin parda tirnash xususiyati sindromi", "leykotsitoz va taxikardiyasiz"]
  },
  {
    question: "O'rta otit quyidagilar bilan tavsiflanadi:",
    answer: "2-5 yoshda tez-tez uchraydi",
    options: ["2-5 yoshda tez-tez uchraydi", "O’RVI bilan birga keladi", "ko'pincha virusli etiologiyali", "quloq pardasining teshilishi bilan og'riq kuchayadi"]
  },
  {
    question: "O'rta otitni davolash quyidagi dorilar bilan amalga oshiriladi:",
    answer: "amoksitsillin",
    options: ["penitsillin", "tetratsiklin", "amoksitsillin", "eritromitsin"]
  },
  {
    question: "O'rta otitning tez-tez uchraydigan asoratlari:",
    answer: "bjsh miya absessi",
    options: ["bjsh miya absessi", "mastoidit", "labirintit", "gaymorit"]
  },
  {
    question: "Surunkali o’rta otit differentsial diagnostikasi uchun to'g'rimi?",
    answer: "mezotimpanit-quloq pardasining markaziy teshilishi",
    options: ["mezotimpanit-quloq pardasining markaziy teshilishi", "epitimpanit - ko'p miqdorda ajralma", "mezotimpanit- quloq pardasining yon tomonlama teshilishi", "epitimpanit - shilliq yiringli ajralmalar"]
  },
  {
    question: "Tashqi otitga quyidagilar xosdir:",
    answer: "quloqdagi qichishish va og'riq",
    options: ["ko'pincha virusli tabiatli", "quloqdagi qichishish va og'riq", "yiringli ko'p miqdordagi ajralma", "otoskopiyada- quloq pardasining teshilishi."]
  },
  {
    question: "Tashqi otitni davolash quyidagilarni o'z ichiga oladi:",
    answer: "bir tomchi sirka kislotasining 2% eritmasi va gidrokortizonning 1% eritmasi bilan mahalliy davolash",
    options: ["tashqi quloqni aroq bilan tozalash", "sochlarni yuvayotganda qulog'larni paxta bilan yopmang", "antibiotiklar per os", "bir tomchi sirka kislotasining 2% eritmasi va gidrokortizonning 1% eritmasi bilan mahalliy davolash"]
  },
  {
    question: "Eshitishni kamerton bilan tekshirganda RINNE va WEBER sinamalaridan foydalanish to'g'rimi",
    answer: "Agar havo o'tkazuvchanligi suyak o'tkazuvchanligiga qaraganda yaxshiroq bo'lsa, Veber sinamasi ijobiy hisoblanadi",
    options: ["Weber sinamasidan foydalanib havo va suyak o'tkazuvchanligi taqqoslanadi", "Weber sinamasiyordamida neyrosensor eshitish qobiliyati tekshiriladi", "Еovush lateralizatsiyasi Rinne sinamasi yordamida aniqlanadi", "Agar havo o'tkazuvchanligi suyak o'tkazuvchanligiga qaraganda yaxshiroq bo'lsa", "Veber sinamasi ijobiy hisoblanadi"]
  },
  {
    question: "Bolalarda eshitish qobiliyatini yo'qotishning dastlabki belgilariga quyidagilar kiradi",
    answer: "18 oyligida - so'zlarni talaffuz qila olmaslik va oddiy so'zlarni tushunmaslik",
    options: ["bosh miya va yuz suyagi va quloq suprasi tuzilishining buzilishi", "18 oyligida - so'zlarni talaffuz qila olmaslik va oddiy so'zlarni tushunmaslik", "2 yoshda so‘z boyligi 20 so‘zdan kam bo‘ladi", "yuqoridagilarning barchasi to'g'ri"]
  },
  {
    question: "Bolalarda eshitishning normal rivojlanishining belgilari",
    answer: "4 oylikda - baland tovushlarga ta'sir qiladi va yig'lashni to'xtatadi",
    options: ["1 oylikda - baland shovqinlarda u to'xtaydi va tinglaydi", "2 oylikda - tezda tovush manbai tomon buriladi", "4 oylikda - baland tovushlarga ta'sir qiladi va yig'lashni to'xtatadi", "7 oylikda - so'zlarga", "o'z ismiga munosabat bildiradi."]
  },
  {
    question: "Neyrosensor eshitishning to'satdan yo'qolishining eng ko'p uchraydigan sabablariga quyidagilar kiradi",
    answer: "virusli infektsiyalar",
    options: ["yoshlik", "virusli infektsiyalar", "azitromitsinni qabul qilish", "qandli diabet"]
  },
  {
    question: "Quyidagi dorilardan qaysi biri ototoksik dorilar hisoblanadi",
    answer: "streptomitsin",
    options: ["streptomitsin", "vankomitsin", "metildopa", "prednizolon"]
  },
  {
    question: "Laringitga quyidagilar xos",
    answer: "hid bilishning sezilarli darajada pasayishi",
    options: ["asosiy sabab - bakterial infeksiya", "tomoq og'rig'i", "nazofarengeal shilliq qavatning giperemiyasi va shishishi", "nazofarenksdagi qoplamalar", "burun yo'llaridan yiringli oqmalar", "kasallikning davomiyligi 10 kundan ortiq", "hid bilishning sezilarli darajada pasayishi", "burunning qichishi", "tez-tez aksirish"]
  },
  {
    question: "Allergik rinitning belgilariga quyidagilar kiradi",
    answer: "burun yo'llaridan ajralma oqishi",
    options: ["burun yo'llaridan yiringli oqmalar", "burun yo'llaridan ajralma oqishi", "titroq", "quloqlarni bitib qolishi"]
  },
  {
    question: "O'tkir sinusitga kasallikka olib keluvchi omillar quyidagilar",
    answer: "burun yo'llarida infektsiyaning mavjudligi",
    options: ["burun yo'llarida infektsiyaning mavjudligi", "migren", "organizmning umumiy qarshiligining pasayishi", "gipotermiya"]
  },
  {
    question: "O'tkir gaymoritning belgilariga quyidagilar kiradi",
    answer: "frontal mintaqada bosh og'rig'i, boshni pastga egish bilan kuchayadi",
    options: ["frontal mintaqada bosh og'rig'i", "boshni pastga egish bilan kuchayadi", "burun yo'llaridan yiringli oqmalar", "yuqori jag’ palpatsiyasida og'riq", "ko’z yolanishi"]
  },
  {
    question: "O'tkir yiringli gaymoritni kompleks davolash quyidagilarni o'z ichiga oladi",
    answer: "umumiy antibiotik terapiyasi",
    options: ["1 oygacha antibiotik terapiyasi", "umumiy antibiotik terapiyasi", "fizioterapiya (burun bo’shlig’idan yiringni evakuatsiya qilgandan keyin)", "diuretiklarni tayinlash"]
  },
  {
    question: "O'tkir faringitning belgilariga quyidagilar kiradi",
    answer: "giperemiya, yutqun orqa devorning shishishi",
    options: ["subfebril tana harorat", "giperemiya", "yutqun orqa devorning shishishi", "ko'pincha bakterial etiologiya", "balg'am"]
  },
  {
    question: "Neyrosensorli eshitish qobiliyatini yo'qotish sabablari quyidagilar bo'lishi mumkin",
    answer: "surunkali o’rta otit",
    options: ["oltingugurt tiqinlari", "tashqi otit", "surunkali o’rta otit", "ototoksik antibiotiklar"]
  },
  {
    question: "Bolalarda o'tkir otitlar quyidagi belgilar bilan kechadi",
    answer: "tovushning sog'lom quloq tomon lateralizatsiyasi",
    options: ["quloqdagi og'riq", "quloq suprasini tortganda - og'riq", "o'tkazuvchan eshitish qobiliyatining yo'qolishi", "tovushning sog'lom quloq tomon lateralizatsiyasi"]
  },
  {
    question: "Quloq og'rig'ining mumkin bo'lgan sabablari",
    answer: "temporomandibular bo'g'im sindromi",
    options: ["gipertonik ensefalopatiya", "glaukoma", "temporomandibular bo'g'im sindromi", "migren"]
  },
  {
    question: "Quloqda shovqin qanday kasallikka xosdir",
    answer: "Menyer kasalligi",
    options: ["tashqi eshitishni kanalining furunkuli", "Menyer kasalligi", "akustik nerv shvannomasi", "otoskleroz"]
  },
  {
    question: "Bosh aylanishi qanday kasallikka xosdir",
    answer: "Pozitsion bosh aylanishinibg keng tarqalgan sababi bakterial rinosinusitdir",
    options: ["Pozitsion bosh aylanishi eshitishning buzilishi bilan kechadi", "Pozitsion bosh aylanishinibg keng tarqalgan sababi bakterial rinosinusitdir", "O‘tkir respirator virusli infeksiyadan so‘ng to‘satdan boshlanishi bilan xarakterlanadi", "Antidepressantlar bilan davolash"]
  },
  {
    question: "Quloqdan yiring chiqishi qanday kasallikka xosdir",
    answer: "o'tkir yiringli o’rta otit",
    options: ["yopishqoq otit", "o'tkir yiringli o’rta otit", "quloq kanallarining furunkullari", "yiringli parotit"]
  },
  {
    question: "Qaysi kasallikda tashqi eshitish yo'lining torayishi va giperemiyasi, eshitish yo'llarida qobiq va qichishish paydo bo'ladi",
    answer: "otomikoz",
    options: ["otomikoz", "o'tkir otit", "surunkali tashqi otit", "quloq kanalining furunkuli"]
  },
  {
    question: "Bolalarda o’rta quloq yallig’lanishining asosiy sababi nima",
    answer: "yuqori nafas yo'llarining virusli infektsiyalari",
    options: ["adenoid vegetatsiya", "yuqori nafas yo'llarining virusli infektsiyalari", "difteriya", "shikastlanish"]
  },
  {
    question: "Neyrosensorli eshitish qobiliyatini yo'qotishni aniqlash uchun qaysi tadqiqot aniqroq",
    answer: "quloqni tekshirish",
    options: ["anamnez to’plash", "kamerton sinamasi", "temporal suyaklarning rentgenografiyasi", "quloqni tekshirish"]
  },
  {
    question: "Bemorning o'ng qulog'idan yiringli ajralma, eshitish qobiliyatini yo'qotish. Otoskopiyada – quloq suprasining cho'zilgan qismining katta teshilishi, medial devor shilliq qavatining yiringli va polipli giperplaziyasi ko'rinadi. Sizning tashxisingiz qanday",
    answer: "yiringli-polipli epitimpanitning kuchayishi",
    options: ["o'tkir o’rta otit", "karioz epitimpanitning kuchayishi", "yiringli-polipli epitimpanitning kuchayishi", "yiringli mezotimpanitning kuchayishi"]
  },
  {
    question: "O’rta otitning asoratlari.",
    answer: "miya absessi",
    options: ["miya absessi", "mastoidit", "surunkali otitis media", "yuqoridagilarning barchasi to'g'ri"]
  },
  {
    question: "O'tkir otitda timpanik membrana",
    answer: "qizil va qavariq",
    options: ["marvarid tusli kulrang-moviy rang", "qizil va qavariq", "kulrang-pushti va tortilgan", "qalinlashgan quloq pardasi"]
  },
  {
    question: "Allergik rinitga qaysi biri to‘g‘ri kelishini ko‘rsating",
    answer: "aniq burun oqishi",
    options: ["qo'zg'atuvchi omil - harorat va namlik", "aniq burun oqishi", "yildagi mavsumiylik bilan bog'liq emas", "burunni akvalor bilan samarali yuvish"]
  },
  {
    question: "Vazomotor rinitga nima to'g'ri kelishini ko'rsating",
    answer: "harorat va namlikning o'zgarishi bilan kuchayadi",
    options: ["harorat va namlikning o'zgarishi bilan kuchayadi", "burundan shilliq ajralish", "yilning mavsumiyligi tufayli", "ko'zda qichishish bilan kechadi"]
  },
  {
    question: "O'tkir sinusitning eng ko'p uchraydigan sabablarini sanab o'ting",
    answer: "yallig'lanish",
    options: ["yallig'lanish", "bronxial astma", "reflyuksli ezofagit", "burun polipozisi"]
  },
  {
    question: "O'tkir sinusitning asosiy klinik belgilari",
    answer: "ikki tomonlama frontal og'riq",
    options: ["ikki tomonlama frontal og'riq", "pulsimon tabiatli og'riq", "barcha alomatlar 4 haftadan ortiq davom etadi", "rinoreya"]
  },
  {
    question: "O'tkir sinusitning kichik klinik belgilari",
    answer: "yomon nafas",
    options: ["yomon nafas", "bosh og'rig'i", "tish og'rig'i", "yo'tal"]
  },
  {
    question: "Bakterial konyunktivit davolashga xos:",
    answer: "konyunktival qopchani fiz eritma bilan yuvish",
    options: ["konyunktival qopchani fiz eritma bilan yuvish", "kon'yunktival qopchani fiz eritma bilan yuvish man etiladi", "kortikosteroid malxamlarni ishlatish", "operativ davo"]
  },
  {
    question: "Virusli kon'yunktivit uchun kuyidagi xos:",
    answer: "virusli konyunktivit yuqumli kasallik, kup xollarda adenoviruslar chaqiradi",
    options: ["virusli konyunktivit yuqumli kasallik", "kup xollarda adenoviruslar chaqiradi", "1 xafta davomida namoyon bo‘ladi", "ko‘zdan yiringli ajralmalar ajraladi", "yo‘tal bilan namoyon bo‘ladi"]
  },
  {
    question: "Virusli konyunktivit aniqlanganda UASh taktikasi:",
    answer: "ko‘z soxasiga sovuq kompresslar",
    options: ["ko‘z soxasiga sovuq kompresslar", "ko‘zga bog‘lamlar qo‘yish", "mikroskopik tekshiruvlar va ajralmalarni bakteral tekshiruv", "xloramfenikol tomchilarini buyurish"]
  },
  {
    question: "Blefarit uchun xos:",
    answer: "1% tetratsiklin mazь 1 xafta mobaynida buyuriladi",
    options: ["ko‘z qovoqlarining yallig‘lanishi", "qo‘zg‘atuvchisi zamburug‘lar", "ko‘z yosh oqishi va yorug‘likdan qo‘rquv kuzatiladi", "1% tetratsiklin mazь 1 xafta mobaynida buyuriladi"]
  },
  {
    question: "Gloukomaga xos to‘g‘ri javobni ko‘rsating:",
    answer: "Davolashda lazerning foydasi yo'q",
    options: ["Nasliy moyillik", "Shikoyatlar erta paydo bo‘ladi", "Ko‘z ichki bosimi 20 mm s u gacha", "Davolashda lazerning foydasi yo'q"]
  },
  {
    question: "Ko‘z to‘rpadasini ko‘chishini ta'riflovchi tushunchani qaysi javobda to‘g‘ri ko‘rsatilgan?",
    answer: "uzoqni yaxshi ko‘ra olmaslik",
    options: ["uzoqni yaxshi ko‘ra olmaslik", "ko‘rishni ikki tomonlama yomonlashuvi", "ko‘zni g‘ilayligi", "0", "5% li pilokarpin tomchisidan ijobiy natija"]
  },
  {
    question: "G‘ilaylik uchun quyidagi ma'lumotlar xos emas:",
    answer: "g‘ilaylikka sabab onadagi infektsiyalar bo‘lishi mumkin",
    options: ["g‘ilaylikka sabab onadagi infektsiyalar bo‘lishi mumkin", "g‘ilaylikni erta davolash lozim", "g‘ilaylikka ko‘z mushaklarining tonusini ishlash faoliyatini buzilishi sabab", "paralitik g‘ilaylikka ko‘z mushaklarini parezi sabab"]
  },
  {
    question: "Gipertiroidizm belgilari:",
    answer: "Emotsional labillik",
    options: ["Emotsional labillik", "Vazn ortishi", "Terining quruqligi va rangsizligi", "TTG ko'tarilgan"]
  },
  {
    question: "Bolalarda katarakta aniqlanadi:",
    answer: "qisman bolalardagi miya ichi bosimini oshishi sabab bo‘lishi mumkin",
    options: ["bolalarda kataraktani yorug‘lik refleksini o‘zgarishidan shubxa qilish mumkin", "qisman bolalardagi miya ichi bosimini oshishi sabab bo‘lishi mumkin", "ko‘krak yoshidagi bolalarda ko‘rish faoliyatiga ta'sir qilmaydi", "oftalmoskopiya o‘tkazilmaydi"]
  },
  {
    question: "Ko‘z ichi bosimini o‘lchash muolajasi o‘tkaziladi. Noto‘g‘ri javobni ko‘rsating",
    answer: "kamqon fertil yoshidagi barcha ayolllarga",
    options: ["kamqon fertil yoshidagi barcha ayolllarga", "40 yoshdan keyin barchaga", "nasliy moyilligi bor insonlarga", "60 yoshdan keyin barcha insonlarga yiliga 2 marotaba"]
  },
  {
    question: "Qanday kasalliklar bir soat ichida ko'rish buzilishining tez rivojlanishiga olib keladi?",
    answer: "yuqoridagilarning barchasi to'g'ri",
    options: ["serebrovaskulyar avariya", "migren", "retinaning ajralishi", "yuqoridagilarning barchasi to'g'ri"]
  },
  {
    question: "Katarakt:",
    answer: "ko'z ichi bosimining oshishi sindromi",
    options: ["ko'z ichi bosimining oshishi sindromi", "retinal qon tomir kasalligi", "linzalarning degeneratsiyasi", "ìrísíning pigmentatsiyasi"]
  },
  {
    question: "Fundus rasmi va kasalliklar o'rtasidagi to'g'ri muvofiqlikni ko'rsating",
    answer: "ko'zning to'r pardasida qon ketishi - diskning rangparligi va qon tomir naqshining yo'qligi",
    options: ["optik disk atrofiyasi - optik diskning chuqurlashishi", "diabetes mellitus - \"olov tillari\" yoki qizil chiziqlar", "arterial gipertenziya - \"mumsimon nuqta\" belgisi", "mikroanevrizmalar", "ko'zning to'r pardasida qon ketishi - diskning rangparligi va qon tomir naqshining yo'qligi"]
  },
  {
    question: "Quyidagilarning barchasi glaukomaga tegishli",
    answer: "ko'rish buzilishi",
    options: ["ko'rish maydonining periferik torayishi mavjud;", "ko'z qorachig'i toraygan", "ko'rish buzilishi", "ob'ektlarning buzilgan idroki va ko'z oldida yorug'lik chaqnashlari"]
  },
  {
    question: "Glaukoma xurujini davolash quyidagilarni o'z ichiga oladi:",
    answer: "atsetazolamid",
    options: ["atsetazolamid", "gidrokortizon;", "asiklovir;", "timolol;"]
  },
  {
    question: "Vaqtinchalik monokulyar ko'rlikning sababi quyidagilar bo'lishi mumkin",
    answer: "shishasimon tananing degeneratsiyasi;",
    options: ["shishasimon tananing degeneratsiyasi;", "markaziy retinal arteriyaning vaqtinchalik tiqilib qolishi", "gigant hujayrali arterit;", "idiopatik intrakranial gipertenziya;"]
  },
  {
    question: "O'tkir konyunktivit uchun xarakterlanadi",
    answer: "fotofobiya",
    options: ["ko'zlarda yonish hissi", "ko'zda dog' yoki qum hissi", "fotofobiya", "shilliq yiringli oqindi"]
  },
  {
    question: "Alomat va tashxis o'rtasidagi to'g'ri muvofiqlikni ko'rsating",
    answer: "virusli konyunktivit - ko'z qovoqlari va ko'z qovoqlaridagi follikulalarning qizarishi, kam miqdorda seroz oqindi, bir ko'z tez-tez ta'sirlanadi",
    options: ["ertalabki kirpiklar va qovoqlarning yopishishi", "shilliq-yiringli oqmalar", "ko'zning qizarishi", "ko'zda chiriyotgan hissi", "bakterial kon'yunktivit - qovoqlarning qizarishi va shishishi", "yonish hissi", "qichishish", "lakrimatsiya", "virusli konyunktivit - ko'z qovoqlari va ko'z qovoqlaridagi follikulalarning qizarishi", "kam miqdorda seroz oqindi", "bir ko'z tez-tez ta'sirlanadi", "kontakt kon'yunktivit - ikkala ko'zning qizarishi", "ko'zning yonishi", "seroz oqindi", "ko'pincha rinit bilan qo'shiladi"]
  },
  {
    question: "Glaukoma quyidagilar bilan tavsiflanadi:",
    answer: "ochiq burchak bilan - ko'z ichi suyuqligini shishasimon tanadan drenaj tizimiga etkazib berish buziladi",
    options: ["ko'pincha kavkaz millatiga mansub odamlarda rivojlanadi", "ochiq burchak bilan - ko'z ichi suyuqligini shishasimon tanadan drenaj tizimiga etkazib berish buziladi", "asosiy davolash jarrohlik", "fundusni tekshirganda - tubning kuchli giperemiyasi"]
  },
  {
    question: "Ko'rish buzilishining rivojlanish sur'ati va kasallik o'rtasidagi to'g'ri muvofiqlikni ko'rsating",
    answer: "glaukoma - bir necha hafta ichida",
    options: ["migren - bir soat ichida", "optik nevrit - bir necha yil", "glaukoma - bir necha hafta ichida", "xoroidit - kun davomida"]
  },
  {
    question: "Kataraktaning asosiy sabablari:",
    answer: "qandli diabet",
    options: ["gipertiroidizm", "qandli diabet", "ko'z ichi bosimining oshishi", "pigmentozali retinit"]
  },
  {
    question: "Glaukoma xurujida o'tkir yordam:",
    answer: "pilokarpin gidroxloridning 2% li eritmasi tomchilari",
    options: ["pilokarpin gidroxloridning 2% li eritmasi tomchilari", "ichidagi kaptopril", "furosemid IV", "0", "5% timolol ko'zga 1 tomchi"]
  },
  {
    question: "O'tkir dakriotsistitni davolash:",
    answer: "og'iz orqali yoki topikal antibiotiklar",
    options: ["asiklovir malhamini surtish", "og'iz orqali yoki topikal antibiotiklar", "burun va paranasal sinuslarning patologiyasini davolash.", "pilokarpinning 2% li eritmasini tomiziladi"]
  },
  {
    question: "Traxomada differensial diagnostika quyidagilar bilan amalga oshiriladi:",
    answer: "adenovirusli follikulyar kon'yunktivit",
    options: ["qo'shimchalar bilan konyunktivit", "glaukoma", "adenovirusli follikulyar kon'yunktivit", "follikulit"]
  },
  {
    question: "Keratokonjunktivitning eng ko'p uchraydigan sababi:",
    answer: "ekzogen allergenlarga allergiya",
    options: ["bakterial infektsiya", "virusli infeksiya", "tuberkuloproteinlarga allergiya", "ekzogen allergenlarga allergiya"]
  },
  {
    question: "Addison kasalligiga xos:",
    answer: "o'ta qo'zg'aluvchanlik",
    options: ["o'ta qo'zg'aluvchanlik", "ishtahaning oshishi", "vazn ortishi", "giperppigmentatsiya"]
  },
  {
    question: "Allergik kon'yunktivitning eng xarakterli belgilari:",
    answer: "qichishish",
    options: ["ko'z og'rig'i", "qichishish", "begona jismni sezish", "fotofobiya"]
  },
  {
    question: "16 yoshli qiz ko'zlarida qum hissi paydo bo'lishiga shikoyat qiladi. Ko'rish kamaymaydi. Ob'ektiv: shox parda atrofida bir tomonlama qizarish, refleksli lakrimatsiya, ko'z qorachig'i o'zgarmagan, ko'z ichi bosimi normal. Sizning taxminiy tashxisingiz quyidagilardan:",
    answer: "bakterial kon'yunktivit",
    options: ["shox pardaning yarasi", "o'tkir iridotsiklit", "sklerit", "bakterial kon'yunktivit"]
  },
  {
    question: "zOrbita flegmonasiga nisbatan rost deb hisoblanadi:",
    answer: "paranasal sinuslar proektsiyasida palpatsiya paytida og'riq",
    options: ["umumiy ahvoli qoniqarli", "ikki tomonlama shish va qovoqning qizarishi xarakterlidir", "paranasal sinuslar proektsiyasida palpatsiya paytida og'riq", "ko'z olmasining normal harakatchanligi"]
  },
  {
    question: "Kataraktaning operatsiyadan keyingi davriga quyidagilar kiradi:",
    answer: "yallig'lanishni kamaytirish uchun kortikosteroid tomchilari",
    options: ["bir hafta ichida siz egishingiz mumkin", "bir hafta ichida siz og'ir ishlarni qilishingiz mumkin", "yallig'lanishni kamaytirish uchun kortikosteroid tomchilari", "1-5 kun davomida yuzingizni qaynatilmagan suv bilan yuvishingiz mumkin"]
  },
  {
    question: "Ko‘z belgisi bilan kasallik o‘rtasidagi to‘g‘ri moslikni ko‘rsating:",
    answer: "migren - ko'zlarni harakatga keltirganda og'riq",
    options: ["glaukoma - rang manbalari atrofidagi ko'p rangli doiralar", "migren - ko'zlarni harakatga keltirganda og'riq", "idiopatik intrakranial gipertenziya - bosh og'rig'i bilan birgalikda ko'rishning buzilishi", "retrobulbar nevrit - ko'z oldidagi zigzag chiziqlari"]
  },
  {
    question: "Virusli konyunktivitga qarshi taktikangiz:",
    answer: "NSAIDlarni tayinlash",
    options: ["kiyinish", "gormonal malhamlar", "antiseptik bilan yuvish", "NSAIDlarni tayinlash"]
  },
  {
    question: "Bakterial kon'yunktivitning xarakterli belgilarini sanab o'ting:",
    answer: "yiringli oqindi",
    options: ["yonish", "qichishish", "yiringli oqindi", "ko'z qorachig'ining yorug'likka reaktsiyasining yo'qligi", "shox pardaning loyqalanishi"]
  },
  {
    question: "Qanday sharoitlarda ko'zning qizarishi mumkin:",
    answer: "Reyter sindromi",
    options: ["katarakt", "Reyter sindromi", "Xant sindromi", "atopik konyunktivit"]
  },
  {
    question: "Nonspesifik uretrit va sero-manfiy artrit bilan og'rigan 20 yoshli erkakda Reiter sindromi bilan bog'liq qizil ko'z bor. Sizning dastlabki tashxisingiz:",
    answer: "konyunktivit",
    options: ["glaukoma", "irrit", "konyunktivit", "subkonjunktival qon ketishi"]
  },
  {
    question: "65 yoshli insulinga bog'liq diabet kasalligi ko'zning shox pardasida ìrísí atrofida oq halqa topdi. Sizning dastlabki tashxisingiz:",
    answer: "periorbital xo'ppoz",
    options: ["proliferativ retinopatiya", "ksantelazma", "periorbital xo'ppoz", "shox parda yoyi"]
  },
  {
    question: "12 yoshli bola sinusit bilan og'riydi, ko'zi orqasida kuchli og'riqdan shikoyat qiladi. Ko'z qovoqlarining shishishi va ko'rishning buzilishi. Sizning dastlabki tashxisingiz:",
    answer: "periorbital xo'ppoz",
    options: ["proliferativ retinopatiya", "ksantelazma", "periorbital xo'ppoz", "shox parda yoyi"]
  },
  {
    question: "40 yoshli ayol barmoqlarida qichishish, sariqlik, og'riqdan shikoyat qiladi. Uning qovoqlarida ochiq sariq yara bor. Sizning dastlabki tashxisingiz:",
    answer: "ksantelazma",
    options: ["proliferativ retinopatiya", "ksantelazma", "periorbital xo'ppoz", "shox parda yoyi"]
  },
  {
    question: "Odatda 35 yoshdan oshgan bemorlarga glyukokortikoidlarni o'z ichiga olgan ko'z tomchilarini qo'llash tavsiya etilmaydi. Qanday yon ta'sir bo'lishi mumkin?",
    answer: "glaukoma",
    options: ["glaukoma", "irrit", "kon'yunktivit", "subkonjunktival qon ketishi"]
  },
  {
    question: "Ko'zning anatomiyasiga kelsak, to'g'ri deb hisoblanadi:",
    answer: "kon'yunktiva sklera bilan qoplangan shilliq qavatdir",
    options: ["ko'z qovog'i ìrísíning bir qismini qoplaydi va ko'z qorachig'iga etib boradi", "periferiyadagi skleraning to'yingan sariq rangini sariqlik bilan adashtirmaslik kerak", "kon'yunktiva sklera bilan qoplangan shilliq qavatdir", "lakrimal bez orbitadan tashqarida joylashgan"]
  },
  {
    question: "Koz tubi anatomik tuzilmalariga quyidagilar kiradi:",
    answer: "yuqoridagilarning barchasi to'g'ri",
    options: ["ko'zning to'r pardasi", "optik disk", "markaziy chuqurcha", "yuqoridagilarning barchasi to'g'ri"]
  },
  {
    question: "Fundus va shishasimon tanasining tuzilishiga kelsak, bu to'g'ri hisoblanadi:",
    answer: "ko'rish nervining to'r pardadan chiqish nuqtasi ko'rish nervi boshiga to'g'ri keladi",
    options: ["ko'rish nervining to'r pardadan chiqish nuqtasi ko'rish nervi boshiga to'g'ri keladi", "markaziy chuqurcha aniq chegaralari bo'lgan yorqin nuqta bilan o'ralgan", "shishasimon tanasi odatda ko'rinadi", "shishasimon tanasi loyqa jelatinli massa"]
  },
  {
    question: "Ko'zni tekshirish usuliga kelsak, u to'g'ri hisoblanadi:",
    answer: "ko'rish keskinligini tekshirishda ko'zoynakni olib tashlash kerak (agar subekt ularni kiysa).",
    options: ["ko'rish keskinligini tekshirishda yorug'lik muhim emas", "ko'rish keskinligini tekshirishda ko'zoynakni olib tashlash kerak (agar subekt ularni kiysa).", "Sivtsev jadvali va Snellin jadvali yordamida ko'rish keskinligini aniqlash uchun masofa ob'ektdan 5-6 metrdan oshmasligi kerak", "ko'rish keskinligini ifodalovchi ikkinchi raqam - bemor bu qatorni endi o'qiy olmaydigan masofa"]
  },
  {
    question: "O‘quvchilarni imtihondan o‘tkazish bo‘yicha quyidagi fikrlar to‘g‘ri deb hisoblanadi",
    answer: "yorug'likka to'g'ridan-to'g'ri reaktsiya - birinchisi yoritilganda ikkinchi ko'z qorachig'ining torayishi.",
    options: ["anizokoriya - ko'z qorachig'i diametrining 2", "5 mm dan ortiq farqi", "midriaz - ko'z qorachig'ining siqilishi", "o'quvchilarning yorug'likka reaktsiyasi yon tomondan yorqin nurda aniqlanadi", "yorug'likka to'g'ridan-to'g'ri reaktsiya - birinchisi yoritilganda ikkinchi ko'z qorachig'ining torayishi."]
  },
  {
    question: "Oftalmoskopiyaga kelsak, bu haqiqat deb hisoblanadi:",
    answer: "bolalarda oftalmoskopiya neonatal davrda boshlanishi kerak",
    options: ["shifokor ham", "bemor ham linzalarni olib tashlashi kerak", "agar ular mavjud bo'lsa", "qorong'i xonada amalga oshiriladi", "bolalarda oftalmoskopiya neonatal davrda boshlanishi kerak", "\"qizil refleks\" taxminan 70 sm masofada aniqlanadi"]
  },
  {
    question: "Optik disk (OND) belgilari va xarakteristikalari o'rtasidagi to'g'ri muvofiqlikni ko'rsating:",
    answer: "oddiy disk - ONH rangi sariq-to'q sariq, chegaralari keskin aniqlangan, qon tomir tarmog'i o'zgarmagan",
    options: ["oddiy disk - ONH rangi sariq-to'q sariq", "chegaralari keskin aniqlangan", "qon tomir tarmog'i o'zgarmagan", "ko'rish diskining shishishi - OD qazishning ko'payishi", "uning pastki qismi oqargan", "to'r pardaning tomirlari qazish ostida bosilgan.", "glaukomada optik disk - optik disk giperemik", "tomirlar sezilarli darajada farqlanadi", "diskning chegaralari xiralashgan.", "optik diskning fiziologik qazishi - optik disk oqargan", "qon tomirlari ko'rinmaydi."]
  },
  {
    question: "Zambug’li sinusitlar ko'pincha qanday kasalliklar bilan kechadi",
    answer: "barcha javoblar to'g'ri",
    options: ["qandli diabet", "OITS", "sil kasalligi", "barcha javoblar to'g'ri"]
  },
  {
    question: "Surunkali tonzillitga qanday belgilar xos",
    answer: "bodomsimon bezlarning yiringlashi, bodomsimon bezlarning tanglay yoylariga yopishishi",
    options: ["tomoq og'rig'i", "yutish qiyin", "bosh og'rig'i", "qon bosimi ortishi", "quruq tomoq", "bodomsimon bezlarning yiringlashi", "bodomsimon bezlarning tanglay yoylariga yopishishi", "faringeal orqa devorning giperemiyasi", "isitma"]
  },
  {
    question: "O'tkir laringitning eng ko'p uchraydigan sabablari",
    answer: "O’RVI",
    options: ["gastroezofagial reflyuks", "O’RVI", "kasbi - o'qituvchilar", "chekish"]
  },
  {
    question: "Gipertiroidizm bo‘yicha sizda ro‘yxatda turgan 25 yoshli ayolni ko‘zdan kechirish chog‘ida ko‘zni tekshirish vaqtida ko‘zni yuqoridan pastga siljitishda yuqori ko‘z qovog‘i orqada qolayotganini, shu tarzda sklera chizig‘i paydo bo‘lishini sezdingiz. yuqori ko'z qovog'i va iris o'rtasida aniqlanadi. Ko'z qovoqlaridagi patologik o'zgarishlarga tegishli nomni ko'rsating:",
    answer: "ekzoftalm",
    options: ["ekzoftalm", "ko'z qovoqlarining tortilishi", "periorbital shish", "ptoz"]
  },
  {
    question: "O'tkir sinusitdagi eng xavfli asoratlar",
    answer: "miya absessi",
    options: ["temporal arteriya trombozi", "mastoidit", "miya absessi", "meningit"]
  },
  {
    question: "Laringit bilan kasallangan bemorni qachon mutaxassisga yuborish kerak",
    answer: "bolalarda laringit bo'lsa",
    options: ["jarohat bilan bog'liqlik mavjud bo'lsa", "bolalarda laringit bo'lsa", "kasallik 2 haftadan ortiq davom etadi", "bemor chekuvchi"]
  },
  {
    question: "Anginaga kelsak, bu to'g'ri hisoblanadi",
    answer: "asosiy qo'zg'atuvchisi streptokokk",
    options: ["engil tomoq og'rig'i", "og'riqsiz kattalashgan limfa tugunlari", "asosiy qo'zg'atuvchisi streptokokk", "faringeal shilliq qavat", "bodomsimon bezlar", "yoylar va uvulaning giperemiyasi fonida sariq blyashka yo'qligi"]
  },
  {
    question: "Quyidagi kasalliklarning qaysi birida ikkilamchi stenokardiya kuzatilishi mumkin",
    answer: "yuqumli mononuklyoz",
    options: ["yuqumli mononuklyoz", "qizamiq", "qizilcha", "parotit"]
  },
  {
    question: "Kataral tomoq og'rig'ida tipik faringoskopik rasm",
    answer: "tanglay bodom bezlari kattalashgan, giperemik, shilliq qavat bilan qoplangan",
    options: ["tanglay bodom bezlari kattalashgan", "giperemik", "shilliq qavat bilan qoplangan", "tanglay bodomsimon bezlari lakunalarida yiringli tiqinlar", "ko'p sonli yiringli follikullar bilan tanglay bodomsimon bezlarning yuzasi", "tanglay bodomsimon bezlari kattalashgan", "sirtida mayda xo‘ppozlar bor"]
  },
  {
    question: "Agar siz tinnitus haqida shikoyat qilsangiz, 2 tasini chiqarib tashlashingiz kerak.",
    answer: "barcha javoblar to'g'ri",
    options: ["dorilarning ta'siri", "gashishizm", "depressiya", "barcha javoblar to'g'ri"]
  },
  {
    question: "Follikulyar anginada faringoskopiya rasmi",
    answer: "bodomsimon tanglayning shilliq qavati giperemik, sarg'ish-oq yiringli follikula",
    options: ["bodomsimon yuzasida iflos kulrang blyashka olib tashlash qiyin", "tanglay bodomsimon shilliq pardasi giperemik", "shishgan", "bodomsimon bezlarning lakunalarida sariq-oq", "yiringli oqmalar", "bodomsimon tanglayning shilliq qavati giperemik", "sarg'ish-oq yiringli follikula"]
  },
  {
    question: "24 yoshli bemor chaynash vaqtida qulog`idagi o`tkir og`riqdan shikoyat qiladi. Tashqi eshitish yo'liga kiraverishda konus shaklidagi shish aniqlanadi, qizarib ketgan teri bilan qoplangan. Eng to'g'ri tashxisni tanlang",
    answer: "Tashqi otit",
    options: ["Tashqi otit", "Tashqi eshitish yo’lining funkulusi", "O'tkir o'rta otit", "Surunkali yiringli o'rta otit"]
  },
  {
    question: "Bemor o'ng qulog'idagi kuchli qichishish, eshitish qobiliyatini yo'qotish, og'riqdan shikoyat qiladi. Otoskopiyada quloq kanalida \"blotting qog\'oz\" ga o'xshash massalar mavjud. Tozalashdan so'ng, quloq kanalining devorlari keskin giperemik, timpanik membrana normal rangga ega. Eng to'g'ri tashxisni tanlang",
    answer: "Tashqi otit",
    options: ["Tashqi otit", "Otomikoz", "O'tkir o'rta otit", "Surunkali yiringli o'rta otit"]
  },
  {
    question: "Yosh yigit, 24 yoshli, baquvvat, baquvvat, to‘satdan hech qanday sababsiz bosh aylanishi, tinnitus, eshitish qobiliyatini yo‘qotish, ko‘ngil aynishi, qusish va kuchli holsizlikni his qildi. U \"silkitayotganini\" va uning atrofidagi narsalar aylanayotganini ta'kidlaydi. Yiqilib, u ko'zlarini ocholmaydi, shuning uchun ob'ektlarning aylanishi kuchayadi. Eng to'g'ri tashxisni tanlang",
    answer: "Menyer kasalligi",
    options: ["Koxlear nevrit", "Menyer kasalligi", "O'tkir o'rta otit", "Оtoskleroz"]
  },
  {
    question: "Bemorda jarayonning kuchayishi vaqtida chap tarafdagi o'rta quloqda uzoq davom etgan yallig'lanish jarayoni fonida quloqda kuchli og'riq paydo bo'lgan, hidli yiringli oqmalar kuchaygan. Eshitish kanalida granulyatsiyalar, polip va chirigan hidli yiring aniqlangan. Eng to'g'ri tashxisni tanlang",
    answer: "Surunkali yiringli o'rta otit",
    options: ["Tashqi otit", "Otomikoz", "O'tkir o'rta otit", "Surunkali yiringli o'rta otit"]
  },
  {
    question: "Peritonzillyar abssessi xarakterlidir",
    answer: "tanglay bodomsimonining yuqoriga siljishi",
    options: ["palatin bodomsimon bezning o'rtacha shishishi", "tanglay bodomsimonining yuqoriga siljishi", "patogen - Streptococcus pyogenes", "Per os antibiotiklardan samarali foydalanish"]
  },
  {
    question: "Yuqumli mononuklyozda stenokardiya quyidagilar bilan tavsiflanadi",
    answer: "qo'zg'atuvchi - oltin stafilokokklar",
    options: ["15 yoshdan katta", "qo'zg'atuvchi - oltin stafilokokklar", "eozinofiliya", "yuqumli kasalliklar shifoxonasiga yotqizish uchun ko'rsatma emas"]
  },
  {
    question: "Burundan qon ketishining sabablari",
    answer: "sinusit",
    options: ["adenoidlar", "gemofiliya", "sinusit", "yuqori nafas yo'llarining infektsiyalari"]
  },
  {
    question: "Quloq anatomiyasiga nisbatan to`g`ri hisoblanadi",
    answer: "ichki quloq burun-halqum bilan Yevstaki naychasi orqali aloqa qiladi.",
    options: ["quloq 4 qismdan iborat", "o'rta quloq havodan iborat", "ichki quloq burun-halqum bilan Yevstaki naychasi orqali aloqa qiladi.", "timpanik parda odatda och pushti rangga ega"]
  },
  {
    question: "Menyer sindromi xarakterlidir",
    answer: "Eshitish qobiliyatini yo'qotish",
    options: ["20 yoshdan 30 yoshgacha", "Yiliga 5 martagacha paroksismal bosh og'rig'i", "Eshitish qobiliyatini yo'qotish", "Virusli infektsiya bilan qo'zg'atilgan"]
  },
  {
    question: "Eshitish qobiliyatining yo'qolishi to'g'rimi",
    answer: "Supero'tkazuvchilar - havo o'tkazuvchanligi suyak o'tkazuvchanligiga qaraganda yomonroq",
    options: ["Supero'tkazuvchilar - tovushning ichki quloqdan tashqi tomonga o'tishining buzilishi", "Neyrosensor - o'rta quloqning shikastlanishi", "Supero'tkazuvchilar - havo o'tkazuvchanligi suyak o'tkazuvchanligiga qaraganda yomonroq", "Supero'tkazuvchilar - sog'lom quloq tomonida tovushning eng yaxshi eshitilishi"]
  },
  {
    question: "Tireotoksikozning klinik ko'rinishi quyidagilar bilan tavsiflanadi",
    answer: "qo'zg'aluvchanlikning kuchayishi, xavotir bo ‘lish",
    options: ["qo'zg'aluvchanlikning kuchayishi", "xavotir bo ‘lish", "ishtahaning kuchayishi natijasida vazn ortishi", "arterial gipotenziya - hirqiroq ovoz"]
  },
  {
    question: "Glyukozaga tolerantlik testi o‘tkazish uchun ko'rsatmalar",
    answer: "chegaradagi giperglikemiya",
    options: ["1-toifa diabetni tasdiqlash", "kandidozli vulvovaginit va balanit", "chegaradagi giperglikemiya", "pielonefrit"]
  },
  {
    question: "Gipotireozning klinik belgilari:",
    answer: "Ekzoftalm",
    options: ["Qabziyat", "yuzning kerkishi", "oqarib ketishi", "Bezovtalik", "yurakni tez-tez urishi", "Diareya", "terlash", "vazn yo'qotish", "Ekzoftalm"]
  },
];

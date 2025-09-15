let questions = [
    
  {
    question: "DMED tizimida avtorizatsiya qanday amalga oshiriladi?",
    answer: "JSHSHIR va himoya kodi orqali",
    options: [
      "Login va parol orqali",
      "JSHSHIR va himoya kodi orqali",
      "Foydalanuvchi nomi va parol orqali"
    ]
  },
  {
    question: "DMED tizimini joriy etishning asosiy vazifalari qanday?",
    answer: "Elektron tibbiy hujjatlar, dori vositalarini hisobga olish va muassasa boshqaruv jarayonlarini optimallashtirish",
    options: [
      "Foydalanuvchilarni ro'yxatdan o'tkazish",
      "Tizimni yangilash va texnik xizmat ko'rsatish",
      "Elektron tibbiy hujjatlar, dori vositalarini hisobga olish va muassasa boshqaruv jarayonlarini optimallashtirish"
    ]
  },
  {
    question: "DMED qo‘llab-quvvatlash xizmati bilan qanday usullar orqali bog‘lanish mumkin?",
    answer: "Telefon raqami, Telegram bot va chat orqali",
    options: [
      "Faks va pochta orqali",
      "Elektron pochta orqali",
      "Telefon raqami, Telegram bot va chat orqali"
    ]
  },
  {
    question: "Bemor qaysi mobil ilova orqali shifokarga yozilishi mumkin?",
    answer: "DMED",
    options: [
      "DMED PRO",
      "DMED",
      "DMED MONITOR"
    ]
  },
  {
    question: "DMED tizimida bemorning yagona identifikatori (Med ID) qanday beriladi?",
    answer: "Med ID tizim tomonidan avtomatik ravishda beriladi",
    options: [
      "Bemor tomonidan tanlanadi",
      "Shifokor tomonidan belgilanadi",
      "Med ID tizim tomonidan avtomatik ravishda beriladi"
    ]
  },
  {
    question: "Bemor o‘zini poliklinikaga mustaqil ravishda biriktirishi mumkinmi?",
    answer: "Ha, mobil ilova yoki MyGov orqali",
    options: [
      "Yo‘q, faqat tibbiyot xodimi orqali",
      "Ha, mobil ilova yoki MyGov orqali",
      "Faqat tuman sog‘liqni saqlash bo‘limi orqali"
    ]
  },
  {
    question: "DMED tizimida rasmiy hujjat aylanishi reestri sifatida qaysi internet-manba ishlatiladi?",
    answer: "docs.dmed.uz",
    options: [
      "docs.dmed.uz",
      "dmed.gov.uz",
      "tibbiyhujjatlar.uz"
    ]
  },
  {
    question: "DMED tizimida qanday maxfiylik turi mavjud?",
    answer: "Shifokor darajasidagi maxfiylik",
    options: [
      "Foydalanuvchi darajasidagi maxfiylik",
      "Shifokor darajasidagi maxfiylik",
      "Umumiy tizim maxfiyligi"
    ]
  },
  {
    question: "Bemor birinchi marta DTMga murojaat qilganda qabulga yozish qanday amalga oshiriladi?",
    answer: "Bemorning FISH/Med ID bo‘yicha",
    options: [
      "Bemorning JSHSHIR bo‘yicha",
      "Bemorning FISH/Med ID bo‘yicha",
      "Faqat Med ID bo‘yicha"
    ]
  },
  {
    question: "Bemorni qayta qabulga yozish uchun qanday ma’lumotlar zarur?",
    answer: "Med ID/tug‘ilganlik haqidagi guvohnoma/pasport",
    options: [
      "FISH va yashash joyi",
      "Med ID/tug‘ilganlik haqidagi guvohnoma/pasport",
      "Faqat Med ID"
    ]
  },
  {
    question: "Birinchi tashrif paytida bemorning rasmini qanday to‘g‘ri olish kerak?",
    answer: "Barcha javoblar to‘g‘ri",
    options: [
      "Yaxshi sifatli rasm olish",
      "Bemorni to‘g‘ri identifikatsiya qilish uchun",
      "Barcha javoblar to‘g‘ri"
    ]
  },
  {
    question: "Hujjatlari yo‘q bemorni qo‘shishda qaysi maydonlarni to‘ldirish kerak?",
    answer: "FISH/tug‘ilgan sana/jins",
    options: [
      "FISH/tug‘ilgan sana/jins",
      "Faqat FISH",
      "FISH va yashash manzili"
    ]
  },
  {
    question: "Tizimda xorijiy bemor (norezident)ni qidirish qanday ma’lumotlar bo‘yicha amalga oshiriladi?",
    answer: "Pasport ma’lumotlari bo‘yicha",
    options: [
      "JSHSHIR bo‘yicha",
      "Pasport ma’lumotlari bo‘yicha",
      "FISH bo‘yicha"
    ]
  },
  {
    question: "\"Qabullar-Aktiv\" bo‘limida bemorlarning qanday statuslari mavjud?",
    answer: "Taklif qilingan/qabulda/navbatda",
    options: [
      "Navbatda/ko‘rikda/chiqdi",
      "Taklif qilingan/qabulda/navbatda",
      "Faqat qabulda"
    ]
  },
  {
    question: "Reimbursatsiya va oddiy retsept o‘rtasida qanday farq bor?",
    answer: "Reimbursatsiya retseptlari Sug‘urta fondi hisobiga qoplanadi, oddiylarini bemor o‘z hisobiga sotib olishga majbur",
    options: [
      "Ikkalasi ham bemor hisobidan",
      "Faqat reimbursatsiya bepul",
      "Reimbursatsiya retseptlari Sug‘urta fondi hisobiga qoplanadi, oddiylarini bemor o‘z hisobiga sotib olishga majbur"
    ]
  },
  {
    question: "Reimbursatsiya retseptida \"Tabletkalar\" chiqarish shakli bo‘lgan preparatni bemorga qancha miqdorda yozish mumkin?",
    answer: "30 yoki 60 dona miqdorida",
    options: [
      "30 yoki 60 dona miqdorida",
      "10 yoki 20 dona miqdorida",
      "Har qanday miqdorda"
    ]
  },
  {
    question: "Shifokor yoki amaliyotchi hamshira bemorni ko‘rigini boshlash uchun qanday harakatlarni qilishi kerak?",
    answer: "\"Qabullar-Aktiv\" bo‘limida bemorni topish, uni qabulga chaqirish, qabulni boshlash, yangi murojaat epizodini yaratish yoki eskisini davom ettirish",
    options: [
      "Faqat bemorni topish",
      "Bemorni topish va qabulni boshlash",
      "\"Qabullar-Aktiv\" bo‘limida bemorni topish, uni qabulga chaqirish, qabulni boshlash, yangi murojaat epizodini yaratish yoki eskisini davom ettirish"
    ]
  },
  {
    question: "Shifokor boshqa mutaxassisga yozilgan bemorni qabul qila oladimi?",
    answer: "Ha",
    options: [
      "Yo‘q",
      "Faqat direktor ruxsati bilan",
      "Ha"
    ]
  },
  {
    question: "Bemorni vaqtga emas, balki jonli navbatga yozish mumkinmi? Masalan, vaqtga barcha yozuvlar band bo‘lsa.",
    answer: "Ha, bemorni jonli navbatga yozish mumkin, lekin faqat joriy sanaga",
    options: [
      "Yo‘q, faqat vaqtga yozish mumkin",
      "Ha, bemorni jonli navbatga yozish mumkin, lekin faqat joriy sanaga",
      "Jonli navbat har doim mavjud emas"
    ]
  },
  {
    question: "Shifokor ko‘rik paytida bemorni boshqa mutaxassisga yo‘naltira oladimi?",
    answer: "Ha, oladi, murojaat epizodidagi \"+Uchrashuv\" tugmasi orqali",
    options: [
      "Yo‘q, bunday imkoniyat yo‘q",
      "Ha, lekin faqat direktor ruxsati bilan",
      "Ha, oladi, murojaat epizodidagi \"+Uchrashuv\" tugmasi orqali"
    ]
  },
  {
    question: "Qanday davolash turi bilan yo‘naltirish uchun direktor tasdig‘i kerak emas?",
    answer: "Ambulator",
    options: [
      "Statsionar",
      "Ambulator",
      "Favqulodda"
    ]
  },
  {
    question: "Gospitalizatsiya yo‘naltirishisiz bemorni statsionarga rasmiylashtirish mumkinmi?",
    answer: "Yo‘q, statsionarga rasmiylashtirish uchun mutlaqo yo‘naltirish zarur",
    options: [
      "Ha, shart emas",
      "Yo‘q, statsionarga rasmiylashtirish uchun mutlaqo yo‘naltirish zarur",
      "Faqat direktor ruxsati bilan"
    ]
  },
  {
    question: "Bemor profilida qanday ma’lumotlarni ko‘rish mumkin?",
    answer: "Barcha javoblar to‘g‘ri",
    options: [
      "Shaxsiy ma’lumotlar",
      "Kontakt ma’lumotlari",
      "Barcha javoblar to‘g‘ri"
    ]
  },
  {
    question: "O‘tkazilgan skrining ma’lumotlarini tahrirlash mumkinmi?",
    answer: "Yo‘q, mumkin emas",
    options: [
      "Ha, mumkin",
      "Yo‘q, mumkin emas",
      "Faqat administrator ruxsati bilan"
    ]
  },
  {
    question: "Bemorning antropometrik ma’lumotlari qaerga kiritiladi?",
    answer: "Murojaat epizodidagi \"Antropometriya\" bo‘limiga \"Yangilash\" tugmasi orqali",
    options: [
      "Shaxsiy profilga",
      "Murojaat epizodidagi \"Antropometriya\" bo‘limiga \"Yangilash\" tugmasi orqali",
      "Statsionar kartaga"
    ]
  },
  {
    question: "Shifokor bemorning ko‘rik tarixini ko‘ra oladimi?",
    answer: "Ha, bemor tibbiy kartasidagi \"Ko‘riklar\" bo‘limida",
    options: [
      "Yo‘q",
      "Faqat direktor ruxsati bilan",
      "Ha, bemor tibbiy kartasidagi \"Ko‘riklar\" bo‘limida"
    ]
  },
  {
    question: "Xodimlardan kimlar reimbursatsiya retseptlarini yoza oladi?",
    answer: "O‘zining malakasi bo‘yicha, shifokorlar va amaliyotchilar",
    options: [
      "Faqat shifokorlar",
      "Faqat direktor",
      "O‘zining malakasi bo‘yicha, shifokorlar va amaliyotchilar"
    ]
  },
  {
    question: "Qanday dori vositalari uchun reimbursatsiya retsepti yozish mumkin emas?",
    answer: "Ro‘yxatga kiritilmagan dorilar uchun",
    options: [
      "Barcha dori vositalari uchun yozish mumkin",
      "Ro‘yxatga kiritilmagan dorilar uchun",
      "Faqat muolaja preparatlari uchun"
    ]
  },
  {
    question: "Shifokor uchun birinchi navbatda qaysi elektron xizmatni ishlatish tavsiya etiladi?",
    answer: "DMED tizimi orqali ro‘yxatga olish va murojaatlarni boshqarish",
    options: [
      "SMS xabarlar yuborish",
      "DMED tizimi orqali ro‘yxatga olish va murojaatlarni boshqarish",
      "Elektron pochta"
    ]
  },
  {
    question: "Bemorlar uchun dori vositalarini qaysi tizim orqali buyurtma qilish mumkin?",
    answer: "DMED",
    options: [
      "MyGov",
      "DMED",
      "Shifokor kabineti"
    ]
  },
  {
    question: "DMED tizimida ma’lumotlar xavfsizligini ta’minlash uchun nima amalga oshiriladi?",
    answer: "Ma’lumotlarni shifrlash va autentifikatsiya mexanizmlari",
    options: [
      "Faqat parol bilan himoyalash",
      "Ma’lumotlarni shifrlash va autentifikatsiya mexanizmlari",
      "Tizimni tez-tez yangilash"
    ]
  },
  {
    question: "Bemorlar DMED tizimida qaysi ma’lumotlarni ko‘rishlari mumkin?",
    answer: "O‘zining barcha tibbiy tarixini va retseptlarni",
    options: [
      "Faqat shifokor tomonidan berilgan maslahatlar",
      "O‘zining barcha tibbiy tarixini va retseptlarni",
      "Faqat qabul sanalari"
    ]
  },
  {
    question: "DMED tizimida shifokorlar uchun qanday qo‘shimcha imkoniyatlar mavjud?",
    answer: "Murojaatlarni boshqarish, retseptlar yozish va bemorlar bilan onlayn aloqa",
    options: [
      "Faqat murojaatlarni boshqarish",
      "Murojaatlarni boshqarish, retseptlar yozish va bemorlar bilan onlayn aloqa",
      "Faqat bemor ma’lumotlarini ko‘rish"
    ]
  },
  {
    question: "DMEDda elektron retsept yozishning afzalliklari nimada?",
    answer: "Xatoliklarni kamaytirish va dorilarni nazorat qilish imkoniyati",
    options: [
      "Xatoliklarni kamaytirish va dorilarni nazorat qilish imkoniyati",
      "Faqat qulaylik",
      "Foydalanish qiyinligi"
    ]
  },
  {
    question: "DMED tizimida malaka oshirish uchun qaysi xizmatlar mavjud?",
    answer: "Onlayn treninglar va seminarlar",
    options: [
      "Faqat kitoblar",
      "Onlayn treninglar va seminarlar",
      "Shaxsiy mentorlik"
    ]
  },
  {
    question: "DMED tizimida joriy etilgan elektron sog‘liqni saqlash standartlari qanday nomlanadi?",
    answer: "Elektron sog‘liqni saqlash ma’lumotlar bazasi",
    options: [
      "Elektron sog‘liqni saqlash ma’lumotlar bazasi",
      "Tibbiy ma’lumotlar bazasi",
      "Sog‘liqni saqlash tizimi"
    ]
  },
  {
    question: "DMED tizimida foydalanuvchi uchun parolni tiklash imkoniyati bormi?",
    answer: "Ha, elektron pochta yoki SMS orqali",
    options: [
      "Yo‘q, tiklash mumkin emas",
      "Ha, elektron pochta yoki SMS orqali",
      "Faqat admin orqali"
    ]
  },
  {
    question: "DMED tizimida bemorning yashash manzili qayerga kiritiladi?",
    answer: "Bemor profilidagi yashash manzili bo‘limiga",
    options: [
      "Tizim sozlamalariga",
      "Bemor profilidagi yashash manzili bo‘limiga",
      "Statsionar kartaga"
    ]
  },
  {
    question: "DMED tizimida dori vositalarining narxi qayerdan olinadi?",
    answer: "Davlat ro‘yxatidan",
    options: [
      "Xaridor narxi asosida",
      "Davlat ro‘yxatidan",
      "Dorixonalar narxidan"
    ]
  },
  {
    question: "DMED tizimida sog‘liqni saqlash muassasalari uchun hisobotlar qayerga yuboriladi?",
    answer: "Markaziy ma’lumotlar bazasiga",
    options: [
      "Muassasa ichidagi serverga",
      "Markaziy ma’lumotlar bazasiga",
      "Foydalanuvchi pochta qutisiga"
    ]
  },
  {
    question: "DMED tizimida qanday qilib yangi foydalanuvchi qo‘shiladi?",
    answer: "Administrator orqali",
    options: [
      "Foydalanuvchi o‘zi ro‘yxatdan o‘tadi",
      "Administrator orqali",
      "Shifokor tomonidan"
    ]
  },
  {
    question: "DMED tizimida qayta tiklash kodi qancha vaqt ichida amal qiladi?",
    answer: "30 daqiqa",
    options: [
      "15 daqiqa",
      "30 daqiqa",
      "60 daqiqa"
    ]
  },
  {
    question: "DMED tizimida qaysi tillar mavjud?",
    answer: "O‘zbek va rus tillari",
    options: [
      "Faqat o‘zbek tili",
      "O‘zbek va rus tillari",
      "Ingliz tili"
    ]
  },
  {
    question: "DMED tizimining eng so‘nggi versiyasi qaysi yil chiqarilgan?",
    answer: "2024",
    options: [
      "2023",
      "2024",
      "2022"
    ]
  },
  {
    question: "DMED tizimida bemorning tibbiy kartasi qanday nomlanadi?",
    answer: "Elektron tibbiy karta",
    options: [
      "Qog‘oz kartasi",
      "Elektron tibbiy karta",
      "Shaxsiy karta"
    ]
  },
  {
    question: "DMED tizimida bemorning laboratoriya natijalari qayerda saqlanadi?",
    answer: "Laboratoriya bo‘limida",
    options: [
      "Shifokor kabinetida",
      "Laboratoriya bo‘limida",
      "Bemor profilida"
    ]
  },
  {
    question: "DMED tizimida qaysi foydalanuvchilar uchun maxsus ro‘yxat mavjud?",
    answer: "Yosh bolalar va keksalar uchun",
    options: [
      "Faqat shifokorlar uchun",
      "Yosh bolalar va keksalar uchun",
      "Barcha foydalanuvchilar uchun"
    ]
  },
  {
    question: "DMED tizimida foydalanuvchi sessiyasi qancha vaqt davom etadi?",
    answer: "60 daqiqa",
    options: [
      "30 daqiqa",
      "60 daqiqa",
      "90 daqiqa"
    ]
  },
  {
    question: "DMED tizimida dori vositalari qayerdan sotib olinadi?",
    answer: "Davlat dorixonalaridan",
    options: [
      "Shaxsiy dorixonadan",
      "Davlat dorixonalaridan",
      "Internet do‘konlardan"
    ]
  },
  {
    question: "DMED tizimida bemor shikoyatlari qayerga kiritiladi?",
    answer: "Murojaat epizodida",
    options: [
      "Shifokor kabinetida",
      "Murojaat epizodida",
      "Bemor profilida"
    ]
  },
  {
    question: "DMED tizimida qayta ko‘rikga yozilish uchun qanday hujjat kerak?",
    answer: "Oldingi ko‘rik ma’lumotlari",
    options: [
      "Pasport",
      "Oldingi ko‘rik ma’lumotlari",
      "Yashash joyi haqida ma’lumot"
    ]
  },
  {
    question: "DMED tizimida shifokorlar malakasini oshirish uchun qaysi platformadan foydalaniladi?",
    answer: "Onlayn treninglar platformasi",
    options: [
      "YouTube",
      "Onlayn treninglar platformasi",
      "Telegram kanali"
    ]
  },
  {
    question: "DMED tizimida qanday diagnostika vositalari mavjud?",
    answer: "Elektron tahlil va testlar",
    options: [
      "Faqat qo‘l tahlillari",
      "Elektron tahlil va testlar",
      "Qo‘l va laboratoriya tahlillari"
    ]
  },
  {
    question: "DMED tizimida qanday qilib foydalanuvchi profilini yangilash mumkin?",
    answer: "Profil sozlamalaridan foydalangan holda",
    options: [
      "Faqat admin yordamida",
      "Profil sozlamalaridan foydalangan holda",
      "Shifokor orqali"
    ]
  }
]


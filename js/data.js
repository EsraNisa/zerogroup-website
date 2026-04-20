/* ===========================
   ZERO GROUP — data.js
   İçerik buradan yönetilir.
   =========================== */

const DATA = {

  /* ---- Görseller ---- */
  images: {
    HOME_BG_VIDEO_POSTER : './gorseller/zero-intro-poster.jpg',
    HOME_VIDEO           : './gorseller/zerotanitim.mp4',
    ORG_BG               : './gorseller/organizasyon-bg.jpg',
    IK_BG                : './gorseller/ik.jpg',
    LOJISTIK_BG          : './gorseller/lojistik.jpg',
    PERSON_1             : './gorseller/person1.jpg',
    PERSON_2             : './gorseller/person2.jpg',
    PROFILE_PIC          : './gorseller/pp.jpg',
    INSTA_POST           : './gorseller/gonderi.jpg',
    LOJ_FULFILLMENT      : './gorseller/loj-fulfillment.jpg',
    LOJ_COLD             : './gorseller/loj-soguk-zincir.jpg',
    LOJ_MICRO            : './gorseller/loj-mikro.jpg',
    LOJ_SUPPLY           : './gorseller/loj-tedarik.jpg',
    LOJ_CONTACT_BG       : './gorseller/lojistik-contact.jpg',
    IK_GARSON            : './gorseller/garson.jpg',
    IK_CAGRI             : './gorseller/cagrimerkez.jpg',
    IK_RESEPSIYON        : './gorseller/resepsyonist.jpg',
    IK_STANT             : './gorseller/stant.jpg',
    IK_KATIL             : './gorseller/ikkatil.jpg',
    IK_TEKLIF            : './gorseller/ikteklif.jpg',
    TEMIZLIK_BG: './gorseller/temizlik.jpg',
  },

  /* Polaroid resimleri (20 adet) */
  polaroids: Array.from({ length: 20 }, (_, i) => `./gorseller/polaroid-${i + 1}.jpg`),

  /* Afiş posterleri (10 adet) */
  posters: Array.from({ length: 10 }, (_, i) => `./gorseller/afis${i + 1}.jpg`),

  /* Etkinlik fotoğrafları (40 adet, 10 albüm × 4) */
  eventPhotos: Array.from({ length: 40 }, (_, i) => `./gorseller/afisek${i + 1}.jpg`),

  /* Referans logoları (19 adet) */
  refs: Array.from({ length: 19 }, (_, i) => `./gorseller/ref${i + 1}.jpg`),

  /* ---- İstatistikler ---- */
  stats: [
    { value: '120+', label: 'Tamamlanan Proje' },
    { value: '40+',  label: 'Marka ile Çalışma' },
    { value: '8',    label: 'Yıllık Deneyim'   },
    { value: '%95',  label: 'Müşteri Memnuniyeti' },
  ],

  /* ---- Müşteri yorumları ---- */
  testimonials: [
    {
      brand: 'Vodafone Turkey', person: 'Ayşe Kaya', title: 'Etkinlik & Sponsorluk Müdürü',
      text: 'Zero Group ile çalışmak her seferinde mükemmel bir deneyim oluyor. Organizasyon süreçlerindeki titizlikleri ve profesyonellikleri markaların değerine gerçekten katkı sağlıyor.',
    },
    {
      brand: 'Red Bull Türkiye', person: 'Mert Demir', title: 'Brand Manager',
      text: "Ankara'nın en enerji dolu etkinliklerini Zero Group ile hayata geçirdik. Ekibin yaratıcılığı ve lojistik koordinasyonu oldukça güçlü, her detay eksiksiz düşünülmüş.",
    },
    {
      brand: 'Anadolu Efes', person: 'Selin Arslan', title: 'Pazarlama Direktörü',
      text: "Yıllar içinde birçok organizasyon firmasıyla çalıştık ancak Zero Group'un sunduğu hız ve kalite kombinasyonunu başka yerde bulamadık. Gerçek anlamda güvenilir bir iş ortağı.",
    },
  ],

  /* ---- İK kategorileri ---- */
  ikCategories: [
    { label: 'SERVİS & MUTFAK',   sub: 'Garson - Komi - Aşçı',         imageKey: 'IK_GARSON',    desc: 'Deneyimli servis elemanlarımız ve mutfak ekibimizle organizasyonlarınızda kusursuz bir akış sağlıyoruz.' },
    { label: 'İLETİŞİM MERKEZİ', sub: 'Çağrı Merkezi Personeli',        imageKey: 'IK_CAGRI',     desc: 'Markanızın sesi olmaya hazır, diksiyonu düzgün ve çözüm odaklı ekipler. Müşteri memnuniyetini en üst düzeye çıkarın.' },
    { label: 'KARŞILAMA EKİBİ',   sub: 'Resepsiyonist ve Hostes',        imageKey: 'IK_RESEPSIYON',desc: 'Misafirlerinizi ilk andan itibaren büyüleyin. Güler yüzlü, prezentabl ve profesyonel karşılama ekipleri.' },
    { label: 'SAHA TANITIM',      sub: 'Stant ve Event Personeli',       imageKey: 'IK_STANT',     desc: 'Ürün ve hizmetlerinizi sahada en iyi temsil edecek dinamik yüzler. Fuar ve AVM etkinliklerinde markanızın enerjisi.' },
  ],

  /* ---- Lojistik iş alanları ---- */
  lojistikCards: [
    { title: 'FULFILLMENT',    imageKey: 'LOJ_FULFILLMENT', desc: 'E-ticaret operasyonlarınız için depolama, paketleme ve hızlı gönderim çözümleri.' },
    { title: 'SOĞUK ZİNCİR',  imageKey: 'LOJ_COLD',        desc: 'Hassas ürünleriniz için ısı kontrollü taşıma ve depolama standartları.' },
    { title: 'MİKRO DEPOLAMA',imageKey: 'LOJ_MICRO',        desc: 'Şehir içi hızlı teslimat için stratejik noktalarda konumlandırılmış mini depolar.' },
    { title: 'TEDARİK ZİNCİRİ',imageKey: 'LOJ_SUPPLY',     desc: 'Üretimden son kullanıcıya kadar uçtan uca, optimize edilmiş akış yönetimi.' },
  ],

  /* ---- Sektör sayfaları meta bilgisi ---- */
  sectors: {
    ORGANIZATION: {
      title   : "Eğlencenin olduğu her yerde sahne bizim",
      desc    : "Ankara'nın sosyal yaşamına yön veren etkinliklerimizle, gençlerin enerjisini ve yaratıcılığını sahneye taşıyoruz. Konserlerden temalı partilere, açık mikrofon stand-up gecelerinden özel gün kutlamalarına kadar geniş bir yelpazede etkinlikler düzenliyoruz.",
      bgKey   : 'ORG_BG',
    },
    IK: {
      title   : "İNSAN KAYNAKLARI ÇÖZÜMLERİ",
      desc    : "İş dünyasının dinamiklerine uygun, nitelikli personel temini ve profesyonel bordrolama hizmetleri sunuyoruz. Doğru işe doğru insan prensibiyle çalışıyoruz.",
      bgKey   : 'IK_BG',
    },
    TEMIZLIK: {
      title   : "TEMİZLİK HİZMETLERİ",
      desc    : "Profesyonel ekibimiz ve kaliteli ekipmanlarımızla ofis, bina ve etkinlik alanlarında kusursuz temizlik çözümleri sunuyoruz. Hijyen ve güven bizim önceliğimiz.",
      bgKey   : 'IK_BG',
    },
    LOJISTIK: {
      title   : "GÜVENİLİR LOJİSTİK AĞI",
      desc    : "Operasyonel mükemmellik ve zamanında teslimat garantisi ile lojistik süreçlerinizi profesyonelce yönetiyoruz.",
      bgKey   : 'LOJISTIK_BG',
    },
  },

  /* ---- İletişim & sosyal medya ---- */
  contact: {
    tel1   : '+90 312 435 92 72',
    tel2   : '+90 507 022 59 07',
    tel3   : '+90 531 263 98 14',
    email  : 'info@zerogroup.com.tr',
    address: 'Eti Mah. Strazburg Cad. No:30/19, Çankaya / Ankara',
    instagram : 'https://www.instagram.com/zero.group_/',
    instagram2: 'https://www.instagram.com/zero.ankara/',
    linkedin  : 'https://www.linkedin.com/in/zero-group-948a873b3/?originalSubdomain=tr',
    whatsapp  : 'https://api.whatsapp.com/send?phone=905070225907',
    applyForm : 'https://docs.google.com/forms/d/e/1FAIpQLSeJg8xZ1zDugHAQFKWU7YfQ3bCn1ebgEIHz-hnAoyeKZNm-lw/viewform',
    mapsEmbed : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.614116018958!2d32.85023199999999!3d39.927651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x829350407fd6de23%3A0x1636eeea5b371788!2sZERO%20GROUP!5e0!3m2!1str!2str!4v1775674875159!5m2!1str!2str',
  },
};
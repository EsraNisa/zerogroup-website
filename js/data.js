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
    { value: '10',    label: 'Yıllık Deneyim'   },
    { value: '%95',  label: 'Müşteri Memnuniyeti' },
  ],

  /* ---- Müşteri yorumları ---- */
  testimonials: [
    {
      brand: '', person: 'A*** K***', title: 'Kurumsal Bina Yönetimi',
      text: 'Uzun süredir personel temini konusunda birlikte çalışıyoruz. Sağlanan personelin disiplinli, düzenli ve işine hakim olması sayesinde süreçlerimiz çok daha verimli ilerliyor. İhtiyaç duyduğumuzda hızlı çözüm üretmeleri ve kaliteli hizmet anlayışları bizim için en büyük tercih sebebi.',
    },
    {
      brand: '', person: 'M*** D****', title: 'Eğitim Kurumu Yetkilisi',
      text: "Kurumumuzda ihtiyaç duyduğumuz destek personeli konusunda profesyonel bir hizmet aldık. Personel seçimindeki titizlikleri ve süreci yakından takip etmeleri sayesinde herhangi bir aksaklık yaşamadık. Güvenilir ve sürdürülebilir bir iş ortağı.",
    },
    {
      brand: '', person: 'S**** A*****', title: 'Etkinlik ve Organizasyon Firması',
      text: "Gerçekleştirdiğimiz etkinliklerde hem personel desteği hem de organizasyon süreçlerinde ciddi katkı sağladılar. Ekip koordinasyonu ve sahadaki hakimiyetleri sayesinde etkinliklerimiz sorunsuz ve başarılı geçti. İşlerini profesyonelce yapan bir ekip.",
    },
  ],

  /* ---- İK kategorileri ---- */
  ikCategories: [
    { label: 'DEPO YÖNETİMİ',     sub: 'Stok ve Malzeme Takibi',         imageKey: 'IK_GARSON',    desc: 'Temizlik ekipmanları ve sarf malzemelerinizi düzenli şekilde yönetin. Stok takibi, ürün kontrolü ve operasyon süreçlerinde tam düzen sağlayın.' },
    { label: 'TEMİZLİK PERSONELİ', sub: 'Saha ve Görev Personeli',        imageKey: 'IK_CAGRI',     desc: 'Deneyimli ve disiplinli temizlik personelleriyle hizmet kalitenizi yükseltin. Görev alanları, vardiyalar ve ekip yönetimini kolayca planlayın.' },
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
      desc    : "Zero Ankara, sıradan etkinlikleri reddeden, eğlenceyi yeniden tanımlayan genç bir organizasyon ekibidir. Ankara’da gece hayatına ve üniversite etkinliklerine kendi tarzını koyar.",
      bgKey   : 'ORG_BG',
    },
    IK: {
      title   : "İNSAN KAYNAKLARI ÇÖZÜMLERİ",
      desc    : "İnsan kaynakları alanında hızlı, güvenilir ve çözüm odaklı hizmet sunuyoruz. Doğru personeli doğru işle buluşturuyor, kurumlara sürdürülebilir ve kaliteli istihdam sağlıyoruz.",
      bgKey   : 'IK_BG',
    },
    TEMIZLIK: {
      title   : "TEMİZLİK HİZMETLERİ",
      desc    : "Temizlik hizmetlerinde hızlı, düzenli ve profesyonel çözümler sunuyoruz. Kurumlara ve işletmelere, hijyen standartlarını en üst seviyede tutan güvenilir personel desteği sağlıyoruz.",
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
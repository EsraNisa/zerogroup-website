/* ===========================
   ZERO GROUP — app.js
   Ana uygulama router'ı
   =========================== */

const App = (() => {
  let _currentView = 'HOME';
  let _footerObserver = null;

  /* Bölüm → arka plan rengi haritası
     true  = koyu arka plan → beyaz navbar yazısı
     false = açık arka plan → siyah navbar yazısı */
const SECTION_DARK = {
  // --- ANASAYFA (HOME) ---
  'home-hero': true,          // Koyu (Video) -> Beyaz Yazı
  'about-section': true,      // Koyu (Siyah) -> Beyaz Yazı
  'references-section': false, // Açık (Beyaz) -> Siyah Yazı
  'awards-section': true,      // Koyu (Siyah) -> Altın/Beyaz Yazı
  'testimonials-section': false, // Açık (Gri/Beyaz) -> Siyah Yazı
  'contact-section': true,    // Koyu (Siyah) -> Beyaz Yazı

  // --- İNSAN KAYNAKLARI (IK) ---
  'ik-main': true, 
  'ik-diger': false, 
  'ik-section-3': true,

  // --- TEMİZLİK ---
  'temizlik-main': true, 
  'temizlik-galeri': false,
  'temizlik-section-2': true,
  'temizlik-ekibimiz': false, 
  'temizlik-kurumsal': true, 
  'temizlik-section-3': true,

  // --- ORGANİZASYON ---
  'org-main': true, 
  'org-section-2': false, 
  'org-team': true, 
  'org-section-3': true,

  // --- LOJİSTİK ---
  'lojistik-main': true, 
  'lojistik-section-2': false, 
  'lojistik-section-3': true,
};

const SECTION_LABELS = {
  // HOME
  'home-hero': 'KURUMSAL',
  'about-section': 'HAKKIMIZDA',
  'references-section': 'REFERANSLAR',
  'awards-section': 'ÖDÜLLERİMİZ',
  'testimonials-section': 'YORUMLAR',
  'contact-section': 'İLETİŞİM',
  // IK
  'ik-main': 'KURUMSAL',
  'ik-diger': 'HİZMETLERİMİZ',
  'ik-section-3': 'İLETİŞİM',
  // TEMIZLIK
  'temizlik-main': 'HAKKIMIZDA',
  'temizlik-galeri': 'GALERİ',
  'temizlik-section-2': 'BİLGİ ALIN',
  'temizlik-ekibimiz': 'EKİP',
  'temizlik-kurumsal': 'KURUMSAL',
  'temizlik-section-3': 'İLETİŞİM',
  // ORGANIZATION
  'org-main': 'KURUMSAL',
  'org-section-2': 'PROJELER',
  'org-team': 'EKİP',
  'org-section-3': 'İLETİŞİM',
  // LOJISTIK
  'lojistik-main': 'KURUMSAL',
  'lojistik-section-2': 'İŞ ALANLARIMIZ',
  'lojistik-section-3': 'İLETİŞİM',
};
  const HASH_VIEWS = {
    '': 'HOME',
    '#/': 'HOME',
    '#/ik': 'IK',
    '#/temizlik': 'TEMIZLIK',
    '#/organizasyon': 'ORGANIZATION',
    '#/lojistik': 'LOJISTIK'
  };

  const VIEW_HASHES = {
    'HOME': '#/',
    'IK': '#/ik',
    'TEMIZLIK': '#/temizlik',
    'ORGANIZATION': '#/organizasyon',
    'LOJISTIK': '#/lojistik'
  };

  function _getPageModule(view) {
    return { HOME: HomePage, ORGANIZATION: OrganizationPage, IK: IKPage, TEMIZLIK: TemizlikPage, LOJISTIK: LojistikPage }[view];
  }

  function navigate(view) {
    const hash = VIEW_HASHES[view] || '#/';
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    } else {
      _renderView(view);
    }
  }

  function _renderView(view) {
    /* Cleanup carousel if leaving org page */
    if (window._orgCarouselCleanup) { window._orgCarouselCleanup(); window._orgCarouselCleanup = null; }

    _currentView = view;
    window.scrollTo({ top: 0 });

    const mod  = _getPageModule(view);
    const html = mod.render();

    document.getElementById('app').innerHTML = html;

    if (mod.afterRender) mod.afterRender();

    _initScrollListener();
    // _initFooterObserver();

    /* Force scroll event to set initial navbar color */
    setTimeout(() => window.dispatchEvent(new Event('scroll')), 50);
  }

  function _handleHashChange() {
    const hash = window.location.hash || '#/';
    const view = HASH_VIEWS[hash] || 'HOME';
    _renderView(view);
  }

  function goHome(e) {
    if (e) e.preventDefault();
    navigate('HOME');
  }

  /* ---- Scroll: navbar renk güncellemesi ---- */
  function _initScrollListener() {
    window.removeEventListener('scroll', _handleScroll);
    window.addEventListener('scroll', _handleScroll, { passive: true });
  }

  function _handleScroll() {
    const checkY = window.scrollY + 80;
    let bestMatch = null;
    for (const [id, isDark] of Object.entries(SECTION_DARK)) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.offsetTop, bottom = top + el.offsetHeight;
      if (checkY >= top && checkY < bottom) {
        // Birden fazla section iç içeyse en aşağıdan başlayan (en spesifik) section seçilir.
        if (!bestMatch || top >= bestMatch.top) {
          bestMatch = { id, isDark, top };
        }
      }
    }
    if (bestMatch) {
      Navbar.update(!bestMatch.isDark); // isDark=true → koyu bg → beyaz yazı → darkMode=false
      Navbar.setActiveSection(SECTION_LABELS[bestMatch.id] || '');
      BottomNav.updateLight(!bestMatch.isDark);
    } else {
      Navbar.update(false);
      Navbar.setActiveSection('');
      BottomNav.updateLight(false);
    }
  }

  /* ---- Footer observer: alt nav gizleme ---- */
  function _initFooterObserver() {
    const footer = document.getElementById('main-footer') || document.getElementById('footer-sentinel');
    if (!footer) return;
    if (_footerObserver) _footerObserver.disconnect();
    _footerObserver = new IntersectionObserver(entries => {
      BottomNav.setVisible(!entries[0].isIntersecting);
    }, { threshold: 0.1 });
    _footerObserver.observe(footer);
  }

  /* ---- Init ---- */
  function init() {
    // Navbar butonlarına tıklanıldığında ilgili aksiyonu çalıştırır
    document.addEventListener('click', (e) => {
      // 1. Hamburger menü açma
      if (e.target.closest('#mobile-menu-btn')) {
        const overlay = document.getElementById('mobile-menu-overlay');
        if (overlay) overlay.classList.add('active');
        const header = document.getElementById('site-header');
        if (header) header.classList.add('menu-active');
        document.body.style.overflow = 'hidden'; // Kaydırmayı engelle
        return;
      }
      
      // 2. Hamburger menü kapatma
      if (e.target.closest('#mobile-menu-close') || e.target.closest('.mobile-menu-overlay .nav-link')) {
        const overlay = document.getElementById('mobile-menu-overlay');
        if (overlay) overlay.classList.remove('active');
        const header = document.getElementById('site-header');
        if (header) header.classList.remove('menu-active');
        document.body.style.overflow = ''; // Kaydırmayı geri aç
      }

      // 3. Normal link tıklamaları
      const btn = e.target.closest('.nav-link');
      if (btn && btn.dataset.action) {
        // Utils.runAction içindeki tırnakları temizleyerek çalıştırır
        const actionKey = btn.dataset.action.match(/'([^']+)'/)[1];
        Utils.runAction(actionKey);
      }
    });

    window.addEventListener('hashchange', _handleHashChange);
    _handleHashChange(); // Run on initial load
  }

  return { navigate, goHome, init };
})();

/* Sayfa hazır olduğunda başlat */
document.addEventListener('DOMContentLoaded', () => App.init());
/* ===========================
   ZERO GROUP — components.js
   Genel bileşenler: Navbar, BottomNav, Footer, SectorHero, Marquee
   =========================== */

/* ---------- Navbar ---------- */
const Navbar = (() => {
  let _currentView = 'HOME';
  let _darkMode    = false;
  let _activeSection = '';

  const VIEW_ACTIVE_LABEL = {
    HOME: 'KURUMSAL',
    ORGANIZATION: 'KURUMSAL',
    IK: 'KURUMSAL',
    TEMIZLIK: 'HAKKIMIZDA',
    LOJISTIK: 'KURUMSAL',
  };

  function _getMenuItems(view) {
    const scrollTo = id => Utils.scrollTo(id);
    if (view === 'HOME') return [
      { label: 'KURUMSAL',    action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
      { label: 'HAKKIMIZDA',  action: () => scrollTo('about-section')        },
      { label: 'REFERANSLAR', action: () => scrollTo('references-section')    },
      { label: 'YORUMLAR',    action: () => scrollTo('testimonials-section')  },
      { label: 'İLETİŞİM',   action: () => scrollTo('contact-section')       },
    ];
    const main = {
      ORGANIZATION: 'org-main', IK: 'ik-main', TEMIZLIK: 'temizlik-main', LOJISTIK: 'lojistik-main'
    }[view];
    const base = [{ label: 'KURUMSAL', action: () => scrollTo(main) }];
    if (view === 'ORGANIZATION') return [...base,
      { label: 'PROJELER', action: () => scrollTo('org-section-2') },
      { label: 'EKİP',     action: () => scrollTo('org-team')      },
      { label: 'İLETİŞİM', action: () => scrollTo('org-section-3') },
    ];
    if (view === 'IK') return [...base,
      { label: 'HİZMETLERİMİZ', action: () => scrollTo('ik-diger')    },
      { label: 'İLETİŞİM',      action: () => scrollTo('ik-section-3')},
    ];
    if (view === 'TEMIZLIK') return [
      { label: 'HAKKIMIZDA',  action: () => scrollTo('temizlik-main')      },
      { label: 'GALERİ',      action: () => scrollTo('temizlik-galeri')    },
      { label: 'BİLGİ ALIN', action: () => scrollTo('temizlik-section-2') },
      { label: 'EKİP',        action: () => scrollTo('temizlik-ekibimiz')  },
      { label: 'KURUMSAL',    action: () => scrollTo('temizlik-kurumsal')  },
      { label: 'İLETİŞİM',   action: () => scrollTo('temizlik-section-3') },
    ];
    if (view === 'LOJISTIK') return [...base,
      { label: 'İŞ ALANLARIMIZ', action: () => scrollTo('lojistik-section-2') },
      { label: 'İLETİŞİM',       action: () => scrollTo('lojistik-section-3') },
    ];
    return base;
  }

  function render(view, darkMode) {
    _currentView = view;
    _darkMode    = darkMode;
    _activeSection = VIEW_ACTIVE_LABEL[view] || 'KURUMSAL';

    const secondWord = { HOME: 'GROUP', ORGANIZATION: 'ORGANİZASYON', IK: 'İK', TEMIZLIK: 'TEMİZLİK', LOJISTIK: 'LOJİSTİK' }[view] || 'GROUP';
    const items = _getMenuItems(view);

    const li = items.map(item => `
      <li>
        <button class="nav-link" data-action="${Utils.registerAction(item.action)}">
          ${item.label}
        </button>
      </li>`).join('');

    return `
      <header id="site-header" class="${darkMode ? 'dark-text' : ''}">
        <a id="zero-logo" href="#" onclick="App.goHome(event)">
          ZERO<span class="logo-second">${secondWord}</span>
          <span class="logo-active-page">${_activeSection}</span>
        </a>
        <nav class="desktop-nav" aria-label="Ana Navigasyon">
          <ul>${li}</ul>
        </nav>
      </header>`;
  }

  function update(darkMode) {
    const el = document.getElementById('site-header');
    if (!el) return;
    el.classList.toggle('dark-text', darkMode);
  }

  function setActiveSection(label) {
    const target = document.querySelector('#zero-logo .logo-active-page');
    if (!target) return;
    target.textContent = (label || '').toUpperCase();
  }

  return { render, update, setActiveSection };
})();


/* ---------- BottomNav ---------- */
const BottomNav = (() => {
  const views = ['HOME', 'IK', 'TEMIZLIK', 'ORGANIZATION', 'LOJISTIK'];
  const labels = { HOME: '<i class="fa-solid fa-house"></i>', ORGANIZATION: 'ORGANİZASYON', IK: 'İK', TEMIZLIK: 'TEMİZLİK', LOJISTIK: 'LOJİSTİK' };

  function render(activeView, light) {
    const buttons = views.map(v => `
      <button
        class="${v === activeView ? 'active' : ''}"
        onclick="App.navigate('${v}')"
        aria-label="${v === 'HOME' ? 'Anasayfa' : labels[v]}"
        aria-current="${v === activeView ? 'page' : 'false'}"
      >${labels[v]}</button>`).join('');

    return `
      <div id="bottom-nav-wrap">
        <div class="bottom-nav-inner ${light ? 'light' : ''}" id="bottom-nav-inner">
          ${buttons}
        </div>
      </div>
      <div id="floating-btns" style="position:fixed;right:1.25rem;bottom:5.5rem;display:flex;flex-direction:column;gap:0.6rem;z-index:200">
        <button onclick="Utils.openLink(DATA.contact.instagram)" aria-label="Instagram" style="width:3rem;height:3rem;border-radius:50%;background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045);border:none;color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.2rem;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,0.35);transition:transform 0.2s,box-shadow 0.2s" onmouseover="this.style.transform='scale(1.12)';this.style.boxShadow='0 6px 24px rgba(0,0,0,0.45)'" onmouseout="this.style.transform='scale(1)';this.style.boxShadow='0 4px 16px rgba(0,0,0,0.35)'">
          <i class="fa-brands fa-instagram"></i>
        </button>
        <button onclick="Utils.openLink(DATA.contact.whatsapp)" aria-label="WhatsApp" style="width:3rem;height:3rem;border-radius:50%;background:#16a34a;border:none;color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.2rem;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,0.35);transition:transform 0.2s,box-shadow 0.2s" onmouseover="this.style.transform='scale(1.12)';this.style.boxShadow='0 6px 24px rgba(22,163,74,0.5)'" onmouseout="this.style.transform='scale(1)';this.style.boxShadow='0 4px 16px rgba(0,0,0,0.35)'">
          <i class="fa-brands fa-whatsapp"></i>
        </button>
      </div>`;
  }

  function updateLight(light) {
    const el = document.getElementById('bottom-nav-inner');
    if (el) el.classList.toggle('light', light);
  }

  function setVisible(visible) {
    const el = document.getElementById('bottom-nav-wrap');
    if (el) el.classList.toggle('hidden-nav', !visible);
    const fb = document.getElementById('floating-btns');
    if (fb) fb.style.display = visible ? 'flex' : 'none';
  }

  return { render, updateLight, setVisible };
})();


/* ---------- Footer ---------- */
const Footer = {
  render() {
    const c = DATA.contact;
    return `
      <footer id="main-footer" role="contentinfo">
        <div class="footer-inner">
          <div>
            <h3 class="footer-heading">HAKKIMIZDA</h3>
            <div class="footer-divider"></div>
            <p class="footer-text">
             İş ortaklarımızın ihtiyaçlarına en uygun insan kaynağını hızlı ve etkin şekilde sağlayarak sürdürülebilir çözümler sunmak; alanında uzman, disiplinli ve profesyonel ekipler oluşturarak iş süreçlerinin verimli ve sorunsuz ilerlemesine katkıda bulunmak ve bu süreçte kaliteli hizmet anlayışımızdan ödün vermemektir.
            </p>
          </div>
          <div>
            <h3 class="footer-heading">HIZLI ULAŞIM</h3>
            <div class="footer-divider"></div>
            <div class="footer-text" style="line-height:2">
              <p>Telefon : <a href="tel:+903124359272" style="color:inherit;text-decoration:none">${c.tel1}</a></p>
              <p>GSM : <a href="tel:+905070225907" style="color:inherit;text-decoration:none">${c.tel2}</a></p>
              <p>GSM : <a href="tel:+905312639814" style="color:inherit;text-decoration:none">${c.tel3}</a></p>
              <p>E-Posta : <a href="mailto:${c.email}" style="color:inherit;text-decoration:none">${c.email}</a></p>
              <p style="margin-top:1rem">Adres: ${c.address}</p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">© 2026 Zero Group. Tüm hakları saklıdır.</div>
        <div class="footer-bg-text" aria-hidden="true">ZERO</div>
      </footer>`;
  }
};


/* ---------- SectorHero ---------- */
const SectorHero = {
  render({ title, desc, bgImage, id }) {
    return `
      <section id="${id}" class="sector-hero" aria-label="${title}">
        <div class="sector-hero-bg" aria-hidden="true">
          <img src="${bgImage}" alt="${title} - Zero Group arka plan" loading="lazy" />
          <div class="sector-hero-overlay"></div>
        </div>
        <div class="sector-hero-text">
          <h1>${title}</h1>
          <p>${desc}</p>
        </div>
      </section>`;
  }
};


/* ---------- Marquee (brand logos) ---------- */
const MarqueeStrip = {
  render({ images, itemW = 200, itemH = 280, variant = 'poster', reverse = false }) {
    const doubled = [...images, ...images];
    const cls = reverse ? 'animate-scroll-reverse' : 'animate-scroll';
    const items = doubled.map((src, i) => `
      <div style="flex-shrink:0;margin-right:1.25rem;width:${itemW}px;height:${itemH}px;overflow:hidden;border-radius:0.5rem;background:${variant === 'reference' ? '#fff' : '#e5e7eb'}">
        <img
          src="${src}"
          loading="lazy"
          alt="${variant === 'reference' ? `Referans marka ${i + 1}` : `Etkinlik görseli ${i + 1}`}"
          style="width:100%;height:100%;object-fit:${variant === 'reference' ? 'contain' : 'cover'};${variant === 'reference' ? 'padding:0.5rem' : ''}"
        />
      </div>`).join('');

    return `
      <div class="marquee-wrap">
        <div class="marquee-track ${cls}" style="display:flex;width:max-content">
          ${items}
        </div>
      </div>`;
  }
};
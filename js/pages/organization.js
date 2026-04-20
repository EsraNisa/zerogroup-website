/* ===========================
   ZERO GROUP — pages/organization.js
   Organizasyon sayfası bölümleri
   =========================== */

const OrganizationPage = {

  /* ---- Polaroid / Ekip bölümü ---- */
  renderTeam() {
    const pol  = DATA.polaroids;
    const pol2 = [...pol, ...pol];

   const row = (items) => items.map((src) => {
      const randomRotate = (Math.random() * 6 - 3).toFixed(1);
      return `<div style="flex-shrink:0;margin-right:1.5rem;width:15rem;height:12rem;background:#fff;padding:0.5rem 0.5rem 2.5rem;box-shadow:0 4px 24px rgba(0,0,0,0.3);transform:rotate(${randomRotate}deg)">
        <img src="${src}" loading="lazy" alt="Ekip" style="width:100%;height:100%;object-fit:cover;border:1px solid #f3f4f6" />
      </div>`;
    }).join('');

    return `
      <section id="org-team" style="width:100%;height:100vh;background:#000;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden" aria-label="Ekibimiz">
        <!-- Arka plan satırları -->
        <div style="position:absolute;inset:0;z-index:0;display:flex;flex-direction:column;justify-content:center;gap:2rem;opacity:0.6;pointer-events:none" aria-hidden="true">
        <div class="animate-scroll" style="display:flex;width:max-content">${row(pol2)}</div>
          <div class="animate-scroll-reverse" style="display:flex;width:max-content">${row([...pol2].reverse())}</div>
          <div class="animate-scroll" style="display:flex;width:max-content">${row(pol2)}</div>
        </div>
        <div style="position:absolute;inset:0;background:rgba(0,0,0,0.3);z-index:1" aria-hidden="true"></div>

        <!-- Merkez içerik -->
        <div style="position:relative;z-index:10;max-width:48rem;margin:0 1rem">
          <div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.2);padding:4rem;border-radius:2.5rem;text-align:center;box-shadow:0 16px 64px rgba(0,0,0,0.5)">
            <h2 style="font-family:'Montserrat',sans-serif;font-size:clamp(2rem,5vw,4rem);font-weight:900;text-transform:uppercase;letter-spacing:-0.03em;color:#fff;margin:0 0 1.5rem">EKİBİMİZ</h2>
            <div style="width:6rem;height:4px;background:#fff;margin:0 auto 2rem;box-shadow:0 2px 8px rgba(255,255,255,0.3)"></div>
            <p style="color:rgba(255,255,255,0.9);font-size:1.1rem;line-height:1.7;margin:0">
              Yaratıcı, dinamik ve profesyonel kadromuzla her projede fark yaratıyoruz. Enerjimizle sahnenin arkasındaki gücüz.
            </p>
          </div>
        </div>
      </section>`;
  },

  /* ---- Poster + Albüm ---- */
  renderProjects() {
    const posters = DATA.posters;
    const events  = DATA.eventPhotos; // 40 adet, 4'lü gruplar

    const albums = posters.map((poster, i) => ({
      poster,
      photos: events.slice(i * 4, i * 4 + 4),
    }));

    /* Doubled for infinite scroll (JS-controlled) */
    const doubled = [...albums, ...albums];

    const posterItems = doubled.map((a, i) => `
      <div
        class="poster-item"
        data-real-idx="${i % albums.length}"
        style="flex-shrink:0;margin-right:1.25rem;width:180px;height:260px;cursor:pointer;position:relative"
      >
        <div class="poster-img-wrap" style="width:100%;height:100%;border-radius:0.5rem;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.4);transition:transform 0.3s,box-shadow 0.3s">
          <img src="${a.poster}" alt="Etkinlik afişi ${(i % albums.length) + 1}" loading="lazy" style="width:100%;height:100%;object-fit:cover" />
          <div class="poster-hover-overlay" style="position:absolute;inset:0;background:rgba(37,99,235,0.4);opacity:0;display:flex;align-items:flex-end;justify-content:center;padding-bottom:0.75rem;transition:opacity 0.3s;border-radius:0.5rem;pointer-events:none">
            <span style="color:#fff;font-size:0.65rem;font-weight:700;letter-spacing:0.1em;background:rgba(0,0,0,0.6);padding:0.25rem 0.5rem;border-radius:999px"><i class="fa-solid fa-images" style="margin-right:0.25rem"></i>FOTOĞRAFLAR</span>
          </div>
        </div>
      </div>`).join('');

    /* Albüm önizleme */
    const albumPreview = albums.map((a, i) => {
      const photos = a.photos.map((p, pi) => `
        <div
          class="polaroid-thumb"
          data-photo="${p}"
          style="flex:1;background:#fff;padding:0.5rem 0.5rem 2rem;box-shadow:0 4px 16px rgba(0,0,0,0.3);cursor:zoom-in;transform:rotate(${pi % 2 === 0 ? '-1.5deg' : '1.5deg'});transition:transform 0.2s"
          onmouseover="this.style.transform='rotate(0deg) scale(1.04)'"
          onmouseout="this.style.transform='rotate(${pi % 2 === 0 ? '-1.5deg' : '1.5deg'})'"
        >
          <img src="${p}" alt="Etkinlik fotoğrafı" loading="lazy" style="width:100%;height:10rem;object-fit:cover" />
        </div>`).join('');
      return `
        <div id="album-${i}" class="album-box" style="display:none;position:absolute;z-index:50;top:280px;left:0;right:0" aria-live="polite">
          <div style="background:rgba(17,17,17,0.97);backdrop-filter:blur(12px);border-radius:1rem;padding:1.5rem;box-shadow:0 16px 64px rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.1)">
            <div style="position:absolute;top:-9px;left:50%;transform:translateX(-50%);width:1rem;height:1rem;background:#111;rotate:45deg;border-left:1px solid rgba(255,255,255,0.1);border-top:1px solid rgba(255,255,255,0.1)"></div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem">
              <span style="color:#fff;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em">Etkinlik Fotoğrafları</span>
              <span style="color:#6b7280;font-size:0.65rem;font-family:monospace">${a.photos.length} fotoğraf</span>
            </div>
            <div style="display:flex;gap:1rem">${photos}</div>
          </div>
        </div>`;
    }).join('');

    return `
     <div id="org-section-2" style="width:100%;min-height:100vh;display:flex;flex-direction:column;justify-content:flex-start;padding:3rem 0 3rem">
        <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem">
          <h2 style="font-family:'Montserrat',sans-serif;font-size:1.8rem;font-weight:700;margin-bottom:1rem;text-transform:uppercase;letter-spacing:0.05em">Daha Önceki Çalışmalarımız</h2>
          <div style="width:6rem;height:4px;background:#2563eb;margin-bottom:2rem"></div>

          <div style="position:relative;width:100%">
            ${albumPreview}
            <div id="poster-track-wrap" style="width:100%;overflow:hidden">
              <div id="poster-track" style="display:flex;width:max-content;will-change:transform">
                ${posterItems}
              </div>
            </div>
            <div id="album-spacer" style="height:0;transition:height 0.3s ease"></div>
          </div>
        </div>
      </div>

      <!-- Lightbox -->
      <div id="lightbox" role="dialog" aria-modal="true" aria-label="Fotoğraf önizleme" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:100;align-items:center;justify-content:center;padding:1rem" onclick="OrganizationPage.closeLightbox()">
        <button onclick="OrganizationPage.closeLightbox()" aria-label="Kapat" style="position:absolute;top:1.5rem;right:1.5rem;width:3rem;height:3rem;border-radius:50%;background:rgba(255,255,255,0.1);border:none;color:#fff;font-size:1.5rem;cursor:pointer;display:flex;align-items:center;justify-content:center">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img id="lightbox-img" src="" alt="Büyük görsel" style="max-height:90vh;max-width:90vw;object-fit:contain;border-radius:0.5rem;box-shadow:0 8px 64px rgba(0,0,0,0.8)" onclick="event.stopPropagation()" />
      </div>`;
  },

  /* ---- İletişim / Katılım ---- */
  renderContact() {
    const c = DATA.contact;
    return `
      <section id="org-section-3" style="width:100%;min-height:100vh;background:#050505;color:#fff;display:flex;align-items:center;justify-content:center;padding:5rem 1.25rem 8rem;position:relative;overflow:hidden;font-family:'Montserrat',sans-serif" aria-labelledby="org-contact-heading">
        <div style="position:absolute;inset:0;pointer-events:none" aria-hidden="true">
          <div style="position:absolute;top:-10%;left:-10%;width:40%;height:40%;background:rgba(88,28,135,0.2);border-radius:50%;filter:blur(120px)"></div>
          <div style="position:absolute;bottom:-10%;right:-10%;width:40%;height:40%;background:rgba(20,83,45,0.2);border-radius:50%;filter:blur(120px)"></div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:2rem;align-items:flex-start;justify-content:center;width:100%;max-width:72rem;padding-top:2.5rem;position:relative;z-index:10">

          <!-- Kart 1: Sahne Ekibi -->
          <div class="org-card animate-float" style="width:min(320px,90vw);background:#0a0a0a;border-radius:0.75rem;border:1px solid #1f2937;overflow:hidden;box-shadow:0 0 30px rgba(0,0,0,0.8);transition:box-shadow 0.3s,border-color 0.3s" onmouseover="this.style.boxShadow='0 0 40px rgba(139,92,246,0.3)';this.style.borderColor='rgba(139,92,246,0.5)'" onmouseout="this.style.boxShadow='0 0 30px rgba(0,0,0,0.8)';this.style.borderColor='#1f2937'">
            <div style="height:0.75rem;background:linear-gradient(90deg,#7c3aed,#2563eb)"></div>
            <div style="width:5rem;height:0.75rem;background:#050505;border-radius:999px;margin:1rem auto;border:1px solid #1f2937"></div>
            <div style="padding:2rem;text-align:center;position:relative">
              <h2 id="org-contact-heading" style="font-size:4.5rem;font-weight:900;font-style:italic;letter-spacing:-0.05em;line-height:0.85;margin:2rem 0 0.5rem;color:#fff">ZERO</h2>
              <h2 style="font-size:4.5rem;font-weight:900;font-style:italic;letter-spacing:-0.05em;line-height:0.85;margin:0 0 2rem;background:linear-gradient(135deg,#a78bfa,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent">TEAM</h2>
              <div style="width:100%;height:1px;background:#1f2937;margin-bottom:2rem"></div>
              <p style="font-weight:700;color:#e5e7eb;font-size:1.1rem;margin-bottom:1rem;text-transform:uppercase;letter-spacing:0.1em">Sahne Arkası</p>
              <p style="color:#9ca3af;font-size:0.85rem;line-height:1.7">Festivallerin ritmini yakala, konserlerin enerjisine ortak ol. Bizimle çalış, eğlencenin merkezinde yer al!</p>
            </div>
          </div>

          <!-- Kart 2: Katıl -->
          <div class="org-card animate-float-delay" style="width:min(320px,90vw);background:#0a0a0a;border-radius:0.75rem;border:1px solid #1f2937;overflow:hidden;box-shadow:0 0 30px rgba(0,0,0,0.8);transition:box-shadow 0.3s,border-color 0.3s" onmouseover="this.style.boxShadow='0 0 40px rgba(34,197,94,0.3)';this.style.borderColor='rgba(34,197,94,0.5)'" onmouseout="this.style.boxShadow='0 0 30px rgba(0,0,0,0.8)';this.style.borderColor='#1f2937'">
            <div style="height:0.75rem;background:linear-gradient(90deg,#16a34a,#065f46)"></div>
            <div style="width:5rem;height:0.75rem;background:#050505;border-radius:999px;margin:1rem auto;border:1px solid #1f2937"></div>
            <div style="padding:2rem;text-align:center">
              <h2 style="font-size:3rem;font-weight:900;text-transform:uppercase;letter-spacing:-0.03em;color:#fff;margin:0 0 0.25rem">JOIN US</h2>
              <span style="font-size:0.65rem;font-weight:700;letter-spacing:0.4em;color:#22c55e;background:rgba(34,197,94,0.1);padding:0.25rem 0.5rem;border-radius:0.25rem;display:inline-block;margin-bottom:2.5rem">CONNECT</span>
              <p style="color:#d1d5db;font-size:0.85rem;margin-bottom:2rem;line-height:1.7;font-weight:500">
                Ekibe katılmak için başvuru yap,<br>bizi takip et, fırsatları kaçırma!
              </p>
              <div style="display:flex;flex-direction:column;gap:1rem;margin-top:auto">
                <button onclick="Utils.openLink('${c.applyForm}')" style="width:100%;padding:1rem;background:#fff;color:#000;font-family:'Montserrat',sans-serif;font-weight:900;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.1em;border:none;border-radius:0.5rem;transition:background 0.2s,box-shadow 0.2s;display:flex;align-items:center;justify-content:center;gap:0.5rem" onmouseover="this.style.background='#86efac';this.style.boxShadow='0 4px 20px rgba(34,197,94,0.4)'" onmouseout="this.style.background='#fff';this.style.boxShadow='none'">
                  BAŞVURU FORMU <i class="fa-solid fa-arrow-right"></i>
                </button>
                <div style="width:100%;height:1px;background:#1f2937;margin:0.5rem 0"></div>
                <div style="display:flex;justify-content:center;gap:1.5rem">
                  <button onclick="Utils.openLink('${c.instagram2}')" aria-label="Instagram" style="width:3rem;height:3rem;border-radius:50%;background:#111;border:1px solid #374151;color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.25rem;transition:background 0.2s,transform 0.2s" onmouseover="this.style.background='linear-gradient(135deg,#7c3aed,#f97316)';this.style.transform='scale(1.1)'" onmouseout="this.style.background='#111';this.style.transform='scale(1)'">
                    <i class="fa-brands fa-instagram"></i>
                  </button>
                  <button onclick="Utils.openLink('${c.whatsapp}')" aria-label="WhatsApp" style="width:3rem;height:3rem;border-radius:50%;background:#111;border:1px solid #374151;color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.25rem;transition:background 0.2s,transform 0.2s" onmouseover="this.style.background='#16a34a';this.style.transform='scale(1.1)'" onmouseout="this.style.background='#111';this.style.transform='scale(1)'">
                    <i class="fa-brands fa-whatsapp"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>`;
  },

  /* ---- Poster Carousel JS ---- */
 initCarousel() {
    const track   = document.getElementById('poster-track');
    const spacer  = document.getElementById('album-spacer');
    const albums  = document.querySelectorAll('.album-box');
    const items   = document.querySelectorAll('.poster-item');

    const style = window.getComputedStyle(items[0]);
    const ITEM_W = items[0].offsetWidth + parseFloat(style.marginRight);
    const HALF    = DATA.posters.length * ITEM_W;
    const SPEED   = 0.5;
    
    let offset    = 0;
    let paused    = false;
    let rafId     = null;
    let activeIdx = null;

    function showAlbum(realIdx) {
      albums.forEach((a, i) => {
        a.style.display = i === realIdx ? 'block' : 'none';
      });
      spacer.style.height = '340px';
      activeIdx = realIdx;
    }
    function hideAlbum() {
      albums.forEach(a => a.style.display = 'none');
      spacer.style.height = '0';
      activeIdx = null;
    }

    items.forEach(item => {
      const realIdx = parseInt(item.dataset.realIdx, 10);
      item.addEventListener('mouseenter', () => {
        paused = true;
        showAlbum(realIdx);
        const wrap = item.querySelector('.poster-img-wrap');
        const overlay = item.querySelector('.poster-hover-overlay');
        if (wrap) wrap.style.transform = 'scale(1.08)';
        if (overlay) overlay.style.opacity = '1';
      });
      item.addEventListener('mouseleave', () => {
        paused = false;
        hideAlbum();
        const wrap = item.querySelector('.poster-img-wrap');
        const overlay = item.querySelector('.poster-hover-overlay');
        if (wrap) wrap.style.transform = '';
        if (overlay) overlay.style.opacity = '0';
      });
    });

    /* Album hover: keep paused */
    albums.forEach(a => {
      a.addEventListener('mouseenter', () => { paused = true; });
      a.addEventListener('mouseleave', () => { paused = false; hideAlbum(); });
    });

    /* Lightbox click on thumbs */
    document.querySelectorAll('.polaroid-thumb').forEach(el => {
      el.addEventListener('click', () => {
        OrganizationPage.openLightbox(el.dataset.photo);
      });
    });

    function animate() {
      if (!paused) {
        offset += SPEED;
        if (offset >= HALF) offset -= HALF;
        track.style.transform = `translateX(-${offset}px)`;
      }
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    /* cleanup on page leave */
    window._orgCarouselCleanup = () => cancelAnimationFrame(rafId);
  },

  openLightbox(src) {
    const lb  = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (!lb || !img) return;
    img.src = src;
    lb.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  },

  closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.style.display = 'none';
    document.body.style.overflow = '';
  },

  /* ---- Compose ---- */
  render() {
    const s = DATA.sectors.ORGANIZATION;
    const img = DATA.images;
    return `
      <div id="page-org" style="width:100%;display:flex;flex-direction:column;background:#fff">
        ${Navbar.render('ORGANIZATION', false)}
        ${SectorHero.render({ title: s.title, desc: s.desc, bgImage: img.ORG_BG, id: 'org-main' })}
        ${this.renderProjects()}
        ${this.renderTeam()}
        ${this.renderContact()}
        ${Footer.render()}
        ${BottomNav.render('ORGANIZATION', false)}
      </div>`;
  },

  afterRender() {
    this.initCarousel();
  }
};
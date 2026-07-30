/* ===========================
   ZERO GROUP — pages/organization.js
   Organizasyon sayfası bölümleri
   =========================== */

const OrganizationPage = {

/* ---- Polaroid / Ekip bölümü ---- */
  renderTeam() {
    const pol  = DATA.polaroids;
    
    // Shift arrays to offset them vertically so identical pictures don't align
    const polRow1 = [...pol];
    const polRow2 = [...pol.slice(7), ...pol.slice(0, 7)];
    const polRow3 = [...pol.slice(14), ...pol.slice(0, 14)];

    // Duplicate each list for seamless infinite marquee scroll
    const pol2Row1 = [...polRow1, ...polRow1];
    const pol2Row2 = [...polRow2, ...polRow2];
    const pol2Row3 = [...polRow3, ...polRow3];

    const row = (items) => items.map((src) => {
      const randomRotate = (Math.random() * 6 - 3).toFixed(1);
      return `<div style="flex-shrink:0;margin-right:1.5rem;width:15rem;height:12rem;background:#fff;padding:0.5rem 0.5rem 2.5rem;box-shadow:0 4px 24px rgba(0,0,0,0.3);transform:rotate(${randomRotate}deg)">
        <img src="${src}" loading="lazy" alt="Ekip" style="width:100%;height:100%;object-fit:cover;border:1px solid #f3f4f6" />
      </div>`;
    }).join('');

    return `
      <section id="org-team" style="width:100%;height:100vh;background:#000;position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;overflow:hidden" aria-label="Ekibimiz">
        <div style="position:absolute;inset:0;z-index:0;display:flex;flex-direction:column;justify-content:center;gap:2rem;opacity:0.6;pointer-events:none" aria-hidden="true">
          <div class="animate-scroll" style="display:flex;width:max-content">${row(pol2Row1)}</div>
          <div class="animate-scroll-reverse" style="display:flex;width:max-content">${row([...pol2Row2].reverse())}</div>
          <div class="animate-scroll" style="display:flex;width:max-content">${row(pol2Row3)}</div>
        </div>
        <div style="position:absolute;inset:0;background:rgba(0,0,0,0.3);z-index:1" aria-hidden="true"></div>

        <div style="position:relative;z-index:10;max-width:48rem;margin:0 1rem;width:100%;">
          <div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.2);padding:4rem 2rem;border-radius:2.5rem;text-align:center;box-shadow:0 16px 64px rgba(0,0,0,0.5)">
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
    const posters = DATA.posters.slice(0, 4);
    const events  = DATA.eventPhotos;

    const posterItems = posters.map((poster, i) => {
      const photos = events.slice(i * 4, i * 4 + 4);
      const posClasses = ['p-tl', 'p-tr', 'p-bl', 'p-br'];

      const floatingPhotos = photos.map((p, pi) => `
        <div class="floating-photo polaroid-thumb ${posClasses[pi]}" data-photo="${p}" onclick="OrganizationPage.openLightbox('${p}'); event.stopPropagation();">
          <img src="${p}" alt="Etkinlik fotoğrafı" loading="lazy" />
        </div>
      `).join('');

      return `
        <div class="poster-wrapper">
          <div class="poster-img-container">
            <img src="${poster}" alt="Etkinlik afişi ${i + 1}" loading="lazy" />
            <div class="poster-overlay"></div>
          </div>
          ${floatingPhotos}
        </div>
      `;
    }).join('');

    return `
      <style>
        .poster-group {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          justify-content: center;
          padding: 4rem 0;
        }
        .poster-wrapper {
          position: relative;
          flex: 1;
          min-width: 0;
          transition: z-index 0s, flex 0.4s ease;
          cursor: pointer;
          z-index: 1;
        }
        .poster-wrapper:hover, .poster-wrapper:active { z-index: 10; }
        .poster-img-container {
          width: 100%;
          padding-bottom: 144%;
          position: relative;
          border-radius: 0.75rem;
          overflow: visible;
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .poster-img-container img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.75rem;
          box-shadow: 0 4px 16px rgba(0,0,0,0.4);
          transition: box-shadow 0.4s ease;
        }
        .poster-wrapper:hover .poster-img-container { transform: scale(1.15); }
        .poster-wrapper:hover .poster-img-container img { box-shadow: 0 20px 40px rgba(37,99,235,0.4); }
        .poster-overlay {
          position: absolute;
          inset: 0;
          background: rgba(37,99,235,0.0);
          transition: background 0.3s;
          border-radius: 0.75rem;
          pointer-events: none;
        }
        .poster-wrapper:hover .poster-overlay { background: rgba(37,99,235,0.2); }
        
        .floating-photo {
          position: absolute;
          width: 9rem;
          height: 10rem;
          background: #fff;
          padding: 0.4rem 0.4rem 2rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.4);
          opacity: 0;
          visibility: hidden;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 20;
          cursor: zoom-in;
        }
        .poster-wrapper:hover .floating-photo { opacity: 1; visibility: visible; }
        .floating-photo img { width: 100%; height: 100%; object-fit: cover; pointer-events: none; }

        .poster-wrapper .p-tl { top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.2) rotate(-20deg); }
        .poster-wrapper:hover .p-tl { top: -15%; left: -35%; transform: translate(0, 0) scale(1) rotate(-8deg); }
        .poster-wrapper .p-tr { top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.2) rotate(20deg); }
        .poster-wrapper:hover .p-tr { top: -15%; right: -35%; left: auto; transform: translate(0, 0) scale(1) rotate(10deg); }
        .poster-wrapper .p-bl { top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.2) rotate(-20deg); }
        .poster-wrapper:hover .p-bl { bottom: -15%; left: -35%; top: auto; transform: translate(0, 0) scale(1) rotate(6deg); }
        .poster-wrapper .p-br { top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.2) rotate(20deg); }
        .poster-wrapper:hover .p-br { bottom: -15%; right: -35%; top: auto; left: auto; transform: translate(0, 0) scale(1) rotate(-6deg); }

        /* MOBİL AFİŞLER ALT ALTA */
        @media (max-width: 768px) {
          .poster-group {
            flex-direction: column !important;
            gap: 6rem !important;
            padding: 2rem 0 !important;
          }
          .poster-wrapper {
            width: 80% !important;
            flex: none !important;
            max-width: 290px !important;
            margin: 0 auto !important;
          }
          .poster-wrapper:hover .p-tl, .poster-wrapper:active .p-tl { top: -12%; left: -18%; }
          .poster-wrapper:hover .p-tr, .poster-wrapper:active .p-tr { top: -12%; right: -18%; }
          .poster-wrapper:hover .p-bl, .poster-wrapper:active .p-bl { bottom: -12%; left: -18%; }
          .poster-wrapper:hover .p-br, .poster-wrapper:active .p-br { bottom: -12%; right: -18%; }
        }
      </style>

      <div id="org-section-2" style="width:100%;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:6rem 0;background:#fff;overflow:hidden;">
        <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem;width:100%">
          <h2 style="font-family:'Montserrat',sans-serif;font-size:1.8rem;font-weight:700;margin-bottom:1rem;text-transform:uppercase;letter-spacing:0.05em">Daha Önceki Çalışmalarımız</h2>
          <div style="width:6rem;height:4px;background:#2563eb;margin-bottom:2rem"></div>
          
          <div class="poster-group">
            ${posterItems}
          </div>
        </div>
      </div>

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
        <div class="org-cards-container">

          <div class="org-card animate-float" style="width:min(320px,90vw);background:#0a0a0a;border-radius:0.75rem;border:1px solid #1f2937;overflow:hidden;box-shadow:0 0 30px rgba(0,0,0,0.8);transition:box-shadow 0.3s,border-color 0.3s" onmouseover="this.style.boxShadow='0 0 40px rgba(139,92,246,0.3)';this.style.borderColor='rgba(139,92,246,0.5)'" onmouseout="this.style.boxShadow='0 0 30px rgba(0,0,0,0.8)';this.style.borderColor='#1f2937'">
            <div style="height:0.75rem;background:linear-gradient(90deg,#7c3aed,#2563eb)"></div>
            <div class="card-notch" style="width:5rem;height:0.75rem;background:#050505;border-radius:999px;margin:1rem auto;border:1px solid #1f2937"></div>
            <div style="padding:2rem;text-align:center;position:relative">
              <h2 id="org-contact-heading" style="font-size:4.5rem;font-weight:900;font-style:italic;letter-spacing:-0.05em;line-height:0.85;margin:2rem 0 0.5rem;color:#fff">ZERO</h2>
              <h2 style="font-size:4.5rem;font-weight:900;font-style:italic;letter-spacing:-0.05em;line-height:0.85;margin:0 0 2rem;background:linear-gradient(135deg,#a78bfa,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent">TEAM</h2>
              <div style="width:100%;height:1px;background:#1f2937;margin-bottom:2rem"></div>
              <p style="font-weight:700;color:#e5e7eb;font-size:1.1rem;margin-bottom:1rem;text-transform:uppercase;letter-spacing:0.1em">Sahne Arkası</p>
              <p style="color:#9ca3af;font-size:0.85rem;line-height:1.7">Festivallerin ritmini yakala, konserlerin enerjisine ortak ol. Bizimle çalış, eğlencenin merkezinde yer al!</p>
            </div>
          </div>

          <div class="org-card animate-float-delay" style="width:min(320px,90vw);background:#0a0a0a;border-radius:0.75rem;border:1px solid #1f2937;overflow:hidden;box-shadow:0 0 30px rgba(0,0,0,0.8);transition:box-shadow 0.3s,border-color 0.3s" onmouseover="this.style.boxShadow='0 0 40px rgba(34,197,94,0.3)';this.style.borderColor='rgba(34,197,94,0.5)'" onmouseout="this.style.boxShadow='0 0 30px rgba(0,0,0,0.8)';this.style.borderColor='#1f2937'">
            <div style="height:0.75rem;background:linear-gradient(90deg,#16a34a,#065f46)"></div>
            <div class="card-notch" style="width:5rem;height:0.75rem;background:#050505;border-radius:999px;margin:1rem auto;border:1px solid #1f2937"></div>
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

  afterRender() {}
};
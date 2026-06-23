/* ===========================
   ZERO GROUP — pages/home.js
   Anasayfa bölümleri
   =========================== */

const HomePage = {

  /* ---- Hero Video ---- */
  renderHero() {
    const img = DATA.images;
    return `
      <section id="home-hero" class="hero-video-container" aria-label="Zero Group - Ankara Yönetim ve Hizmet Grubu">
        <video
          id="hero-vid"
          class="video-bg"
          autoplay muted loop playsinline
          preload="auto"
          poster="${img.HOME_BG_VIDEO_POSTER}"
          aria-hidden="true"
        >
          <source src="${img.HOME_VIDEO}" type="video/mp4" />
        </video>
        <div class="video-overlay" aria-hidden="true"></div>
        <div class="hero-content">
          <h1 class="hero-title animate-fadeIn">ZERO GROUP</h1>
          <p class="hero-subtitle animate-fadeIn-delay">Ankara'nın önde gelen yönetim ve hizmet grubu</p>
        </div>
      </section>`;
  },

  /* ---- About ---- */
  renderAbout() {
    const img = DATA.images;
    return `
      <section id="about-section" class="section-padding" style="background:#000;color:#fff;padding-bottom:10rem;" aria-labelledby="about-heading">
        <div class="grid-2col" style="max-width:80rem;margin:0 auto;">
          <div>
            <h2 id="about-heading" style="font-family:'Montserrat',sans-serif;font-size:clamp(3rem,8vw,6rem);font-weight:900;letter-spacing:-0.03em;line-height:1;margin-bottom:2rem;color:#aaa">
              WE ARE<br><span style="color:#9ca3af">ZERO</span>
            </h2>
            <div style="width:100%;height:1px;background:#e5e7eb;margin-bottom:2rem"></div>
            <p style="font-size:1.2rem;color:#d1d5db;line-height:1.8;margin-bottom:2rem">
              İnsan kaynakları alanında güçlü kadromuz ve sürekli gelişen yapımızla, sektörde güvenilir ve tercih edilen lider markalardan biri olmak; istihdam yaratan, doğru personeli doğru iş ile buluşturan ve hizmet kalitesiyle fark oluşturan öncü bir şirket haline gelmektir.
            </p>
            <div class="grid-2col-small-gap">
              <div>
                <h4 style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:#C5A059;margin:0">4 SEKTÖR</h4>
                <p style="font-size:0.7rem;color:#9ca3af;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;margin:0.25rem 0 0">Hizmet Alanı</p>
              </div>
              <div>
                <h4 style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;color:#C5A059;margin:0">2016</h4>
                <p style="font-size:0.7rem;color:#9ca3af;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;margin:0.25rem 0 0">Kuruluş Yılı</p>
              </div>
            </div>
          </div>

          <div style="background:#ffffff;border:1px solid #1f2937;border-radius:1.5rem;padding:2rem;">
            <h3 style="font-family:'Montserrat',sans-serif;font-style:italic;font-size:1.8rem;margin-bottom:2rem;color:#111827">Kurucular</h3>
            <div style="display:flex;flex-direction:column;gap:2.5rem">
              <div style="display:flex;gap:1.5rem;align-items:flex-start">
                <img src="${img.PERSON_1}" alt="Eren Doğru - Zero Group Kurucu" style="width:6rem;height:6rem;border-radius:50%;object-fit:cover;border:2px solid #092359;flex-shrink:0" loading="lazy" />
                <div>
                  <h4 style="font-family:'Montserrat',sans-serif;font-size:1.1rem;font-weight:700;margin:0 0 0.25rem;color:#000">Eren Doğru</h4>
                  <span style="color:#C5A059;font-size:0.7rem;font-family:monospace;text-transform:uppercase;letter-spacing:0.15em;display:block;margin-bottom:0.5rem">Kurucu</span>
                  <p style="font-size:0.85rem;color:#6b7280;margin:0">10 yılı aşkın süredir organizasyon ve etkinlik yönetimi alanında aktif olarak faaliyet göstermekteyim. Üniversite şenlikleri, konserler ve konsept etkinliklerde uzmanlaşarak, projelerin planlama aşamasından sahadaki tüm operasyonel süreçlerine kadar profesyonel çözümler sunuyorum. Güçlü ekip yönetimi ve yaratıcı yaklaşımım sayesinde her etkinliği yüksek kalite ve maksimum katılımla hayata geçiriyorum.</p>
                </div>
              </div>
              <div style="width:100%;height:1px;background:#000"></div>
              <div style="display:flex;gap:1.5rem;align-items:flex-start">
                <img src="${img.PERSON_2}" alt="Haydar Karakaya - Zero Group Kurucu" style="width:6rem;height:6rem;border-radius:50%;object-fit:cover;border:2px solid #092359;flex-shrink:0" loading="lazy" />
                <div>
                  <h4 style="font-family:'Montserrat',sans-serif;font-size:1.1rem;font-weight:700;margin:0 0 0.25rem;color:#000">Haydar Karakaya</h4>
                  <span style="color:#C5A059;font-size:0.7rem;font-family:monospace;text-transform:uppercase;letter-spacing:0.15em;display:block;margin-bottom:0.5rem">Kurucu</span>
                  <p style="font-size:0.85rem;color:#6b7280;margin:0">10 yılı aşkın süredir insan kaynakları alanında faaliyet göstererek huzurevleri, okullar, AVM’ler ve çeşitli işletmelere güvenilir ve sürdürülebilir personel temini sağlamaktayım. Doğru personeli doğru işe yerleştirerek iş süreçlerinin verimli ve sorunsuz ilerlemesine katkı sunuyorum. Bunun yanı sıra organizasyon alanındaki tecrübemle projelere bütüncül çözümler üretmekteyim.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
  },

  /* ---- References ---- */
  renderReferences() {
    const refs2x = [...DATA.refs, ...DATA.refs];
    const logos  = refs2x.map((src, i) => `
      <div style="flex-shrink:0;margin:0 1.5rem;width:8rem;height:4rem;display:flex;align-items:center;justify-content:center">
      <img src="${src}" alt="Referans marka ${(i % DATA.refs.length) + 1}"
  style="max-height:3rem;max-width:100%;object-fit:contain;opacity:0.8;transition:opacity 0.3s"
  loading="lazy"
  onmouseover="this.style.opacity=1"
  onmouseout="this.style.opacity=0.8"
        />
      </div>`).join('');

    const statCards = DATA.stats.map(s => `
      <div style="text-align:center" class="stat-card">
        <div style="font-family:'Bebas Neue',sans-serif;font-size:clamp(3rem,6vw,5rem);color:#fff;transition:color 0.3s" onmouseover="this.style.color='#C5A059'" onmouseout="this.style.color='#fff'">${s.value}</div>
        <div style="font-size:0.7rem;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;color:#9ca3af;margin-top:0.5rem">${s.label}</div>
      </div>`).join('');

    return `
      <section id="references-section" style="background:#fff;color:#111827">
        <!-- Akan Logolar -->
        <div style="width:100%;overflow:hidden;padding:3rem 0;border-top:1px solid #f3f4f6;border-bottom:1px solid #f3f4f6" aria-label="Referans markalar">
          <div class="animate-scroll" style="display:flex;width:max-content">
            ${logos}
          </div>
        </div>

        <!-- İstatistikler -->
        <div style="background:#000;color:#fff;padding:3rem 2rem 5rem">
          <div style="max-width:80rem;margin:0 auto">
            <div style="text-align:center;margin-bottom:3rem">
              <span style="color:#C5A059;font-family:monospace;font-size:0.75rem;letter-spacing:0.2em;display:block;margin-bottom:0.75rem">REFERANSLARIMIZ</span>
              <h2 style="font-family:'Montserrat',sans-serif;font-size:clamp(2.5rem,6vw,5rem);font-weight:900;letter-spacing:-0.03em;line-height:1;margin:0 0 1rem">
                RAKAMLARLA<br><span style="color:#d1d5db">ZERO GROUP</span>
              </h2>
              <div style="width:6rem;height:4px;background:#C5A059;margin:1.5rem auto 0"></div>
            </div>
            <div class="grid-stats stats-grid">
              ${statCards}
            </div>
          </div>
        </div>
      </section>`;
  },

  /* ---- Awards & Achievements ---- */
  renderAwards() {
    const items = DATA.awards.map((a) => {
      return `
        <div class="timeline-item" onclick="
          var wasActive = this.classList.contains('active');
          document.querySelectorAll('.timeline-item').forEach(function(el){ el.classList.remove('active'); });
          if(!wasActive){ this.classList.add('active'); }
        ">
          <div class="timeline-trigger">
            <span class="trigger-year">${a.year}</span>
            <h3 class="trigger-name">${sanitizeHTML(a.name)}</h3>
          </div>
          <div class="timeline-dot" aria-hidden="true"></div>
          <div class="timeline-detail-card">
            <div class="detail-card-header">
              <span class="detail-card-year">${a.year}</span>
              <span class="detail-card-provider">${sanitizeHTML(a.provider)}</span>
            </div>
            <h4 class="detail-card-title">${sanitizeHTML(a.name)}</h4>
            <p class="detail-card-desc">${sanitizeHTML(a.description)}</p>
            <div class="detail-card-story">
              <strong>Başarı Hikayesi:</strong> ${sanitizeHTML(a.story)}
            </div>
          </div>
        </div>`;
    }).join('');

    return `
      <section id="awards-section" class="section-padding" style="background:#000;color:#fff;border-top:1px solid #111;overflow:visible;padding-top:3rem;padding-bottom:3rem;">
        <div class="awards-container">
          <div style="text-align:center;margin-bottom:4rem">
            <span style="color:#C5A059;font-family:monospace;font-size:0.75rem;letter-spacing:0.2em;display:block;margin-bottom:0.75rem">BAŞARILARIMIZ</span>
            <h2 style="font-family:'Montserrat',sans-serif;font-size:clamp(2.5rem,6vw,5rem);font-weight:900;letter-spacing:-0.03em;line-height:1;margin:0">
              BAŞARILARIMIZ &<br><span style="color:#C5A059">ÖDÜLLERİMİZ</span>
            </h2>
            <div style="width:6rem;height:4px;background:#C5A059;margin:1.5rem auto 0"></div>
          </div>
          <div class="timeline">
            <div class="timeline-track">
              ${items}
            </div>
          </div>
        </div>
      </section>`;
  },

  /* ---- Testimonials ---- */
  renderTestimonials() {
    const testimonials = DATA.testimonials.map(t => `
      <article style="background:#fff;border-radius:1rem;padding:2rem;box-shadow:0 1px 4px rgba(0,0,0,0.06);border:1px solid #f3f4f6;display:flex;flex-direction:column;justify-content:space-between;transition:box-shadow 0.3s,transform 0.3s" onmouseover="this.style.boxShadow='0 8px 32px rgba(0,0,0,0.12)';this.style.transform='translateY(-4px)'" onmouseout="this.style.boxShadow='0 1px 4px rgba(0,0,0,0.06)';this.style.transform='none'">
        <div>
          <div style="font-size:3rem;color:#e5e7eb;line-height:1;margin-bottom:1rem">"</div>
          <p style="color:#374151;font-size:0.9rem;line-height:1.7;margin-bottom:1.5rem">${sanitizeHTML(t.text)}</p>
        </div>
        <div style="display:flex;align-items:center;gap:1rem;padding-top:1rem;border-top:1px solid #f3f4f6">
          <div style="width:2.5rem;height:2.5rem;border-radius:50%;background:linear-gradient(135deg,#1f2937,#4b5563);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-family:'Montserrat',sans-serif;font-size:0.85rem;flex-shrink:0">${t.person[0]}</div>
          <div>
            <div style="font-weight:700;font-size:0.85rem;font-family:'Montserrat',sans-serif">${t.person}</div>
            <div style="font-size:0.7rem;color:#9ca3af">${t.title}</div>
            <div style="font-size:0.65rem;color:#C5A059;font-family:monospace;font-weight:700;letter-spacing:0.1em;margin-top:0.2rem">${t.brand}</div>
          </div>
        </div>
      </article>`).join('');

    return `
      <section id="testimonials-section" class="section-padding" style="background:#f9fafb;">
        <div style="max-width:80rem;margin:0 auto">
          <div style="margin-bottom:4rem">
            <span style="color:#C5A059;font-family:monospace;font-size:0.75rem;letter-spacing:0.2em;display:block;margin-bottom:0.75rem">MÜŞTERİ GÖRÜŞLERİ</span>
            <h2 style="font-family:'Montserrat',sans-serif;font-size:clamp(1.8rem,4vw,3rem);font-weight:900;letter-spacing:-0.02em;margin:0;color:#111827">
              Markalar Hakkımızda<br>
              <span style="font-style:italic;font-weight:300;color:#9ca3af">Ne Diyor?</span>
            </h2>
          </div>
          <div class="grid-autofill-380">
            ${testimonials}
          </div>
        </div>
      </section>`;
  },

  /* ---- Contact ---- */

  renderContact() {
    const c = DATA.contact;
    return `
      <section id="contact-section" class="section-padding" style="background:#080808;color:#fff;border-top:1px solid #111">
        <div style="max-width:80rem;margin:0 auto;" class="grid-2col">
          <div style="display:flex;flex-direction:column;justify-content:space-between;gap:2rem">
            <div>
              <span style="color:#C5A059;font-family:monospace;font-size:0.75rem;letter-spacing:0.2em;display:block;margin-bottom:1rem">CONTACT</span>
              <h2 style="font-family:'Montserrat',sans-serif;font-style:italic;font-size:clamp(2rem,5vw,3.5rem);margin:0 0 3rem">Let's talk.</h2>
            </div>
            <div style="display:flex;flex-direction:column;gap:1.5rem">
              <a href="mailto:${c.email}" style="display:block;text-decoration:none;color:inherit" class="contact-link-block">
                <span style="font-size:0.7rem;color:#6b7280;font-family:monospace;text-transform:uppercase;display:block;margin-bottom:0.25rem;transition:color 0.2s" onmouseover="this.style.color='#C5A059'" onmouseout="this.style.color='#6b7280'">Email</span>
                <span style="font-size:clamp(1rem,2.5vw,1.8rem);font-weight:700;text-decoration:underline;text-decoration-color:#C5A059;text-underline-offset:8px;text-decoration-thickness:1px">${c.email}</span>
              </a>
              <a href="tel:+903124359272" style="display:block;text-decoration:none;color:inherit">
                <span style="font-size:0.7rem;color:#6b7280;font-family:monospace;text-transform:uppercase;display:block;margin-bottom:0.25rem">Phone</span>
                <span style="font-size:clamp(1rem,2.5vw,1.8rem);font-weight:700">${c.tel1}</span>
              </a>
            </div>
            <div style="display:flex;gap:1rem;margin-top:3rem">
              <button onclick="Utils.openLink('${c.instagram}')" aria-label="Instagram" style="width:3rem;height:3rem;border-radius:50%;border:1px solid #374151;background:transparent;color:#fff;display:flex;align-items:center;justify-content:center;transition:background 0.2s,color 0.2s" onmouseover="this.style.background='#fff';this.style.color='#000'" onmouseout="this.style.background='transparent';this.style.color='#fff'">
                <i class="fa-brands fa-instagram"></i>
              </button>
              <button onclick="Utils.openLink('${c.linkedin}')" aria-label="LinkedIn" style="width:3rem;height:3rem;border-radius:50%;border:1px solid #374151;background:transparent;color:#fff;display:flex;align-items:center;justify-content:center;transition:background 0.2s,border-color 0.2s,color 0.2s" onmouseover="this.style.background='#0077b5';this.style.borderColor='#0077b5'" onmouseout="this.style.background='transparent';this.style.borderColor='#374151'">
                <i class="fa-brands fa-linkedin-in"></i>
              </button>
            </div>
          </div>

          <div class="map-box map-container-box" style="background:#ffffff;">
            <iframe
              width="100%" height="100%"
              style="border:0; min-height: 300px;"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              title="Zero Group Ofis Konumu"
              src="${c.mapsEmbed}"
            ></iframe>
            <div style="position:absolute;bottom:1.5rem;left:1.5rem;right:1.5rem;background:rgba(255,255,255,0.92);backdrop-filter:blur(12px);padding:1.25rem 1.5rem;border-radius:0.75rem;border:1px solid #e5e7eb;box-shadow:0 8px 32px rgba(0,0,0,0.2)">
              <h4 style="font-family:'Montserrat',sans-serif;color:#111827;font-weight:700;margin:0 0 0.25rem">Zero Group Ofis</h4>
              <p style="color:#6b7280;font-size:0.85rem;margin:0">Çankaya, Ankara, Türkiye</p>
            </div>
          </div>
        </div>
      </section>`;
  },

  render() {
    return `
      <div id="page-home" style="width:100%;display:flex;flex-direction:column;min-height:100vh;background:#000">
        ${Navbar.render('HOME', false)}
        ${this.renderHero()}
        ${this.renderAbout()}
        ${this.renderReferences()}
        ${this.renderAwards()}
        ${this.renderTestimonials()}
        ${this.renderContact()}
        <div id="footer-sentinel">${Footer.render()}</div>
        ${BottomNav.render('HOME', false)}
      </div>`;
  },

  afterRender() {
    const vid = document.getElementById('hero-vid');
    if (vid) {
      vid.play().catch(e => console.warn("Autoplay engellendi"));
    }
  }
};

// Responsive grid classes defined in main.css
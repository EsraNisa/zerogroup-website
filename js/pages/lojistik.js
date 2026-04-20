/* ===========================
   ZERO GROUP — pages/lojistik.js
   Lojistik sayfası
   =========================== */

const LojistikPage = {

  renderCards() {
    const img = DATA.images;
    const cards = DATA.lojistikCards.map(c => `
      <div style="position:relative;min-height:300px;border-radius:1rem;overflow:hidden;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.15);transition:box-shadow 0.3s" onmouseover="this.style.boxShadow='0 12px 48px rgba(0,0,0,0.3)'" onmouseout="this.style.boxShadow='0 4px 20px rgba(0,0,0,0.15)'">
        <img src="${img[c.imageKey]}" alt="${c.title}" loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 0.7s" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'" />
        <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.9),rgba(0,0,0,0.2),transparent);opacity:0.8;transition:opacity 0.3s" onmouseover="this.style.opacity=0.9" onmouseout="this.style.opacity=0.8"></div>
        <div style="position:absolute;bottom:0;left:0;width:100%;padding:2rem">
          <div style="width:3rem;height:4px;background:#3b82f6;margin-bottom:1rem;transition:width 0.3s" onmouseover="this.style.width='5rem'" onmouseout="this.style.width='3rem'"></div>
          <h3 style="font-family:'Montserrat',sans-serif;font-size:clamp(1.3rem,3vw,2rem);font-weight:700;color:#fff;margin:0 0 0.75rem;letter-spacing:0.05em">${c.title}</h3>
          <p style="color:#e5e7eb;font-size:0.9rem;line-height:1.6;margin:0;opacity:0.9">${c.desc}</p>
        </div>
        <div style="position:absolute;inset:0;border-radius:1rem;border:4px solid transparent;transition:border-color 0.3s;pointer-events:none" onmouseover="this.style.borderColor='rgba(59,130,246,0.3)'" onmouseout="this.style.borderColor='transparent'"></div>
      </div>`).join('');

    return `
      <section id="lojistik-section-2" style="width:100%;background:#f9fafb;padding:6rem 2rem 8rem">
        <div style="max-width:64rem;margin:0 auto">
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));gap:2rem">
            ${cards}
          </div>
        </div>
      </section>`;
  },

  renderContact() {
    const c   = DATA.contact;
    const img = DATA.images;
    return `
      <section id="lojistik-section-3" style="min-height:100vh;width:100%;background:#0a0a0a;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:6rem 1.5rem 8rem;position:relative;overflow:hidden">
        <div style="position:absolute;inset:0;z-index:0;pointer-events:none" aria-hidden="true">
          <img src="${img.LOJ_CONTACT_BG}" alt="" style="width:100%;height:100%;object-fit:cover;opacity:0.2;filter:grayscale(1)" loading="lazy" />
        </div>

        <div style="position:relative;z-index:10;width:100%;max-width:36rem;animation:float 6s ease-in-out infinite">
          <!-- Kağıt efekti kart -->
          <div class="paper-texture" style="transform:rotate(-2deg);padding:3rem;box-shadow:0 16px 64px rgba(0,0,0,0.6),8px 8px 0 rgba(0,0,0,0.1);border-bottom:8px solid rgba(0,0,0,0.08);border-right:8px solid rgba(0,0,0,0.08);position:relative">

            <div style="display:flex;justify-content:space-between;align-items:flex-start;border-bottom:4px solid #000;padding-bottom:1rem;margin-bottom:1.5rem">
              <div>
                <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;letter-spacing:-0.03em;color:#000;line-height:1;margin:0">ZERO LOJİSTİK</h2>
                <span style="font-size:0.6rem;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:0.2em">Global Supply Chain Solutions</span>
              </div>
              <div style="text-align:right">
                <div style="font-size:0.55rem;font-weight:900;color:#9ca3af;text-transform:uppercase">Gönderi No</div>
                <div style="font-family:monospace;font-size:0.75rem;font-weight:700;color:#000">TR-06-ZR-2026</div>
              </div>
            </div>

            <div style="display:flex;flex-direction:column;gap:1.25rem">
              <div style="border-left:4px solid #000;padding-left:1.25rem">
                <span style="font-size:0.6rem;font-weight:900;color:#2563eb;text-transform:uppercase;letter-spacing:0.2em;display:block;margin-bottom:0.25rem">Varış Noktası / Address</span>
                <p style="font-size:0.9rem;font-weight:700;color:#1f2937;line-height:1.4;margin:0">
                  Eti Mah. Strazburg Cad. No: 30/19<br>06430 Çankaya / Ankara, Türkiye
                </p>
              </div>

              <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;border-top:1px solid #e5e7eb;padding-top:1rem">
                <a href="tel:+903124359272" style="text-decoration:none;color:inherit">
                  <span style="font-size:0.6rem;font-weight:900;color:#9ca3af;text-transform:uppercase;letter-spacing:0.15em;display:block">Telefon</span>
                  <span style="font-size:0.9rem;font-weight:900;color:#000">${c.tel1}</span>
                </a>
                <a href="mailto:${c.email}" style="text-decoration:none;color:inherit">
                  <span style="font-size:0.6rem;font-weight:900;color:#9ca3af;text-transform:uppercase;letter-spacing:0.15em;display:block">E-Posta</span>
                  <span style="font-size:0.85rem;font-weight:900;color:#000">${c.email}</span>
                </a>
              </div>

              <div style="border-top:1px solid #e5e7eb;padding-top:1rem">
                <span style="font-size:0.6rem;font-weight:900;color:#9ca3af;text-transform:uppercase;letter-spacing:0.15em;display:block">Instagram</span>
                <a href="https://www.instagram.com/zero.lojistik" target="_blank" rel="noopener noreferrer" style="font-size:0.9rem;font-weight:900;color:#000;text-decoration:none;transition:color 0.2s" onmouseover="this.style.color='#2563eb'" onmouseout="this.style.color='#000'">@zero.lojistik</a>
              </div>

              <div style="border-top:2px dashed #d1d5db;padding-top:1rem;display:flex;flex-direction:column;align-items:center;gap:1rem">
                <div style="width:100%;height:3rem;background-image:url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Code_128b.svg/1200px-Code_128b.svg.png');background-size:contain;background-position:center;background-repeat:no-repeat;opacity:0.7;filter:grayscale(1)"></div>
                <button onclick="Utils.openLink('${c.linkedin}')" style="width:100%;padding:1rem;background:#000;color:#fff;font-family:'Montserrat',sans-serif;font-weight:900;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.05em;border:none;transition:background 0.2s,transform 0.2s;display:flex;align-items:center;justify-content:center" onmouseover="this.style.background='#1d4ed8';this.style.transform='scale(1.02)'" onmouseout="this.style.background='#000';this.style.transform='scale(1)'">
                  BİZİMLE ÇALIŞMAK İSTER MİSİNİZ?
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>`;
  },

  render() {
    const s   = DATA.sectors.LOJISTIK;
    const img = DATA.images;
    return `
      <div id="page-lojistik" style="width:100%;display:flex;flex-direction:column;background:#fff">
        ${Navbar.render('LOJISTIK', false)}
        ${SectorHero.render({ title: s.title, desc: s.desc, bgImage: img.LOJISTIK_BG, id: 'lojistik-main' })}
        ${this.renderCards()}
        ${this.renderContact()}
        ${Footer.render()}
        ${BottomNav.render('LOJISTIK', false)}
      </div>`;
  },

  afterRender() {}
};
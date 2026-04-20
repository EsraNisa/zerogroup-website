/* ===========================
   ZERO GROUP — pages/ik.js
   İnsan Kaynakları sayfası
   =========================== */

const IKPage = {

  renderCategories() {
    const cats = DATA.ikCategories.map((cat, i) => `
      <div class="ik-cat-item" data-idx="${i}" style="cursor:pointer;border-left:2px solid #d1d5db;padding-left:1.5rem;transition:all 0.3s;opacity:0.5" onclick="IKPage.selectCategory(${i})">
        <span class="ik-cat-label" style="font-family:'Bebas Neue',sans-serif;font-size:clamp(2rem,5vw,4rem);letter-spacing:0.05em;color:#9ca3af;transition:all 0.3s;display:block">${cat.label}</span>
        <span class="ik-cat-sub" style="font-size:0.85rem;color:#dc2626;display:none;margin-top:0.25rem">${cat.sub}</span>
      </div>`).join('');

    const firstCat = DATA.ikCategories[0];
    return `
      <div id="ik-diger" style="width:100%;min-height:100vh;background:#fff;color:#111;display:flex;align-items:center;justify-content:center;padding:2rem 1rem">
        <div style="width:100%;max-width:80rem">
          <div style="display:flex;flex-wrap:wrap;gap:3rem;align-items:center;min-height:70vh">
            <!-- Sol: Kategori listesi -->
            <div id="ik-cat-list" style="flex:0 0 auto;display:flex;flex-direction:column;gap:2rem;min-width:200px">
              ${cats}
            </div>

            <!-- Sağ: Görsel -->
            <div style="flex:1;min-width:280px;height:clamp(300px,55vh,600px);border-radius:1.5rem;overflow:hidden;box-shadow:0 8px 64px rgba(0,0,0,0.15);position:relative;border:1px solid #f3f4f6">
              <img id="ik-cat-img" src="${DATA.images[firstCat.imageKey]}" alt="${firstCat.label}" style="width:100%;height:100%;object-fit:cover;transition:opacity 0.4s" loading="lazy" />
              <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.8),transparent 50%)"></div>
              <div style="position:absolute;bottom:0;left:0;width:100%;padding:1.5rem 2rem">
                <div style="background:rgba(255,255,255,0.1);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,0.2);padding:1.5rem;border-radius:1rem">
                  <div style="display:flex;align-items:center;gap:1rem;margin-bottom:0.75rem">
                    <div style="width:2rem;height:2px;background:#ef4444"></div>
                    <span style="color:#f87171;font-weight:700;letter-spacing:0.15em;font-size:0.7rem;text-transform:uppercase">Hizmet Detayı</span>
                  </div>
                  <h3 id="ik-cat-title" style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:clamp(1.2rem,3vw,2rem);color:#fff;margin:0 0 0.75rem;line-height:1.2">${firstCat.sub}</h3>
                  <p id="ik-cat-desc" style="color:#d1d5db;font-size:0.85rem;line-height:1.7;max-width:36rem;margin:0">${firstCat.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  },

selectCategory(idx) {
    const cat = DATA.ikCategories[idx];
    const img = document.getElementById('ik-cat-img');
    const titl = document.getElementById('ik-cat-title');
    const desc = document.getElementById('ik-cat-desc');

    // Menü öğelerini güncelle
    document.querySelectorAll('.ik-cat-item').forEach((el, i) => {
      const isActive = i === idx;
      el.style.borderLeftColor = isActive ? '#dc2626' : '#d1d5db';
      el.style.opacity = isActive ? '1' : '0.5';
      
      const label = el.querySelector('.ik-cat-label');
      const sub = el.querySelector('.ik-cat-sub');
      if (label) {
        label.style.color = isActive ? '#000' : '#9ca3af';
        label.style.transform = isActive ? 'translateX(0.5rem)' : '';
      }
      if (sub) {
        sub.style.display = isActive ? 'block' : 'none';
        sub.style.transform = isActive ? 'translateX(0.5rem)' : '';
      }
    });

    // RESİM DEĞİŞTİRME MANTIĞI (GÜNCELLENEN KISIM)
    if (img) {
      img.style.opacity = '0'; // Önce resmi gizle
      
      // transitionend yerine setTimeout kullanarak resmi güvenli bir şekilde değiştir
      setTimeout(() => {
        img.src = DATA.images[cat.imageKey]; // Yeni resmi yükle
        img.alt = cat.label;
        img.style.opacity = '1'; // Resmi tekrar göster
      }, 50); 
    }

    if (titl) titl.textContent = cat.sub;
    if (desc) desc.textContent = cat.desc;
},

  renderContact() {
    const c = DATA.contact;
    return `
      <section id="ik-section-3" style="width:100%;min-height:100vh;background:#080808;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:6rem 2rem 8rem;position:relative;overflow:hidden">
        <div style="position:absolute;inset:0;pointer-events:none" aria-hidden="true">
          <div style="position:absolute;top:-5%;left:-5%;width:35%;height:35%;background:rgba(127,29,29,0.15);border-radius:50%;filter:blur(100px)"></div>
          <div style="position:absolute;bottom:-5%;right:-5%;width:35%;height:35%;background:rgba(29,78,216,0.15);border-radius:50%;filter:blur(100px)"></div>
        </div>
        <div style="width:100%;max-width:80rem;position:relative;z-index:10;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center">
          <div>
            <span style="color:#ef4444;font-family:monospace;font-size:0.75rem;letter-spacing:0.2em;display:block;margin-bottom:1rem;text-transform:uppercase">İletişim</span>
            <h2 style="font-family:'Montserrat',sans-serif;font-size:clamp(3rem,6vw,5rem);font-weight:900;letter-spacing:-0.03em;line-height:1;margin:0 0 1.5rem">
              BİZE<br><span style="font-style:italic;font-weight:300;color:#6b7280">Ulaşın.</span>
            </h2>
            <div style="width:6rem;height:4px;background:#dc2626;margin-bottom:2rem"></div>
            <div style="display:flex;flex-direction:column;gap:1.5rem;margin-bottom:2rem">
              <a href="tel:+905312639814" style="display:flex;align-items:center;gap:1rem;text-decoration:none;color:inherit;group">
                <div style="width:3rem;height:3rem;border-radius:50%;border:1px solid #374151;display:flex;align-items:center;justify-content:center;transition:background 0.2s,border-color 0.2s" onmouseover="this.style.background='#dc2626';this.style.borderColor='#dc2626'" onmouseout="this.style.background='';this.style.borderColor='#374151'"><i class="fa-solid fa-phone text-sm"></i></div>
                <div>
                  <span style="font-size:0.65rem;color:#6b7280;font-family:monospace;text-transform:uppercase;display:block">GSM</span>
                  <span style="font-size:1.2rem;font-weight:700">${c.tel3}</span>
                </div>
              </a>
              <a href="mailto:${c.email}" style="display:flex;align-items:center;gap:1rem;text-decoration:none;color:inherit">
                <div style="width:3rem;height:3rem;border-radius:50%;border:1px solid #374151;display:flex;align-items:center;justify-content:center;transition:background 0.2s" onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background=''"><i class="fa-solid fa-envelope text-sm"></i></div>
                <div>
                  <span style="font-size:0.65rem;color:#6b7280;font-family:monospace;text-transform:uppercase;display:block">E-Posta</span>
                  <span style="font-size:1.2rem;font-weight:700">${c.email}</span>
                </div>
              </a>
              <div style="display:flex;align-items:center;gap:1rem">
                <div style="width:3rem;height:3rem;border-radius:50%;border:1px solid #374151;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fa-solid fa-location-dot"></i></div>
                <div>
                  <span style="font-size:0.65rem;color:#6b7280;font-family:monospace;text-transform:uppercase;display:block">Adres</span>
                  <span style="font-size:0.9rem;color:#d1d5db">Eti Mah. Strazburg Cad. No:30/19<br>Çankaya / Ankara</span>
                </div>
              </div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:1rem">
              <button onclick="Utils.openLink('${c.whatsapp}')" style="padding:1rem 2rem;background:#16a34a;color:#fff;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.85rem;letter-spacing:0.05em;border:none;border-radius:999px;transition:background 0.2s;display:flex;align-items:center;gap:0.5rem;box-shadow:0 4px 16px rgba(22,163,74,0.3)" onmouseover="this.style.background='#15803d'" onmouseout="this.style.background='#16a34a'">
                <i class="fa-brands fa-whatsapp text-lg"></i> WhatsApp
              </button>
              <button onclick="Utils.openLink('${c.applyForm}')" style="padding:1rem 2rem;background:#fff;color:#000;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.85rem;letter-spacing:0.05em;border:none;border-radius:999px;transition:background 0.2s;box-shadow:0 4px 16px rgba(255,255,255,0.15)" onmouseover="this.style.background='#f3f4f6'" onmouseout="this.style.background='#fff'">
                BAŞVURU FORMU
              </button>
            </div>
          </div>
          <div style="height:500px;border-radius:1.5rem;overflow:hidden;border:1px solid #1f2937;position:relative">
            <iframe width="100%" height="100%" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" title="Zero Group Ofis" src="${c.mapsEmbed}"></iframe>
            <div style="position:absolute;bottom:1.5rem;left:1.5rem;right:1.5rem;background:rgba(255,255,255,0.92);backdrop-filter:blur(12px);padding:1.25rem;border-radius:0.75rem;border:1px solid #e5e7eb;box-shadow:0 8px 32px rgba(0,0,0,0.3)">
              <h4 style="font-family:'Montserrat',sans-serif;color:#111;font-weight:700;margin:0 0 0.25rem">Zero Group — İnsan Kaynakları</h4>
              <p style="color:#6b7280;font-size:0.85rem;margin:0">Çankaya, Ankara, Türkiye</p>
            </div>
          </div>
        </div>
      </section>`;
  },

  render() {
    const s   = DATA.sectors.IK;
    const img = DATA.images;
    return `
      <div id="page-ik" style="width:100%;display:flex;flex-direction:column;background:#fff">
        ${Navbar.render('IK', false)}
        ${SectorHero.render({ title: s.title, desc: s.desc, bgImage: img.IK_BG, id: 'ik-main' })}
        ${this.renderCategories()}
        ${this.renderContact()}
        ${Footer.render()}
        ${BottomNav.render('IK', false)}
      </div>`;
  },

  afterRender() {
    this.selectCategory(0);
  }
};

/* Responsive fix for IK contact grid */
(function() {
  const s = document.createElement('style');
  s.textContent = `@media (max-width:768px) { #ik-section-3 > div { grid-template-columns:1fr !important; } }`;
  document.head.appendChild(s);
})();
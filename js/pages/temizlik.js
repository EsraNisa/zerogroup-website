/* ===========================
   ZERO GROUP — pages/temizlik.js
   Temizlik Hizmetleri sayfası
   =========================== */

const TemizlikPage = {

  renderSplitCTA() {
    const c   = DATA.contact;
    const img = DATA.images;
    return `
      <section id="temizlik-section-2" style="width:100%;min-height:100vh;display:flex;flex-wrap:wrap;background:#000">
        <!-- Sol: Ekibimiz -->
        <div style="position:relative;flex:1 1 300px;min-height:50vh;overflow:hidden;border-right:1px solid #1f2937;group" class="split-panel">
          <img src="${img.IK_KATIL}" alt="Temizlik ekibimiz" loading="lazy" style="width:100%;height:100%;object-fit:cover;opacity:0.4;filter:grayscale(1);transition:opacity 0.7s,filter 0.7s;position:absolute;inset:0" class="split-bg-img" />
          <div style="position:absolute;inset:0;background:rgba(0,0,0,0.5);transition:background 0.5s" class="split-overlay"></div>
          <div style="position:relative;z-index:10;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:3rem 2rem;min-height:50vh">
            <h2 style="font-family:'Montserrat',sans-serif;font-size:clamp(1.5rem,4vw,3rem);font-weight:700;color:#fff;margin-bottom:1rem">EKİBİMİZ HAKKINDA</h2>
            <p style="color:#d1d5db;max-width:22rem;margin-bottom:2rem;line-height:1.7;font-size:0.9rem">Zero Group bünyesinde çalışmak isteyen temizlik personeline yönelik tüm bilgileri buradan öğrenebilirsiniz.</p>
            <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:1rem">
              <button onclick="Utils.scrollTo('temizlik-ekibimiz')" style="padding:0.75rem 2rem;background:#fff;color:#000;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.8rem;letter-spacing:0.05em;border:none;border-radius:999px;transition:background 0.2s" onmouseover="this.style.background='#e5e7eb'" onmouseout="this.style.background='#fff'">BİLGİ ALIN</button>
              <button onclick="Utils.openLink('${c.whatsapp}')" style="padding:0.75rem 2rem;background:#16a34a;color:#fff;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.8rem;letter-spacing:0.05em;border:none;border-radius:999px;transition:background 0.2s;display:flex;align-items:center;gap:0.5rem" onmouseover="this.style.background='#15803d'" onmouseout="this.style.background='#16a34a'"><i class="fa-brands fa-whatsapp"></i> WHATSAPP</button>
            </div>
          </div>
        </div>

        <!-- Sağ: Kurumsal -->
        <div style="position:relative;flex:1 1 300px;min-height:50vh;overflow:hidden;group" class="split-panel">
          <img src="${img.IK_TEKLIF}" alt="Kurumsal teklif" loading="lazy" style="width:100%;height:100%;object-fit:cover;opacity:0.4;filter:grayscale(1);transition:opacity 0.7s,filter 0.7s;position:absolute;inset:0" class="split-bg-img" />
          <div style="position:absolute;inset:0;background:rgba(0,0,0,0.5);transition:background 0.5s" class="split-overlay"></div>
          <div style="position:relative;z-index:10;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:3rem 2rem;min-height:50vh">
            <h2 style="font-family:'Montserrat',sans-serif;font-size:clamp(1.5rem,4vw,3rem);font-weight:700;color:#fff;margin-bottom:1rem">KURUMSAL BİLGİ</h2>
            <p style="color:#d1d5db;max-width:22rem;margin-bottom:2rem;line-height:1.7;font-size:0.9rem">Kurumunuzun temizlik ihtiyaçlarını profesyonelce karşılamak için Zero Group hakkında merak ettiğiniz her şey burada.</p>
            <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:1rem">
              <button onclick="Utils.scrollTo('temizlik-kurumsal')" style="padding:0.75rem 2rem;background:#2563eb;color:#fff;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.8rem;letter-spacing:0.05em;border:none;border-radius:999px;transition:background 0.2s" onmouseover="this.style.background='#1d4ed8'" onmouseout="this.style.background='#2563eb'">BİLGİ ALIN</button>
              <button onclick="Utils.openLink('${c.whatsapp}')" style="padding:0.75rem 2rem;background:#16a34a;color:#fff;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.8rem;letter-spacing:0.05em;border:none;border-radius:999px;transition:background 0.2s;display:flex;align-items:center;gap:0.5rem" onmouseover="this.style.background='#15803d'" onmouseout="this.style.background='#16a34a'"><i class="fa-brands fa-whatsapp"></i> WHATSAPP</button>
            </div>
          </div>
        </div>
      </section>`;
  },

  renderEkibimiz() {
    const c = DATA.contact;
    const features = [
      { icon: 'fa-shield-halved', title: 'Sigortalı Çalışma',  desc: "Tüm personelimiz SGK'ya kayıtlı, tam sigortalı olarak istihdam edilmektedir. Haklarınız güvence altında." },
      { icon: 'fa-graduation-cap', title: 'Eğitim & Sertifika', desc: 'İşe başlamadan önce hijyen, kimyasal kullanımı ve iş güvenliği konularında kapsamlı eğitim verilmektedir.' },
      { icon: 'fa-calendar-check', title: 'Düzenli Ödeme',      desc: 'Maaşlar her ayın belirlenen gününde düzenli olarak ödenir. Ay içerisinde alınan avans ödemeleri, ay sonundaki net hak ediş tutarından düşülerek kalan miktar şeklinde ödenir.' },
      { icon: 'fa-shirt',          title: 'Üniforma & Ekipman', desc: 'Tüm temizlik malzemeleri ve kıyafetler tarafımızca karşılanmakta, personelimiz ek masraf yapmamaktadır.' },
      { icon: 'fa-clock',          title: 'Esnek Vardiya',      desc: 'Tam gün, yarım gün ve gece vardiyası seçenekleriyle yaşam düzeninize uygun çalışma saatleri sunulmaktadır.' },
      { icon: 'fa-handshake',      title: 'Kariyer İmkânı',     desc: 'Performansınıza göre ekip liderliği ve yöneticilik pozisyonlarına yükselme fırsatı bulunmaktadır.' },
    ];
    const cards = features.map(f => `
      <div style="background:#f9fafb;border-radius:1rem;padding:2rem;border:1px solid #f3f4f6;transition:box-shadow 0.3s,transform 0.3s" onmouseover="this.style.boxShadow='0 8px 32px rgba(0,0,0,0.1)';this.style.transform='translateY(-4px)'" onmouseout="this.style.boxShadow='';this.style.transform=''">
        <div style="width:3rem;height:3rem;border-radius:0.75rem;background:#fef2f2;display:flex;align-items:center;justify-content:center;margin-bottom:1.25rem;transition:background 0.3s" onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background='#fef2f2'">
          <i class="fa-solid ${f.icon}" style="color:#dc2626;font-size:1.2rem;transition:color 0.3s"></i>
        </div>
        <h3 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:1rem;margin:0 0 0.75rem">${f.title}</h3>
        <p style="font-size:0.85rem;color:#6b7280;line-height:1.7;margin:0">${f.desc}</p>
      </div>`).join('');

    return `
      <section id="temizlik-ekibimiz" class="section-padding" style="width:100%;min-height:100vh;background:#fff;">
        <div style="max-width:80rem;margin:0 auto">
          <div style="margin-bottom:4rem">
            <span style="color:#dc2626;font-family:monospace;font-size:0.75rem;letter-spacing:0.2em;display:block;margin-bottom:0.75rem;text-transform:uppercase">Temizlik Personeli</span>
            <h2 style="font-family:'Montserrat',sans-serif;font-size:clamp(2.5rem,6vw,5rem);font-weight:900;letter-spacing:-0.03em;line-height:1;margin:0 0 0.5rem">
              EKİBİMİZ<br><span style="color:#9ca3af;font-weight:300">HAKKINDA</span>
            </h2>
            <div style="width:6rem;height:4px;background:#dc2626;margin:1.5rem 0 2rem"></div>
            <p style="color:#4b5563;font-size:1.1rem;max-width:40rem;line-height:1.7;margin:0">
              Zero Group olarak temizlik sektöründe güvenilir, deneyimli ve profesyonel personel kadromuzla hizmet veriyoruz.
              Ekibimize katılmak isteyen adaylara sağladığımız avantajlar ve çalışma koşulları hakkında tüm detayları aşağıda bulabilirsiniz.
            </p>
          </div>
          <div class="grid-autofill-340" style="margin-bottom:4rem">
            ${cards}
          </div>
          <div style="background:#000;border-radius:1.5rem;padding:3rem 3rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:2rem">
            <div>
              <h3 style="font-family:'Montserrat',sans-serif;font-size:clamp(1.5rem,3vw,2rem);font-weight:900;color:#fff;margin:0 0 0.5rem">Ekibimize Katılmak İster misiniz?</h3>
              <p style="color:#9ca3af;margin:0">Başvurunuzu yapın, sizi en kısa sürede arayalım.</p>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:1rem">
              <button onclick="Utils.openLink('${c.whatsapp}')" style="padding:1rem 2rem;background:#16a34a;color:#fff;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.85rem;letter-spacing:0.05em;border:none;border-radius:999px;white-space:nowrap;transition:background 0.2s;display:flex;align-items:center;gap:0.5rem" onmouseover="this.style.background='#15803d'" onmouseout="this.style.background='#16a34a'"><i class="fa-brands fa-whatsapp text-lg"></i> WHATSAPP</button>
            </div>
          </div>
        </div>
      </section>`;
  },

  renderKurumsal() {
    const c = DATA.contact;
    const items = [
      { icon: 'fa-broom',                 title: 'Tesis Yönetimi',     desc: 'Hizmet kapsamımız; insan kaynakları ve personel temini, organizasyon ve etkinlik yönetimi ile profesyonel temizlik hizmetlerini kapsamaktadır. Huzurevleri, eğitim kurumları, AVM’ler ve özel işletmelere yönelik olarak; ihtiyaç analizinden doğru personel seçimine, saha yönetiminden operasyonel sürece kadar tüm aşamalarda profesyonel ve sürdürülebilir çözümler sunuyoruz. Amaç, her alanda yüksek verimlilik ve kesintisiz hizmet standardı sağlamaktır.' },
      { icon: 'fa-file-contract',          title: 'Sözleşme & Güvence',   desc: 'Tüm hizmetlerimiz resmi sözleşme ile güvence altına alınmaktadır. Belirli kalite standartları taahhüt edilmekte ve bu standartlara uyulmaması durumunda tam iade politikası geçerlidir.' },
      { icon: 'fa-magnifying-glass-chart', title: 'Denetim & Kalite Kontrol', desc: 'Sahaya çıkan tüm ekiplerimiz düzenli olarak denetlenmektedir. Müşteri memnuniyet anketleri her dönem sonunda iletilmekte ve geri bildirimler ekip değerlendirmelerine yansıtılmaktadır.' },
      { icon: 'fa-building',              title: 'Referans Firmalarımız', desc: "Ankara'nın önde gelen otel zincirleri, huzurevi, okullar ve kurumsal ofis binaları başta olmak üzere 40'tan fazla aktif kurumsal müşterimiz bulunmaktadır." },
      { icon: 'fa-tag',                   title: 'Fiyatlandırma',         desc: 'Fiyatlandırma hizmet türüne, sıklığına ve alana göre değişmektedir. Metrekare bazlı şeffaf fiyat tablomuzu talep edebilir ya da ücretsiz keşif randevusu alabilirsiniz.' },
      { icon: 'fa-certificate',           title: 'İzin & Belge Durumu',  desc: "Şirketimiz tüm yasal izinlere sahip, vergi mükellefi bir kuruluştur. SGK prim ödemeleri düzenli yapılmakta, çalışanlarımız İSG eğitimlerini tamamlamış bireylerden oluşmaktadır." },
    ];
    const cards = items.map(it => `
      <div style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:1rem;padding:2rem;transition:background 0.3s" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='rgba(255,255,255,0.05)'">
        <div style="display:flex;align-items:flex-start;gap:1.25rem">
          <div style="width:3rem;height:3rem;border-radius:0.75rem;background:rgba(59,130,246,0.1);display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.3s" onmouseover="this.style.background='#3b82f6'" onmouseout="this.style.background='rgba(59,130,246,0.1)'">
            <i class="fa-solid ${it.icon}" style="color:#60a5fa;font-size:1.1rem"></i>
          </div>
          <div>
            <h3 style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:1rem;color:#fff;margin:0 0 0.75rem">${it.title}</h3>
            <p style="font-size:0.85rem;color:#9ca3af;line-height:1.7;margin:0">${it.desc}</p>
          </div>
        </div>
      </div>`).join('');

    return `
      <section id="temizlik-kurumsal" class="section-padding" style="width:100%;min-height:100vh;background:#030712;color:#fff;">
        <div style="max-width:80rem;margin:0 auto">
          <div style="margin-bottom:4rem">
            <span style="color:#60a5fa;font-family:monospace;font-size:0.75rem;letter-spacing:0.2em;display:block;margin-bottom:0.75rem;text-transform:uppercase">Kurumlar İçin</span>
            <h2 style="font-family:'Montserrat',sans-serif;font-size:clamp(2.5rem,6vw,5rem);font-weight:900;letter-spacing:-0.03em;line-height:1;margin:0 0 0.5rem">
              KURUMSAL<br><span style="color:#374151;font-weight:300">BİLGİ</span>
            </h2>
            <div style="width:6rem;height:4px;background:#3b82f6;margin:1.5rem 0 2rem"></div>
            <p style="color:#9ca3af;font-size:1.1rem;max-width:40rem;line-height:1.7;margin:0">
              Kurumunuzun temizlik ihtiyaçlarını Zero Group'a emanet etmeden önce merak ettiğiniz her şeyi bu sayfada bulabilirsiniz.
            </p>
          </div>
          <div class="grid-autofill-340" style="margin-bottom:4rem;gap:1.5rem !important;">
            ${cards}
          </div>
          <div style="background:#2563eb;border-radius:1.5rem;padding:3rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:2rem">
            <div>
              <h3 style="font-family:'Montserrat',sans-serif;font-size:clamp(1.5rem,3vw,2rem);font-weight:900;color:#fff;margin:0 0 0.5rem">Teklif Almak İster misiniz?</h3>
              <p style="color:#bfdbfe;margin:0">Ücretsiz keşif ve teklif için hemen ulaşın.</p>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:1rem">
              <button onclick="Utils.openLink('${c.whatsapp}')" style="padding:1rem 2rem;background:#16a34a;color:#fff;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.85rem;letter-spacing:0.05em;border:none;border-radius:999px;white-space:nowrap;transition:background 0.2s;display:flex;align-items:center;gap:0.5rem" onmouseover="this.style.background='#15803d'" onmouseout="this.style.background='#16a34a'"><i class="fa-brands fa-whatsapp"></i> WHATSAPP</button>
            </div>
          </div>
        </div>
      </section>`;
  },

  renderContact() {
    const c = DATA.contact;
    return `
      <section id="temizlik-section-3" class="section-padding" style="width:100%;min-height:100vh;background:#080808;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden">
        <div style="position:absolute;inset:0;pointer-events:none" aria-hidden="true">
          <div style="position:absolute;top:-5%;left:-5%;width:35%;height:35%;background:rgba(127,29,29,0.15);border-radius:50%;filter:blur(100px)"></div>
          <div style="position:absolute;bottom:-5%;right:-5%;width:35%;height:35%;background:rgba(29,78,216,0.15);border-radius:50%;filter:blur(100px)"></div>
        </div>
        <div style="width:100%;max-width:80rem;position:relative;z-index:10;" class="grid-2col contact-grid-wrapper">
          <div>
            <span style="color:#ef4444;font-family:monospace;font-size:0.75rem;letter-spacing:0.2em;display:block;margin-bottom:1rem;text-transform:uppercase">İletişim</span>
            <h2 style="font-family:'Montserrat',sans-serif;font-size:clamp(3rem,6vw,5rem);font-weight:900;letter-spacing:-0.03em;line-height:1;margin:0 0 1.5rem">
              BİZE<br><span style="font-style:italic;font-weight:300;color:#6b7280">Ulaşın.</span>
            </h2>
            <div style="width:6rem;height:4px;background:#dc2626;margin-bottom:2rem"></div>
            <div style="display:flex;flex-direction:column;gap:1.5rem;margin-bottom:2rem">
              <a href="tel:+905312639814" style="display:flex;align-items:center;gap:1rem;text-decoration:none;color:inherit">
                <div style="width:3rem;height:3rem;border-radius:50%;border:1px solid #374151;display:flex;align-items:center;justify-content:center;transition:background 0.2s" onmouseover="this.style.background='#dc2626'" onmouseout="this.style.background=''"><i class="fa-solid fa-phone text-sm"></i></div>
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
              <button onclick="Utils.openLink('${c.whatsapp}')" style="padding:1rem 2rem;background:#16a34a;color:#fff;font-family:'Montserrat',sans-serif;font-weight:700;font-size:0.85rem;letter-spacing:0.05em;border:none;border-radius:999px;transition:background 0.2s;display:flex;align-items:center;gap:0.5rem;box-shadow:0 4px 166px rgba(22,163,74,0.3)">
                <i class="fa-brands fa-whatsapp text-lg"></i> WhatsApp
              </button>
            </div>
          </div>
          <div class="map-box map-container-box">
            <iframe width="100%" height="100%" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" title="Zero Group Ofis" src="${c.mapsEmbed}"></iframe>
            <div style="position:absolute;bottom:1.5rem;left:1.5rem;right:1.5rem;background:rgba(255,255,255,0.92);backdrop-filter:blur(12px);padding:1.25rem;border-radius:0.75rem;border:1px solid #e5e7eb;box-shadow:0 8px 32px rgba(0,0,0,0.3)">
              <h4 style="font-family:'Montserrat',sans-serif;color:#111;font-weight:700;margin:0 0 0.25rem">Zero Group — Temizlik Hizmetleri</h4>
              <p style="color:#6b7280;font-size:0.85rem;margin:0">Çankaya, Ankara, Türkiye</p>
            </div>
          </div>
        </div>
      </section>`;
  },

  renderGaleri() {
    const photos = DATA.temizlikPhotos || [];
    const imageCards = photos.map((src, i) => `
      <div class="gallery-card" onclick="TemizlikPage.openLightbox('${src}')" style="flex:0 0 clamp(280px, 30vw, 380px);position:relative;border-radius:1rem;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.06);cursor:zoom-in;aspect-ratio:4/3;transition:transform 0.4s cubic-bezier(0.25,1,0.5,1),box-shadow 0.4s ease" onmouseover="this.style.transform='translateY(-8px)';this.style.boxShadow='0 20px 40px rgba(0,0,0,0.12)';this.querySelector('img').style.transform='scale(1.08)';this.querySelector('.gallery-overlay').style.opacity='1'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='0 10px 30px rgba(0,0,0,0.06)';this.querySelector('img').style.transform='scale(1)';this.querySelector('.gallery-overlay').style.opacity='0'">
        <img src="${src}" alt="Temizlik Hizmeti ${i+1}" loading="lazy" style="width:100%;height:100%;object-fit:cover;transition:transform 0.6s ease" />
        <div class="gallery-overlay" style="position:absolute;inset:0;background:rgba(220,38,38,0.2);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity 0.4s ease;pointer-events:none">
          <div style="width:3.5rem;height:3.5rem;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,0.2)">
            <i class="fa-solid fa-magnifying-glass-plus" style="color:#dc2626;font-size:1.2rem"></i>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <section id="temizlik-galeri" class="section-padding" style="width:100%;background:#fff;padding:6rem 0;position:relative;overflow:hidden">
        <div style="max-width:80rem;margin:0 auto;padding:0 1.5rem">
          <!-- Üst Başlık ve Butonlar -->
          <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:3rem;flex-wrap:wrap;gap:2rem">
            <div style="flex:1;min-width:280px">
              <span style="color:#dc2626;font-family:monospace;font-size:0.75rem;letter-spacing:0.2em;display:block;margin-bottom:0.75rem;text-transform:uppercase">Hizmetlerimizden Kareler</span>
              <h2 style="font-family:'Montserrat',sans-serif;font-size:clamp(2.5rem,6vw,5rem);font-weight:900;letter-spacing:-0.03em;line-height:1;margin:0 0 0.5rem">
                HİZMET<br><span style="color:#9ca3af;font-weight:300">GÖRSELLERİ</span>
              </h2>
              <div style="width:6rem;height:4px;background:#dc2626;margin:1.5rem 0 2rem"></div>
              <p style="color:#4b5563;font-size:1.1rem;max-width:40rem;line-height:1.7;margin:0">
                Zero Group Temizlik Hizmetleri olarak gerçekleştirdiğimiz profesyonel temizlik çalışmalarımızdan ve yüksek hijyen standartlarımızdan kesitler.
              </p>
            </div>
            
            <!-- Kaydırma Butonları -->
            <div style="display:flex;gap:1rem;margin-bottom:0.5rem">
              <button onclick="TemizlikPage.scrollGallery(-1)" aria-label="Geri" style="width:3.5rem;height:3.5rem;border-radius:50%;border:1px solid #e5e7eb;background:#fff;color:#111;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s" onmouseover="this.style.background='#dc2626';this.style.borderColor='#dc2626';this.style.color='#fff';this.style.transform='scale(1.05)'" onmouseout="this.style.background='#fff';this.style.borderColor='#e5e7eb';this.style.color='#111';this.style.transform='scale(1)'">
                <i class="fa-solid fa-chevron-left" style="font-size:1rem"></i>
              </button>
              <button onclick="TemizlikPage.scrollGallery(1)" aria-label="İleri" style="width:3.5rem;height:3.5rem;border-radius:50%;border:1px solid #e5e7eb;background:#fff;color:#111;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s" onmouseover="this.style.background='#dc2626';this.style.borderColor='#dc2626';this.style.color='#fff';this.style.transform='scale(1.05)'" onmouseout="this.style.background='#fff';this.style.borderColor='#e5e7eb';this.style.color='#111';this.style.transform='scale(1)'">
                <i class="fa-solid fa-chevron-right" style="font-size:1rem"></i>
              </button>
            </div>
          </div>

          <!-- Görsel Rulosu (Horizontal Scroll Container) -->
          <div id="temizlik-gallery-scroll" class="no-scrollbar" style="display:flex;gap:1.5rem;overflow-x:auto;scroll-behavior:smooth;scrollbar-width:none;-ms-overflow-style:none;padding:1rem 0 2rem;width:100%">
            ${imageCards}
          </div>
        </div>
      </section>

      <!-- Lightbox (Fotoğraf Önizleme Modalı) -->
      <div id="lightbox" role="dialog" aria-modal="true" aria-label="Fotoğraf önizleme" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:1000;align-items:center;justify-content:center;padding:1rem" onclick="TemizlikPage.closeLightbox()">
        <button onclick="TemizlikPage.closeLightbox()" aria-label="Kapat" style="position:absolute;top:1.5rem;right:1.5rem;width:3rem;height:3rem;border-radius:50%;background:rgba(255,255,255,0.1);border:none;color:#fff;font-size:1.5rem;cursor:pointer;display:flex;align-items:center;justify-content:center">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <img id="lightbox-img" src="" alt="Büyük görsel" style="max-height:90vh;max-width:90vw;object-fit:contain;border-radius:0.5rem;box-shadow:0 8px 64px rgba(0,0,0,0.8)" onclick="event.stopPropagation()" />
      </div>`;
  },

  scrollGallery(direction) {
    const container = document.getElementById('temizlik-gallery-scroll');
    if (!container) return;
    const cardWidth = container.querySelector('.gallery-card')?.clientWidth || 350;
    const scrollAmount = (cardWidth + 24) * 2 * direction; // Kaydırma miktarı (kart genişliği + boşluk) * 2 kart
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
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

  render() {
    const s   = DATA.sectors.TEMIZLIK;
    const img = DATA.images;
    return `
      <div id="page-temizlik" style="width:100%;display:flex;flex-direction:column;background:#fff">
        ${Navbar.render('TEMIZLIK', false)}
        ${SectorHero.render({ title: s.title, desc: s.desc, bgImage: img.TEMIZLIK_BG, id: 'temizlik-main' })}
        ${this.renderGaleri()}
        ${this.renderSplitCTA()}
        ${this.renderEkibimiz()}
        ${this.renderKurumsal()}
        ${this.renderContact()}
        ${Footer.render()}
        ${BottomNav.render('TEMIZLIK', false)}
      </div>`;
  },

  afterRender() {
    /* Hover efekti split paneller için */
    document.querySelectorAll('.split-panel').forEach(panel => {
      const bgImg   = panel.querySelector('.split-bg-img');
      const overlay = panel.querySelector('.split-overlay');
      panel.addEventListener('mouseenter', () => {
        if (bgImg)   { bgImg.style.opacity = '0.8'; bgImg.style.filter = 'none'; }
        if (overlay) { overlay.style.background = 'rgba(0,0,0,0.2)'; }
      });
      panel.addEventListener('mouseleave', () => {
        if (bgImg)   { bgImg.style.opacity = '0.4'; bgImg.style.filter = 'grayscale(1)'; }
        if (overlay) { overlay.style.background = 'rgba(0,0,0,0.5)'; }
      });
    });
  }
};
/* ===========================
   ZERO GROUP — utils.js
   Yardımcı fonksiyonlar
   =========================== */
if (typeof DATA === 'undefined') {
  console.error("DATA bulunamadı");
}
const sanitizeHTML = (str) => {
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
};

const Utils = (() => {
  /* Action registry — inline onclick handler'ları için */
  const _actions = {};
  let _actionIdx = 0;

  function registerAction(fn) {
    const key = `_a${_actionIdx++}`;
    _actions[key] = fn;
    return `Utils.runAction('${key}')`;
  }

  function runAction(key) {
    if (_actions[key]) _actions[key]();
  }

  /* Smooth scroll (navbar offset dahil) */
  function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const top  = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  /* Yeni sekmede aç */
  function openLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return { registerAction, runAction, scrollTo, openLink };
})();
window.Utils = Utils;
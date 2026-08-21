// ハンバーガーメニューの開閉
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    hamburger.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });
}

// コンパクトヘッダー：トップの写真セクションを過ぎたら表示する
const stickyHeader = document.getElementById('stickyHeader');
const topSection = document.querySelector('.hero, .page-title-photo');

if (stickyHeader && topSection) {
  const updateStickyHeader = () => {
    const scrolledPast = topSection.getBoundingClientRect().bottom < 0;
    stickyHeader.classList.toggle('is-visible', scrolledPast);
  };
  window.addEventListener('scroll', updateStickyHeader, { passive: true });
  updateStickyHeader();
}

// 法人／個人タブの切り替え
const tabButtons = document.querySelectorAll('.tab-btn');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const targetId = btn.dataset.target;

    tabButtons.forEach((b) => {
      b.classList.remove('is-active');
      b.setAttribute('aria-selected', 'false');
    });
    document.querySelectorAll('.tab-panel').forEach((p) => p.classList.remove('is-active'));

    btn.classList.add('is-active');
    btn.setAttribute('aria-selected', 'true');
    const panel = document.getElementById(targetId);
    if (panel) panel.classList.add('is-active');
  });
});

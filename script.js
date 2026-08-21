// ハンバーガーメニューの開閉
// 通常ヘッダーと追従ヘッダーで2組あるので、まとめて同じ処理を割り当てる
function setupHamburger(buttonId, navId) {
  const button = document.getElementById(buttonId);
  const menu = document.getElementById(navId);
  if (!button || !menu) return;

  button.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    button.classList.toggle('is-open', isOpen);
    button.setAttribute('aria-expanded', isOpen);
  });
}

setupHamburger('hamburger', 'nav');
setupHamburger('hamburgerCompact', 'navCompact');

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

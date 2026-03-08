(() => {
  const menuBtn = document.querySelector('.menu-btn');
  const body = document.body;
  if (menuBtn) menuBtn.addEventListener('click', ()=> body.classList.toggle('menu-open'));
  document.querySelectorAll('.menu-nav a').forEach(a=>a.addEventListener('click', ()=> body.classList.remove('menu-open')));
})();

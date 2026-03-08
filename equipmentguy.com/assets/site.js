(function(){
  const y = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=y);
})();

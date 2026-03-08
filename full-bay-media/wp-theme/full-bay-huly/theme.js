(() => {
  const menuBtn = document.querySelector('.menu-btn');
  const body = document.body;
  if (menuBtn) menuBtn.addEventListener('click', ()=> body.classList.toggle('menu-open'));
  document.querySelectorAll('.menu-nav a').forEach(a=>a.addEventListener('click', ()=> body.classList.remove('menu-open')));

  const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  const track=document.getElementById('templateTrack');
  if(track){track.innerHTML += track.innerHTML;}
})();

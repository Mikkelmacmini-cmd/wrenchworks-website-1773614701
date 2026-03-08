(() => {
  const menuBtn = document.querySelector('.menu-btn');
  const body = document.body;
  if (menuBtn) menuBtn.addEventListener('click', ()=> body.classList.toggle('menu-open'));
  document.querySelectorAll('.menu-nav a').forEach(a=>a.addEventListener('click', ()=> body.classList.remove('menu-open')));

  const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  const track=document.getElementById('templateTrack');
  if(track){track.innerHTML += track.innerHTML;}

  // global pointer-reactive background
  const bg = document.createElement('div');
  bg.className = 'bg-pointer';
  document.body.appendChild(bg);
  window.addEventListener('pointermove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.body.style.setProperty('--mx', `${x}%`);
    document.body.style.setProperty('--my', `${y}%`);
  }, { passive: true });

  // button hotspot effect
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--bx', `${((e.clientX-r.left)/r.width)*100}%`);
      btn.style.setProperty('--by', `${((e.clientY-r.top)/r.height)*100}%`);
    });
  });

  // card tilt + hotspot
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX-r.left)/r.width;
      const py = (e.clientY-r.top)/r.height;
      const rx = (0.5-py)*5;
      const ry = (px-0.5)*6;
      card.style.transform = `translateY(-6px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.style.setProperty('--cx', `${px*100}%`);
      card.style.setProperty('--cy', `${py*100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
})();

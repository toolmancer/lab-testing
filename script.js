document.addEventListener('DOMContentLoaded', ()=>{
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menuBtn');
  const links = document.querySelectorAll('.sidebar a');
  menuBtn.addEventListener('click', ()=> sidebar.classList.toggle('show'));

  links.forEach(link => {
    link.addEventListener('click', ()=> {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      if(window.innerWidth < 880) sidebar.classList.remove('show');
    });
  });

  // listen for iframe messages to activate links when tool loads itself directly
  window.addEventListener('message', (e)=>{
    if(!e.data || !e.data.type) return;
    if(e.data.type === 'activate' && e.data.href){
      links.forEach(l => l.classList.remove('active'));
      const match = Array.from(links).find(a => a.getAttribute('href') === e.data.href);
      if(match) match.classList.add('active');
    }
  });
});
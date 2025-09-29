document.addEventListener('DOMContentLoaded', ()=>{
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menuBtn');
  const links = document.querySelectorAll('.sidebar a');
  if(menuBtn && sidebar){
    menuBtn.addEventListener('click', ()=> sidebar.classList.toggle('show'));
  }
  links.forEach(link => {
    link.addEventListener('click', ()=> {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      if(window.innerWidth < 880 && sidebar){
        sidebar.classList.remove('show');
      }
    });
  });
});

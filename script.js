// Re-using the provided script.js for potential sidebar/menu logic if needed.
// The main navigation logic is in index.html, so this file might be redundant
// unless used by a specific page layout.

document.addEventListener('DOMContentLoaded', ()=>{
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menuBtn');
  if(menuBtn && sidebar){
    menuBtn.addEventListener('click', ()=> sidebar.classList.toggle('show'));
  }
  // Optional: close sidebar when clicking outside (overlay)
  document.addEventListener('click', function(e){
    if(window.innerWidth < 900 && sidebar.classList.contains('show')) {
      if(!sidebar.contains(e.target) && e.target !== menuBtn) {
        sidebar.classList.remove('show');
      }
    }
  });
});

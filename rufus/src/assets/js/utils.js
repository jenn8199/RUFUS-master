export function initCustomScripts() {
    // Scroll to top
    const btn = document.getElementById("scrollTopBtn");
    if (btn) {
      window.addEventListener("scroll", () => {
        btn.style.display = window.scrollY > 200 ? "block" : "none";
      });
  
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    // Modo oscuro
    const toggleBtn = document.getElementById('darkToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('modo-oscuro');
      });
    }
  
    // Menú de perfil
    const perfilBtn = document.getElementById('perfilBtn');
    const menuPerfil = document.getElementById('menuPerfil');
  
    if (perfilBtn && menuPerfil) {
      perfilBtn.addEventListener('click', () => {
        menuPerfil.style.display = menuPerfil.style.display === 'block' ? 'none' : 'block';
      });
  
      document.addEventListener('click', (e) => {
        if (!perfilBtn.contains(e.target) && !menuPerfil.contains(e.target)) {
          menuPerfil.style.display = 'none';
        }
      });
    }
  }
  
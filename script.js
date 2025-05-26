document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button-change-page");
    const pages = document.querySelectorAll(".page");
  
    function showPage(id) {
      pages.forEach(page => {
        page.classList.remove("active");
        if (page.id === id) {
          page.classList.add("active");
        }
      });
    }
  
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-target");
        showPage(target);
      });
    });
  
    // Mostrar página de inicio por defecto
    showPage("home-page");
  });
  
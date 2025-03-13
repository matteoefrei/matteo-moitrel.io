document.addEventListener('DOMContentLoaded', () => {
    // Gestion du Menu Hamburger (mobile)
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
  
    mobileMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  
    // IntersectionObserver pour l'animation des sections
    const sections = document.querySelectorAll('.section');
    const observerOptions = { threshold: 0.1 };
  
    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  });
  
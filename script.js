// =============================================
//  PORTAFOLIO - AZUCENA CHAVEZ CENTENO
//  script.js
// =============================================

// --- Menú hamburguesa ---
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Cerrar menú al hacer clic en cualquier enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// --- Scroll suave para TODOS los enlaces ancla ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();

    const navHeight = document.getElementById('navbar').offsetHeight;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// --- Habilidades desplegables ---
document.querySelectorAll('.skill-header').forEach(btn => {
  btn.addEventListener('click', () => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const bodyId = btn.getAttribute('aria-controls');
    const body   = document.getElementById(bodyId);

    if (!body) return;

    btn.setAttribute('aria-expanded', String(!isExpanded));
    body.hidden = isExpanded;
  });
});

// Fallback sin JS: las descripciones quedan visibles por defecto si JS no carga
// (están con `hidden` en HTML; si JS no corre, se pueden quitar los `hidden` manualmente)

// --- Navbar: sombra al hacer scroll ---
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });

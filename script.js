// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
            section.style.transition = 'all 0.6s ease-out';
        } else {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
        }
    });
});

// Formulario simple
const form = document.getElementById('contactForm');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensaje enviado, ¡gracias!');
        form.reset();
    });
}

// ------------------------------
// Menú hamburguesa responsive con scroll bloqueado
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        });

        // Cerrar menú al hacer click en un enlace
        navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
        });
    }
    });

    // Header que se reduce al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if(window.scrollY > 50){  // si se ha hecho scroll más de 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
});

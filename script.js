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
// Menú hamburguesa
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });

        // Cerrar menú al hacer click en un enlace
        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
            });
        });
    }
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollThreshold = 50; // umbral de scroll
    if(window.scrollY > scrollThreshold) {
        if(!header.classList.contains('scrolled')) {
            header.classList.add('scrolled');
        }
    } else {
        if(header.classList.contains('scrolled')) {
            header.classList.remove('scrolled');
        }
    }
});

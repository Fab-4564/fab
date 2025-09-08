// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
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
if (form) {
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
    const navbar = document.querySelector(".navbar");

    if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
            document.body.classList.toggle("no-scroll"); // 🔹 Bloquea scroll del body
        });

        // Cerrar menú al hacer click en un enlace
        const links = navLinks.querySelectorAll("a");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
                document.body.classList.remove("no-scroll");
            });
        });
    }

    // 🔹 Detectar si los botones caben en la barra
    const handleMenuResize = () => {
        if (!navLinks || !navbar) return;

        // ancho disponible de la barra
        const availableWidth = navbar.offsetWidth - toggle.offsetWidth - 40;
        // ancho real de los items del menú
        const itemsWidth = Array.from(navLinks.children).reduce((total, li) => {
            return total + li.offsetWidth;
        }, 0);

        if (itemsWidth > availableWidth) {
            // ❌ No caben → esconderlos en la hamburguesa
            navLinks.style.display = "none";
            toggle.style.display = "block";
        } else {
            // ✅ Caben → mostrar en fila
            navLinks.style.display = "flex";
            toggle.style.display = "none";
            navLinks.classList.remove("show");
            document.body.classList.remove("no-scroll");
        }
    };

    window.addEventListener("resize", handleMenuResize);
    handleMenuResize(); // ejecutar al cargar
});

// ------------------------------
// Header que se reduce al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

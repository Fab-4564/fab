<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Catálogo de accesorios para puentes: juntas de dilatación, anclajes, disipadores sísmicos, apoyos de neopreno, pernos y soluciones estructurales. Distribuimos en todo el Perú.">
  <title>Accesorios para Puentes | Corepsa</title>
  <style>
    /* ==== ESTILOS BASE ==== */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f0f2f5;
      color: #333;
      animation: fadeIn 1s ease-in;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    header {
      background: linear-gradient(135deg, #0e2f44, #1c4b6e);
      color: white;
      padding: 30px 20px;
      text-align: center;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    header h1 { margin: 0; font-size: 2.5em; }
    header p { font-size: 1.1em; margin-top: 10px; }

    nav {
      background-color: #14324a;
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 10px;
      position: sticky;
      top: 0;
      z-index: 10;
    }
    nav a {
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s;
    }
    nav a:hover { color: #ffd700; }

    /* ==== BANNER ==== */
    .banner {
      background-image: url('https://via.placeholder.com/1200x400?text=Soluciones+para+Puentes');
      background-size: cover;
      background-position: center;
      height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2em;
      text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
      animation: slideIn 1.5s ease-out;
    }
    @keyframes slideIn {
      from { transform: translateY(-20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    /* ==== PRODUCTOS ==== */
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
      padding: 50px 30px;
    }
    .product {
      background-color: white;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: fadeUp 0.8s ease forwards;
      opacity: 0;
    }
    @keyframes fadeUp {
      from { transform: translateY(30px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .product:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
    .product img { width: 100%; height: 200px; object-fit: cover; }
    .product h2 { font-size: 20px; margin: 15px 0 5px; padding: 0 15px; }
    .product p { font-size: 14px; color: #666; padding: 0 15px 15px; }
    .btn {
      display: block;
      width: max-content;
      margin: 0 auto 15px;
      padding: 10px 20px;
      background-color: #0e2f44;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: background 0.3s ease;
    }
    .btn:hover { background-color: #1b4f72; }

    /* ==== SECCIONES ==== */
    .info-section {
      background-color: #ffffff;
      padding: 40px 20px;
      text-align: center;
      animation: fadeUp 1s ease forwards;
    }
    .info-section h2 { font-size: 26px; margin-bottom: 15px; }
    .info-section p { font-size: 16px; max-width: 900px; margin: 0 auto; }

    /* ==== BOTÓN FLOTANTE ==== */
    .whatsapp-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #25d366;
      color: white;
      padding: 15px;
      border-radius: 50%;
      text-decoration: none;
      font-size: 22px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      z-index: 20;
    }

    /* ==== FOOTER ==== */
    footer {
      background-color: #0e2f44;
      color: white;
      text-align: center;
      padding: 30px;
      margin-top: 40px;
    }
  </style>
</head>
<body>

<header>
  <h1>Accesorios para Puentes</h1>
  <p>Soluciones estructurales de alta ingeniería para la infraestructura vial del Perú</p>
</header>

<nav>
  <a href="#">Inicio</a>
  <a href="#productos">Productos</a>
  <a href="#proyectos">Proyectos</a>
  <a href="#nosotros">Nosotros</a>
  <a href="#contacto">Contacto</a>
</nav>

<div class="banner">
  Expertos en soluciones para puentes y estructuras viales
</div>

<main class="container" id="productos">
  <!-- Productos (igual que antes, aquí puedes añadir más) -->
</main>

<!-- NUEVA SECCIÓN: PROYECTOS -->
<section class="info-section" id="proyectos">
  <h2>Proyectos Destacados</h2>
  <p>Aquí puedes mostrar fotos y descripciones de obras en las que hayas participado, con ubicación y año.</p>
</section>

<!-- SECCIÓN NOSOTROS -->
<section class="info-section" id="nosotros">
  <h2>¿Quiénes Somos?</h2>
  <p>En Corepsa, contamos con más de 15 años brindando soluciones innovadoras...</p>
</section>

<!-- SECCIÓN BLOG -->
<section class="info-section">
  <h2>Noticias y Artículos Técnicos</h2>
  <p>Este espacio lo puedes usar para publicar consejos de mantenimiento, novedades de ingeniería o noticias del sector.</p>
</section>

<!-- SECCIÓN CONTACTO -->
<section class="info-section" id="contacto">
  <h2>Contáctanos</h2>
  <p>¿Tienes un proyecto vial en mente? Escríbenos a <strong>contacto@corepsa.com.pe</strong> o llámanos al <strong>(01) 234-5678</strong>.</p>
</section>

<footer>
  <p>© 2025 Corepsa - Todos los derechos reservados. Lima, Perú</p>
</footer>

<!-- BOTÓN WHATSAPP -->
<a href="https://wa.me/51924769585" class="whatsapp-btn" title="Chatea con nosotros">
  <img src="WhatsApp.svg.webp" alt="WhatsApp">
</a>

</body>
</html>
 

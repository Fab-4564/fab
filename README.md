<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenido a Gang</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #0e2f44, #1c4b6e);
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      animation: fadeIn 1s ease-in-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .welcome-box {
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 15px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      backdrop-filter: blur(8px);
      animation: slideUp 1.2s ease;
    }
    @keyframes slideUp {
      from { transform: translateY(40px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .welcome-box img {
      width: 120px;
      height: auto;
      margin-bottom: 20px;
    }
    h1 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }
    p {
      font-size: 1.1em;
      margin-bottom: 30px;
    }
    .btn {
      display: inline-block;
      padding: 12px 25px;
      background: #ffd700;
      color: #0e2f44;
      text-decoration: none;
      font-weight: bold;
      border-radius: 8px;
      transition: background 0.3s, transform 0.2s;
    }
    .btn:hover {
      background: #f4c300;
      transform: scale(1.05);
    }
  </style>
</head>
<body>

  <div class="welcome-box">
    <!-- Logo (puedes cambiar la ruta por tu logo real) -->
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Logo Corepsa">
    
    <h1>¡Bienvenido a Corepsa!</h1>
    <p>Soluciones estructurales de alta ingeniería para la infraestructura vial del Perú.</p>
    
    <!-- Botón que lleva a gang.html -->
    <a href="gang.html" class="btn">Ir a la página</a>
  </div>

</body>
</html>

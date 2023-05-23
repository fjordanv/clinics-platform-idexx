<!DOCTYPE html>
<html>
<head>
  <title>Página de Aterrizaje</title>
  <style>
    body {
      background-image: url('ruta/imagen-fondo.jpg');
      background-size: cover;
      background-position: center;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .login-form {
      background-color: rgba(255, 255, 255, 0.8);
      padding: 20px;
      border-radius: 5px;
    }

    .login-form input {
      display: block;
      width: 100%;
      margin-bottom: 10px;
      padding: 5px;
      font-size: 16px;
    }

    .login-form button {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
    }

    .login-form button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="container">
    <form class="login-form" id="loginForm">
      <input type="text" placeholder="Usuario" id="usernameInput">
      <input type="password" placeholder="Contraseña" id="passwordInput">
      <button type="submit">Iniciar sesión</button>
    </form>
  </div>

  <script>
    // Función para manejar el envío del formulario
    function handleFormSubmit(event) {
      event.preventDefault(); // Evitar envío por defecto

      // Obtener los valores de usuario y contraseña
      var username = document.getElementById('usernameInput').value;
      var password = document.getElementById('passwordInput').value;

      // Aquí puedes realizar cualquier lógica adicional, como enviar los datos a un servidor para autenticación

      // Ejemplo de lógica básica para demostración
      if (username === 'usuario' && password === 'contraseña') {
        alert('Inicio de sesión exitoso');
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    }

    // Agregar el controlador de eventos al formulario
    var form = document.getElementById('loginForm');
    form.addEventListener('submit', handleFormSubmit);
  </script>
</body>
</html>

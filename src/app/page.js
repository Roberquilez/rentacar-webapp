// LoginPage.js
import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://miapi.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'UsuarioRentACar': 'valorEspecifico'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem('jwt', token); // Almacenar el JWT
        // Redirigir al usuario, por ejemplo, a la página de inicio
        window.location.href = '/inicio';
      } else {
        alert('Login fallido');
      }
    } catch (error) {
      console.error('Error durante el login:', error);
    }
  };

  return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Usuario:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
  );
}

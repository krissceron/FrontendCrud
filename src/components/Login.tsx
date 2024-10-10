import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:7249/api/auth/Login', null, {
                params: {
                    nombreusuario: username,
                    contrasenia: password,
                },
            });

            if (response.data) {
                console.log("Usuario autenticado:", response.data); // Verificar el valor de la respuesta
                localStorage.setItem('auth', JSON.stringify(response.data)); // Guardar el usuario en localStorage
                console.log("Redirigiendo a la lista de usuarios");
                navigate('/userlist'); // Redirigir a la lista de usuarios
        }
    } catch (error) {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
};

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Iniciar Sesión</button>
            <button onClick={() => navigate('/register')}>Registrarse</button>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:7249/api/Usuarios/Login', {
                usuUsuario: username,
                usuContrasenia: password,
            });

            if (response.data) {
                localStorage.setItem('auth', JSON.stringify(response.data)); // Guardar el usuario en localStorage
                console.log("Usuario autenticado:", response.data);
                navigate('/userlist'); // Redirigir a la lista de usuarios
            }
        } catch (error) {
            console.error("Error en el login:", error);
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

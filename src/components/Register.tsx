import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            await axios.post('https://localhost:7249/api/Usuarios/Nuevo', {
                usuNombre: nombre,
                usuApellido: apellido,
                usuCorreo: correo,
                usuUsuario: username,
                usuContrasenia: password,
            });
            alert('Usuario registrado con éxito.');
            navigate('/login'); // Redirigir al login después del registro
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
            alert('Error al registrar el usuario.');
        }
    };

    return (
        <div>
            <h1>Registrarse</h1>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            <input
                type="email"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
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
            <button onClick={handleRegister}>Registrarse</button>
            <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
        </div>
    );
};

export default Register;
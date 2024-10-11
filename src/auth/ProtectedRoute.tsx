import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isAuthenticated = localStorage.getItem('auth'); // Verificar si hay un token en localStorage

    // Si no hay un usuario autenticado, redirigir a la página de login
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // Si el usuario está autenticado, renderizar el componente hijo
    return children;
};

export default ProtectedRoute;

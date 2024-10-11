import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './auth/ProtectedRoute'; // Asegúrate de importar desde la carpeta correcta

const App: React.FC = () => {
    // Verificar si el usuario está autenticado leyendo el localStorage
    const isAuthenticated = !!localStorage.getItem('user');
    console.log("Estado de autenticación:", isAuthenticated); // Verificar el estado de autenticación


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* Ruta protegida */}
                <Route
                    path="/userlist"
                    element={
                        <ProtectedRoute>
                            <UserList />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/create"
                    element={
                        <ProtectedRoute>
                            <UserForm />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/edit/:id"
                    element={
                        <ProtectedRoute>
                            <UserForm />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/view/:id"
                    element={
                        <ProtectedRoute>
                            <UserDetail />
                        </ProtectedRoute>
                    }
                />
                <Route path="*" element={<Navigate to="/login" />} />            
                </Routes>
        </Router>
    );
};

export default App;
import axios from 'axios';
import { User } from '../models/User';

const API_URL = 'https://localhost:7249/api/Usuarios';

const UserService = {
    // Obtener todos los usuarios: GET /api/Usuarios/Lista
    getAllUsers: async () => {
        const response = await axios.get(`${API_URL}/Lista`);
        return response.data;
    },
    // Obtener usuario por ID: GET /api/Usuarios/Obtener/{id}
    getUserById: async (id: number) => {
        const response = await axios.get(`${API_URL}/Obtener/${id}`);
        return response.data;
    },
    // Crear usuario: POST /api/Usuarios/Nuevo
    createUser: async (user: User) => {
        await axios.post(`${API_URL}/Nuevo`, user);
    },
    // Actualizar usuario: PUT /api/Usuarios/Editar/{id}
    updateUser: async (user: User) => {
        await axios.put(`${API_URL}/Editar/${user.usuId}`, user);
    },
    // Eliminar usuario: DELETE /api/Usuarios/Eliminar/{id}
    deleteUser: async (id: number) => {
        await axios.delete(`${API_URL}/Eliminar/${id}`);
    },
    // Iniciar sesión: GET /api/Usuarios/IniciarSesion/{nombreusuario}/{contrasenia}
    login: async (nombreusuario: string, contrasenia: string) => {
        const response = await axios.get(`${API_URL}/IniciarSesion/${nombreusuario}/${contrasenia}`);
        return response.data;
    }
};

export default UserService;

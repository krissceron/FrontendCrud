# Frontend CRUD de Usuarios - React y TypeScript

Este proyecto contiene el frontend de una aplicación de login y CRUD (Crear, Leer, Actualizar, Eliminar) de usuarios. Está desarrollado utilizando el framework **React** con **TypeScript**, proporcionando una interfaz de usuario eficiente y moderna.

## Índice

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)

## Descripción

Este proyecto implementa un sistema de login de usuarios junto con un CRUD completo para gestionar los datos de los usuarios. El objetivo principal es permitir a los usuarios iniciar sesión y a los administradores gestionar las cuentas de otros usuarios de manera eficiente.

## Características

- **Login de usuarios**: Inicio de sesión seguro para acceder a la plataforma.
- **CRUD de usuarios**:
  - Crear nuevos usuarios.
  - Leer y listar los usuarios existentes.
  - Actualizar la información de los usuarios.
  - Eliminar usuarios de la base de datos.
- **Validación de formularios**: Los formularios cuentan con validaciones de datos en el cliente.
- **Interfaz responsiva**: Adaptada para dispositivos móviles y de escritorio.
  
## Tecnologías

Este proyecto fue construido utilizando las siguientes tecnologías:

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático.
- **React Router**: Para la navegación entre las diferentes rutas.
- **Axios**: Para la comunicación con APIs externas.
- **CSS**: Para el estilo de los componentes.

## Requisitos previos

Antes de instalar y ejecutar el proyecto, asegúrate de tener lo siguiente instalado:

- **Node.js** (versión 14 o superior)
- **npm** (versión 6 o superior) o **yarn**

## Instalación

Sigue los siguientes pasos para clonar y configurar el proyecto en tu máquina local.

1. Clona el repositorio:

   ```bash
   git clone https://github.com/krissceron/FrontendCrud.git
   
2. Navega al directorio del proyecto:
   
   ```bash
   cd FrontendCrud

3. Instala las dependencias:
   
   ```bash
   npm install

  o si prefieres usar yarn:
  
       cd FrontendCrud

## Uso
Para ejecutar el proyecto en modo de desarrollo, usa el siguiente comando:

     npm start

o con yarn:

     yarn start
     
Esto creará una carpeta build con los archivos listos para ser desplegados en un servidor.
## Estructura del proyecto
La estructura del proyecto sigue el siguiente formato:

    ├── public/               # Archivos públicos y assets
    ├── src/                  # Código fuente
    │   ├── components/       # Componentes reutilizables
    │   ├── pages/            # Páginas principales
    │   ├── services/         # Servicios para la comunicación con la API
    │   ├── App.tsx           # Punto de entrada de la aplicación
    │   └── index.tsx         # Archivo principal de React
    ├── package.json          # Dependencias y scripts del proyecto
    └── tsconfig.json         # Configuración de TypeScript

## Contribución
Las contribuciones son bienvenidas. Si encuentras un problema o tienes alguna mejora que sugerir, por favor crea un issue o un pull request en el repositorio.

Pasos para contribuir:

1. Haz un fork del proyecto.
2. Crea una rama nueva (git checkout -b feature/nueva-funcionalidad).
3. Realiza los cambios y haz commit (git commit -m 'Añadir nueva funcionalidad').
4. Sube los cambios (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.

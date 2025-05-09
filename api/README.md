# Syncroniza API

Backend para la aplicación Syncroniza desarrollado con Node.js, Express, TypeScript y MongoDB.

## Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- MongoDB

## Instalación

1. Instala las dependencias:
   ```
   npm install
   ```

2. Crea un archivo `.env` basado en `.env.example` y configura las variables de entorno:
   ```
   cp .env.example .env
   ```

3. Edita el archivo `.env` según tu configuración local.

## Estructura del Proyecto

```
src/
  ├── app.ts               # Punto de entrada de la aplicación
  ├── router.ts            # Router principal
  ├── config/              # Configuraciones (MongoDB, etc.)
  ├── controllers/         # Controladores de la aplicación
  ├── helpers/             # Funciones de ayuda
  ├── interfaces/          # Interfaces TypeScript
  ├── middleware/          # Middleware (autenticación, etc.)
  ├── models/              # Modelos de la base de datos
  ├── routes/              # Definición de rutas
  └── tasks/               # Tareas programadas
```

## Ejecución

### Desarrollo

```
npm run dev
```

### Producción

```
npm run build
npm start
```

## API Endpoints

### Autenticación

- `POST /api/auth/login` - Iniciar sesión
- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/logout` - Cerrar sesión
- `GET /api/auth/profile` - Obtener perfil del usuario actual

### Proyectos

- `GET /api/projects` - Obtener todos los proyectos
- `GET /api/projects/:id` - Obtener un proyecto específico
- `POST /api/projects` - Crear un nuevo proyecto
- `PUT /api/projects/:id` - Actualizar un proyecto
- `DELETE /api/projects/:id` - Eliminar un proyecto

## Docker

El proyecto incluye un Dockerfile para facilitar la implementación en contenedores. Para construir y ejecutar la imagen:

```
docker build -t syncroniza-api .
docker run -p 3000:3000 syncroniza-api
```

## Autor

Equipo Syncroniza

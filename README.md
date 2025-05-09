# Syncroniza App

Monorepo para la aplicación Syncroniza que incluye el frontend (web) y el backend (api) de la plataforma.

## Estructura del Proyecto

Este repositorio está organizado como un monorepo con la siguiente estructura:

- `/api`: Backend de Syncroniza desarrollado con Node.js, Express, TypeScript y MongoDB
- `/web`: Frontend de Syncroniza desarrollado con React, TypeScript y Tailwind CSS

## Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- MongoDB (para desarrollo local)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/MatiasMM21/syncroniza-app.git
   cd syncroniza-app
   ```

2. Instala las dependencias del backend:
   ```
   cd api
   npm install
   ```

3. Instala las dependencias del frontend:
   ```
   cd ../web
   npm install
   ```

## Configuración

### Backend (API)

1. Crea un archivo `.env` en la carpeta `/api` basado en el archivo `.env.example`:
   ```
   cp .env.example .env
   ```

2. Edita el archivo `.env` con tus configuraciones:
   ```
   MONGO_HOST=localhost
   MONGO_DATABASE=syncroniza
   MONGO_USER=root
   MONGO_PASSWORD=Passw0rd
   JWT_SECRET=tu_secreto_jwt
   PORT=3000
   ```

### Frontend (Web)

El frontend está configurado para conectarse automáticamente al backend. En desarrollo, se conectará a `http://localhost:3000` por defecto.

## Ejecución

### Backend (API)

```
cd api
npm run dev
```

El servidor backend se iniciará en http://localhost:3000 (o el puerto configurado en tu .env).

### Frontend (Web)

```
cd web
npm start
```

La aplicación frontend se iniciará en http://localhost:3001 y se conectará automáticamente al backend.

## Producción

### Backend (API)

```
cd api
npm run build
npm start
```

### Frontend (Web)

```
cd web
npm run build
```

Los archivos de producción se generarán en la carpeta `/web/build` y pueden ser servidos por cualquier servidor web estático.

## Docker (Opcional)

El proyecto incluye archivos Docker para facilitar la implementación:

```
docker-compose up -d
```

## Contacto

Para más información, contacta al equipo de desarrollo de Syncroniza.
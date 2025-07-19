# Vehicle Registration System

## Descripción
Sistema full-stack para el registro de vehículos con backend en Express.js y frontend con SASS profesional.

## Estructura del Proyecto

```
project/
├── backend/                    # Backend API
│   ├── src/
│   │   ├── controllers/       # Controladores de rutas
│   │   ├── middlewares/       # Middleware personalizado
│   │   ├── models/           # Modelos de MongoDB/Mongoose
│   │   ├── routes/           # Definición de rutas
│   │   ├── services/         # Servicios de negocio
│   │   ├── utils/            # Utilidades y helpers
│   │   ├── validators/       # Validadores de datos
│   │   └── app.js            # Punto de entrada del servidor
│   ├── package.json          # Dependencias del backend
│   └── .env                  # Variables de entorno
├── frontend/                   # Frontend estático
│   ├── src/
│   │   └── sass/             # Archivos SASS organizados
│   │       ├── abstracts/    # Variables, mixins, funciones
│   │       ├── base/         # Estilos base y reset
│   │       ├── components/   # Componentes reutilizables
│   │       ├── layout/       # Layout y grid
│   │       ├── pages/        # Estilos específicos de páginas
│   │       ├── themes/       # Temas (claro/oscuro)
│   │       ├── vendors/      # Librerías de terceros
│   │       └── main.scss     # Archivo principal de SASS
│   ├── public/               # Archivos estáticos
│   │   ├── css/             # CSS compilado
│   │   ├── js/              # JavaScript del frontend
│   │   └── index.html       # Página principal
│   └── package.json         # Dependencias del frontend (opcional)
├── .github/
│   └── workflows/           # GitHub Actions
├── .env                     # Variables de entorno globales
├── .gitignore
├── Procfile                 # Configuración de Heroku
├── package.json             # Scripts globales del proyecto
└── README.md
```

## Instalación y Configuración

### 1. Instalar dependencias
```bash
# Instalar dependencias del backend
npm run install:backend

# O instalar todas las dependencias
npm run install:all
```

### 2. Configurar variables de entorno
Asegúrate de tener un archivo `.env` con:
```
MONGODB_URI=tu_url_de_mongodb
PORT=3000
```

### 3. Ejecutar el proyecto

#### Desarrollo
```bash
# Iniciar el servidor de desarrollo
npm start

# O iniciar solo el backend
npm run start:backend
```

#### Producción
```bash
npm run start:prod
```

## Scripts Disponibles

### Scripts globales (desde la raíz)
- `npm start` - Inicia el servidor de desarrollo
- `npm run start:backend` - Inicia solo el backend
- `npm run start:prod` - Inicia en modo producción
- `npm run install:backend` - Instala dependencias del backend
- `npm run install:all` - Instala todas las dependencias

### Scripts del backend
- `npm start` - Inicia con nodemon (desarrollo)
- `npm run start:prod` - Inicia con node (producción)

### Scripts del frontend (opcional)
- `npm run sass:watch` - Compila SASS en modo watch
- `npm run sass:build` - Compila SASS para producción

## API Endpoints

### Vehículos
- `GET /vehicles/` - Página principal
- `GET /vehicles/all` - Obtener todos los vehículos
- `GET /vehicles/search?matricula=XXX` - Buscar vehículo por matrícula
- `POST /vehicles/addVehicle` - Agregar nuevo vehículo

### Estructura de datos del vehículo
```json
{
  "Marca": "Toyota",
  "Modelo": "Corolla",
  "Matricula": "ABC1234",
  "Año": 2023,
  "Color": "Azul"
}
```

## Arquitectura

### Backend
- **Express.js** como framework web
- **MongoDB/Mongoose** para la base de datos
- **Arquitectura MVC** con separación clara de responsabilidades
- **Middleware personalizado** para manejo de errores
- **Validación de datos** con express-validator
- **Servicios** para lógica de negocio
- **Utilidades** para funciones comunes

### Frontend
- **SASS** con arquitectura 7-1
- **Bootstrap** como framework CSS
- **JavaScript modular** para interactividad
- **Estructura semántica** de archivos

## Despliegue

### Heroku
El proyecto está configurado para desplegar en Heroku con:
- `Procfile` configurado para el nuevo punto de entrada
- GitHub Actions para CI/CD automático
- Variables de entorno configuradas en Heroku

### Variables de entorno requeridas en Heroku
- `MONGODB_URI` - URL de conexión a MongoDB Atlas
- `PORT` - Puerto (automático en Heroku)

## Desarrollo

### Estructura de desarrollo recomendada
1. **Backend**: Desarrollo de APIs en `backend/src/`
2. **Frontend**: Desarrollo de estilos en `frontend/src/sass/`
3. **Testing**: Agregar tests en cada módulo correspondiente
4. **Documentación**: Mantener README actualizado

### Buenas prácticas implementadas
- Separación clara entre frontend y backend
- Manejo centralizado de errores
- Validación de datos de entrada
- Estructura modular y escalable
- Configuración de entorno separada
- Scripts organizados por contexto

## Tecnologías Utilizadas

### Backend
- Node.js
- Express.js
- MongoDB/Mongoose
- dotenv
- cors
- express-validator
- nodemon

### Frontend
- SASS/SCSS
- Bootstrap
- JavaScript ES6+
- HTML5

### DevOps
- GitHub Actions
- Heroku
- npm scripts
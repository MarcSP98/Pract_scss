# Sistema de Registro de Vehículos

Un sistema web completo para el registro y gestión de vehículos, desarrollado con una arquitectura profesional que separa el frontend y backend.

## 🏗️ Estructura del Proyecto

```
/
├── .env                    # Variables de entorno globales
├── .github/               # Configuración de GitHub Actions
├── .gitignore             # Archivos ignorados por Git
├── Procfile               # Configuración para despliegue (Heroku)
├── package.json           # Configuración del monorepo
├── README.md              # Documentación principal
├── backend/               # 🔧 Backend (API REST)
│   ├── .env              # Variables de entorno del backend
│   ├── package.json      # Dependencias y scripts del backend
│   └── src/
│       ├── app.js        # Punto de entrada de la aplicación
│       ├── controllers/  # Controladores de las rutas
│       │   └── vehicleController.js
│       ├── middlewares/  # Middlewares personalizados
│       │   ├── errorHandler.js
│       │   └── logger.js
│       ├── models/       # Modelos de base de datos (MongoDB)
│       │   └── vehicles.js
│       ├── routes/       # Definición de rutas
│       │   └── vehicles.js
│       ├── services/     # Lógica de negocio
│       │   └── vehicleService.js
│       ├── utils/        # Utilidades y helpers
│       │   └── index.js
│       └── validators/   # Validadores de datos
│           └── vehicleValidator.js
└── frontend/              # 🎨 Frontend (HTML/CSS/JS)
    ├── package.json      # Dependencias y scripts del frontend
    ├── public/           # Archivos estáticos
    │   ├── index.html    # Página principal
    │   ├── css/          # CSS compilado
    │   │   ├── styles.css
    │   │   └── styles.css.map
    │   └── js/           # JavaScript del cliente
    │       ├── main.js
    │       ├── components/
    │       ├── services/
    │       ├── ui/
    │       └── validation/
    └── src/
        └── sass/         # Código fuente SASS (Arquitectura 7-1)
            ├── abstracts/  # Variables, mixins, funciones
            ├── base/       # Reset, tipografía, estilos base
            ├── components/ # Componentes reutilizables
            ├── layout/     # Header, footer, navegación
            ├── pages/      # Estilos específicos de páginas
            ├── themes/     # Temas (claro/oscuro)
            ├── vendors/    # CSS de terceros (Bootstrap)
            └── main.scss   # Archivo principal SASS
```

## 🚀 Tecnologías Utilizadas

### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **CORS** - Manejo de cross-origin requests
- **dotenv** - Gestión de variables de entorno

### Frontend
- **HTML5** - Estructura
- **SASS** - Preprocesador CSS (Arquitectura 7-1)
- **JavaScript (ES6+)** - Lógica del cliente
- **Bootstrap** - Framework CSS

## 📦 Instalación y Configuración

### Prerequisitos
- Node.js (v14 o superior)
- npm o yarn
- MongoDB Atlas (o instancia local de MongoDB)

### Instalación

1. **Clonar el repositorio:**
```bash
git clone <URL_DEL_REPOSITORIO>
cd Pract_scss
```

2. **Instalar dependencias:**
```bash
# Instalar dependencias del backend
npm run install:backend

# Instalar dependencias del frontend
npm run install:frontend

# O instalar ambas a la vez
npm run install:all
```

3. **Configurar variables de entorno:**
```bash
# El archivo .env ya contiene las configuraciones necesarias
# Asegúrate de que las credenciales de MongoDB Atlas sean correctas
```

## 🏃‍♂️ Ejecución

### Desarrollo

**Iniciar el backend:**
```bash
npm run dev
# o desde la carpeta backend:
cd backend && npm run dev
```

**Compilar SASS (en modo watch):**
```bash
npm run sass:watch
# o desde la carpeta frontend:
cd frontend && npm run sass
```

### Producción

**Iniciar el servidor:**
```bash
npm start
```

**Compilar SASS:**
```bash
npm run sass:build
```

## 📡 API Endpoints

### Vehículos

- **GET** `/vehicles/` - Servir página principal
- **POST** `/vehicles/addVehicle` - Registrar nuevo vehículo
- **GET** `/vehicles/getVehicles` - Obtener todos los vehículos
- **GET** `/vehicles/searchByLicense?licensePlate=XXX` - Buscar vehículo por matrícula

### Ejemplo de uso:

```javascript
// Registrar vehículo
POST /vehicles/addVehicle
{
    "Marca": "Toyota",
    "Modelo": "Corolla",
    "Matricula": "1234ABC",
    "Año": 2022,
    "Color": "Azul"
}
```

## 🎨 Estructura SASS

El proyecto utiliza la metodología **7-1 Pattern** para organizar el código SASS:

- **abstracts/**: Variables, mixins y funciones
- **base/**: Estilos base, reset y tipografía
- **components/**: Componentes modulares (botones, inputs, cards)
- **layout/**: Estructuras de layout (header, forms, modales)
- **pages/**: Estilos específicos de páginas
- **themes/**: Temas de colores (claro/oscuro)
- **vendors/**: CSS de librerías externas

## 🔧 Scripts Disponibles

### Raíz del proyecto:
```bash
npm start          # Iniciar backend en producción
npm run dev        # Iniciar backend en desarrollo
npm run install:all # Instalar todas las dependencias
npm run sass:watch # Compilar SASS en modo watch
npm run sass:build # Compilar SASS una vez
```

### Backend:
```bash
npm start          # Iniciar con Node.js
npm run dev        # Iniciar con Nodemon (hot reload)
```

### Frontend:
```bash
npm run sass       # Compilar SASS en modo watch
npm run sass:build # Compilar SASS una vez
```

## 🌍 Despliegue

El proyecto está configurado para desplegarse en Heroku utilizando el `Procfile` incluido:

```
web: cd backend && npm start
```

## 🤝 Contribución

1. Fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia ISC.

## 🏗️ Arquitectura del Proyecto

### Backend (MVC Pattern)
- **Models**: Definición de esquemas de datos
- **Views**: Respuestas JSON (API REST)
- **Controllers**: Lógica de manejo de requests
- **Services**: Lógica de negocio
- **Middlewares**: Procesamiento de requests
- **Validators**: Validación de datos de entrada
- **Utils**: Funciones utilitarias

### Frontend (Modular Structure)
- **Components**: Módulos JavaScript reutilizables
- **Services**: Servicios para manejo de datos
- **UI**: Componentes de interfaz de usuario
- **Validation**: Validadores del lado del cliente

## ⚙️ Configuración de Desarrollo

Para un entorno de desarrollo óptimo:

1. **Backend**: El servidor se reinicia automáticamente con Nodemon
2. **Frontend**: SASS se compila automáticamente al detectar cambios
3. **Hot Reload**: Configura tu editor para recarga automática del navegador

## 🐛 Resolución de Problemas

### Error de conexión a MongoDB
- Verifica las credenciales en el archivo `.env`
- Asegúrate de que tu IP esté en la whitelist de MongoDB Atlas

### Error de compilación SASS
- Verifica que las dependencias del frontend estén instaladas
- Ejecuta `npm run install:frontend` si es necesario

### Puerto en uso
- Cambia el puerto en el archivo `.env`
- Verifica que no haya otras aplicaciones usando el puerto 3000
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const DatabaseService = require('./services/databaseService');
const { validateEnvVars } = require('./utils/helpers');
const { errorHandler, notFound } = require('./middlewares/errorHandler');

const app = express();

// Validate environment variables
try {
    validateEnvVars();
} catch (error) {
    console.error('Configuration error:', error.message);
    process.exit(1);
}

const port = process.env.PORT;

// Middleware CORS
app.use(cors());

// Middleware para manejar datos JSON
app.use(express.json());

// Servir archivos estáticos
app.use('/public', express.static(path.join(__dirname, '../../frontend/public')));

// Connect to database
DatabaseService.connect()
    .catch(err => {
        console.error('Failed to connect to database:', err);
        process.exit(1);
    });

// Rutas
const vehiclesRouter = require('./routes/vehicles');
app.use('/vehicles', vehiclesRouter);

// Manejo de rutas no encontradas
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en ${port}`);
});
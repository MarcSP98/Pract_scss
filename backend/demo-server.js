const express = require('express');
const cors = require('cors');
const path = require('path');
const logger = require('./src/middlewares/logger');
const errorHandler = require('./src/middlewares/errorHandler');
const app = express();

// Puerto del servidor
const port = process.env.PORT || 3000;

// Middleware CORS
app.use(cors());

// Logger middleware
app.use(logger);

// Middleware para manejar datos JSON
app.use(express.json());

// Servir archivos estáticos desde frontend
app.use('/public', express.static(path.join(__dirname, '../frontend/public')));

// Rutas de prueba sin base de datos
const testData = [
    { id: 1, Marca: "Toyota", Modelo: "Corolla", Matricula: "1234ABC", Año: 2020, Color: "Azul" },
    { id: 2, Marca: "Honda", Modelo: "Civic", Matricula: "5678DEF", Año: 2021, Color: "Rojo" }
];

// Ruta principal para servir el archivo HTML
app.get('/vehicles/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../frontend/public', 'index.html'));
    } catch (err) {
        console.error('Error al servir archivo HTML:', err);
        res.status(500).json({ message: 'Error al cargar la página' });
    }
});

// Ruta de prueba para obtener vehículos
app.get('/vehicles/getVehicles', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Vehículos obtenidos exitosamente',
        data: testData
    });
});

// Ruta de prueba para agregar vehículo
app.post('/vehicles/addVehicle', (req, res) => {
    const { Marca, Modelo, Matricula, Año, Color } = req.body;
    
    if (!Marca || !Modelo || !Matricula || !Año || !Color) {
        return res.status(400).json({
            success: false,
            message: 'Faltan campos obligatorios'
        });
    }
    
    const newVehicle = {
        id: testData.length + 1,
        Marca,
        Modelo,
        Matricula,
        Año,
        Color
    };
    
    testData.push(newVehicle);
    
    res.status(201).json({
        success: true,
        message: 'Vehículo guardado exitosamente',
        data: newVehicle
    });
});

// Manejo de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`🚀 Servidor de demostración ejecutándose en puerto ${port}`);
    console.log(`📱 Frontend disponible en: http://localhost:${port}/vehicles/`);
    console.log(`🔧 API de prueba disponible en: http://localhost:${port}/vehicles/getVehicles`);
});

module.exports = app;
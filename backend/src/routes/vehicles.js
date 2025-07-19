const express = require('express');
const path = require('path');
const vehicleController = require('../controllers/vehicleController');
const router = express.Router();

// Middleware para analizar el cuerpo de la solicitud como JSON
router.use(express.json());

// Ruta principal para servir el archivo HTML desde la carpeta frontend
router.get('/', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../../../frontend/public', 'index.html'));
    } catch (err) {
        console.error('Error al servir archivo HTML:', err);
        res.status(500).json({ message: 'Error al cargar la página' });
    }
});

// Rutas de vehículos usando controladores
router.post('/addVehicle', vehicleController.createVehicle);
router.get('/getVehicles', vehicleController.getAllVehicles);
router.get('/searchByLicense', vehicleController.getVehicleByLicense);

module.exports = router;
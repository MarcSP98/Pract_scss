const express = require('express');
const VehicleController = require('../controllers/vehicleController');
const router = express.Router();

// Middleware para analizar el cuerpo de la solicitud como JSON
router.use(express.json());

// Routes
router.get('/', VehicleController.serveHomePage);
router.get('/search', VehicleController.searchVehicleByMatricula);
router.post('/addVehicle', VehicleController.addVehicle);
router.get('/all', VehicleController.getAllVehicles);

module.exports = router;
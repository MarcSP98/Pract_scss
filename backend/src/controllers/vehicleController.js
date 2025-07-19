const path = require('path');
const Vehicle = require('../models/vehicles');

class VehicleController {
    // Serve the main HTML page
    static serveHomePage(req, res) {
        try {
            res.sendFile(path.join(__dirname, '../../../frontend/public', 'index.html'));
        } catch (err) {
            console.error('Error al servir archivo HTML:', err);
            res.status(500).json({ message: 'Error al cargar la página' });
        }
    }

    // Search for vehicles (placeholder - needs to be implemented properly)
    static async searchVehicleByMatricula(req, res) {
        try {
            const { matricula } = req.query;

            if (!matricula) {
                return res.status(400).json({ message: 'Matrícula es obligatoria' });
            }

            const vehicle = await Vehicle.findOne({ Matricula: matricula });

            if (!vehicle) {
                return res.status(404).json({ message: 'Vehículo no encontrado' });
            }

            res.status(200).json(vehicle);
        } catch (err) {
            console.error('Error al buscar vehículo:', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    // Add a new vehicle
    static async addVehicle(req, res) {
        try {
            const { Marca, Modelo, Matricula, Año, Color } = req.body;

            // Validate required fields
            if (!Marca || !Modelo || !Matricula || !Año || !Color) {
                return res.status(400).json({ message: 'Faltan campos obligatorios' });
            }

            // Check if vehicle with this matricula already exists
            const existingVehicle = await Vehicle.findOne({ Matricula });
            if (existingVehicle) {
                return res.status(400).json({ message: 'La matrícula ya está en uso' });
            }

            // Create and save the new vehicle
            const newVehicle = new Vehicle({ Marca, Modelo, Matricula, Año, Color });
            const vehicleSaved = await newVehicle.save();

            res.status(201).json({
                message: 'Vehículo guardado exitosamente',
                vehicle: vehicleSaved
            });
        } catch (err) {
            console.error('Error al guardar vehículo:', err);

            // Handle specific validation errors
            if (err.name === 'ValidationError') {
                return res.status(400).json({ message: err.message });
            }

            res.status(500).json({ message: 'Error en la base de datos' });
        }
    }

    // Get all vehicles
    static async getAllVehicles(req, res) {
        try {
            const vehicles = await Vehicle.find();
            res.status(200).json(vehicles);
        } catch (err) {
            console.error('Error al obtener vehículos:', err);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
}

module.exports = VehicleController;
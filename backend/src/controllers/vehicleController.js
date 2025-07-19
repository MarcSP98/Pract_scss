const vehicleService = require('../services/vehicleService');
const vehicleValidator = require('../validators/vehicleValidator');
const { responseUtils } = require('../utils');

const vehicleController = {
    // Crear un nuevo vehículo
    async createVehicle(req, res) {
        try {
            const vehicleData = req.body;

            // Validar datos del vehículo
            const validation = vehicleValidator.validateVehicleData(vehicleData);
            if (!validation.isValid) {
                return responseUtils.badRequest(res, 'Datos de vehículo inválidos', validation.errors);
            }

            // Crear vehículo usando el servicio
            const vehicleSaved = await vehicleService.createVehicle(vehicleData);

            return responseUtils.success(
                res, 
                vehicleSaved, 
                'Vehículo guardado exitosamente', 
                201
            );
        } catch (err) {
            console.error('Error al guardar vehículo:', err);
            
            if (err.message === 'La matrícula ya está en uso') {
                return responseUtils.badRequest(res, err.message);
            }

            return responseUtils.error(res);
        }
    },

    // Obtener todos los vehículos
    async getAllVehicles(req, res) {
        try {
            const vehicles = await vehicleService.getAllVehicles();
            return responseUtils.success(res, vehicles, 'Vehículos obtenidos exitosamente');
        } catch (err) {
            console.error('Error al obtener vehículos:', err);
            return responseUtils.error(res);
        }
    },

    // Buscar vehículo por matrícula
    async getVehicleByLicense(req, res) {
        try {
            const { licensePlate } = req.query;

            if (!licensePlate) {
                return responseUtils.badRequest(res, 'Matrícula es obligatoria');
            }

            const vehicle = await vehicleService.findVehicleByLicense(licensePlate);

            if (!vehicle) {
                return responseUtils.notFound(res, 'Vehículo no encontrado');
            }

            return responseUtils.success(res, vehicle, 'Vehículo encontrado');
        } catch (err) {
            console.error('Error al buscar vehículo:', err);
            return responseUtils.error(res);
        }
    }
};

module.exports = vehicleController;
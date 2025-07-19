const Vehicle = require('../models/vehicles');

const vehicleService = {
    // Crear un nuevo vehículo
    async createVehicle(vehicleData) {
        try {
            // Verificar si la matrícula ya existe
            const existingVehicle = await Vehicle.findOne({ Matricula: vehicleData.Matricula });
            if (existingVehicle) {
                throw new Error('La matrícula ya está en uso');
            }

            const newVehicle = new Vehicle(vehicleData);
            return await newVehicle.save();
        } catch (error) {
            throw error;
        }
    },

    // Obtener todos los vehículos
    async getAllVehicles() {
        try {
            return await Vehicle.find().sort({ _id: -1 }); // Ordenar por más reciente
        } catch (error) {
            throw error;
        }
    },

    // Buscar vehículo por matrícula
    async findVehicleByLicense(licensePlate) {
        try {
            return await Vehicle.findOne({ Matricula: licensePlate });
        } catch (error) {
            throw error;
        }
    },

    // Buscar vehículo por ID
    async findVehicleById(id) {
        try {
            return await Vehicle.findById(id);
        } catch (error) {
            throw error;
        }
    },

    // Actualizar vehículo
    async updateVehicle(id, updateData) {
        try {
            return await Vehicle.findByIdAndUpdate(
                id, 
                updateData, 
                { new: true, runValidators: true }
            );
        } catch (error) {
            throw error;
        }
    },

    // Eliminar vehículo
    async deleteVehicle(id) {
        try {
            return await Vehicle.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
};

module.exports = vehicleService;
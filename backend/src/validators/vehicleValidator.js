const vehicleValidator = {
    // Validar datos del vehículo
    validateVehicleData(vehicleData) {
        const { Marca, Modelo, Matricula, Año, Color } = vehicleData;
        const errors = [];

        // Validar campos requeridos
        if (!Marca || !Marca.trim()) {
            errors.push('La marca es obligatoria');
        }

        if (!Modelo || !Modelo.trim()) {
            errors.push('El modelo es obligatorio');
        }

        if (!Matricula || !Matricula.trim()) {
            errors.push('La matrícula es obligatoria');
        }

        if (!Año) {
            errors.push('El año es obligatorio');
        }

        if (!Color || !Color.trim()) {
            errors.push('El color es obligatorio');
        }

        // Validar formato de matrícula (básico)
        if (Matricula && !/^[A-Z0-9]{4,10}$/i.test(Matricula.trim())) {
            errors.push('La matrícula debe tener entre 4 y 10 caracteres alfanuméricos');
        }

        // Validar año
        const currentYear = new Date().getFullYear();
        if (Año && (Año < 1900 || Año > currentYear + 1)) {
            errors.push(`El año debe estar entre 1900 y ${currentYear + 1}`);
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
};

module.exports = vehicleValidator;
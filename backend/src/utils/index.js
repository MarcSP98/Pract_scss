// Utilidades de respuesta
const responseUtils = {
    success(res, data, message = 'Operación exitosa', statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            message,
            data
        });
    },

    error(res, message = 'Error interno del servidor', statusCode = 500, errors = null) {
        const response = {
            success: false,
            message
        };

        if (errors) {
            response.errors = errors;
        }

        return res.status(statusCode).json(response);
    },

    notFound(res, message = 'Recurso no encontrado') {
        return this.error(res, message, 404);
    },

    badRequest(res, message = 'Solicitud incorrecta', errors = null) {
        return this.error(res, message, 400, errors);
    },

    unauthorized(res, message = 'No autorizado') {
        return this.error(res, message, 401);
    },

    forbidden(res, message = 'Acceso prohibido') {
        return this.error(res, message, 403);
    }
};

// Utilidades de validación
const validationUtils = {
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },

    isValidYear(year) {
        const currentYear = new Date().getFullYear();
        return year >= 1900 && year <= currentYear + 1;
    },

    sanitizeString(str) {
        return str ? str.trim() : '';
    },

    isValidLicensePlate(licensePlate) {
        // Formato básico de matrícula: 4-10 caracteres alfanuméricos
        const licenseRegex = /^[A-Z0-9]{4,10}$/i;
        return licenseRegex.test(licensePlate);
    }
};

module.exports = {
    responseUtils,
    validationUtils
};
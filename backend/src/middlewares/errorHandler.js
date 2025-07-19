// Middleware para manejo de errores
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);

    // Error de validación de MongoDB
    if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map(e => e.message);
        return res.status(400).json({
            success: false,
            message: 'Error de validación',
            errors
        });
    }

    // Error de duplicado (MongoDB)
    if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0];
        return res.status(400).json({
            success: false,
            message: `El ${field} ya existe en el sistema`
        });
    }

    // Error de cast de MongoDB
    if (err.name === 'CastError') {
        return res.status(400).json({
            success: false,
            message: 'Formato de ID inválido'
        });
    }

    // Error por defecto
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Error interno del servidor'
    });
};

module.exports = errorHandler;
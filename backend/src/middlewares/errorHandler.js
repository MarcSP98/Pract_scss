// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error('Error stack:', err.stack);
    
    // Default error
    let error = {
        message: err.message || 'Error interno del servidor',
        status: err.status || 500
    };

    // Mongoose validation error
    if (err.name === 'ValidationError') {
        error.message = Object.values(err.errors).map(e => e.message).join(', ');
        error.status = 400;
    }

    // Mongoose duplicate key error
    if (err.code === 11000) {
        error.message = 'Ya existe un registro con esos datos';
        error.status = 400;
    }

    // Mongoose cast error
    if (err.name === 'CastError') {
        error.message = 'Formato de ID inválido';
        error.status = 400;
    }

    res.status(error.status).json({
        success: false,
        message: error.message
    });
};

// Middleware for handling 404 routes
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: 'Ruta no encontrada'
    });
};

module.exports = {
    errorHandler,
    notFound
};
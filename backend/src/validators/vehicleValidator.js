const { body, validationResult } = require('express-validator');

// Validation rules for vehicle creation
const validateVehicle = [
    body('Marca')
        .notEmpty()
        .withMessage('La marca es obligatoria')
        .isLength({ min: 2, max: 50 })
        .withMessage('La marca debe tener entre 2 y 50 caracteres'),
    
    body('Modelo')
        .notEmpty()
        .withMessage('El modelo es obligatorio')
        .isLength({ min: 2, max: 50 })
        .withMessage('El modelo debe tener entre 2 y 50 caracteres'),
    
    body('Matricula')
        .notEmpty()
        .withMessage('La matrícula es obligatoria')
        .matches(/^[A-Z0-9]{4,8}$/)
        .withMessage('La matrícula debe tener entre 4 y 8 caracteres alfanuméricos'),
    
    body('Año')
        .isInt({ min: 1900, max: new Date().getFullYear() + 1 })
        .withMessage(`El año debe estar entre 1900 y ${new Date().getFullYear() + 1}`),
    
    body('Color')
        .notEmpty()
        .withMessage('El color es obligatorio')
        .isLength({ min: 3, max: 20 })
        .withMessage('El color debe tener entre 3 y 20 caracteres')
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            message: 'Errores de validación',
            errors: errors.array()
        });
    }
    
    next();
};

module.exports = {
    validateVehicle,
    handleValidationErrors
};
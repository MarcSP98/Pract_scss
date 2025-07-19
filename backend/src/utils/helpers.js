// Utility function to validate environment variables
const validateEnvVars = () => {
    const requiredVars = ['PORT', 'MONGODB_URI'];
    const missingVars = [];

    requiredVars.forEach(varName => {
        if (!process.env[varName]) {
            missingVars.push(varName);
        }
    });

    if (missingVars.length > 0) {
        throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
    }
};

// Utility function to handle async errors
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// Utility function to create response object
const createResponse = (success, message, data = null) => {
    const response = { success, message };
    if (data) response.data = data;
    return response;
};

module.exports = {
    validateEnvVars,
    asyncHandler,
    createResponse
};
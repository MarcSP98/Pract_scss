const mongoose = require('mongoose');

class DatabaseService {
    static async connect() {
        try {
            const MONGO_URI = process.env.MONGODB_URI;
            
            if (!MONGO_URI) {
                throw new Error('MONGODB_URI environment variable is not set');
            }

            await mongoose.connect(MONGO_URI);
            console.log('Conectado a MongoDB Atlas');
            return true;
        } catch (error) {
            console.error('Error al conectar a MongoDB:', error);
            throw error;
        }
    }

    static async disconnect() {
        try {
            await mongoose.disconnect();
            console.log('Desconectado de MongoDB');
        } catch (error) {
            console.error('Error al desconectar de MongoDB:', error);
            throw error;
        }
    }

    static isConnected() {
        return mongoose.connection.readyState === 1;
    }
}

module.exports = DatabaseService;
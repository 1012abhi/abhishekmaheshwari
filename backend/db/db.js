const mongoose = require('mongoose');

function connectDB(){
    try {
        mongoose.connect(process.env.DB_Connect)
        .then(() => {
            console.log('Connected to MongoDB');        
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);         
        })

    } catch (error) {
        console.error('Unexpected MongoDB connection error:', error);
        process.exit(1);
    }
}

module.exports = connectDB;
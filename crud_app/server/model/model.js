const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: String,
    status: String
});

// Handle any errors that occur during model creation
try {
    const Userdb = mongoose.model('userdb', schema); // Corrected the model creation
    module.exports = Userdb;
} catch (error) {
    console.error('Error creating user model:', error);
}

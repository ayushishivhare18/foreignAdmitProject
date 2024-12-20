const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, 

    contactInfo: {
        phone: { type: String, required: false },
        email: { type: String, required: false },
    },
    
});

module.exports = mongoose.model('Bank', bankSchema);

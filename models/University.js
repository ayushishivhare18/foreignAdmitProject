const mongoose = require('mongoose');

const universitySchema = new mongoose.Schema({
    name: {type: String, required: true},
    country: { type: String, required: true } 
});
module.exports = mongoose.model('University', universitySchema);
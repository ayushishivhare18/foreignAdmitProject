const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    universities: [
        {
            university: { type: mongoose.Schema.Types.ObjectId, ref: 'University' },
            banks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bank' }],
        },
    ],
});

module.exports = mongoose.model('Student', studentSchema);

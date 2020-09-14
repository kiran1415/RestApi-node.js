const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    profileImage: { type: String, required: true }
});

module.exports = mongoose.model('student', studentSchema);
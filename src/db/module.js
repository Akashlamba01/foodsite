const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true},
    phone: { type: Number, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    message: { type: String, required: true},
    date: {
        type: Date.now
    }
})

exports.ClientData = new mongoose.model('ClientData', foodSchema);



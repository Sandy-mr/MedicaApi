const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    rol : String,
    telefono: Number
});

module.exports = mongoose.model('Registry', Schema);

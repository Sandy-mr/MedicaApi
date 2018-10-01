const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fecha: Date,
    presion_sistolica: Number,
    presion_diastolica: Number,
    frecuencia_cardiaca: Number,
    frecuencia_respiratoria: Number
});

module.exports = mongoose.model('HistorialPresion', Schema);
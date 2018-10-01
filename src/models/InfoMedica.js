const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    fecha: Date,
    edad: Number,
    peso: Number,
    estatura: Number,
    sexo: String,
    diametroCintura: String,
    alergia: String

});

module.exports = mongoose.model('InfoMedica', Schema);
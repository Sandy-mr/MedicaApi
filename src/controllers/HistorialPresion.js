const mongoose = require('mongoose');

const HistorialPresion = require('../models/HistorialPresion');

const Controller = {
    index: (request, response) => {
        HistorialPresion
            .find({})
            .exec()
            .then(HPresion => {
                response
                    .status(200)
                    .json({
                        HPresion,
                        NumRegistros: HPresion.length
                    });
            })
            .catch(error => {
                response
                    .status(500)
                    .json({
                        error
                    });
            });
    },
    create: (request, response) => {
        HistorialPresion
            .find({
                fecha: request.body.fecha
            })
            .exec()
            .then(() => {
                const newHp = new HistorialPresion({
                    _id: mongoose.Types.ObjectId(),
                    fecha: request.body.fecha,
                    presion_sistolica: request.body.presion_sistolica,
                    presion_diastolica: request.body.presion_diastolica,
                    frecuencia_cardiaca: request.body.frecuencia_cardiaca,
                    frecuencia_respiratoria: request.body.frecuencia_respiratoria
                });


                newHp
                    .save()
                    .then(saved => {
                        response
                            .status(201)
                            .json({
                                message: 'registry created successfully.'
                            });
                    })
                    .catch(error => {
                        response
                            .status(500)
                            .json({
                                error
                            })
                    });

            });
    },
    remove: (request, response) => {
        HistorialPresion
            .findByIdAndRemove(request.params.HistorialId)
            .exec()
            .then(() => {
                response
                    .status(200)
                    .json({
                        message: 'Registry was deleted.'
                    });
            });
    }
}

module.exports = Controller;
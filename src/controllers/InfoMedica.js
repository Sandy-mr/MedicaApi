const mongoose = require('mongoose');

const InfoMedica = require('../models/InfoMedica');

const Controller = {
    index: (request, response) => {
        InfoMedica
            .find({})
            .exec()
            .then(InfoM => {
                response
                    .status(200)
                    .json({
                        InfoM,
                        Total: InfoM.length
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
        InfoMedica
            .find({
                fecha: request.body.fecha
            })
            .exec()
            .then(IMedica => {
                const newInfM = new InfoMedica({
                    _id: mongoose.Types.ObjectId(),
                    fecha: request.body.fecha,
                    edad: request.body.edad,
                    peso: request.body.peso,
                    estatura: request.body.estatura,
                    sexo: request.body.sexo,
                    diametroCintura: request.body.diametroCintura,
                    alergia: request.body.alergia
                });


                newInfM
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

            })
    },
    remove: (request, response) => {
        InfoMedica
            .findByIdAndRemove(request.params.InfoMedicaId)
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
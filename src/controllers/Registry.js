const mongoose = require('mongoose');

const Registry = require('../models/Registry');

const Controller = {
    index: (request, response) => {
        Registry
            .find({})
            .exec()
            .then(Reg => {
                response
                    .status(200)
                    .json({
                        Reg,
                      Total: Reg.length
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
        Registry
            .find({
                rol: request.body.rol
            })
            .exec()
            .then(() => {
                const newRegistry = new Registry({
                    _id: mongoose.Types.ObjectId(),
                    rol: request.body.rol,
                    telefono: request.body.telefono
                  });
                  
                newRegistry
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
        Registry
            .findByIdAndRemove(request.params.registryId)
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

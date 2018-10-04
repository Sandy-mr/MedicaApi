const mongoose = require('mongoose');

const CreateAccount = require('../models/CreateAccount');

const Controller = {
    index: (request, response) => {
      CreateAccount
            .find({})
            .exec()
            .then(Account => {
                response
                    .status(200)
                    .json({
                        Account,
                        Total: Account.length
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
        CreateAccount
            .find({
                email: request.body.email
            })
            .exec()
            .then(() => {
                const newCreateAcc = new CreateAccount({
                    _id: mongoose.Types.ObjectId(),
                    nombre: request.body.nombre,
                    email: request.body.email,
                    password: request.body.password,
                  });


                newCreateAcc
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
      CreateAccount
            .findByIdAndRemove(request.params.accountId)
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

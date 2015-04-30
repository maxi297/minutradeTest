var Client = require('../models/client.js').model;
var ClientValidator = require('../utils/ClientValidator.js');

exports.getClients = function (req, res) {
    Client.find({}, function (error, clients) {
        if (!error) {
            res.status(200).send(clients || []);
        } else {
            console.log(error);
            res.status(500).send(error);
        }
    });
};

exports.getClient = function (req, res) {
    Client.findOne({cpf: req.params.cpf}, function (err, client) {
        if (!err) {
            if (client) {
                res.status(200).send(client);
            } else {
                res.status(404).send({
                    errorCode: 'CLIENT_NOT_FOUND',
                    message: 'Could not find client with cpf ' + req.params.cpf
                });
            }
        } else {
            console.error(err);
            if (err.name === 'CastError') {
                res.status(404).send({
                    errorCode: 'CLIENT_NOT_FOUND',
                    message: 'Could not find client with cpf ' + req.params.cpf
                });
            } else {
                res.status(500).send(err);
            }
        }
    });
};

exports.createClient = function (req, res) {
    Client.findOne({cpf: req.body.cpf}, function (err, client) {
        if(!err && client) {
            res.status(409).send({
                errorCode: 'CLIENT_ALREADY_EXISTS',
                message: 'A client with cpf ' + req.params.cpf + ' already exists'
            });
        } else {
            if (ClientValidator.validate(req.body)) {
                var newClient = new Client({
                    cpf: req.body.cpf,
                    name: req.body.name,
                    email: req.body.email,
                    maritalStatus: req.body.maritalStatus,
                    address: req.body.address,
                    phoneNumbers: req.body.phoneNumbers
                });
                newClient.save(function (error) {
                    if (!error) {
                        res.status(201).send(newClient);
                    } else {
                        res.status(500).send({
                            message: 'Client could not be created'
                        });
                    }
                });
            } else {
                res.status(400).send({
                    message: 'Invalid information'
                });
            }
        }
    });
};

exports.deleteClient = function(req, res) {
    Client.findOne({cpf: req.params.cpf}, function (err, client) {
        if (!err) {
            if (client) {
                client.remove();
                res.status(200).send({
                    message: 'client with cpf ' + req.params.cpf + ' deleted successfully'
                });
            } else {
                res.status(404).send({
                    errorCode: 'CLIENT_NOT_FOUND',
                    message: 'client ' + req.params.cpf + ' was not found'
                });
            }
        } else {
            console.error(err);
            if (err.name === 'CastError') {
                res.status(404).send({
                    errorCode: 'CLIENT_NOT_FOUND',
                    message: 'client ' + req.params.cpf + ' was not found'
                });
            } else {
                res.status(500).send(err);
            }
        }
    });
};
var Client = require('../models/client.js').model;

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


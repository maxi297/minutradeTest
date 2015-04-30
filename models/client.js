var mongoose = require('mongoose');

var clientSchema = new mongoose.Schema({
    cpf: String,
    name: String,
    email: String,
    maritalStatus: String,
    address: String,
    phoneNumbers: [String]
});

var Client = mongoose.model('Client', clientSchema);

exports.schema = clientSchema;
exports.model = Client;
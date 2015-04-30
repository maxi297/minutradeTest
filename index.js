var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/minutrade';
mongoose.connect(mongoUri);

var client = require('./routes/clients');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/clients', client.getClients);
app.post('/clients', client.createClient);
app.get('/clients/:cpf', client.getClient);
app.delete('/clients/:cpf', client.deleteClient);

var port = 3000;
app.listen(port);

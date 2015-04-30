var express = require('express');
var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/minutrade';
mongoose.connect(mongoUri);

var client = require('./routes/clients');
var app = express();

app.get('/clients', client.getClients);

var port = 3000;
app.listen(port);

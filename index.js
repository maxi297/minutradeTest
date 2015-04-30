var express = require('express');

var app = express();
var toto = function(req, res) {
    console.log('ok');
    res.status(200).send('godo');
}

app.get('/', toto);
var port = 3000;
app.listen(port);

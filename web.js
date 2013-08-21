var express = require('express');
var fs = require('fs');

var app = express();

app.get('/', function(request, response) {
    var buffer = new Buffer(fs.readFileSync('index.html'))
    response.send(buffer.toString());
});

app.use('/stylesheets', express.static(__dirname + '/stylesheets'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/scripts', express.static(__dirname + '/scripts'));

/*
app.get('/stylesheets/bootstrap.css', function(request, response) {
    var buffer = new Buffer(fs.readFileSync('stylesheets/bootstrap.css'))
    response.send(buffer.toString());
});

app.get('/stylesheets/bootstrap-responsive.css', function(request, response) {
    var buffer = new Buffer(fs.readFileSync('stylesheets/bootstrap-responsive.css'))
    response.send(buffer.toString());
});

app.get('/stylesheets/orange.css', function(request, response) {
    var buffer = new Buffer(fs.readFileSync('stylesheets/orange.css'))
    response.send(buffer.toString());
});
*/

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});



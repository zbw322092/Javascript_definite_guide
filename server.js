var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(function(req, res) {
	res.end();
});

app.use(express.static(__dirname + ''));

app.use('/', function(req, res) {
	res.send('here');
});

app.listen(8000, function() {
	console.log('server is listening on port 8000');
});
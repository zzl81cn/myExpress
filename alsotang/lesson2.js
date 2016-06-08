/*在Express框架上利用utility内置工具实现md5转码*/

var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', function(req, res) {
	var q = req.query.q;

	var md5Value = utility.md5(q);
	res.send(md5Value);
	// res.send('Hello World!');
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('app is listening at http://%s:%s', host, port);
});
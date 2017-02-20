/**
 * Created by zzl81cn on 2017/2/8.
 */
var PORT = 3000;
var http = require('http');
var url = require('url');
var fs = require('fs');
var mine = require('mine').types;
var path = require('path');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
	target: 'http://192.168.15.206:8002/'
	//接口地址
	// 下面的设置用于https // ssl: { // key: fs.readFileSync('server_decrypt.key', 'utf8'),
	// cert: fs.readFileSync('server.crt', 'utf8') // }, // secure: false
});
proxy.on('error', function(err, req, res){
	res.writeHead(500, { 'content-type': 'text/plain' });
	console.log(err);
	res.end('Something went wrong. And we are reporting a custom error message.');
});

var server = http.createServer(function (request, response) {
	var pathname = url.parse(request.url).pathname;
	//var realPath = path.join("main-pages", pathname); // 指定根目录
	var realPath = path.join("./", pathname);
	console.log(pathname); console.log(realPath); var ext = path.extname(realPath); ext = ext ? ext.slice(1) : 'unknown'; 	//判断如果是接口访问，则通过proxy转发
	if (pathname.indexOf("mspj-mall-admin") > 0) {
		proxy.web(request, response);
		return;
	}
	fs.exists(realPath, function (exists) {
		if (!exists) {
			response.writeHead(404, {'Content-Type': 'text/plain'});
			response.write("This request URL " + pathname + " was not found on this server.");
			response.end();
		} else {
			fs.readFile(realPath, "binary", function (err, file) {
				if (err) {
					response.writeHead(500, {'Content-Type': 'text/plain'});
					response.end(err);
				} else {
					var contentType = mine[ext] || "text/plain";
					response.writeHead(200, {'Content-Type': contentType});
					response.write(file, "binary");
					response.end();
				}
			});
		}
	});
});
server.listen(PORT);
console.log("Server runing at port: " + PORT + ".");

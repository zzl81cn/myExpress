/**
 * Created by zhouzilong on 2016/6/22.
 */

const http = require('http');


/*var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('HelloWorld!\nHello2');
}).listen(3000);*/

var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Conent-Type': 'text/html;charset=utf-8'});
	res.end('HelloWorld!\nHello!');
});
server.listen(3000);

console.log('Server is running at http://127.0.0.1:3000');

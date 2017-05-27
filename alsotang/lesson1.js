/**
 * Created by zhouzilong on 2016/6/22.
 */


// 20170424
const http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Cotent-Type': 'text/html;charset=utf-8'});
	res.end('HelloWorld!\nWelcome join to NodeJS world!');
}).listen(3000);

console.log('Server is running at http://localhost:3001/ or http://127.0.0.1:3000/');
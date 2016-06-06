/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-23 09:35:24
 * @version $Id$
 */

const http = require('http');

http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124');

/**
 * Created by zzl81cn on 2017/2/10.
 * 模块化
 * http://www.cnblogs.com/highsea90/p/4286527.html
 */
var http = require('http');

function start() {
	function onRequest(request, response) {
		response.writeHead(200, {"Content-Type": "Text/plain"});
		response.write("Hi zzl81cn");
		response.end();
	};
	http.createServer(onRequest).listen(8080);
	console.log('start at http://localhost:8080')
}
exports.start = start;
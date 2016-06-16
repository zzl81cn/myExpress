/**
 * 
 * @authors zzl81cn
 * @date    2016-05-23 09:35:24
 * @version v 0.1
 * @book http://blog.csdn.net/jingshui1234/article/details/49359313
 * @book http://www.nodebeginner.org/index-zh-cn.html?utm_source=ourjs.com
 */
//请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量
const http = require('http');
/*调用http模块提供的函数： createServer 。
这个函数会返回一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数，指定这个HTTP服务器监听的端口号。
例如函数传递:
function say(word) {
  console.log(word);
}
function execute(someFunction, value) {
  someFunction(value);
}
execute(say, "Hello");
在这里，我们把 say 函数作为execute函数的第一个变量进行了传递。这里传递的不是 say 的返回值，而是 say 本身！

这样一来， say 就变成了execute 中的本地变量 someFunction ，
execute可以通过调用 someFunction() （带括号的形式）来使用 say 函数。
因为 say 有一个变量， execute 在调用 someFunction 时可以传递这样一个变量。

我们可以，就像刚才那样，用它的名字把一个函数作为变量传递。
但是我们不一定要绕这个“先定义，再传递”的圈子，我们可以直接在另一个函数的括号中定义和传递这个函数
function execute(someFunction, value) {
  someFunction(value);
}
execute(function(word){ console.log(word) }, "Hello");
*/

/*http.createServer((request, response) => {
	console.log('Request is received!');
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124');*/
//改变执行的方式，导出
function start() {
	http.createServer((request, response) => {
		console.log('Request is received!');
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Hello World\n');
	}).listen(3000);
	
	console.log('Server running at http://127.0.0.1:3000');
}

exports.start = start;











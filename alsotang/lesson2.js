/*
 * @Authors zzl81cn
 * alsotang 在Express框架上利用utility内置工具实现md5转码,当在浏览器中访问
 *  http://localhost:3000/?q=xxx 时，输出 xxx 相对应的 md5 值
*/

// 这句的意思就是引入 `express` 模块，并将它赋予 `express` 这个变量等待使用。
var express = require('express');
var utility = require('utility');

/*调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，
将这个变量赋予 app 变量。
*/
var app = express();

/*app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，在这里我们调用其中的 get 方法，为我们的 `/` 路径指定一个 handler 函数。这个 handler 函数会接收 req 和 res 两个对象，他们分别是请求的 request 和 response。
  req 中包含了浏览器传来的各种信息，比如 query、body、headers 啊之类的，都可以通过 req 对象访问到。
  res 对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容。这里我们调用了它的send方法，向浏览器输出一个字符串。
*/
app.get('/', function(req, res) {
	var q = req.query.q;

	var md5Value = utility.md5(q);
	res.send(md5Value);
	// res.send('Hello World!');
});

/*定义好我们 app 的行为之后，让它监听本地的 3000 端口。这里的第二个函数是个回调函数，
 * 会在 listen 动作成功后执行，我们这里执行了一个控制台的命令行输出操作，告诉我们监听动作已完成。
*/

//app.listen(3000);

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('app is listening at http://%s:%s', host, port);
	console.log('请在浏览器地址栏输入"localhost:3000/?q=xxx"'+' --"xxx"为你自定义的信息，如名字等任意字符');
});
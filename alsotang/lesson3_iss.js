/*使用 superagent 与 cheerio 完成简单爬虫
学习使用 superagent 抓取网页
学习使用 cheerio 分析网页*/
//首先需要引入3个依赖，分别是：express,superagent,cheerio
var express = require('express'),
	superagent = require('superagent'),
	cheerio = require('cheerio');

var app = express();

app.get('/', function(req, res, next) {
//	call superagent to capture the web.
//	superagent.get(url)
	superagent.get('http://www.ishadowsocks.net/')
		.end(function(err, sres) {
//			常规错误处理
			if(err) {
				return next(err);
			}
//			sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
//			就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
//			剩下就都是 jquery 的内容了
			var $ = cheerio.load(sres.text);
			var items = [];
			$('#free .col-lg-4').each(function(idx, element) {
				var $element = $(element);
				items.push({
					// serAdd: $element.text(),
					// serPort: $element.text(),
					// pwd: $element.text(),
					// creptoType: $element.text()
					detail: $element.text()
				});
			});
			res.send(items);
			// console.log(items);
		});
});

var server = app.listen(3000, function() {
	//var host = server.address().address;
	var port = server.address().port;
	console.log("App is listen at localhost :" , port);
});
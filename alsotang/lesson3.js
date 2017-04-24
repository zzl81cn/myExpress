/*使用 superagent 与 cheerio 完成简单爬虫
学习使用 superagent 抓取网页
学习使用 cheerio 分析网页*/
//首先需要引入3个依赖，分别是：express,superagent,cheerio
var express = require('express'),
	superagent = require('superagent'),
	cheerio = require('cheerio');

var app = express();

app.get('/', function(req, res, next) {
	// call superagent to capture the web.
	// let tempURL = req.query.superagent;
	// superagent.get(url)
	superagent
		.get('https://cnodejs.org/')
		// .get(tempURL)
		.end(function(err, sres) {
			// 常规错误处理
			if(err) {
				return next(err);
			} else {
				//sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`剩下就都是 jquery 的内容了

				var $ch = cheerio.load(sres.text);
				var items = [];
				$ch('#topic_list .topic_title').each(function(idx, element) {
					var $element = $ch(element);
					items.push({
						title: $element.attr('title'),
						href: $element.attr('href')
					});
				});
				// 发送各种类型的响应。
				res.send(items);
				// 结束响应进程。
				res.end();
				console.log(items);
			}
		});
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	// console.log('Please input http://localhost:3000/?superagent=https://cnodejs.org');
	console.log("App is listen at: " , host, port);
});
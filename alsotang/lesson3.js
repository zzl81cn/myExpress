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
	superagent.get('https://cnodejs.org/')
		.end(function(err, sres) {
//			error process
			if(err) {
				return next(err);
			}
//			sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
//			就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
//			剩下就都是 jquery 的内容了
			var $ = cheerio.load(sres.text);
			var items = [];
			$('#topic_list .topic_title').each(function(idx, element) {
				var $element = $(element);
				items.push({
					title: $element.attr('title'),
					href: $element.attr('href')
				});
			});
			res.send(items);
		});
});

var sever = app.listen(3000, function() {
	console.log("App is listen at localhost:3000");
});
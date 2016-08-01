/**
 * http://usejsdoc.org/
 */
var express = require('express')
	,superagent = require('superagent')
	,cheerio = require('cheerio')

	,eventproxy = require('eventproxy');

// nodejs lib url,url 模块是 Node.js 标准库里面的
// http://nodejs.org/api/url.html
var url = require('url');

var cnodeUrl = "https://cnodejs.org";

superagent.get(cnodeUrl).end(function(err, sres) {
	if(err) {
		return console.error(err);
	}
	//console.log(sres);
	var topicUrls = [];

	var $ch = cheerio.load(sres.text);
	// 获取页面的所有连接
	$ch('#topic_list .topic_title').each(function(idx, element) {
		//console.log(idx);
		var $element = $ch(element);

		// $element.attr('href') 本来的样子是 /topic/542acd7d5d28233425538b04
		// 我们用 url.resolve 来自动推断出完整 url，变成
		// https://cnodejs.org/topic/542acd7d5d28233425538b04 的形式
		// 具体请看 http://nodejs.org/api/url.html#url_url_resolve_from_to 的示例
		var href = url.resolve(cnodeUrl, $element.attr('href'));
		topicUrls.push(href);
	});
	//console.log(topicUrls);
	// 然后以上面为基础，再输出 comment1 的作者，以及他在 cnode 社区的积分值
	/*
			[
			{
				"title": "【公告】发招聘帖的同学留意一下这里",
				"href": "http://cnodejs.org/topic/541ed2d05e28155f24676a12",
				"comment1": "呵呵呵呵",
				"author1": "auser",
				"score1": 80
			},
		...
		]
	*/
	//得到topicUrls之后
	var ep = eventproxy();

	ep.after('topic_html', topicUrls.length, function(topics){
		topics = topics.map(function(topicPair){
			var topicUrl = topicPair[0];
			var topicHtml = topicPair[1];
			var $  = cheerio.load(topicHtml);
			return ({
				title: $('.topic_full_title').text().trim(),
				href: topicUrl,
				comment1: $('.reply_content').eq(0).text().trim(),
			});
		});
		console.log('final:');
		console.log(topics);
	});

	topicUrls.forEach(function(topicUrl){
		superagent.get(topicUrl).end(function(err, res){
			console.log('fetch ' + topicUrl + 'successful');
			ep.emit('topic_html', [topicUrl, res.text]);
		});
	});

});
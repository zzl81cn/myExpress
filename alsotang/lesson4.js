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

//var cnodeUrl = "https://cnodejs.org";
var cnodeUrl = "http://localhost/cnode/";

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
	//用 js 写过异步的同学应该都知道，如果你要并发异步获取两三个地址的数据，并且要在获取到数据之后，对这些数据一起进行利用的话，常规的写法是自己维护一个计数器。
	//先定义一个 var count = 0，然后每次抓取成功以后，就 count++。如果你是要抓取三个源的数据，由于你根本不知道这些异步操作到底谁先完成，那么每次当抓取成功的时候，就判断一下 count === 3。当值为真时，使用另一个函数继续完成操作。例如：
	//(function(){
	//   var count = 0;
	//   var result = {};
	//   $.get('http://data1_source', function(data){
	//     result.data1 = data;
	//     count++;
	//     handler();
	//   })
	//   ...
	//   $.get('http://data_n', function(){...})
	//   function handle(){
	//     if(count ==== 3){
	//       var html = fuck(result.data1, result.data2, ...);
	//       render(html);
	//     }
	//   }
	// })();
	//得到topicUrls之后
	var ep = eventproxy();

	// eventproxy 提供了不少其他场景所需的 API，但最最常用的用法就是以上的这种，即：
	// 先 var ep = new eventproxy(); 得到一个 eventproxy 实例。
	// 告诉它你要监听哪些事件，并给它一个回调函数。ep.all('event1', 'event2', function (result1, result2) {})。
	// 在适当的时候 ep.emit('event_name', eventData)。

	// 此处传给ep.after()的是'topic_html'事件，当达到topicUrls的数量时，将所有topics传入callback
	// topics 是个数组，包含了 40 次 ep.emit('topic_html', pair) 中的那 40 个 pair
	// map:和forEach非常相似，都是用来遍历数组中的每一项值的，用来遍历数组中的每一项；
	// 区别：map的回调函数中支持return返回值；return的是啥，相当于把数组中的这一项变为啥（并不影响原来的数组，只是相当于把原数组克隆一份，把克隆的这一份的数组中的对应项改变了）；
	ep.after('topic_html', topicUrls.length, function(topics){
		topics = topics.map(function(topicPair){
			var topicUrl = topicPair[0];
			var topicHtml = topicPair[1];
			var $  = cheerio.load(topicHtml);
			return ({
				title: $('.topic_full_title').text().trim(),
				href: topicUrl,
				comment1: $('.reply_content').eq(0).text().trim()
			});
		});
		console.log('final:');
		console.log(topics);
	});

	// 不管是forEach还是map 都支持第二个参数值，第二个参数的意思是把匿名回调函数中的this进行修改。
	// forEach 方法按升序为数组中含有效值的每一项执行一次callback 函数
	topicUrls.forEach(function(topicUrl){
		superagent.get(topicUrl).end(function(err, res){
			console.log('fetch ' + topicUrl + 'successful');
			ep.emit('topic_html', [topicUrl, res.text]);
		});
	});

});
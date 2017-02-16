/**
 * Created by zzl81cn on 2017/2/8.
 *
 * 求服务器页面或数据接口
 */
var request = require('request');

// 通过request请求服务器页面或数据接口，http requrest(http://www.cnblogs.com/EricaMIN1987_IT/p/3654233.html)
var url = [
	'http://www.galaxybigdata.com/warehouse/publish/list?fromSystem=1&fromType=&name=&orderBy=1&pageNum=1&pageSize=20&publishToShop=1&status=',
	'http://rap.taobao.org/mockjsdata/11697/categorylist'];

request(url[1], function (error, response, body) {
	if (!error && response.statusCode == 200) {
		// Show the HTML for the Google homepage.
		console.log(body);
	}
});


/*var http = require('http'),
	opts = {
		hostname: 'www.baidu.com',
		method: 'get'
	};
http.request(opts, function (res) {
	// https://www.zhihu.com/question/26843761
	console.log(res)
})*/
/*
var http = require('http');
var url = require('url');
var util = require('util');

var argUrl = process.argv[2];
var parsedUrl = url.parse(argUrl, true);

var options = {host: null, port: -1, path: null, method: 'GET'};
options.host = parsedUrl.hostname;
options.port = parsedUrl.port;
options.path = parsedUrl.pathname;

if (parsedUrl.search) options.path += "?" + parsedUrl.search;

var req = http.request(options, function(res){
	util.log('STATUS: ' + res.statusCode);
	util.log('HEADERS: ' + util.inspect(res.headers));
	res.setEncoding('utf8');
	res.on('data', function(chunk){
		util.log('BODY: ' + chunk);
	});
	res.on('error', function(err){
		util.log('RESPONSE ERROR: ' + err);
	});
});

req.on('error', function(err){
	util.log('REQUEST ERROR: ' + err);
});
req.end();*/

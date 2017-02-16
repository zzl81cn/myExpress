/**
 * Created by zzl81cn on 2017/2/9.
 */

// 发送GET请求

/*const http = require("http");
http.get('http://www.baidu.com', (res) => {
	console.log(`Got response: ${res.statusCode}`);
// consume response body
res.resume();
}).on('error', (e) => {
	console.log(`Got error: ${e.message}`);
});*/

/*const http = require('http');

http.get('http://www.baidu.com', function (res) {
	// console.log('Got response: ${res.statusCode}');
	// 注意此处不是单引号，而是键盘左上角“破折号”挨着的“符号——`”
	console.log(`Got response: ${res.statusCode}`);
	// consume response body
	res.resume();
}).on('error', function (e) {
	console.log(`Got error: ${e.message}`);
});*/

const http = require("http")
const url = "http://www.haorooms.com/post/nodejs_rmyyong",
	url2 = "http://www.google.com";
/*
http.get(url,(res)=>{
	var html = ""
	res.on("data",(data)=>{
	html+=data
})

res.on("end",()=>{
	console.log(html)
})
}).on("error",(e)=>{
	console.log(`获取数据失败: ${e.message}`)
})*/

http.get(url, function (res) {
	var html = '';
	res.on("data", function (data) {
		html += data;
	});
	res.on("end", function () {
		console.log(html);
	});
}).on('error', function (e) {
	console.log(`Fetch data fails: ${e.message}`);
})
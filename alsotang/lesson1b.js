/**
 * Created by zzl81cn on 2017/2/8.
 *
 * 求服务器页面或数据接口
 */
var request = require('request');

// 通过request请求服务器页面或数据接口
var url = [
	'http://www.galaxybigdata.com/warehouse/publish/list?fromSystem=1&fromType=&name=&orderBy=1&pageNum=1&pageSize=20&publishToShop=1&status=',
	'http://rap.taobao.org/mockjsdata/11697/categorylist'];

request(url[0], function (error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body) // Show the HTML for the Google homepage.
	}
});

/*var http = require('http'),
 opts = {
 hostname: ''
 };*/


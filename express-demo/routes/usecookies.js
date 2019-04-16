/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 11:23:46
 * 也可以参考这篇express-session：https://segmentfault.com/a/1190000010306099
 * @version $Id$
 */

var express = require('express');
var router = express.Router();

//清除cookies
// res.clearCookie('islogin');

//清除session
// req.session.destroy();

router.get('/', function(req, res) {
	if(req.cookies.islogin) {
		console.log('usecookies-cookies:' + req.cookies.islogin);
		req.session.islogin = req.cookies.islogin;
	}
	if(req.session.islogin) {
		console.log('usecookies:' + req.session.islogin);
		res.locals.islogin = req.session.islogin;
	}
	res.render('usecookies', {title: '使用usecookies示例'});
});
/* 
	https://www.cnblogs.com/zhongweiv/p/nodejs_express_webapp1.html
	2.运行访问 http://localhost:8000/usecookies，点击登录按钮登录成功并记录cookies,maxAge为过期时长，毫秒为单位，我设置一分钟
	3.关闭浏览器，再次访问http://localhost:8000/usecookies ，页面显示已登录
	4.再次关闭浏览器，过一分钟再访问http://localhost:8000/usecookies，页面不再是已登录，而是显示登录按钮，表示cookies过期，不会自动登录
*/
router.post('/', function(req, res) {
	req.session.islogin = 'success';
	res.locals.islogin = req.session.islogin;
	res.cookie('islogin', 'success', {maxAge: 60000});
	res.render('usecookies', {title: 'use usecookies example'});
});

module.exports = router;
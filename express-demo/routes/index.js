/**
 * Create 20160602
 * Modify by zzl81cn 20170503, 20180823
 * http://www.cnblogs.com/zhongweiv/p/nodejs_express.html
 * */

const express = require('express');
// 可使用 express.Router 类创建模块化、可挂载的路由句柄。
const router = express.Router();

/* GET home page. */
/*router.get('/', function (req, res, next) {
	res.render('index', {
		title: '<h1>Express</h1>',
		users: [
			{username: 'zzl81cn'}
			, {username: 'zzl81cn01'}
			, {username: 'zzl81cn001'}
			, {username: 'zzl81cn0001'}
		]
	});
});*/

/* web 应用中处于请求-响应循环流程中的中间件，一般被命名为 next 的变量。 */

router.get('/', function (req, res, next) {
	if (req.cookies.islogin) {
		console.log('cookies:' + req.cookies.islogin);
		req.session.islogin = req.cookies.islogin;
	} else if (req.session.username) {
		console.log('username:' + req.session.username);
		res.locals.username = req.session.username;
	} else {
		res.redirect('/login');
		return;
	}
	res.render('index', {
		title: '主页',
		message: 'login successfuly!'
	});
});

module.exports = router;

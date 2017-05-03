/**
 * Create 20160602
 * Modify by zzl81cn 20170503
 * http://www.cnblogs.com/zhongweiv/p/nodejs_express.html
 * */

const express = require('express');
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

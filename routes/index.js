/*
* http://www.cnblogs.com/zhongweiv/p/nodejs_express.html
* */

var express = require('express');
var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
 	res.render('index', {
 		title: '<h1>Express</h1>',
 		users: [
 			{username: 'zzl81cn'}
 			,{username: 'zzl81cn01'}
 			,{username: 'zzl81cn001'}
 			,{username: 'zzl81cn0001'}
 		]
 	});
 });*/

router.get('/', function(req, res, next) {
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

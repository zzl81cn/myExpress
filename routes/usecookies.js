/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 11:23:46
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

router.post('/', function(req, res) {
	req.session.islogin = 'success';
	res.locals.islogin = req.session.islogin;
	res.cookie('islogin', 'success', {maxAge: 60000});
	res.render('usecookies', {title: 'use usecookies example'});
});

module.exports = router;
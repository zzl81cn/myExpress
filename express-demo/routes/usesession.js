/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 11:23:46
 * @version $Id$
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	if(req.session.islogin) {
		console.log('usesession:' + req.session.islogin);
		res.locals.islogin = req.session.islogin;
	} else {
		res.render('usesession', {title: '使用session示例'});
	}
});

router.post('/', function(req, res) {
	req.session.islogin = 'success';
	res.locals.islogin = req.session.islogin;
	res.render('usesession', {title: 'use session example'});
});

module.exports = router;
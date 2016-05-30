/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 11:35:24
 * @version $Id$
 */

var express = require('express');
var router = express.Router();
var crypto = require('crypto');

// home page
router.get('/', function(req, res) {
	res.render('usecrypto', {title: 'An encrypted string'});
});

router.post('/', function(req, res) {
	var userName = req.body.txtUserName,
			userPwd = req.body.txtUserPwd;

	var md5 = crypto.createHash('md5');
	var en_upwd = md5.update(userPwd).digest('hex');

	console.log('加密后的密码:' + en_upwd);
	res.render('usecrypto', {title: '加密字符串序列'});
});

module.exports = router;

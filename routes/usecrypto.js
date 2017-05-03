/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 11:35:24
 * @version $Id$
 */

var express = require('express');
var router = express.Router();
var crypto = require('crypto');

// default state page
router.get('/', function(req, res) {
	res.render('usecrypto', {title: '加密字符串示例'});
});

// request page
router.post('/', function(req, res) {
	var userName = req.body.txtUserName,
			userPwd = req.body.txtUserPwd;

	// var md5 = crypto.createHash('md5');
	// var en_upwd = md5.update(userPwd).digest('hex');
	// console.log('加密后的密码:' + en_upwd);
	// console.log('nodejs crypto支持的全部算法为：' + crypto.getCiphers());
	var fi_upwd = crypto.createHash('md5').update(userPwd).digest('hex');
	console.log('Cipher is:');
	console.log('username is:' + userName);
	console.log('Hash ciphered pwd is:' + fi_upwd);
	// console.log('Deciphered password is:' + fi_de_upwd);
	// testkey 为公钥，需要妥善保存
	var cipher = crypto.createCipher('aes-256-cbc', 'testkey');
	var crypted = cipher.update(userPwd, 'utf8', 'hex');
	crypted += cipher.final('hex');
	console.log('Cipher ciphered pwd is:' + crypted);

	var decipher = crypto.createDecipher('aes-256-cbc', 'testkey');
	var dec = decipher.update(crypted, 'hex', 'utf8');
	dec += decipher.final('utf8');
	console.log('Decipher pwd is:' + dec);

	res.render('usecrypto', {title: '加密字符串序列'});
});

module.exports = router;

/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 11:23:46
 * @version $Id$
 */

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.render('subform', {
		title: '提交表单及接收参数示例'
	})
});

/**GET和POST方式接收值，从直接效果上来看
 * req.query：我用来接收GET方式提交参数
 * req.body：我用来接收POST提交的参数
 * req.params：两种都能接收到
 **/
router.post('/', function (req, res) {
	// var userName = req.query.txtUserName,
	//     userPwd = req.query.txtUserPwd,
	//     userName2 = req.param('txtUserName'),
	//     userPwd2 = req.param('txtUserPwd')

	//     console.log('req.queryUserName:' + userName);
	//     console.log('req.queryUserPwd:' + userPwd);
	//     console.log('req.paramUserName:' + userName2);
	//     console.log('req.paramUserPwd:' + userPwd2);

	var userName = req.body.txtUserName,
		userPwd = req.body.txtUserPwd,
		userName2 = req.param('txtUserName'),
		userPwd2 = req.param('txtUserPwd');

	console.log('req.bodyUserName:' + userName);
	console.log('req.bodyUserPwd:' + userPwd);
	console.log('req.paramUserName:' + userName2);
	console.log('req.paramUserPwd:' + userPwd2);
	res.render('subform', {title: 'Submit the form and sample receiving parameters.'});
});

module.exports = router;

/**
 * Author zzl81cn
 * url:http://www.cnblogs.com/zhongweiv/p/nodejs_express_formidable.html
 */

var express = require('express'),
	router = express.Router()
	formidable = require('formidable'),
	fs = require('fs'),
	TITLE = 'formidable upload example',
	AVATAR_UPLOAD_FOLDER = '/avatar/';

router.get('/', function(req, res) {
	res.render('index', {title: TITLE});
});

router.post('/', function(req, res) {
//	创建上传表单
	var form = formidable.IncomingForm();
//	设置编码
	form.encoding = 'utf-8';
//	设置上传路径
	form.uploadDir = 'public' + AVATAR_UPLOAD_FOLDER;
//	保留扩展名
	form.keepExtentsions = true;
//	设置文件大小
	form.maxFiledSize = 2*1024*1024;
	
	form.parse(req, function(err, fields, files) {
		if(err) {
			res.locals.error = err;
			res.render('index', {title: TITLE});
			return;
		};
		
//		后缀名
		var extName = '';
		
		
	})
});

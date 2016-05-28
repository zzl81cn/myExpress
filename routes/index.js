var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: '<h1>Express</h1>',
		users: [
			{username: 'zzl81cn'},
			{username: 'zzl81cn01'},
			{username: 'zzl81cn001'}
		]
	});
});

module.exports = router;

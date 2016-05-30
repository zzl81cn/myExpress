/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 11:35:24
 * @version $Id$
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('usecrypto', {title: 'An encrypted string'});
});

module.exports = router;

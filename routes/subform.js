/**
 * 
 * @authors zzl81cn (zzl81cn@163.com)
 * @date    2016-05-30 11:23:46
 * @version $Id$
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('subform', {title: 'Submit the form and sample receiving parameters.'});
});

module.exports = router;

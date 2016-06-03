/**
 * Created by zhouzilong on 2016/6/2.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  req.session.destroy();
  res.redirect('/login');
});

module.exports = router;
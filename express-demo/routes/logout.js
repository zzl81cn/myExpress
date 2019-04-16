/**
 * Created by zhouzilong on 2016/6/2.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // 销毁session
  req.session.destroy();
  // 将路由重定向到登陆页面
  res.redirect('/login');
});

module.exports = router;
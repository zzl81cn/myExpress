const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('login', {title: 'login page'});
});

module.exports = router;
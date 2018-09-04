var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    pagename: 'awesome people',
    authors: ['Paul', 'Jim', 'Jane']
  });
});

module.exports = router;

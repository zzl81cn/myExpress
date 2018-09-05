var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send(string)
  // res.send('respond with a resource');

  // res.render(path, obj)
  res.render('users', {content: 'respond with a resource'});
});

module.exports = router;

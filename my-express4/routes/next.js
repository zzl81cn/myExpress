const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  console.log('1');
  next();
});

router.get('/', function(req, res, next) {
  console.log('2');
  next();
});

router.get('/', function(req, res, next) {
  console.log('3');
  res.send('hello')
})

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('test', {title: 'test page',
    users: [
      {username: 'zzl81cn'},
      {username: 'lhm'},
      {username: 'zjl'},
      {username: 'zga'},
      {username: 'ltj'},
      {username: 'lf'},
      {username: 'hzx'},
    ]
  })
})

module.exports = router;
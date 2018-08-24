const express = require('express');
const router = express.Router();

let tmpData = [];
for(let i = 0; i < 10; i++) {
  tmpData.push({testName: 'testName' + i})
}
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
    ],
    tmpData: tmpData
  })
})

module.exports = router;
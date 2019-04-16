var express = require('express');
var router = express.Router();

const indexBiz = require('../biz/indexBiz');


/* GET home page. */
router.get('/', function(req, res, next) {
  indexBiz.getUser().then((data) => {
    console.log('Call api/rap is ok', data);
  });
  indexBiz.getData().then((data) => {
    console.log('Call api/mock is ok', data);
    const result = JSON.parse(data);
    const resData = result.array;

    console.log('Call api/mock is ok', resData);

    res.render('index', { title: 'test + hbs', data: resData});
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

let common  = require('../bin/common');
let logger = common.getLogger('index-router');
const indexBiz = require('../biz/indexBiz');


/* GET home page. */
router.get('/', function(req, res, next) {
  indexBiz.getUser().then((data) => {
    logger.info(data);
  });
  indexBiz.getData().then((data) => {
    logger.info(data);
    const result = JSON.parse(data);
    const resData = result.array;

    logger.info(resData);

    res.render('index', { title: 'test + hbs', data: resData});
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var request = require('request');
var async = require('async');
var rp = require('request-promise');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};

let common  = require('../bin/common');
let logger = common.getLogger('index-router');
const indexBiz = require('../biz/indexBiz');


/* GET home page. */
router.get('/', function(req, res, next) {
  /* indexBiz.getData().then((data) => {
    logger.info(data);
    const result = JSON.parse(data);
    const resData = result.data;

    logger.info(resData);

    res.render('index', { title: 'test + hbs', data: resData});
  }); */
  let endData = {};

  Promise
    .all([indexBiz.getUser(), indexBiz.getData()])
    .then(function(results) {
      logger.info(results);
      endData.user = JSON.parse(results[0]);
      // let tempUser = JSON.parse(results[0]);
      // endData.user = tempUser.data;
      endData.data = JSON.parse(results[1]);
      // let tempData = JSON.parse(results[1]);
      // endData.data = tempData.data;
      logger.info(endData);
      res.render('index', { title: 'test + hbs', data: endData});
    });
});

  let myEmitter = new MyEmitter();
// api for list
router.get('/data', async(req, res, next) => {
  let indexCount = 0;
  let endData = {};
  // let endData = [];

  myEmitter.on('change', () => {
    if (indexCount == 2) {
      logger.info('全部请求完毕', indexCount, endData)
      res.json(endData);
    } else {
      console.log('触发事件');
      res.json(endData);
    }
  });

  /* rp('http://rap2api.taobao.org/app/mock/data/911898')
    .then(function(htmlString) {
      logger.info('result1',htmlString);
      logger.info('indexCount', indexCount);
      let result1 = JSON.parse(htmlString);
      endData.user = result1.data;
      logger.info('getUser', endData);
      indexCount++;
      myEmitter.emit('change');
    });
  rp('http://rap2api.taobao.org/app/mock/data/912468')
    .then(function(htmlString) {
      logger.info('result1',htmlString);
      logger.info('indexCount', indexCount);
      let result2 = JSON.parse(htmlString);
      endData.data = result2.data;
      logger.info('getUser', endData);
      indexCount++;
      myEmitter.emit('change');
    }) */

  /* indexBiz.getUser().then((data) => {
    logger.info('result1',data);
    logger.info('indexCount', indexCount);
    let result1 = JSON.parse(data);
    endData.user = result1.data;
    logger.info('getUser', endData);
    indexCount++;
    myEmitter.emit('change');
  }).catch(new Function()); */

  /* indexBiz.getData().then((data) => {
    logger.info('result2', data);
    logger.info('indexCount', indexCount);
    let result2 = JSON.parse(data);
    endData.data = result2.data;
    logger.info('getData', endData);
    indexCount++;
    myEmitter.emit('change');
  }).catch(new Function()); */

  /* const urlArr = {
    rap1: 'http://rap2api.taobao.org/app/mock/data/912468',
    rap2: 'http://rap2api.taobao.org/app/mock/data/911898',
  };
  const urlLength = urlArr.length;
  async.each(urlArr, (item) => {
    logger.info('url item', item);
    indexBiz.getTest(item).then((data) => {
      logger.info(data)
      let tmpResult = JSON.parse(data);
      endData.push(tmpResult.data);
      logger.info(endData)
      indexCount++;
      logger.info(indexCount)
      if(urlLength == indexCount) {
        res.json({data: endData})
      }
    })
  }) */

  var api1 = request('http://rap2api.taobao.org/app/mock/data/911898');
  var api2 = request('http://rap2api.taobao.org/app/mock/data/911898');
  Promise
    .all([indexBiz.getUser(), indexBiz.getData()])
    .then(function(results) {
      logger.info(results);
      endData.user = JSON.parse(results[0]);
      // let tempUser = JSON.parse(results[0]);
      // endData.user = tempUser.data;
      endData.data = JSON.parse(results[1]);
      // let tempData = JSON.parse(results[1]);
      // endData.data = tempData.data;
      logger.info(endData);
      res.json(endData)
    });

});

module.exports = router;

var express = require('express');
var router = express.Router();
var request = require('request');
var async = require('async');
var rp = require('request-promise');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}

let common  = require('../bin/common');
let logger = common.getLogger('index-router');
const indexBiz = require('../biz/indexBiz');


/* GET home page. */
router.get('/', function(req, res, next) {
  // logger.info(req.headers)
  
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
      // logger.info(results);
        /*endData.user = JSON.parse(results[0]);
        endData.data = JSON.parse(results[1]);
        logger.info(JSON.stringify(endData));
        res.json(endData);*/
        const resLength = results.length;
        for(let i = 0; i < resLength; i++) {
            let tempData = JSON.parse(results[i]);
            // endData.push(tempData);
            switch (i) {
                case 0:
                    endData.user = tempData.data;
                    break;
                case 1:
                    endData.data = tempData.data;
                    break;
                default:
                    logger.error(i);
            }
        };
        // logger.info(JSON.stringify(endData));
      res.render('index', { title: 'test + hbs', data: endData});
    }, function (error) {
        logger.error(error)
    });
});

// api for list
router.get('/data', function(req, res, next) {
  let indexCount = 0;
  let endData = {};
  // let endData = [];

  /*let myEmitter = new MyEmitter();
  myEmitter.on('change', () => {
    if (indexCount == 2) {
      logger.info('全部请求完毕', indexCount, endData)
      res.json(endData);
    } else {
      console.log('触发事件');
      res.json(endData);
    }
  });

   rp('http://rap2api.taobao.org/app/mock/data/911898').then(function(htmlString) {
      logger.info('result1',htmlString);
      logger.info('indexCount', indexCount);
      let result1 = JSON.parse(htmlString);
      endData.user = result1.data;
      logger.info('getUser', endData);
      indexCount++;
      myEmitter.emit('change');
    }, function (error) {
       logger.error(err)
   }).catch(function (err) {
       logger.error(err)
   });
  rp('http://rap2api.taobao.org/app/mock/data/912468').then(function(htmlString) {
      logger.info('result1',htmlString);
      logger.info('indexCount', indexCount);
      let result2 = JSON.parse(htmlString);
      endData.data = result2.data;
      logger.info('getUser', endData);
      indexCount++;
      myEmitter.emit('change');
    }, function (error) {
      logger.error(err)
  }).catch(function (err) {
      logger.error(err)
  });*/

  /*indexBiz.getUser().then((data) => {
    logger.info('result1',data);
    logger.info('indexCount', indexCount);
    let result1 = JSON.parse(data);
    endData.user = result1.data;
    logger.info('getUser', endData);
    indexCount++;
    myEmitter.emit('change');
  }).catch(new Function());

   indexBiz.getData().then((data) => {
    logger.info('result2', data);
    logger.info('indexCount', indexCount);
    let result2 = JSON.parse(data);
    endData.data = result2.data;
    logger.info('getData', endData);
    indexCount++;
    myEmitter.emit('change');
  }).catch(new Function());*/

  /* promise all*/
  Promise
    .all([indexBiz.getUser(), indexBiz.getData()])
    .then(function(results) {
      // logger.info(results);
      /*endData.user = JSON.parse(results[0]);
      endData.data = JSON.parse(results[1]);
      logger.info(JSON.stringify(endData));
      res.json(endData);*/
      const resLength = results.length;
      for(let i = 0; i < resLength; i++) {
          let tempData = JSON.parse(results[i]);
          // endData.push(tempData);
          switch (i) {
              case 0:
                  endData.user = tempData.data;
                  break;
              case 1:
                  endData.data = tempData.data;
                  break;
              default:
                  logger.error(i);
          }
      };
        logger.info(JSON.stringify(endData));
        res.json(endData);

    }, function (error) {
        logger.error(error)
    });

});

module.exports = router;

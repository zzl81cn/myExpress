var express = require('express');
var router = express.Router();
var request = require('request');

function getPromise(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, responese, body) => {
      if(!error && responese.statusCode == 200) {
        resolve(body);
      } else {
        reject(error);
      }
    })
  })
}

/* 
const request = require('request');

const serviceCommon = require('../../common/common');

const host = serviceCommon.getApiURL();

const url = {
    getBranchList: '/admin/out/getBranchList', // 所有子公司接口
    getNoticePage: '/admin/out/getNoticePage', // 处置公告接口
    getFinanceNoticePage: '/admin/out/getFinanceNoticePage', // 金融超市公告
    getAssetPage: '/admin/out/getAssetPage', // 新增资产包
}

// For simple operation
function getPromisePost(url, params) {
    return new Promise((resolve, reject) => {
        request.post({url: url, form: params}, (error, responese, body) => {
            console.log("indexBiz : url,params");
            console.log(url,params);
            if (!error && responese.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
        })
    })
}
var indexBiz = function() {
  this.getBranchList = function() {
      let getBranchListURL = `${host}${url.getBranchList}`;
      return getPromisePost(getBranchListURL);
  };
}

module.exports = new indexBiz();
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  let url = 'http://rap2api.taobao.org/app/mock/data/382300';
  getPromise(url).then((data) => {
    const result = JSON.parse(data);
    console.log('HTTP method responese data is: ', JSON.stringify(result));
    res.render('index', {
      pagename: 'awesome people',
      authors: ['Paul', 'Jim', 'Jane'],
      data: result
    });
    // res.json({data: result})
  })
});
router.get('/testApi', function(req, res, next) {
  res.json({name: 'testAPI'});
  /* 
    这里返回：
    {
      "name": "testAPI"
    }
  */
})
/* 
  example
  {
    "string": "★★★★★★★★",
    "number": 65,
    "boolean": true,
    "regexp": "jU7",
    "function": 0.021521137085384945,
    "array": [
      {
        "foo": 1,
        "bar": "★★★★"
      },
      {
        "foo": 2,
        "bar": "★★★★★★★★★★"
      }
    ],
    "items": [
      1,
      true,
      "hello",
      "zPbvcr26tx"
    ],
    "object": {
      "foo": 1,
      "bar": "★★★"
    },
    "placeholder": "Imeafjs Tmb Njfrjuz Vvelnrd Wxn"
  }
*/

module.exports = router;

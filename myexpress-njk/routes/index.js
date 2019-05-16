var express = require('express');
var router = express.Router();
let data = {
  "code": 0,
  "info": {
    "smId": 6660000000,
    "mainImg": "32183943078682000",
    "sellPoint": "",
    "goodsId": 95527,
    "albumImgs": [
      "32183916576874000",
      "32183003911796000",
      "31511131682811000"
    ],
    "whiteImg": "32181474799237000",
    "shopName": "myLOVE",
    "services": [
      {
        "name": "seven-day",
        "icon": "img/20180927/12496531528659807",
        "url": "https://www.baidu.com",
        "desc": "service description"
      }
    ],
    "title": "test11",
    "sales": 1,
    "isPledge": 1,
    "goodsType": 0,
    "logo": "31252839587785000",
    "slogan": "",
    "collects": 0,
    "status": "enable"
  }
};
function randomData(data) {
  let isPledge = Math.floor(Math.random() * (2 + 1));
  console.log(isPledge);
  return data.info['isPledge'] = isPledge;
}
/* GET home page. */
router.get('/', function(req, res, next) {
  data.info['isPledge'] = Math.floor(Math.random() * (2 + 1));
  console.log('mockData', data);
  res.render('index', { title: 'Express', footerActive: 1, data: data });
});

module.exports = router;

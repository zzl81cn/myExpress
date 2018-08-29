const express = require('express');
const router = express.Router();
const request = require('request');

const reqURL ={
  rap: 'http://rapapi.org/mockjsdata/13161/multiselect_h',
  bdg: 'http://rapapi.org/mockjsdata/11697/categorylist',
  easyDynamic: 'https://easy-mock.com/mock/5a0d2eb685e6ba3feeead78c/example/mock'
};

router.get('/', function(req, res) {
  // request('http://www.baidu.com', function(error, response, body){
  request(reqURL.easyDynamic, function(error, response, body){
    if(!error && response.statusCode == 200) {
      console.log(body); // Show the HTML for the baidu homepage.
    }
  })
  res.render('login', {title: 'login page2'});
});

module.exports = router;
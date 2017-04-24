/**
 * Created by zhouzilong on 2016/8/3.
 */

var async = require('async');

var concurrentCount = 0;

//var fetchUrl = function (url, callback) {
//    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
//    concurrencyCount++;
//    console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');
//    setTimeout(function () {
//        concurrencyCount--;
//        callback(null, url + ' html content');
//    }, delay);
//};
//
//var urls = [];
//for(var i = 0; i < 30; i++) {
//    urls.push('http://datasource_' + i);
//}
//
//async.mapLimit(urls, 5, function (url, callback) {
//    fetchUrl(url, callback);
//}, function (err, result) {
//    console.log('final:');
//    console.log(result);
//});

// concurrent counter
var fetchUrl = function(url, callback) {
    var delay = parseInt((Math.random() * 100000000) * 2000, 10);
    concurrentCount++;
    console.log("Now concurrentCount is: ", concurrentCount, 'Now fetch is: ', url, 'Time consuming: ' + delay + ' millisecond');
    setTimeout(function(){
        concurrentCount--;
        callback(null, url + ' html content');
    }, delay);
};

//data falsification
var urls = [];
for(var i = 0; i < 30; i++){
    urls.push('http://datasource' + i);
};

//
async.mapLimit(urls, 5, function(url, callback){
    fetchUrl(url, callback);
}, function(err, result){
    console.log('final');
    console.log(result);
});


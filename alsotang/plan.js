/**
 * Created by zhouzilong on 2016/7/28.
 */

//var express = require('express');
//
//var app = express();
//
//app.get('/', function(req, res){
//    res.send("HelloWorld!\n123\n456");
//}).listen(3001);

//About Express 4.x Mountpath
//var express = require('express');
//
//var app = express(); // the main app
//var admin = express(); // the sub app
//
//admin.get('/', function (req, res) {
//    console.log(admin.mountpath); // /admin
//    res.send('Admin Homepage');
//});
//
//app.use('/admin', admin); // mount the sub app

var express = require('express'),
    superagent = require('superagent'),
    cheerio = require('cheerio');

var app = express();

app.get('/', function(req, res, next) {
    superagent.get("https://cnodejs.org/").end(function(err, sres){
        if(err){
            return next(err);
        } else {
            var $ch = cheerio.load(sres.text);
            var item = [];
            $ch('#topic_list .topic_title').each(function(idx, element){
                var $element = $ch(element);
                item.push({
                    title:$element.attr('title'),
                    href:$element.attr('href')
                });
            });

        }
        res.send(item);
        console.log(item);
    });
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Server is running at localhost : " + port);
});
/**
 * Created by zhouzilong on 2016/7/28.
 */

var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send("HelloWorld!\n123\n456");
}).listen(3001);

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
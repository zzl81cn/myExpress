var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// 在此引入各route路由级中间件，供下面app.use()调用中间件
var index = require('./routes/index'),
    reg = require('./routes/reg'),
    login = require('./routes/login'),
    logout = require('./routes/logout'),
    upload = require('./routes/upload');
var test = require('./routes/test');


var subform = require('./routes/subform'),
    usesession = require('./routes/usesession'),
    usecookies = require('./routes/usecookies'),
    usecrypto = require('./routes/usecrypto');

var app = express();

/**view engine setup
 * app.set(name, value)
 * 把名字为name的项的值设为value，用于设置参数
 * 设置了模版文件夹的路径；主要清楚__dirname的意思就可以了，它是node.js中的全局变量，表示取当前执行文件的路径
 */
app.set('views', path.join(__dirname, 'views'));
// 设置使用的模版引擎，我们使用的ejs
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
/**
 * 用这个方法来使用中间件，因为express依赖于connect，有大量的中间件，可以通过app.use来使用；
 * path参数可以不填，默认为'/'  (项目中用到的就不分别解释了，用到的时候自已查一API的中间件部分)
 * */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public'))); 这一句中可能要注意一下，express.static( )是处理静态请求的，设置了public文件，public下所有文件都会以静态资料文件形式返回（如样式、脚本、图片素材等文件）
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser('zzl81cn'));
app.use(session({
	//添加这行,fixed express-session deprecated undefined resave option; provide resave option app.js:99.9
	//express-session deprecated undefined saveUninitialized option; provide saveUninitialized option app.js:99.9
	resave:false,
	//添加这行
	saveUninitialized: true,
	secret: 'zzl81cn'
	}
));

app.use('/', index);
//app.use('/users', users);
app.use('/reg', reg);
app.use('/login', login);
app.use('/logout', logout);
app.use('/upload', upload);
app.use('/subform', subform);
app.use('/usesession', usesession);
app.use('/usecookies', usecookies);
app.use('/usecrypto', usecrypto);
app.use('/test', test);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var server = app.listen(3000, 'localhost', function() {
  // console.log("Server is starting...");
  var host = server.address().address;
  var port = server.address().port;
  console.log("Sever listening at http://%s:%s", host, port);
});

module.exports = app;

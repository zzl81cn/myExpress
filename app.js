var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var routes = require('./routes/index'),
    reg = require('./routes/reg'),
    login = require('./routes/login'),
    logout = require('./routes/logout');


var subform = require('./routes/subform'),
    usesession = require('./routes/usesession'),
    usecookies = require('./routes/usecookies'),
    usecrypto = require('./routes/usecrypto');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

app.use('/', routes);
//app.use('/users', users);
app.use('/reg', reg);
app.use('/login', login);
app.use('/logout', logout);
app.use('/subform', subform);
app.use('/usesession', usesession);
app.use('/usecookies', usecookies);
app.use('/usecrypto', usecrypto);

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

var server = app.listen(3000, function() {
  // console.log("Server is starting...");
  var host = server.address().address;
  var port = server.address().port;
  console.log("Sever listening at http://%s:%s", host, port);
});

module.exports = app;

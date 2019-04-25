var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');

const common = require('./bin/common');
let logger4js = common.getLogger("app");

var app = express();

// webpack config start
if(common.getEnvMode() === "development") {
  logger4js.info("This is development && this is webpack dev middleware");
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackDevConfig = require('./build/webpack.dev');
  const compiler = webpack(webpackDevConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.publicPath,
    quiet: true
  }))
}

// view engine setup
hbs.registerPartials(__dirname + '/views/app/partials');
app.set('views', path.join(__dirname, 'views'));
app.set('view options', {layout: '/app/layout.html'});
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

/* router */
require('./routerMap')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render(path.join(__dirname, 'views/app/error.html'));
});

module.exports = app;

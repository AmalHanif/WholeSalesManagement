var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressControllers = require('express-controller');

var mongo = require('mongodb');
// var monk = require('monk');
// var db = monk('localhost:27017/bookshop')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wholeSales');


var index = require('./routes/index');
var users = require('./routes/users');
var cards = require('./routes/cards');
var supplier = require('./routes/supplier');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Tell expressControllers to use the controllers-directory, and use bind() to set up routing.
expressControllers.setDirectory( __dirname + '/controllers/customerCtrl').bind(app);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connection succeeded..!");
});

// Make our db accessible to our router
// app.use(function(req,res,next){
//     req.db = db;
//     next();
// });

// REGISTER OUR ROUTES -------------------------------
app.use('/', index);
app.use('/api', users);
app.use('/api', cards);
app.use('/api', supplier);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

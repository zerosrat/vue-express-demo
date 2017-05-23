const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./config/db');

const index = require('./routes/index');
const users = require('./routes/users');
const session = require('./routes/session');
const todo = require('./routes/todo');

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', index);
app.use('/api', users);
app.use('/api', session);
app.use('/api', todo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('API not Found');
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
  res.json({
    status: err.status,
    message: err.message
  });
});

module.exports = app;

// handle not allowed methods
function methodNotAllowed (req, res, next) {
  const err = new Error('Method not allowed')
  err.status = 405;
  next(err)
}

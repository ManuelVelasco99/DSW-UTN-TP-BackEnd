require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//DB CONNECTION
const Sequelize = require('sequelize');
const config = require('./config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);




var app = express();

var port = process.env.APP_PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
let habitacionRouter     = require('./modules/Habitacion/HabitacionRoute');
let tipoHabitacionRouter = require('./modules/TipoHabitacion/tipoHabitacionRoute');
app.use('/habitacion', habitacionRouter);
app.use('/tipo-habitacion', tipoHabitacionRouter);

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
  res.json('error');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

sequelize.authenticate().then(() => {console.log('Conexión con la DB exitosa.')})
	.catch(err => {console.log('Eror al conectar con la DB: ',err)}
);

console.log('TEST_ENV: ', process.env.TEST_ENV);

module.exports = app;

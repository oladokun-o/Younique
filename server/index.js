//env vars
require("dotenv").config();

//mongofb connection
require("../config/mongo")

//Express
const express = require('express');

//prerequisites
var bodyParser = require('body-parser');
var http = require('http');
var createHttpError = require("http-errors");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var compression = require('compression');
const app = express();



//config vars
const config = require('../config/env').get(process.env.NODE_ENV)

//routes
var clientRouter = require('../routes/client')
var adminRouter = require('../routes/admin')
app.use('/', clientRouter);
app.use('/admin', adminRouter);

//set port
const port = config.PORT;

//view engine setup
app.set('views', 'views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));
//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'))
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/@fortawesome/fontawesome-free/css'));
app.use(express.static('node_modules/bootstrap-icons/font'));
app.use(express.static('node_modules/@popperjs/core/dist/cjs/popper.js'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createHttpError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', { title: 'Error!' });
});

app.listen(config.PORT, () => {
    console.log('app listening at ::'+port)
})

module.exports = app;
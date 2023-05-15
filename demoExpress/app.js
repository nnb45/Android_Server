// connect to DB
// tạo model
const mongoose = require('mongoose');
require('./modules/users/UserModel');
require('./modules/categories/CategoryModel');
require('./modules/products/ProductModel');


var createError = require('http-errors');
var multer = require('multer');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// khai báo router
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/product');
const cartRouter = require('./routes/cart');
var categoryRouter = require('./routes/category');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/san-pham', productsRouter);
app.use('/cart', cartRouter); // http://localhost:3000/cart/
app.use('/danh-muc', categoryRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// connect to DB
const connection = mongoose.connect('mongodb+srv://baongoc45:452003Nn@cluster0.ysjpccc.mongodb.net/test?retryWrites=true&w=majority', {
  // const connection = mongoose.connect('mongodb+srv://baongoc45:452003Nn@cluster0.ysjpccc.mongodb.net/test', {
  // mongodb+srv://baongoc45:452003Nn@cluster0.ysjpccc.mongodb.net/?retryWrites=true&w=majority  
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// const MyModel = mongoose.model('demo01', new Schema({ name: String }));
module.exports = app;


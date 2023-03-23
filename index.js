// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end('Hello my World!');
// }).listen(8888);

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express', title2: 'Express 00' });
});

module.exports = router;

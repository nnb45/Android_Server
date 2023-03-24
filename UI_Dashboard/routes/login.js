var express = require('express');
var router = express.Router();

/* GET home page. */

// http://localhost:3000/login
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;

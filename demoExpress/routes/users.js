const { json } = require('express');
var express = require('express');
var router = express.Router();

// khai bao va lay file controllers
const userController = require('../controller/UserControllers');

/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login');
});

/*
* res: (render, json, send, redirect, download)
* - render: render ra html file
* - json: gửi dữ liệu dưới dạng json - API
* - send: gửi dữ liệu dưới dạng text
* - redirect: chuyển sang router khác
* - download: download file về client
*/

router.post('/login', async function (req, res, next) {
  const { email, password } = req.body;
  const result = await userController.login(email, password);
  return res.json(result);
});

module.exports = router;

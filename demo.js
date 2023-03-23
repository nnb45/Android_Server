var express = require('express');
var router = express.Router();

/* GET home page. */

//by query
router.get('/math', function (req, res, next) {
    const { a, b, c } = req.query;
    let kq = '';
    // giai phuong trinh b2
    let delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
        kq = 'PT vô nghiệm'
    } else if (delta == 0) {
        kq = `PT có nghiệm kép x1 = x2 ${-b / (2 * a)}`;
    } else {
        kq = `PT có 2 nghiệm x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}, 
        x2 = ${(-b + Math.sqrt(delta)) / (2 * a)}`
    }

    res.render('login', { title: 'Express', title2: 'Express 00' });
});

// http://localhost:3000/math/1/2/3
// by params
router.get('/math/:a/:b/:c', function (req, res, next) {
    const { a, b, c } = req.params;
    let kq = '';
    // giai phuong trinh b2
    let delta = b ** 2 - 4 * a * c;
    if (delta < 0) {
        kq = 'PT vô nghiệm'
    } else if (delta == 0) {
        kq = `PT có nghiệm kép x1 = x2 ${-b / (2 * a)}`;
    } else {
        kq = `PT có 2 nghiệm x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}, 
        x2 = ${(-b + Math.sqrt(delta)) / (2 * a)}`
    }

    res.render('login', { title: 'Express', title2: 'Express 00' });
});


module.exports = router;
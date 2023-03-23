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

    res.render('index', { kq: kq });


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

    res.render('index', { kq: kq });

});

router.post('/math/', function (req, res, next) {
    const { a, b, c } = req.body;
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

    res.render('index', { kq: kq });
});


/*
reg: request - gửi từ client lên server 
req: (query: 
query: http://localhost:3000?name=abc&age=123 (GET)
params: http://localhost:3000/Bảo Ngọc/19
body: gửi từ form  (POST)
res: response - gửi từ server về client
next: hàm callback, xử lý xong logic code thì đi tiếp với next
*/



//http://localhost:3000?name=abc&age=123
// by params
router.get('/',function(req,res,next){
    const{name, age} = req.query;
    res.render('index', {name: name, age: age});
});

module.exports = router;
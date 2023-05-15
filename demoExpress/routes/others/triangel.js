var express = require('express');
var router = express.Router();

router.get('/canh-day/:a/chieu-cao/:h', function (req, res, next) {
    const { a, h } = req.params;

    // tinh dien tich tam giac
    let area = (a * h) / 2;
    // let perimeter = a + b + c ;
    res.render('triangle', { area: area });
});

module.exports = router;
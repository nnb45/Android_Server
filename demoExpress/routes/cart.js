var express = require('express');
var router = express.Router();

/**
 * GET
 * http://localhost:3000/cart/123
 * PARAMS
 * QUERY
 * BODY
 */
router.get('/123/:id', function (req, res, next) {
    // http://localhost:3000/cart/123/5?abc=1&def=2&s=10
    const { abc, def, s } = req.query;
    const { id } = req.params;
    console.log('>>>>>>>>>>15: ', abc, def, s, id);
    // 1. hiện trang web login
    // res.render('login');
    // 2. hiện trang giỏ hàng trong carts
    // res.render('carts/index');
    // 3. trả về json
    return res.json({ abc, def, s, id });
});

/**
 * POST
 * http://localhost:3000/cart/123
 * PARAMS
 * QUERY
 * BODY
 * URL duy nhất, không dc trùng
 */
router.post('/123/:id', function (req, res, next) {
    // http://localhost:3000/cart/123/5?abc=1&def=2&s=10
    const { abc, def, s } = req.query;
    const { id } = req.params;
    console.log('>>>>>>>>>>15: ', abc, def, s, id);
    // 1. hiện trang web login
    // res.render('login');
    // 2. hiện trang giỏ hàng trong carts
    // res.render('carts/index');
    // 3. trả về json
    res.json({ abc, def, s, id });
});





module.exports = router;


/**
 * GET:
 * POST:
 */
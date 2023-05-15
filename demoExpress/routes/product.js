const express = require('express');
const router = express.Router();


const ProductController = require('../modules/products/ProductController');
const CategoryController = require('../modules/categories/CategoryController');
const middleware = require('../middleware/upload');
const getConstants = require('../helpers/constants').getConstants;



/**
 * Hiển thị trang danh sách sản phẩm
 * http://localhost:3000/san-pham/
 */
router.get('/', async function (req, res, next) {
    let products = await ProductController.get();
    // products = products.map((p, index) => {
    //     return {
    //         _id: p._id,
    //         name: p.name,
    //         price: p.price,
    //         quantity: p.quantity,
    //         image: p.image,
    //         description: p.description,
    //         categoryId: p.categoryId,
    //         index: index + 1,
    //     }
    //});

    // dành cho web
    // res.render('products/listsp', { sp: products });
    res.render('products/listsp', { products });

    // dành cho api, chạy app android
    // res.status(200).json(products);
});
/**
 * Hiển thị trang danh sách sản phẩm api
 * http://localhost:3000/san-pham/api/getall
 */
router.get('/api/getall', async function (req, res, next) {
    let products = await ProductController.get();
    res.status(200).json(products);

    // res.render('products/listsp', { products });

    // dành cho api, chạy app android
    // res.status(200).json(products);
});

/**
 * Xóa sản phẩm
 * http://localhost:3000/san-pham/:id
 */
router.delete('/:id', async function (req, res, next) {
    try {
        let { id } = req.params;
        await ProductController.remove(id);
        res.json({ status: true });
    } catch (error) {
        res.json({ status: false });
    }
});

/**
 * Hiển thị trang chi tiết sản phẩm
 * http://localhost:3000/san-pham/:id/detail
 */
router.get('/:id/detail', async function (req, res, next) {
    try {
        let { id } = req.params;
        const product = await ProductController.getOne(id);
        let categories = await CategoryController.get();
        categories = categories.map((p, index) => {
            return {
                _id: p._id,
                name: p.name,
                isSelected: p._id.toString() == product.categoryId._id.toString(),
            }
        });
        res.render('products/chinh-sua', { product, categories });
        // res.status(200).json({ product, categories });
    } catch (error) {
        next(error);
    }
});


/**
 * Cập nhật sản phẩm
 * http://localhost:3000/san-pham/:id/detail
 */
router.post('/:id/detail', [middleware.single('image'),], async function (req, res, next) {
    try {
        let { file, body } = req;
        let { name, price, quantity, image, categoryId, description } = body;
        let { id } = req.params;
        image = file ? file.filename : '';
        image = image ? `${getConstants().HOST}/images/${image}` : '';
        await ProductController.update(id, name, price, quantity, image, description, categoryId);
        res.redirect('/san-pham');
    } catch (error) {
        console.log(error);
        next(error);
    }
});


/**
 * Hiển thị trang tạo mới sản phẩm
 * http://localhost:3000/san-pham/tao-moi
 */
router.get('/tao-moi', async function (req, res, next) {
    const categories = await CategoryController.get();
    res.render('products/tao-moi', { categories });
});

/**
 * Lưu tạo mới sản phẩm
 * http://localhost:3000/san-pham/tao-moi
 * http://localhost:3000/images/image-1669273518322-30347271-Screenshot%202022-11-22%20at%2021.01.44.png
 */
router.post('/tao-moi', [middleware.single('image'),], async function (req, res, next) {
    try {
        let { file, body } = req;
        let { name, price, quantity, image, categoryId, description } = body;
        console.log(body);
        image = file ? file.filename : '';
        image = image ? `${getConstants().HOST}/images/${image}` : '';
        await ProductController.create(name, price, quantity, image, description, categoryId);
        res.redirect('/san-pham');
    } catch (error) {
        console.log(error);
        next(error);
    }
});



/**
 * Hiển thị trang thống kê
 * http://localhost:3000/san-pham/thong-ke
 */
router.get('/thong-ke', async function (req, res, next) {
    const list = [
        { name: 'Tivi', value: 100 },
        { name: 'Điện thoại', value: 200 },
        { name: 'Laptop', value: 300 },
        { name: 'Máy tính bảng', value: 400 },
        { name: 'Máy ảnh', value: 500 },
    ]
    res.render('products/thong-ke', { data: list, list: JSON.stringify(list) });
});



module.exports = router;
// npm i multer

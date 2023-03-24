const { json } = require('express');
var express = require('express');
var router = express.Router();

const productController = require('../controller/ProductControllers');
const categoryController = require('../controller/CategoryControllers');
const middleware = require('../middleware/upload');
const getConstants = require('../helpers/constants').getConstants;

/* GET products listing. */
router.get('/', async function (req, res, next) {
  // get product list
  const result = await productController.getAll();
  res.render('product/list', { products: result });
});

/* GET product detail. */
router.get('/:id/detail', async function (req, res, next) {
  // get product detail
  const { id } = req.params;
  const result = await productController.getDetail(id);
  const categories = await categoryController.getAll();
  res.render('product/edit', { product: result, categories: categories });
});

/**
 * Cập nhật sản phẩm
 * http://localhost:3000/products/:id/detail
 */
router.post('/:id/detail', [middleware.single('image'),], async function (req, res, next) {
  try {
    let { file } = req;
    let { name, price, quantity, image, categoryId, description } = req.body;
    let { id } = req.params;
    image = file ? file.filename : '';
    image = image ? `${getConstants().HOST}/images/${image}` : '';
    await productController.update(id, name, price, quantity, image, description, categoryId);
    res.redirect('/product');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/**
 * Hiển thị trang tạo mới sản phẩm
 * http://localhost:3000/product/new
 */
router.get('/new', async function (req, res, next) {
  const categories = await categoryController.getAll();
  res.render('product/new', { categories });
});

/**
 * Lưu tạo mới sản phẩm
 * http://localhost:3000/products/new
 * http://localhost:3000/images/image-1669273518322-30347271-Screenshot%202022-11-22%20at%2021.01.44.png
 */
router.post('/new', [middleware.single('image'),], async function (req, res, next) {
  try {
    let { file } = req;
    let { name, price, quantity, image, categoryId, description } = req.body;
    image = file ? file.filename : '';
    image = image ? `${getConstants().HOST}/images/${image}` : '';
    await productController.create(name, price, quantity, image, description, categoryId);
    res.redirect('/product');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

/**
 * Hiển thị trang thống kê
 * http://localhost:3000/products/thong-ke
 */
router.get('/statistic', async function (req, res, next) {
  const list = [
    { name: 'Tivi', value: 100 },
    { name: 'Điện thoại', value: 200 },
    { name: 'Laptop', value: 300 },
    { name: 'Máy tính bảng', value: 400 },
    { name: 'Máy ảnh', value: 500 },
  ]
  res.render('product/statistic', { data: list, list: JSON.stringify(list) });
});

/**
 * Xóa sản phẩm
 * http://localhost:3000/products/:id
 */
router.delete('/:id', async function (req, res, next) {
  try {
    let { id } = req.params;
    await productController.delete(id);
    res.json({ status: true });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.json({ status: false });
  }
});

module.exports = router;

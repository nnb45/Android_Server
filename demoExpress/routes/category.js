const express = require('express');
const router = express.Router();

const CategoryController = require('../modules/categories/CategoryController');
const middleware = require('../middleware/upload');



/**
 * Hiển thị trang danh sách danh mục sản phẩm
 * http://localhost:3000/categories/
 */
router.get('/', async function (req, res, next) {
  let categories = await CategoryController.get();
  categories = categories.map((p, index) => {
    return {
      _id: p._id,
      name: p.name,
      description: p.description,
      index: index + 1,
    }
  });

  // dành cho web
  res.render('categories/danh-muc', { sp: categories });
  // dành cho api, chạy app android
  // res.status(200).json(categories);
});

/**
 * Xóa danh mục
 * http://localhost:3000/danh-muc/:id
 */
router.delete('/:id', async function (req, res, next) {
  try {
    let { id } = req.params;
    await CategoryController.remove(id);
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
    const category = await CategoryController.getOne(id);
    res.render('categories/chinh-sua', { category });
    // res.status(200).json({ category });
  } catch (error) {
    next(error);
  }
});


/**
 * Cập nhật sản phẩm
 * http://localhost:3000/san-pham/:id/detail
 */
router.post('/:id/detail', [middleware.single('image'), ], async function (req, res, next) {
  try {
    let { name, description } = req.body;
    let { id } = req.params;
  
    await CategoryController.update(id, name, description);
    res.redirect('/danh-muc');
  } catch (error) {
    console.log(error);
    next(error);
  }
});


/**
 * Hiển thị trang tạo mới danh mục
 * http://localhost:3000/danh-muc/new
 */
router.get('/tao-moi', async function (req, res, next) {
  const categories = await CategoryController.get();
  res.render('categories/tao-moi', { categories });
});

/**
 * Lưu tạo mới danh mục
 * http://localhost:3000/danh-muc/new
 * http://localhost:3000/images/image-1669273518322-30347271-Screenshot%202022-11-22%20at%2021.01.44.png
 */
router.post('/tao-moi', [middleware.single('image'), ], async function (req, res, next) {
  try {
    let { name, description } = req.body;
    await CategoryController.create(name, description);
    res.redirect('/danh-muc');
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
// npm i multer

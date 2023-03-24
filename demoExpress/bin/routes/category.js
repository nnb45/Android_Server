const { json } = require('express');
var express = require('express');
var router = express.Router();

const categoryController = require('../controller/CategoryControllers');

/* GET category listing. */
router.get('/', async function (req, res, next) {
    // get category list
    const result = await categoryController.getAll();
    res.render('categories/list', { categories: result });
    //return res.json(result);
});

/* GET category detail. */
router.get('/:id/detail', async function (req, res, next) {
    // get category detail
    const { id } = req.params;
    const result = await categoryController.getDetail(id);
    res.render('categories/edit', { category: result });
});

/**
 * Cập nhật danh mục
 * http://localhost:3000/categories/:id/detail
 */
router.post('/:id/detail', async function (req, res, next) {
    try {
        let { category_name, category_desc } = req.body;
        let { id } = req.params;
        await categoryController.update(id, category_name, category_desc);
        res.redirect('/categories');
    } catch (error) {
        console.log(error);
        next(error);
    }
});

/**
 * Hiển thị trang tạo mới danh mục
 * http://localhost:3000/categories/new
 */
router.get('/new', async function (req, res, next) {
    const categories = await categoryController.getAll();
    res.render('categories/new', { categories });
});

/**
 * Lưu tạo mới danh mục
 * http://localhost:3000/categories/new
 * http://localhost:3000/images/image-1669273518322-30347271-Screenshot%202022-11-22%20at%2021.01.44.png
 */
router.post('/new', async function (req, res, next) {
    try {
        let { category_name, category_desc } = req.body;
        await categoryController.create(category_name, category_desc);
        res.redirect('/categories');
    } catch (error) {
        console.log(error);
        next(error);
    }
});

/**
 * Xóa danh mục
 * http://localhost:3000/categories/:id
 */
router.delete('/:id', async function (req, res, next) {
    try {
        let { id } = req.params;
        await categoryController.delete(id);
        res.json({ status: true });
    } catch (error) {
        console.error(error);
        res.json({ status: false });
    }
});

module.exports = router;

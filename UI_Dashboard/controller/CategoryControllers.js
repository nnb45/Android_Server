const categoryService = require('../services/CategoryServices');

exports.getAll = async () => {
    const categories = await categoryService.getAll();
    return categories;
}

exports.getDetail = async (id) => {
    const result = await categoryService.getDetail(id);
    return result;
}

exports.create = async (category_name, category_desc) => {
    try {
        const category = await categoryService.create(category_name, category_desc);
        return category;
    } catch (error) {
        console.log(error);
    }
}

exports.update = async (id, category_name, category_desc) => {
    try {
        const category = await categoryService.update(id, category_name, category_desc);
        return category;
    } catch (error) {
        console.log(error);
    }
}

exports.delete = async (id) => {
    try {
        await categoryService.delete(id);
    } catch (error) {
        console.log(error);
    }
}
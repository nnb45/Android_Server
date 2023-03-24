const productService = require('../services/ProductServices');

exports.getAll = async () => {
    const result = await productService.get();
    return result;
}
// http://localhost:3000/product
exports.getDetail = async (id) => {
    const result = await productService.getDetail(id);
    return result;
}

exports.update = async (id, name, price, quantity, image, description, categoryId) => {
    try {
        const product = await productService.update(id, name, price, quantity, image, description, categoryId);
        return product;
    } catch (error) {
        console.log(error);
    }
}

exports.create = async (name, price, quantity, image, description, categoryId) => {
    try {
        const product = await productService.create(name, price, quantity, image, description, categoryId);
        return product;
    } catch (error) {
        console.log(error);
    }
}

exports.delete = async (id) => {
    try {
        await productService.delete(id);
    } catch (error) {
        console.log(error);
    }
}


const productService = require('./ProductService');

const get = async () => {
    try {
        const products = await productService.get();
        return products;
    } catch (error) {
        console.log(error);
    }
}

const create = async (name, price, quantity, image, description, categoryId) => {
    try {
        const product = await productService.create(name, price, quantity, image, description, categoryId);
        return product;
    } catch (error) {
        console.log(error);
    }
}

const remove = async (id) => {
    try {
        await productService.remove(id);
    } catch (error) {
        console.log(error);
    }    
}

const getOne = async (id) => {
    try {
        const product = await productService.getOne(id);
        return product;
    } catch (error) {
        console.log(error);
    }
}

const update = async (id, name, price, quantity, image, description, categoryId) => {
    try {
        const product = await productService.update(id, name, price, quantity, image, description, categoryId);
        return product;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { get, create, remove, getOne, update };
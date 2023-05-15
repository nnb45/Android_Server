// const ProductModel = require('./ProductModel');
const productModel = require('./ProductModel');

// const get = async () => {
//     // select * from products where name in (select name from products where name = 'abc')
//     const products = await productModel.find({})
//         .populate('categoryId', '_id name'); // 32 cap, 16MB
//     return products;

// }
const get = async (page, size) => {
    let skip = (page - 1) * size;
    let limit = size;
    try {
        return await productModel
            .find({}, 'name price quantity image description categotyId status')
            .populate('categoryId', 'name')
    } catch (error) {
        console.log('Get all products error: ', error);
        throw error;
    }
}

const getOne = async (id) => {
    // select * from products where id = id
    const product = await productModel.findById(id)
        .populate('categoryId', '_id name'); // object
    // const product = await productModel.findOne({_id: id, name: 'Iphone 12'}); // object
    // const product = await productModel.find({ _id: id, name: 'Iphone 12' }); // []
    return product;
}

const create = async (name, price, quantity, image, description, categoryId) => {
    // insert into products (name, price, image, description, category_id) 
    // values (name, price, image, description, category_id)
    const model = new productModel({ name, price, quantity, image, description, categoryId });
    await model.save();
    return model;
}

const update = async (id, name, price, quantity, image, description, categoryId) => {
    // update products set name = name, price = price, image = image, description = description, category_id = category_id
    // where id = id
    const product = await productModel.findById(id);
    const model = await productModel.findByIdAndUpdate(id,
        { name, price, quantity, image: image ? image : product.image, description, categoryId });
    return model;
}

const remove = async (id) => {
    // delete from products where id = id
    await productModel.deleteOne({ _id: id });
}

module.exports = { get, create, remove, getOne, update };
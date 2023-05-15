const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
    quantity: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    image: { type: String, required: true },
    categoryId: { type: ObjectId, ref: 'category' },
    status: { type: Boolean, default: true },
});

module.exports = mongoose.models.product || mongoose.model('product', ProductSchema);


/**
 * Categories
 * {_id: 1, name: 'Điện thoại', description: 'Điện thoại di động',
 *  products: [
 * {_id: 1, name: 'iPhone 11', price: 20000000, quantity: 10, description: 'iPhone 11 64GB', image: 'https://cdn.tgdd.vn/Products/Images/42/210537/iphone-11-pro-max-256gb-green-600x600.jpg', 
 *          categoryId: 1}
 * {_id: 2, name: 'iPhone 11 Pro', price: 30000000, quantity: 10, description: 'iPhone 11 Pro 64GB', image: 'https://cdn.tgdd.vn/Products/Images/42/210537/iphone-11-pro-max-256gb-green-600x600.jpg', 
 *          categoryId: {id: 1, name: 'Điện thoại', description: 'Điện thoại di động'}}
 * ]]}
 * {_id: 2, name: 'Máy tính', description: 'Máy tính xách tay'}
 * 
 * Products
 * {_id: 1, name: 'iPhone 11', price: 20000000, quantity: 10, description: 'iPhone 11 64GB', image: 'https://cdn.tgdd.vn/Products/Images/42/210537/iphone-11-pro-max-256gb-green-600x600.jpg', 
 *          categoryId: 1}
 * {_id: 2, name: 'iPhone 11 Pro', price: 30000000, quantity: 10, description: 'iPhone 11 Pro 64GB', image: 'https://cdn.tgdd.vn/Products/Images/42/210537/iphone-11-pro-max-256gb-green-600x600.jpg', 
 *          categoryId: {id: 1, name: 'Điện thoại', description: 'Điện thoại di động'}}
 * 
 * 
 */
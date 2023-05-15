
const categoryModel = require('./CategoryModel');

const get = async () => {
    // select * from categories
    const categories = await categoryModel.find({});
    return categories;
}

const create = async (name, description) => {
    // insert into categories (name, description) 
    // values (name, description)
    const model = new categoryModel({ name, description });
    await model.save();
    return model;
}

const getOne = async (id) => {
    // select * from categories where id = id
    const category = await categoryModel.findById(id); // object
    // const category = await categoryModel.findOne({_id: id, name: 'Iphone 12'}); // object
    // const category = await categoryModel.find({ _id: id, name: 'Iphone 12' }); // []
    return category;
}

const update = async (id, name, description) => {
    // update categories set name = name, description = description
    // where id = id
    const category = await categoryModel.findById(id);
    const model = await categoryModel.findByIdAndUpdate(id, 
        { name, description });
    return model;
}

const remove = async (id) => {
    // delete from categories where id = id
    await categoryModel.deleteOne({ _id: id });
}

module.exports = { get, create, remove, getOne, update };

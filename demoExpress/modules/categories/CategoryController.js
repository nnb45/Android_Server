const categoryService = require('./CategoryService');

const get = async () => {
    try {
        const categories = await categoryService.get();
        //console.log(categories);
        return categories;
    } catch (error) {
        console.log(error);
    }
}

const create = async (name, description) => {
    try {
        const category = await categoryService.create(name, description);
        return category;
    } catch (error) {
        console.log(error);
    }
}

const getOne = async (id) => {
    try {
        const category = await categoryService.getOne(id);
        return category;
    } catch (error) {
        console.log(error);
    }
}

const update = async (id, name, description) => {
    try {
        const category = await categoryService.update(id, name, description);
        return category;
    } catch (error) {
        console.log(error);
    }
}

const remove = async (id) => {
    try {
        await categoryService.remove(id);
    } catch (error) {
        console.log(error);
    }    
}

module.exports = { get, create, remove, getOne, update  };
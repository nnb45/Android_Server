exports.get = async () => {
    return products;
}

exports.getDetail = async (id) => {
    return products[id - 1];
}

exports.update = async (id, name, price, quantity, image, description, categoryId) => {
    // update products set name = name, price = price, image = image, description = description, categoryId = categoryId
    // where id = id
    const removeById = (products, id) => {
        const requiredIndex = products.findIndex(el => {
            return el.id == id;
        });
        if (requiredIndex === -1) {
            return false;
        };
        return !!products.splice(requiredIndex, 1);
    };
    removeById(products, id);

    // add again
    const model = products.push({ id, name, price, quantity, image, description, categoryId });
    return model;
}

exports.create = async (name, price, quantity, image, description, categoryId) => {

    // insert into products (name, price, image, description, categoryId) 
    // values (name, price, image, description, categoryId)
    const id = Math.floor(10 + Math.random() * 100);
    const model = products.push({ id, name, price, quantity, image, description, categoryId });
    return model;
}

exports.delete = async (id) => {
    // delete from products where id = id
    const removeById = (products, id) => {
        const requiredIndex = products.findIndex(el => {
            return el.id == id;
        });
        if (requiredIndex === -1) {
            return false;
        };
        return !!products.splice(requiredIndex, 1);
    };
    removeById(products, id);
}

const products = [{
    "id": 1,
    "name": "Sprouts - Pea",
    "categoryId": 1,
    "price": 84,
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://media.tenor.com/ohcrdIHBm_kAAAAC/chicken-doge.gif"

}, {
    "id": 2,
    "name": "Pate - Liver",
    "categoryId": 1,
    "price": 51,
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://i.pinimg.com/564x/92/f7/41/92f7411cccfc377074a15c3fd8711a6f.jpg"
}, {
    "id": 3,
    "name": "Rum - Spiced, Captain Morgan",
    "categoryId": 1,
    "price": 25,
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://i.pinimg.com/564x/64/76/84/647684b869ddbec8bc1a96b984fbc377.jpg"
}, {
    "id": 4,
    "name": "Mushroom - Trumpet, Dry",
    "categoryId": 1,
    "price": 25,
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "http://dummyimage.com/224x100.png/ff4444/ffffff"
}, {
    "id": 5,
    "name": "Red Cod Fillets - 225g",
    "categoryId": 1,
    "price": 24,
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "http://dummyimage.com/161x100.png/dddddd/000000"
}, {
    "id": 6,
    "name": "Bread - Raisin Walnut Pull",
    "categoryId": 1,
    "price": 75,
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "http://dummyimage.com/202x100.png/dddddd/000000"
}, {
    "id": 7,
    "name": "Rum - White, Gg White",
    "categoryId": 1,
    "price": 15,
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "http://dummyimage.com/159x100.png/cc0000/ffffff"
}, {
    "id": 8,
    "name": "Alize Sunset",
    "categoryId": 1,
    "price": 52,
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "http://dummyimage.com/225x100.png/ff4444/ffffff"
}, {
    "id": 9,
    "name": "Mushroom - Chanterelle Frozen",
    "categoryId": 1,
    "price": 67,
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "http://dummyimage.com/227x100.png/cc0000/ffffff"
}, {
    "id": 10,
    "name": "Oil - Sunflower",
    "categoryId": 1,
    "price": 63,
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "http://dummyimage.com/243x100.png/dddddd/000000"
},
{
    "id": 11,
    "name": "Alize Sunset",
    "categoryId": 1,
    "price": 52,
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "http://dummyimage.com/225x100.png/ff4444/ffffff"
}];
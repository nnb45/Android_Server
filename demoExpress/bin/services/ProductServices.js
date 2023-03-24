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
    "name": "Red Apple",
    "categoryId": 1,
    "price": "5 $",
    "quantity": 1,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://lh4.googleusercontent.com/dc6csqMS90fKMm0C8V-Zliwu4N1P_KuliqS1-Vg1dsULR_3EU9iWEjEP77NRNzTFiV1XKmHGmUVCpHMjvPtOXCgxSz8HhQNabJTBpzqYhu5PV-Rb3FymBnjo45YuTTGTsxK7bfW_Dl1JRf_BcQ"
}, {
    "id": 2,
    "name": "Banana",
    "categoryId": 2,
    "price": "4 $",
    "quantity": 3,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/14/chuoi1-16341869574602070184903.jpg"
}, {
    "id": 3,
    "name": "Black Currant",
    "categoryId": 1,
    "price": "35 $",
    "quantity": 10,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://static9.depositphotos.com/1000141/1122/i/600/depositphotos_11226814-stock-photo-blackcurrant-with-mint.jpg"
}, {
    "id": 4,
    "name": "Peach",
    "categoryId": 1,
    "price": "7 $",
    "quantity": 2,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://cdn11.bigcommerce.com/s-sv0chyyd/images/stencil/2048x2048/products/1659/2569/Pullars_Cling_Original_Shutterstock__23144.1653564704.jpg?c=2"
}, {
    "id": 5,
    "name": "Salad",
    "categoryId": 1,
    "price": "6 $",
    "quantity": 3,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://vinmec-prod.s3.amazonaws.com/images/20210106_041321_793265_hat-giong-rau-xa-la.max-1800x1800.jpg"
}, {
    "id": 6,
    "name": "Cauliflower",
    "categoryId": 1,
    "price": "12 $",
    "quantity": 9,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://media.vienyhocungdung.vn/Upload/38/2021/Thang_6/7658fdfd-d8a9-4f87-8cb4-d14137f5ccfe.jpg"
}, {
    "id": 7,
    "name": "Purple Cabbage",
    "categoryId": 1,
    "price": "20 $",
    "quantity": 7,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://cdn.tgdd.vn/Products/Images/8785/275314/bhx/bap-cai-tim-tui-500gr-1-2-bap-202205201611329535.jpg"
}, {
    "id": 8,
    "name": "Carrot",
    "categoryId": 1,
    "price": "11 $",
    "quantity": 5,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/rwbvhvobvvimsb/2021_09_26/cacc80-rocc82cc81t-8919.jpg"
}, {
    "id": 9,
    "name": "Pork",
    "categoryId": 1,
    "price": "30 $",
    "quantity": 10,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://thethaodonga.com/wp-content/uploads/2021/12/100g-thit-heo-bao-nhieu-calo-2.jpg"
}, {
    "id": 10,
    "name": "Salmon",
    "categoryId": 7,
    "price": "25 $",
    "quantity": 12,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://media.loveitopcdn.com/5827/ca-hoi-fillet-dong-lanh-1200x900.jpg"
},
{
    "id": 11,
    "name": "Beef",
    "categoryId": 8,
    "price": "32 $",
    "quantity": 15,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://thitbohuunghi.com/wp-content/uploads/2021/06/6gt5cdi_-_imgur_grande.png"
},
{
    "id": 12,
    "name": "Mackerel",
    "categoryId": 9,
    "price": "22 $",
    "quantity": 14,
    "description": "Other non-follicular lymphoma, intra-abdominal lymph nodes",
    "image": "https://farm24h.vn/wp-content/uploads/2020/04/CATHUTUOI-1.jpg"
}];
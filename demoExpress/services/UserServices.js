exports.login = async (email, password) => {
    const user = users.find(user => user.email == email && user.password == password);
    if (!user) {
        return null;
    }
    return user;
}

const users = [
    {
        id: 1, 
        email: 'baongoc@gmail.com',
        password: '123456',
        name: 'Nguyen Bao Ngoc'
    },

    {
        id: 2, 
        email: 'hnpsolution2@gmail.com',
        password: '123456',
        name: 'Nguyen Van B'
    }
];

// const users = [{
//   "id": 1,
//   "first_name": "Wesley",
//   "last_name": "Bandt",
//   "email": "wbandt0@parallels.com",
//   "gender": "Male",
//   "password": "496XNT"
// }, {
//   "id": 2,
//   "first_name": "Zacherie",
//   "last_name": "Fowley",
//   "email": "zfowley1@pinterest.com",
//   "gender": "Genderqueer",
//   "password": "8bf7BcEL5G5x"
// }, {
//   "id": 3,
//   "first_name": "Fons",
//   "last_name": "Royan",
//   "email": "froyan2@sogou.com",
//   "gender": "Male",
//   "password": "SCsnWyMx"
// }, {
//   "id": 4,
//   "first_name": "Xylia",
//   "last_name": "Disbury",
//   "email": "xdisbury3@freewebs.com",
//   "gender": "Female",
//   "password": "Pzg2UXRP"
// }, {
//   "id": 5,
//   "first_name": "Yurik",
//   "last_name": "Adderson",
//   "email": "yadderson4@dell.com",
//   "gender": "Male",
//   "password": "2h6asUcty"
// }, {
//   "id": 6,
//   "first_name": "Hailey",
//   "last_name": "Vowdon",
//   "email": "hvowdon5@huffingtonpost.com",
//   "gender": "Male",
//   "password": "4ar5bry63VGD"
// }, {
//   "id": 7,
//   "first_name": "Lara",
//   "last_name": "Lothean",
//   "email": "llothean6@shop-pro.jp",
//   "gender": "Female",
//   "password": "g8cyyawSUna"
// }, {
//   "id": 8,
//   "first_name": "Roselle",
//   "last_name": "Denes",
//   "email": "rdenes7@arizona.edu",
//   "gender": "Female",
//   "password": "b2x9keaCEM6n"
// }, {
//   "id": 9,
//   "first_name": "Almira",
//   "last_name": "Chipman",
//   "email": "achipman8@meetup.com",
//   "gender": "Female",
//   "password": "CZJHkdzWfJES"
// }, {
//   "id": 10,
//   "first_name": "Latrena",
//   "last_name": "O'Dunniom",
//   "email": "lodunniom9@g.co",
//   "gender": "Female",
//   "password": "kjxwTI"
// }]
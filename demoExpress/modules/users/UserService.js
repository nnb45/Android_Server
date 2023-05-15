
const UserModel = require('./UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const login = async (email, password) => {
//     // 1. Tìm user theo email: select email, password, name, id from users where email = email
//     // 2. So sánh password
//     // 3. Trả về user nếu đúng, null nếu sai
//     const user = await UserModel.findOne({ email: email });
//     // kiểm tra password đã mã hóa
//     if (user && bcrypt.compareSync(password, user.password)) {
//         return user;
//     }
//     return null;
// }
const login = async (email, password) => {
    // 1. Tìm user theo email: select email, password, name, id from users where email = email
    // 2. So sánh password
    // 3. Trả về user nếu đúng, null nếu sai
    const user = await UserModel.findOne({ email: email });
    // kiểm tra password đã mã hóa
    if (user) {
        const result = bcrypt.compareSync(password, user.password);
        return result ? user : false;
    }
    return false;
}

const register = async (name, email, password, age) => {
    // 1. Tạo user mới
    // 2. Lưu user mới
    // 3. Trả về user mới
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = new UserModel({ name, email, password: hash, age });
    await user.save();
    return user;
}

const forgotPassword = async (email) => {
    // 1. Tìm user theo email
    // 2. Tạo token mới
    // 3. Lưu token mới vào user
    // 4. Gửi email có chứa token
    const user = await UserModel.findOne({ email });
    if (user) {
        const token = jwt.sign({ id: user._id }, 'shhhhh', { expiresIn: 1 * 60 });
        user.token_reset_password = token;
        await user.save();
        return token;
    }
    return null;
}

const getOne = async (id) => {
    const user = await UserModel.findById(id);
    return user;
}

const resetPassword = async (token, password) => {
    // 1. Tìm user theo token
    // 2. So sánh token
    // 3. Nếu token hợp lệ, thì cập nhật password mới
    // 4. Trả về user
    // console.log(token);
    const user = await UserModel.findOne({ token_reset_password: token });
    // console.log(user)
    if (user) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        user.password = hash;
        user.token_reset_password = null;
        await user.save();
        return true;
    }
    return false;
}



module.exports = { login, register, forgotPassword, getOne, resetPassword };
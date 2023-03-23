const userService = require('../services/UserServices');

exports.login = async (email, password) => {
    const result = await userService.login(email, password);
    return result;
}
const UserService = require('./UserService');
const mailer = require('nodemailer');
const getConstants = require('../../helpers/constants').getConstants;
const jwt = require('jsonwebtoken');

const register = async (name, email, password, age, confirm_password) => {
    if (password !== confirm_password) {
        throw new Error('Dữ liệu không chính xác');
    }
    const user = await UserService.register(name, email, password, age);
    return user;
}

const login = async (email, password) => {
    const user = await UserService.login(email, password);
    return user;
}


// send email 

const transporter = mailer.createTransport({
    pool: true,
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: 'ngbaongoc4503@gmail.com', // abc@gmail.com
        pass: 'qepqqfrcobvbjijl' // ylxyponyezazrehe
    },
});

const sendMail = async (to, subject, html) => {
    try {
        const mailOptions = {
            from: 'Nguyễn Bảo Ngọc <ngbaongoc4503@gmail.com>',
            to,
            subject,
            html,
        };
        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.log('Send mail error: ', error);
    }
    return false;
}

const forgotPassword = async (email) => {
    const token = await UserService.forgotPassword(email);
    if (token) {
        const mailOptions = {
            from: getConstants().MAIL, // gửi từ mail nào
            to: email, // gửi đến mail nào
            subject: 'Reset password',
            html: `<a href="http://localhost:3000/users/cpanel/reset-password?token=${token}">Reset password</a>`
        };
        await transporter.sendMail(mailOptions)
        return true;
    }
    return false;
}

const checkResetPasswordToken = async (token) => {
    const data = jwt.verify(token, 'shhhhh');
    if (data && data.id) {
        return true;
    }
    return false;
}

const resetPassword = async (token, password, confirm_password) => {
    if (password !== confirm_password) {
        throw new Error('Dữ liệu không chính xác');
    }
    const data = jwt.verify(token, 'shhhhh');
    if (data && data.id) {
        const result = await UserService.resetPassword(token, password);
        return result;
    }
    return false;
}

module.exports = { register, login, sendMail,forgotPassword, checkResetPasswordToken, resetPassword };

// http://localhost:3000/users/cpanel/reset-password?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODIxOTI3ZTU4ZDBjODk3Yzc4ODM5MiIsImlhdCI6MTY3MDA3Mzg1NiwiZXhwIjoxNjcwMDczOTE2fQ.5aGczam-bUlYfCGra4FqDOrmE37DlG7JVosviHiirDA
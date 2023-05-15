const express = require('express');
const router = express.Router();
const UserController = require('../modules/users/UserController');
const jwt = require('jsonwebtoken');
const authen = require('../middleware/authen');

// http://localhost:3000/users/api/login
router.post('/api/login', async function (req, res, next) {
	try {
		const { email, password } = req.body;
		const user = await UserController.login(email, password);
		if (user) {
			// seed
			//const access_token = jwt.sign({ user }, 'shhhhh', { expiresIn: 1 * 60 });
			// const refresh_token = jwt.sign({ user }, 'shhhhh', { expiresIn: 90 * 24 * 60 * 60 });
			// // access token là chuỗi ngẫu nhiên, dùng để xác thực người dùng
			// // refresh token là chuỗi ngẫu nhiên, dùng để lấy lại access token
			// res.status(200).json({ user, access_token, refresh_token });
			const token = jwt.sign({ user }, 'shhhhh', { expiresIn: 1 * 60 });
			const returnData = {
                error: false,
                responseTimestamp: new Date(),
                statusCode: 200,
                data: {
                    token: token,
                    user: user
                }
            }
			return res.status(200).json({result: true, token: token, returnData});
		}
		else {
			res.status(401).json({ error: 'Sai email hoặc mật khẩu' });
		}
	} catch (error) {
		res.status(401).json({ error: error.message });
	}
});

router.get('/api/test-jwt', [authen], function (req, res, next) {
	console.log(req.user);
	res.json({ message: 'OK' });
});

router.post('/api/refresh-token', async function (req, res, next) {
	try {
		let { refresh_token } = req.body;
		const data = jwt.verify(refresh_token, 'shhhhh');
		const access_token = jwt.sign({ user: data.user }, 'shhhhh', { expiresIn: 1 * 60 });
		refresh_token = jwt.sign({ user: data.user }, 'shhhhh', { expiresIn: 90 * 24 * 60 * 60 });
		res.status(200).json({ user: data.user, access_token, refresh_token });
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
});

// http://localhost:3000/users/api/register
// {"name": "Phuong Nguyen", "email":"hnpsolution@gmail.com","password":"123456", "age": 42, "confirm_password": "123456" }
router.post('/api/register', async function (req, res, next) {
	try {
		const { name, email, password, age, confirm_password } = req.body;
		const user = await UserController.register(name, email, password, age, confirm_password);
		res.status(200).json({ user: user });
	} catch (error) {
		console.log(error);
		res.status(404).json({ user: { name: null, email: null, } });
	}
});

// http://localhost:3000/users/login
router.get('/login', async (req, res, next) => {

	res.render('login')
});
// http://localhost:3000/users/login
router.post('/login', async (req, res, next) => {
	// hiện thị login     
	// xử lý login
	// nếu login thành công , chuyển qua trang chủ
	// nếu login thất bại , chuyển qua login
	const { email, password } = req.body;
	const result = await UserController.login(email, password);
	if (result) {
		// tạo token jwt 
		// lưu token vào session
		return res.redirect('/san-pham');
	} else {
		return res.redirect('/users/login');
	}
});

// http://localhost:3000/users/api/forgot-password
router.post('/api/forgot-password', async function (req, res, next) {
	try {
		const { email } = req.body;
		const response = await UserController.forgotPassword(email);
		res.status(200).json({ status: response });
	} catch (error) {
		console.log(error);
		res.status(404).json({ error: error.message });
	}
});

// Hiển thị trang web reset password
// http://localhost:3000/users/cpanel/reset-password?token=${token}
router.get('/cpanel/reset-password', async function (req, res, next) {
	try {
		const { token } = req.query;
		const response = await UserController.checkResetPasswordToken(token);
		if (response) {
			return res.render('users/reset-password', { token });
		}
		throw new Error('Token không hợp lệ');
	} catch (error) {
		console.log(error);
		next(error);
	}
});

// http://localhost:3000/users/cpanel/reset-password
router.post('/cpanel/reset-password', async function (req, res, next) {
	try {
		const { password, password_confirmation, token } = req.body;
		const response = await UserController.resetPassword(token, password, password_confirmation);
		res.status(200).json({ status: response });
	} catch (error) {
		console.log(error);
		res.status(404).json({ error: error.message });
	}
});

// send email
// http://localhost:3000/sendemail
router.post('/sendemail', async (req, res, next) => {
	try {
		const { to, subject } = res.body;
		let html = `<h1>Chào bạn</h1>
		<p>Bạn đã đăng kí thành công</p>
		<p>Chúc bạn một ngày tốt lành</p>`;

	} catch (error) {

	}
});


module.exports = router;

// {
//   "user": {
//     "name": "Nguyen Anh",
//     "email": "def@fpt.edu.vn",
//     "password": "$2a$10$8MNAvRORRibn4AxdvmUNcuUf/7ajICSXz1npXPQdUFRhc.AP6Y0Ya",
//     "age": 1,
//     "token_reset_password": null,
//     "_id": "638deb374a736518633f3727",
//     "__v": 0
//   }
// }

// {
//   "user": null
// }

// {
//   "user":null
// }
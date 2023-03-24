const validate = async (req, res, next) => {
    try {
        const { name, email, password, age, confirm_password } = req.body;
        if (password !== confirm_password) {
            throw new Error('Mật khẩu không khớp');
        }
        next();
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

module.exports = validate;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    _id: { type: ObjectId },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true, default: 0 },
    // token chỉ dc dùng 1 lần duy nhất, token có giới hạn thời gian
    token_reset_password: { type: String, required: false, default: null },
});

module.exports = mongoose.models.user || mongoose.model('user', UserSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    roll: Number,
    password: String,
    avatar: String,
    phone:Number,
});

const userModel = new mongoose.model('Sellers',userSchema);
module.exports = userModel;
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String,
});

const userModel = new mongoose.model('Users',userSchema);
module.exports = userModel;
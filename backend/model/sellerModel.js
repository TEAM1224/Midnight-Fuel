const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: {
        type: String,
        default: 'seller'
    },
    password: String,
    phone:Number,
    UID: Number,
    hostel: String,
    room: String,
});

const userModel = new mongoose.model('Sellers',userSchema);
module.exports = userModel;
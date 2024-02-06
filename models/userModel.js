const mongoose = require('mongoose');

const userShchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 5
    },
    token: String
});

const User = mongoose.model('user',userShchema);

module.exports = User;
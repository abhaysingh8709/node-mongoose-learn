const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    price: Number,
    password: String,
});

module.exports = userSchema;
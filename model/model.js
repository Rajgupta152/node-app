const mongoose = require("mongoose");

const data = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    gender: String
})

module.exports = mongoose.model('datas',data);
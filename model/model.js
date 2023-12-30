const mongoose = require("mongoose");

const seller = new mongoose.Schema({
    ShopName: String,
    accessToken: String,
})

module.exports = mongoose.model('seller',seller);
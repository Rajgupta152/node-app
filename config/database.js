const mongoose = require('mongoose');

exports.connect = () => {
    mongoose.connect('mongodb://127.0.0.1/dummyData')
    .then(() => console.log('Connected to db'))
    .catch((err) => console.log('Connection failed'))
}
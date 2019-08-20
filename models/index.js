const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ths19d', {useNewUrlParser: true});

//import the model here 
module.exports.PRODUCTS = require('./products')

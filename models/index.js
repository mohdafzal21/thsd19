const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/day4', {useNewUrlParser: true});

//import the model here 
module.exports.PRODUCTS = require('./products')
// const PRODUCTS = require('./products')

module.exports.User = require('./users')
module.exports.Posts = require('./posts')
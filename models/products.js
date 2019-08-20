const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required: [true, "Please enter the name "]
    },
    productImage: String,
    description : String,
    subcribersCount : Number
})


const PRODUCTS = mongoose.model('PRODUCTS', productSchema)

module.exports = PRODUCTS
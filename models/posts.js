const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    content : String,
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

const Posts = mongoose.model('Posts',postSchema)

module.exports = Posts
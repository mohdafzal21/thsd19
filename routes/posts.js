const express = require('express')

const router = express.Router()
const db = require('../models')

router.get('/',(req,res)=>{
    
    db.Posts.find({author:"5d5d29594c79c347dc1b90e8"})
    .populate('author')
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

//get 
// router.get('/',(req,res)=> {
//     db.Posts.findOne({author:"5d5d25d7edb743307872989c"})
//     .populate('author')
//     .then((data)=> res.json(data))
//     .catch((err)=> res.send(err))
// })

router.post('/',(req,res)=>{
    db.Posts.create(req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})


module.exports = router
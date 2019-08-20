const express = require('express')
const router = express.Router()
const db = require('../models')

//path - /products
//method - GET all products @find
router.get('/', (req,res)=>{
    db.PRODUCTS.find()
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

//path - /products
//Create a new Product - @create (mongoose method)
router.post('/', (req,res)=>{
    console.log(req.body)
    db.PRODUCTS.create(req.body)
    .then((data) => res.json(data))
    .catch((err)=> res.send(err))
})


module.exports = router
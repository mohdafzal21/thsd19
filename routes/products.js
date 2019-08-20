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

//Get - /products/:id
//Get a single a products
router.get('/:id', (req,res)=>{
    const productId = req.params.id
    db.PRODUCTS.findOne({_id:productId})
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})
//PUT - /products/:id
//Update a product - findOneAndUpdate
router.put('/:id',(req,res)=>{
    db.PRODUCTS.findOneAndUpdate({_id:req.params.id}, req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

//DELETE - /products/:id
//Delete a product - findOneAndRemove
router.delete('/:id', (req,res)=>{
   db.PRODUCTS.findOneAndRemove({_id:req.params.id})
   .then(()=> res.send("product deleted"))
   .catch((err)=> res.send(err))
})

module.exports = router
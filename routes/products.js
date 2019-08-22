const express = require('express')
const router = express.Router()
const db = require('../models')
const loggedIn = require('../middleware/authmiddleware')
//path - /products
//method - GET all products @find
router.get('/',loggedIn,(req,res)=>{
    db.PRODUCTS.find()
    // .then((data)=> res.json(data))
    .then((data)=> res.render('products',{data:data}))
    .catch((err)=> res.send(err))
})
//path - /products
//Create a new Product - @create (mongoose method)
router.post('/', (req,res)=>{
    console.log(req.body)
    db.PRODUCTS.create(req.body)
    // .then((data) => res.json(data))
    .then(()=> res.redirect('/products'))
    .catch((err)=> res.send(err))
})

//Get - /products/:id
//Get a single a products
router.get('/:id', (req,res)=>{
    const productId = req.params.id
    db.PRODUCTS.findOne({_id:productId})
    // .then((data)=> res.json(data))
    .then((data)=> res.render('details.ejs',{data:data}))
    .catch((err)=> res.send(err))
})
//PUT - /products/:id
//Update a product - findOneAndUpdate
router.put('/:id',(req,res)=>{
    db.PRODUCTS.findOneAndUpdate({_id:req.params.id}, req.body)
    // .then((data)=> res.json(data))
    .then(()=>res.redirect(`/products/${req.params.id}`))
    .catch((err)=> res.send(err))
})

//update count 
router.put('/count/:id',(req,res)=>{
    db.PRODUCTS.findOneAndUpdate({})
})

//DELETE - /products/:id
//Delete a product - findOneAndRemove
router.delete('/:id', (req,res)=>{
    // console.log("hello")
   db.PRODUCTS.findOneAndRemove({_id:req.params.id})
   .then(()=> res.send("product deleted"))
   .catch((err)=> res.send(err))
})

module.exports = router
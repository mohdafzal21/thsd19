const express = require('express')
const router = express.Router()
const products = ["alphaai", "testBeta", "gamma"]
//
router.get('/', (req,res)=>{
    res.render('index' ,{products:products})
})



module.exports = router
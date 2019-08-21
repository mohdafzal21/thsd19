const express = require('express')
const router = express.Router()
const products = ["alphaai", "testBeta", "gamma"]
// module.exports.obj = require('./test')
const obj = require('./test')
//
router.get('/', (req,res)=>{
    obj.init()
    res.render('index' ,{products:products})
})



module.exports = router
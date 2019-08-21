const express = require('express')

const router = express.Router()
const db = require('../models')

//get 
router.get('/',(req,res)=> {
    db.User.find()
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

router.post('/',(req,res)=>{
    db.User.create(req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})


module.exports = router
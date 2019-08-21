const express = require('express')
const router = express.Router()
const db = require('../models')

// PATH - /jobs 
router.get('/', (req,res)=>{
    res.render('jobs.ejs')
})

//PATH - /jobs/jobs
router.get('/jobs',(req,res)=>{
    res.send(`the path is jobs/jobs`)
})

router.get('/:id', (req,res)=>{
    res.send(`JOb posting based on ID ${req.params.id}`)
})
module.exports = router
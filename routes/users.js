const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('passport')

router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

//auth routes
// users/signup

router.post('/signup',(req,res)=>{
    db.User.register(new db.User({username: req.body.username}),req.body.password)
    .then(()=> {
        passport.authenticate("local")(req,res,function() {
                res.redirect('/products')
        })
    })
    .catch((err)=> res.render('signup'))
})

//login auth route 
//path - /users/login
router.post('/login',passport.authenticate("local",{
    successRedirect : '/products',
    failureRedirect: '/users/login'
}),(req,res)=>{})


//logout 
//path - /users/logout
router.get('/logout', (req,res)=>{
    req.logout()
    res.redirect('/users/login')

})



module.exports = router
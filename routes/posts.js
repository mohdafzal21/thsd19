const express = require('express')

const router = express.Router()
const db = require('../models')

router.get('/',(req,res)=>{
    
    db.Posts.find()
    .populate('author')
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})

// //get 
// router.get('/user/:id',(req,res)=> {
//     db.Posts.findOne({author:req.params.id})
//     .populate('author')
//     .then((data)=> res.json(data))
//     .catch((err)=> res.send(err))
// })

router.post('/',(req,res)=>{
    db.Posts.create(req.body)
    .then((data)=> res.json(data))
    .catch((err)=> res.send(err))
})
//what we wnt - no. of posts one single user made
//first find user based on ID
//
router.get('/:id',async (req,res)=>{
    const {id} = req.params;
    const user = await db.User.findById(id).populate('posts')
    res.json(user)
})
// userid - :/
router.post('/:id',async (req,res)=>{
    const {id} = req.params;
    const newPost = new db.Posts(req.body)
    const user = await db.User.findById(id);
    newPost.user = user;
    await newPost.save();
    user.posts.push(newPost);
    await user.save();
    res.json(newPost);
})







// router.route('/:id').get(async(req,res,next)=>{
//     const {id} = req.params;
//     const user = await db.User.findById(id).populate('posts');
//     res.json(user);


// }).post(async(req,res,next)=>{
//     const {id} = req.params;
//     const newPost = new db.Posts(req.body);
//     const user = await db.User.findById(id);
//     newPost.user = user;

//     await newPost.save();

//     user.posts.push(newPost);
//     await user.save();

//     res.json(newPost);
// });


module.exports = router
const express = require('express')
const app = express()
const PORT = 3000 
const  bodyParser = require('body-parser')
const path = require('path')
//view engine   
app.set('view engine' ,'ejs')
app.set('views' ,path.join(__dirname,'views') )
//public - serving static - method express.static - middleware 
app.use(express.static(path.join(__dirname,'public')))
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
app.use(bodyParser.json())

//route config 
const indexRouter = require('./routes/index')
const jobsRouter = require('./routes/jobs')
const profileRouter = require('./routes/profile')
const productsRouter = require('./routes/products')
app.use('/', indexRouter)
app.use('/jobs', jobsRouter)
app.use('/profile', profileRouter)
app.use('/products', productsRouter)



// const products = ["alphaai", "testBeta", "gamma"]
//route -- 
// app.get('/',(req,res)=>{
//     res.render('index',{products:products})
// }) 
// app.post('/',(req,res)=>{
//     console.log(req.body)
//     products.push(req.body.products)
//     res.redirect('/')

// })
// app.get('/jobs', (req,res)=>{
//     res.render('jobs')
// })


app.listen(PORT,()=>console.log(`app is at ${PORT}`))
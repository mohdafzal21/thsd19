//writing a middleware function 
//create protected routes 
//create function to check , if  user isLoggedIn
//export the functions

// module.exports = {
//     loggedIn: function(req,res,next){
//         console.log('midldleware',req)
//         if(req.isAuthenticated()){
//             return next;
//         }else{
//             res.redirect('/users/login')
//         }
//     }
// }

const loggedIn = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }else{
        
        res.redirect('/users/login')
    }
}

module.exports = loggedIn
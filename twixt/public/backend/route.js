const express=require('express');
const User=require('./user');

const router=express.Router();

router.post('/signup',(req,res)=>{
    let reg=new User(req.body)
    reg.save()
    .then((err,docs)=>{
        if(err)
          res.send(err);
        else 
            res.send("User Registered");
    });
}
)

router.post('/',(req,res)=>{
    User.findOne({email:req.body.email})
    .then((found)=>{
        console.log("User Exists");
        if(found.password===req.body.password){
            res.send("1");
        }
        else
          res.send("0");
    })
    .catch((err)=>console.log(err));
})

module.exports=router;
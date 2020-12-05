const express=require('express');
const User=require('./user');
const jwt=require('jsonwebtoken');

const router=express.Router();

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

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
    User.findOne({email:req.body.email , password:req.body.password} ,(err , user)=>{
        if(err){
            console.log("Database error");
            return res.send("0");
        }
        if(!user){
            console.log("User does not exist")
            return res.send("0");
        }
        console.log("User exists");
        const tok = jwt.sign(
		    {
				em: user.email
			},
			JWT_SECRET
		);
        return res.send({code:"1" , token:tok});
    })  
})

module.exports=router;

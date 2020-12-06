const express=require('express');
const User=require('./user');
const jwt=require('jsonwebtoken');
// const user=localStorage.getItem("username");
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


router.post('/addInterest',(req,res)=>{

    User.findOne({email:req.body.username})
    .then(user =>{
        user.interests = req.body.interests;

        user.save()
        .then(result =>{
             res.json(result);
             console.log(result)
            })
        .catch(err => res.json(err))

    } )
    .catch(error => res.json(error))

 


})

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

router.get("/people",(req,res) => {
    let userInterests=[]
    User.findOne({email:req.query.email})
    .then(result=>{
        userInterests = result.interests;
        // console.log('hi',userInterests)
        User.find({interests:userInterests})
        .then(result => {
            console.log("Similar users",result)
        res.json(result)
    });
    }
    )
    // let toBeSent = [];
    

    // res.json(req.query.email)
})

module.exports=router;

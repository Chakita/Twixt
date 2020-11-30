const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');
const route=require('./route');

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use('/',route);

const dburl='mongodb://127.0.0.1:27017/userauthentication';

mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err) throw err;
    else 
      console.log("Database Connected");
});

app.listen(8080,()=>console.log("Running server on port 8080"));

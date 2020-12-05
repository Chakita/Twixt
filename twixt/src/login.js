import React ,{useState} from 'react';
import "./styling/login.css";
import {Link,useHistory} from "react-router-dom";
import axios from 'axios'
import jwt_decode from "jwt-decode";

var username;

const Login=()=>{
    const [mail,sete]=useState('');
    const [pass,setpass]=useState('');
    const history=useHistory();

    function handleSubmit(e){
        e.preventDefault();

        let user_data={
            email:mail,
            password:pass
        }
        axios.post("http://localhost:8080",user_data)
        .then((resp)=>{
          if(resp.data.code=="1"){
            username = jwt_decode(resp.data.token).em;
            localStorage.setItem("username" , username);
            console.log("user is:"+username);
            history.push('/home');
          }
          else if(resp.data.code=="0")
            alert("Login was unsuccessfull try again");
        })
        .catch((err)=>console.log(err));
    }
    return(
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Twixt</h1>
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <div className="email">
                        <label htmlFor="email">Email address</label>
                        <input required onChange={(event)=>sete(event.target.value)} value={mail} type="email" id="email" name="email"/>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input onChange={(event)=>setpass(event.target.value)} value={pass} type="password"  id="password" name="password"/>
                    </div>
                    <div className="login">
                        <button type="submit">Login</button>
                        <small>Don't have a account?<Link to="/signup">Click here</Link></small>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

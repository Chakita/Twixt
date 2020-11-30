import React , {useState} from "react";
import {useHistory} from "react-router-dom";
import axios from 'axios';
import "./styling/signup.css"

const SignUp=()=>{
    const [mail , sete]=useState('');
    const [pass , setpass]=useState('');
    
    function handleSubmit(e){
        e.preventDefault();
        const history=useHistory();

        let user_data={
            email:mail,
            password:pass,
        }
        axios.post("http://localhost:8080/signup" , user_data)
        .then((resp)=>{
                if(resp){
                    history.push("/search");
                    alert("Successful register");
                }
                else{
                    alert("Unsuccessful registration");
                }
        })
        .catch(err=>console.log(err));
    }

    return(
        <div className="wrapper">
            <form onSubmit={(event)=>handleSubmit(event)} className="form-wrapper">
                <h1>Sign Up</h1>
                <div className="email">
                    <label htmlFor="email">Enter Email:</label>
                    <input required type="email" name="email" value={mail} id="email" onChange={(event)=>sete(event.target.value)}/>
                </div>
                <div className="password">
                    <label htmlFor="pwd">Enter Password:</label>
                    <input required type="password" name="password" value={pass} id="password" onChange={(event)=>setpass(event.target.value)}/>
                </div>
                <div className="signin">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;

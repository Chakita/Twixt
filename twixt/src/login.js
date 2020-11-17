import React from "react"
import "./login.css"
import {Link} from "react-router-dom";

class Login extends React.Component{
    constructor(props , context){
        super(props , context);

        this.state={
            email:"",
            password:"",
        };
    }
    
    handleChange=(e)=>{
        var ele=e.target.id;
        var val=e.target.value;
        switch(ele){
            case "email":{
                            this.setState({
                                email:val,
                            });
                            break;
                        }

            case "password":{
                                this.setState({
                                    password:val,
                                });
                                break;
                            }
            default:break;
        }    
    }

    handleSubmit=(e)=>{
        e.preventDefault();
    }
    
    render(){
        return(
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Twixt</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="email">
                            <label htmlFor="email">Email address</label>
                            <input required onChange={this.handleChange} type="email" id="email"/>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input onChange={this.handleChange} type="password"  id="password"/>
                        </div>
                        <div className="login">
                            <button type="submit" onSubmit={this.handleSubmit}>Login</button>
                            <small>Don't have a account?<Link to="/signup">Click here</Link></small>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
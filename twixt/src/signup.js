import React from "react";
import "./signup.css"
import "../public/music.png"

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user_name:"",
            email:"",
            password:"",
        };

    }

    handleChange=(e)=>{
        var ele=e.target.id;
        var val=e.target.value;
        switch(ele){
            case "username":{
                                this.setState({
                                    user_name:val,
                                });
                                break;
                            }
            case "email":{
                            this.setState({
                                email:val,
                            });
                            break;
                        }

            case "pwd":{
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
                <form onSubmit={this.handleSubmit} className="form-wrapper">
                    <h1>Sign Up</h1>
                    <div className="username">
                        <label htmlFor="user_name">Enter User Name:</label>
                        <input required type="text" maxLength="50px" name="username" id="username" onChange={this.handleChange}/>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Enter Email:</label>
                        <input required type="email" name="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="password">
                        <label htmlFor="pwd">Enter Password:</label>
                        <input required type="password" name="pwd" id="pwd" onChange={this.handleChange}/>
                    </div>
                    
                    <div className="signin">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
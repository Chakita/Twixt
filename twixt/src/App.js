import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatRoom from "./ChatRoom/ChatRoom";
import InterestPage from "./interest.js";
import SignUp from "./signup.js"
import HomePage from "./homepage.js";
import Login from "./login.js";
//import Chatroom from "./chatroom.js";

class App extends React.Component{
  render(){
        return(
          <Router>
          <Route exact path="/" render={
            ()=>{
                return(<Login/>)
                }
            }/>
          <Route path="/signup" render={
            ()=>{
              return(<SignUp/>)
            }
          }/>
          <Route path="/search" render={
              ()=>{
                return(<InterestPage/>)}
            }/>
          <Route path="/discussion" render={
              ()=>{
                  return(<ChatRoom/>)}
              }/>
          <Route path="/home" render={
            ()=>{
              return(<HomePage/>)
            }
          }/>
        </Router>   
        );
  }
}

export default App;


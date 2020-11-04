import React from "react";
import InterestPage from "./interest.js";
//import Login from "./login.js";
//import SignUp from "./signup.js"
//import {BrowserRouter as Router ,  Route} from 'react-router-dom';

class App extends React.Component{
  render(){
    /*return (
      <React.Fragment>
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
        </Router>*/
        return(
        <React.Fragment>
          <InterestPage/>
      </React.Fragment>      
    )
  }
}

export default App;

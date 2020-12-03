import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ChatRoom from "./ChatRoom/ChatRoom";
import InterestPage from "./interest.js";
//import SignUp from "./signup.js";
import HomePage from "./homepage.js";
import Login from "./login.js";
//import Chatroom from "./Chatroom.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route
            exact
            path="/"
            render={() => {
              return <Login />;
            }}
          />

          <Route
            path="/search"
            render={() => {
              return <InterestPage />;
            }}
          />
          <Route
            path="/discussion"
            component={ChatRoom}
            /*path="/discussion"
            render={() => {
              return <Chatroom />;
            }}*/
          />
          <Route
            path="/home"
            render={() => {
              return <HomePage />;
            }}
          />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

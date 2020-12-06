import axios from "axios";
import "./styling/people.css"
import React, { Component } from "react";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similarPeople: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/people/?email=" +
          localStorage.getItem("username")
      )
      .then((res) => {
        this.setState({
          similarPeople: res.data,
        });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.similarPeople.map((person) => {
            console.log(person);
            return <li>{person.email}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default People;

import React, { useState } from "react";
import "./styling/interest.css";
import music from "./images/music.png";
import dance from "./images/dance.png";
import sports from "./images/sports.png";
import hackathon from "./images/hackathon.png";
import ml from "./images/ml.png";
import webdev from "./images/webdev.png";
import Axios from "axios";

const interests = [];

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
      backgroundImage: "url(" + image + ")",
    };
    return <header style={style} id={image} className="card-header"></header>;
  }
}

class Button extends React.Component {
  render() {
    var margin = {
      marginLeft: "80px",
      width: "75px",
      textAlign: "center",
    };
    return (
      <button className="btn btn-outline-info" style={margin}>
        Add
      </button>
    );
  }
}

function CardBody(props) {
  const [clicked, setClicked] = useState(false);

  function clicker() {
    if (clicked) {
      setClicked(false);

      interests.splice(interests.indexOf(props.title), 1);
    } else {
      setClicked(true);
      interests.push(props.title);
    }
  }
  return (
    <div className="card-body">
      <h2>{props.title}</h2>
      <p className="body-content">{props.text}</p>
      <button
        style={{
          marginLeft: "80px",
          width: "75px",
          textAlign: "center",
        }}
        className={clicked ? "btn btn-success" : "btn btn-outline-info"}
        onClick={clicker}
      >
        {clicked ? "Added" : "Add"}
      </button>
    </div>
  );
}

class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader image={this.props.image} />
        <CardBody title={this.props.title} text={this.props.text} />
      </article>
    );
  }
}

function InterestPage() {
  return (
    <div>
<<<<<<< HEAD
      <button
        style={{
          marginLeft: "80px",
          width: "75px",
          textAlign: "center",
        }}
        onClick={() =>
          Axios.post("http://localhost:8080/addInterest", {
            interests,
            username: localStorage.getItem("username"),
          })
            .then((result) => console.log(result))
            .catch((err) => console.log(err))
        }
      >
        Continue
      </button>

      <h1 className="heading">Pick your interests</h1>
=======
      <h1 className="heading">Pick your interests</h1>
      <button 
        style={{
        marginLeft: "45%",
        width: "120px",
        textAlign: "center",
        }} 
        className="btn btn-outline-info btn-lg"
        onClick={() => 
          {
          Axios.post("http://localhost:8080/addInterest",{interests,username:localStorage.getItem("username")})
          .then(result => console.log(result))
          .catch(err => console.log(err))

          window.location = "/people"
        }
        }
      >Continue</button>
>>>>>>> 864865d6abcd45d9960269f07155304fff4f2e0e
      <table>
        <tbody>
          <tr>
            <td>
              <Card
                image={music}
                title={"Music"}
                text={"Produce the finest of symphonies"}
              />
            </td>
            <td>
              <Card
                image={dance}
                title={"Dance"}
                text={"Find the best squad and get boogeying"}
              />
            </td>
            <td>
              <Card
                image={sports}
                title={"Sports"}
                text={"Play against the best"}
              />
            </td>
          </tr>
          <tr>
            <td>
              <Card
                image={hackathon}
                title={"Hackathon"}
                text={"Start your StartUp journey"}
              />
            </td>
            <td>
              <Card
                image={ml}
                title={"AI & ML"}
                text={"Learn with the machines"}
              />
            </td>
            <td>
              <Card
                image={webdev}
                title={"Web Dev"}
                text={"Leave your mark on the internet"}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default InterestPage;

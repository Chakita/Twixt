import React from "react";
//import InterestPage from "./interest.js"
//import Login from "./login"

//Links of NavBar
/*
<Link to="/search">Search</Link>
<Link to="/discussion">Discussion</Link>
<Link to="/">Sign Out</Link>
*/
import "./styling/homepage.css";
import Carousel from "react-bootstrap/Carousel";
import music from "./images/music.png";
import dance from "./images/dance.png";
import sports from "./images/sports.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="listStyle">
        <li className="itemStyle">
          <Link to="/search">Search</Link>
        </li>
        <li className="itemStyle">
          <Link to="/discussion">Discussions</Link>
        </li>
        <li className="itemStyle">
          <Link to="/people">People</Link>
        </li>
        <li className="itemStyle">
          <Link to="/">Sign Out</Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return <h1 className="title">Twixt</h1>;
};

const ImageRotator = () => {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img className="d-block w-50" src={sports} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img className="d-block w-50" src={music} alt="Third slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img className="d-block w-50" src={dance} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <h1 className="subtitle">General Announcement</h1>
      <ImageRotator />
    </React.Fragment>
  );
};

export default HomePage;

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
import Event1 from "./images/Event1.jpg";
import Event2 from "./images/Event2.jpg";
import Event3 from "./images/Event3.jpg";
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
        <img className="d-block w-50" src={Event1} alt="First slide" />
        <Carousel.Caption>
          <h3>Sports Event at PES</h3>
          <p>Get,Set,Play!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img className="d-block w-50" src={Event2} alt="Third slide" />
        <Carousel.Caption>
          <h3>Ideathon at F block !</h3>
          <p>Let us brain storm for a better future!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img className="d-block w-50" src={Event3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Musical event at PES University</h3>
          <p>Let the music soothe your soul.</p>
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

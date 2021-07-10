import React from "react";

import { Link } from "react-router-dom";

import astro from "../images/astronauts.svg";
import logo from "../images/platziconf-logo.svg";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home">

      <div className="page-info">
        <img 
        src={logo} 
        alt="Platzi conf logo" />
        <h1>Print your Badges</h1>
        <p>The easiest way to manage your app</p>
        <Link to="badges" className="btn btn-primary">
          Start Now
        </Link>
      </div>
      
      <div className="astronauts">
        <img src={astro} alt="astronauts" />
      </div>
    </div>
  );
}

export default Home;

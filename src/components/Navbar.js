import React from "react";

import { Link } from "react-router-dom";

import "./styles/navbar.css";
import Logo from "../images/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={Logo} alt="Logo" />
            <span className="light">Platzi</span>
            <span className="bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;

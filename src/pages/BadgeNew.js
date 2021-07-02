import React from "react";

import "./styles/BadgeNew.css";

import Navbar from "../components/Navbar";
import Badge from "../components/Badge"
import header from "../images/badge-header.svg";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Header" />
        </div>
        <div className="container">
            <div className="row">
                <div className="column">
                    <Badge firstName="Juan Diego" lastName="Quintero" avatar="https://www.gravatar.com/avatar/c2ea97d5c008281b201a107b2f388204" jobTitle="FrontEnd developer" linkedIn= "juan_diego_quintero" />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;

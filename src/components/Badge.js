import React from "react";
import "../components/styles/badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar.js";

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Conference" />
        </div>

        <div className="badge_section-name">
          <Gravatar
            className = "badge_avatar" 
            email={this.props.email}
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="badge_section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>
              @{this.props.linkedIn}
          </div>
        </div>

        <div className="badge_footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;

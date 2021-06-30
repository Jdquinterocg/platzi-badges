import React from "react";
import "../components/styles/badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Conference" />
        </div>

        <div className="badge_section-name">
          <img className = "badge_avatar" src="https://www.gravatar.com/avatar/c2ea97d5c008281b201a107b2f388204" alt="Logo" />
          <h1>
            Juan Diego <br /> Quintero
          </h1>
        </div>

        <div className="badge_section-info">
          <h3>Frontend developer in formation</h3>
          <div>
              @juan_diego_quintero
          </div>
        </div>

        <div className="badge_footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;

import React, { Component } from "react";

import './styles/badgeList.css'
import twitterLogo from '../images/twitter.svg'

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="row" id="listElement">
                <div className="col-3" >
                  <img id="imgList" className="rounded-circle" src={badge.avatarUrl} alt="" />
                </div>
                <div id="textList" className="col-6">
                  <p>
                    <strong>
                      {badge.firstName} {badge.lastName}
                    </strong>
                  </p>
                  <span>
                      <img className="twitterLogo" src={twitterLogo} alt="" />
                  </span>
                  <span className="text-primary">
                    @{badge.twitter}
                  </span>
                  <p>
                    {badge.jobTitle}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;

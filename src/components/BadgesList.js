import React from "react";
import { Link } from "react-router-dom";

import Gravatar from "./Gravatar";

import './styles/badgeList.css'
import twitterLogo from '../images/twitter.svg'

class BadgesList extends React.Component {
  render() {

    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>
            No badges were found
          </h3>
          <Link className="btn btn-primary" to="badges/new">Create a new one</Link>
        </div>
      )
    }

    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <Link className="text-reset text-decoration-none" to= {`/badges/${badge.id}/edit`}>
              <li key={badge.id}>
                <div className="row" id="listElement">
                  <div className="col-3" >
                    <Gravatar 
                      id="imgList" 
                      className="rounded-circle" 
                      email={badge.email} 
                      alt="" 
                    />
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
            </Link>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;

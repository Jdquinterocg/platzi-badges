import React from 'react'
import { Link } from "react-router-dom";

import confLogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function BadgeDetails(props) {
    const badge = props.badge;
    return (
        <div>

        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName={badge.firstName}
                lastName={badge.lastName}
                email={badge.email}
                twitter={badge.twitter}
                jobTitle={badge.jobTitle}
              />
            </div>

            <div className="col">
              <h2>Actions</h2>
              <div>
                <div><Link className="btn btn-primary mb-3" to={`/badges/${badge.id}/edit`}> Edit </Link></div>
              </div>
              <div>
                <div> 
                    <button onClick={props.onOpenModal} className="btn btn-danger mb-3" > 
                        Delete 
                    </button>
                </div>
                <DeleteBadgeModal isOpen={props.isOpen} 
                                  onClose={props.onCloseModal}
                                  onDeleteBadge = {props.onDeleteBadge}
                                />
              </div>
            </div>
          </div>
        </div>

      </div>

    )
}

export default BadgeDetails

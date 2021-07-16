import React from "react";
import { Link } from "react-router-dom";

import Gravatar from "./Gravatar";

import "./styles/badgeList.css";
import twitterLogo from "../images/twitter.svg";

function BadgesList(props) {
  const badges = props.badges;

  const [query, setQuery] = React.useState("");
  const [filterBadges, setFilterBadges] = React.useState(badges)

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilterBadges(result)
  }, [ badges, query ]);

  if (filterBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label> Filter Badges </label>
          <input
            type="text"
            className="form-control mb-3"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="badges/new">
          Create a new one
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="form-group">
        <label> Filter Badges </label>
        <input
          type="text"
          className="form-control mb-3"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul className="list-unstyled">
        {filterBadges.map((badge) => {
          return (
            <Link
              className="text-reset text-decoration-none"
              to={`/badges/${badge.id}`}
            >
              <li key={badge.id}>
                <div className="row" id="listElement">
                  <div className="col-3">
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
                    <span className="text-primary">@{badge.twitter}</span>
                    <p>{badge.jobTitle}</p>
                  </div>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;

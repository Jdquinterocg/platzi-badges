import React from "react";
import { Link } from "react-router-dom";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="page">

      <div className="page-info">
        <h1>404: Page doesn't found</h1>
        <Link to="/" className="btn btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

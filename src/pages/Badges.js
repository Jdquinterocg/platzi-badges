import React from "react";
import { Link } from "react-router-dom";

import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

import api from "../api";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";

class Badges extends React.Component {
  
  state = {
    loading:true,
    error:null,
    data:undefined
  };

//This is called when this component is visible on screen
componentDidMount() { 
  this.fetchData();
};

// Api petition
fetchData = async () => {
  
  this.setState({
    loading: true,
    error: null,
  });

  try {
    const data = await api.badges.list();
    this.setState({loading: false,
                    data: data
                  });

  } catch (error) {
    this.setState({
      loading: false,
      error: error,
    });
  }
}

componentWillUnmount() {
   console.log('6. componentWillUnmount');
};

  render() {
    // Handle loading
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    // Handle error
    if (this.state.error) {
      return <PageError error={this.state.error}/>;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

                <BadgesList badges={this.state.data}></BadgesList>
          {/* <div className="Badges__list">
            <div className="Badges__container">
            </div>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;

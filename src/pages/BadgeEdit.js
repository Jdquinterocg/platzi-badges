import React from "react";

import "./styles/BadgeEdit.css";
import header from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import api from "../api";

class BadgeEdit extends React.Component {
  state = { 
    loading: true,
    error: null,
    form:{
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
  } };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      
      this.setState({ loading: false, form: data })
      
    } catch (error) {
      this.setState({ loading:false, error })
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      },
    });
  };

  //OnSubmit create a new Array with the Badge info
  handleSubmit  = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update( this.props.match.params.badgeId,this.state.form );
      this.setState({ loading:false })

      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading:false, error: error})
    }

  }

  render() {
    // Handle loading
    if (this.state.loading === true) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Header" />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge
                      firstName={this.state.form.firstName || 'First Name'}
                      lastName={this.state.form.lastName || 'Last Name'}
                      email= {this.state.form.email}
                      jobTitle={this.state.form.jobTitle || 'Job Title'} 
                      linkedIn= {this.state.form.twitter || 'twitter'}
                      avatar="https://www.gravatar.com/avatar/c2ea97d5c008281b201a107b2f388204?d=identicon"
                    />
                </div>

                <div className="col-6">
                <h1>EDIT ATTENDANT</h1>
                    <BadgeForm 
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValue = {this.state.form}
                    error={this.state.error}
                     />
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;

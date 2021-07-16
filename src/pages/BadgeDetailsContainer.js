import React from "react";

import PageError from "../components/PageError";
import PageLoading from "../components/PageLoading";
import BadgeDetails from "./BadgeDetails";
import api from "../api";

class BadgeDetailsContainer extends React.Component {
  state = {
    data: undefined,
    loading: true,
    error: null,
    isOpen: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleOpen = e => {
    this.setState({ isOpen: true })
  }

  handleClose = e => {
    this.setState({ isOpen: false })
  }

  handleDeleteBadge = async (e) => {
    this.setState({ loading:true, error:null })

    try {
      await api.badges.remove(
        this.props.match.params.badgeId
      )
      this.setState({ loading:false })

      this.props.history.push('/badges')
    } catch (error) {
      this.setState({ loading:false, error:error })
    }
  }

  render() {
    // Handle loading
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    
    if (this.state.error) {
      return <PageError error={this.state.error}/>;
    }

    return <BadgeDetails 
              badge={this.state.data} 
              onCloseModal={this.handleClose} 
              onOpenModal={this.handleOpen}
              onDeleteBadge = {this.handleDeleteBadge}
              isOpen={this.state.isOpen}
            />
  }
}

export default BadgeDetailsContainer;

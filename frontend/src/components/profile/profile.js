import React from 'react';
import './profile.css';
import ProfileDataContainer from './profile_data_container';
import ProfileChartContainer from './profile_chart_container';
import { buildPortfolio } from '../../actions/portfolio_actions';
import { buildProfile } from '../../actions/profile_actions';

class Profile extends React.Component {
  componentDidMount() {
    let { fetchTrades, userId, getStat, getProfileValues } = this.props;
    fetchTrades(userId);
    getStat(userId);
    getProfileValues(userId);
    buildPortfolio(userId)
    buildProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.myTransactions !== prevProps.myTransactions) {
      this.props.buildPortfolio(this.props.myTransactions);
      this.props.buildProfile()
    }
    if (Object.keys(this.props.myPortfolio) !== Object.keys(prevProps.myPortfolio)) {
      this.props.buildProfile();
    }
  }

  render() {

    let theProfileDetailsAndGraph = (
      <div className="profile-details-and-graph">
        <ProfileDataContainer />
        {/* <ProfileChartContainer /> */}
      </div>
    );
      let username = this.props.username;
    return (
      <div className="profile-container">
        <div className="profile-header">
          <h1>Hello {username}! Here is your Profile Page</h1>  
        </div>
        {theProfileDetailsAndGraph}
      </div>
    )  
  };
}

export default Profile;
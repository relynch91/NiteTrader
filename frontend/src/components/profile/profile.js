import React from 'react';
import './profile.css';
import ProfileDataContainer from './profile_data_container';

class Profile extends React.Component {
  async componentDidMount() {
    let { fetchTrades, userId, getStat, getProfileValues, buildPortfolio, buildProfile } = this.props;
    let trades = await fetchTrades(userId);
    let stockInfo = await buildPortfolio(trades.transactions.data);
    getStat(userId);
    // getProfileValues(userId);
  }
  
  // componentDidUpdate(prevProps) {
    // buildProfile(stocks);
  // }

  render() {

    let theProfileDetailsAndGraph = (
      <div className="profile-details-and-graph">
        <ProfileDataContainer />
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
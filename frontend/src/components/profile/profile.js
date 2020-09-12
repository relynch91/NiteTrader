import React from 'react';
import './profile.css';
import ProfileDataContainer from './profile_data_container';
import ProfileChartContainer from './profile_chart_container';

class Profile extends React.Component {

  render() {
    let theProfileDetailsAndGraph = (
      <div className="profile-details-and-graph">
        <ProfileDataContainer />
        <ProfileChartContainer />
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
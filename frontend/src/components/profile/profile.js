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
    return (
      <div className="profile-container">
        {theProfileDetailsAndGraph}
      </div>
    )  
  };
}

export default Profile;
import React from 'react';
import './profile.css';
import ProfileDataContainer from './profile_data_container';
import ProfileChartContainer from './profile_chart_container';

class Profile extends React.Component {

  componentDidMount(){
    let { fetchTrades, userId } = this.props;
    fetchTrades(userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.myTransactions !== prevProps.myTransactions) { //myTransacitons is the trnsaction state list
      this.props.buildPortfolio(this.props.myTransactions);
    }
  }

  render() {
    return (
      <div className="profile-container">
        <div className="profile-header">
          <h1>Your Profile Page</h1>  
        </div>
        <div className='profile-info'>
          <ProfileDataContainer/>
          <ProfileChartContainer/>
        </div>
      </div>
    )  
  };
}

export default Profile;
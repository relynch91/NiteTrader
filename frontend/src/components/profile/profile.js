import React from 'react';
import './profile.css';

class Profile extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }
  // }

  componentDidMount(){
    let { fetchTrades, userId } = this.props;
    fetchTrades(userId);
  }

  render() {
      return (
        <div className='profile-container'>
          <h1>
            Profile Page
          </h1>
        </div>
      )
  }
}

export default Profile;
import React from 'react';
import './profile.css';

class ProfileData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    this.props.buildProfile(this.props.myPortfolio);
  }

  render() {
    return (
      <div className='profile-data'>
        <h1>Profile Data</h1>
      </div>
    )  
  }
}

export default ProfileData;
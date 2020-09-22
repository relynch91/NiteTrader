import React from 'react';
import './profile.css';

class ProfileChart extends React.Component {
  constructor(props) {
    super(props)

  }

  async componentDidMount() {
    let { getProfileValues, userId } = this.props;
    getProfileValues(userId);
    // console.log(values);
  }


  render() {
    return (
      <div className='profile-graph-container'>
        <h1>Profile Chart</h1>
        <div>
          <h2>This is where the profile chart will be located.</h2>
        </div>
      </div>
    )  
  }
}

export default ProfileChart;
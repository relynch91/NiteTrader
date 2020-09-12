import React from 'react';
import './profile.css';

class ProfileChart extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    let { getProfileValues, userId } = this.props;
    let values = getProfileValues(userId);
    console.log(values);
  }


  render() {
    return (
      <div className='profile-graph-container'>
        <h1>Profile Chart</h1>
      </div>
    )  
  }
}

export default ProfileChart;
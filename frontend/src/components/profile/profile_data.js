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
    let transactions = this.props.trades;

    return (
      <div className='profile-data'>
        <div className='profile-info'> 
          <h1 >Profile Data</h1>
        </div>
        <div className='profile-transactions'> 
          <h1>Your Transactions: </h1>

        </div>
      </div>
    )  
  }
}

export default ProfileData;
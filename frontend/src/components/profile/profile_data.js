import React from 'react';
import './profile.css';

class ProfileData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.myPortfolio);
    this.props.buildProfile(this.props.myPortfolio);
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.props.myPortfolio !== prevState.myPortfolio) {
    //   console.log('here');
    //   // this.props.buildProfile(this.props.myPortfolio);
    // }
    // console.log('hello');
    // if (Object.keys(this.props.myPortfolio).length > 0 ) {
    //   console.log('fuck');
    // }
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
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
    // <div className='stock-search-landing-results'>
    //    <h1>Click on a company below to view stock data</h1>
    //    <ul className='stock-search-results-container'>
    //       {this.props.stocks.stockNameSearch.map((compObj, idx) => {
    //         return (
    //            <li onClick={() => this.handleClick(compObj['1. symbol'])}
    //                key={idx*23}
    //            >
    //                <p>Ticker: {compObj['1. symbol']} </p>
    //                <p>Company Name: {compObj['2. name']} </p>
    //                <p>Match Score {(parseFloat(compObj['9. matchScore']) * 100).toFixed(2)}% </p>
    //            </li>
    //         })}
    //    </ul>
    // </div>

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
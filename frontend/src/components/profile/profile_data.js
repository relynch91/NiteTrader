import React from 'react';
import './profile.css';

class ProfileData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    this.buyOrSell = this.buyOrSell.bind(this);
  }

  componentDidMount() {
    this.props.buildProfile(this.props.myPortfolio);
  }

  buyOrSell(value) {
    if (value) {
      return 'Buy'
    };
    return 'Sell';
  }

  render() {
    let transactions = this.props.trades;
    debugger
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
            <ul className='profile-transactions-container'>
              {Object.keys(transactions).map((compObj, idx) => {
                return (
                  <div className='profile-transaction-info'>
                    <li className = 'profile-transaction-list' key={idx*29}>
                      <h4>Ticker: {transactions[compObj]['ticker']} </h4>
                      <h4>Date: {transactions[compObj]['date'].split('T')[0]} </h4>
                      <h4>Type: {this.buyOrSell(transactions[compObj]['buy'])} </h4>
                      <h4>Price: {transactions[compObj]['price']} </h4>
                      <h4>Shares: {transactions[compObj]['shares']} </h4>
                    </li>
                  </div>
              )})}
            </ul>
        </div>
      </div>
    )  
  }
}

export default ProfileData;
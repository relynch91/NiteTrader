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
    let profile = this.props.myProfile;
    let portfolio = this.props.myPortfolio;
    let totalValue = parseFloat(profile['profileValue'] + parseFloat(profile['profileValueStat']));
    let percentage;

    if (totalValue > 50000) {
      percentage = (parseFloat(profile['profileValue']) / 50000);
    } else {
      console.log(profile['profileValue'])
      percentage = -(1 - (parseFloat(totalValue) / 50000)) * 100
    }
    return (
      <div className='profile-data'>
        <div className='profile-data-wrapper'>
          <div className='profile-info-data'>
            <h1> Your Profile Data: </h1>
            <h2> Profile Total Value: { parseFloat(totalValue).toFixed(2) } $</h2>
            <h2>Profile Cash: { parseFloat(profile['profileValueStat']).toFixed(2) } $</h2>
            <h2>Profile Stock Value: { parseFloat(profile['profileValue']).toFixed(2) } $</h2>
            <h2>Profile Growth(Overall): {percentage.toFixed(2) } % </h2>
          </div>
        </div>
        <div className='profile-info-stocks'>
          <h1>Your Current Stocks:</h1>
            <ul className='profile-info-stocks-container'>
              {Object.keys(portfolio).map(compObj => {
                return (
                  <div className='profile-info-stocks-items-list'>
                    <li className='profile-info-stocks-item'>
                      <h4>Ticker: {compObj}</h4>
                      <h4>Price Per Share: {parseFloat(portfolio[compObj]['pricePerShare']).toFixed(2)}</h4>
                      <h4>Shares Owned: {portfolio[compObj]['ownedShares']}</h4>
                      <h4>Current Price: {parseFloat(portfolio[compObj]['pricePerShare']).toFixed(2)}</h4>
                    </li>
                  </div>
                )
              })}
            </ul>
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
                      <h4>Price: {parseFloat(transactions[compObj]['price']).toFixed(2)} </h4>
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
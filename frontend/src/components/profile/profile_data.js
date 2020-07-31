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

  componentDidUpdate(prevProps) {
    if (prevProps.myPortfolio !== this.props.myPortfolio) {
      this.props.buildProfile(this.props.myPortfolio);
    }
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
      percentage = -(1 - (parseFloat(totalValue) / 50000)) * 100
    }

    let currentStocks = (Object.keys(portfolio).length > 0) ? (
      <div className='profile-info-stocks'>
        <h1>Your Current Stocks:</h1>
        <ul className='profile-info-stocks-container'>
          {Object.keys(portfolio).map(compObj => {
            return (
              <div>
                <li className='profile-info-stocks-item'>
                  <h4>Ticker: {compObj}</h4>
                  <h4>Price Per Share: {parseFloat(portfolio[compObj]['pricePerShare']).toFixed(2)}</h4>
                  <h4>Shares Owned: {portfolio[compObj]['ownedShares']}</h4>
                  <h4>Latest Price: {parseFloat(portfolio[compObj]['quoteEndPointData']['price']).toFixed(2)}</h4>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    ) : (
      <div className='profile-info-stocks'>
        <h1>Your Current Stocks:</h1>
          <div className='profile-info-stocks-item-blank'>
            <h1>Sorry, you do not currently own any stocks. Search for some to buy!</h1>
          </div>
      </div>
    )

    let transactionContainer = (Object.keys(this.props.trades).length > 0) ? (
      <div className='profile-transactions'>
        <h1>Your Transactions: </h1>
        <ul className='profile-transactions-container'>
          {Object.keys(transactions).map((compObj, idx) => {
            return (
              <div className='profile-transaction-info'>
                <li className='profile-transaction-list' key={idx * 29}>
                  <h4>Ticker: {transactions[compObj]['ticker']} </h4>
                  <h4>Date: {transactions[compObj]['date'].split('T')[0]} </h4>
                  <h4>Type: {this.buyOrSell(transactions[compObj]['buy'])} </h4>
                  <h4>Price: {parseFloat(transactions[compObj]['price']).toFixed(2)} </h4>
                  <h4>Shares: {transactions[compObj]['shares']} </h4>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    ) : (
        <div className='profile-info-stocks'>
          <h1>Your Transactions:</h1>
          <div className='profile-info-transactions-blank'>
            <h1>Sorry, you do not have any transactions.  Buy some stock!</h1>
          </div>
        </div>
    )
    return (
      <div className='profile-data'>
        <div className='profile-data-wrapper'>
          <div className='profile-info-data'>
            <h1>Your Profile Data: </h1>
            <h2>Profile Total Value: { parseFloat(totalValue).toFixed(2) } $</h2>
            <h2>Profile Cash: { parseFloat(profile['profileValueStat']).toFixed(2) } $</h2>
            <h2>Profile Stock Value: { parseFloat(profile['profileValue']).toFixed(2) } $</h2>
            <h2>Profile Growth(Overall): { percentage.toFixed(2) } % </h2>
          </div>
        </div>
        {currentStocks}
        {transactionContainer}
      </div>
    )  
  }
}

export default ProfileData;
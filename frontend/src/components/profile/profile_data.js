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
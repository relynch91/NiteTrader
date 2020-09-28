import React from 'react';
import './profile.css';


function CurrentStocks({ stocks, portfolio }) {

  if (!!stocks) {
    return (
      <div className='profile-info-stocks'>
        <h1>Your Current Stocks:</h1>
        <ul className='profile-info-stocks-container'>
          {Object.keys(portfolio).map(compObj => {
            let price;
            if (!stocks[compObj]) {
              price = 'N/A'
            } else {
              price = parseFloat(stocks[compObj]['price']).toFixed(2)
            }
            return (
              <div>
                <li className='profile-info-stocks-item'>
                  <span >Ticker: {compObj}</span >
                  <span >Price Per Share: {parseFloat(portfolio[compObj]['pricePerShare']).toFixed(2)}</span >
                  <span >Shares Owned: {portfolio[compObj]['ownedShares']}</span >
                  <span >Latest Price: ${price} </span >
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    )
  } else {
    return (
      <div className='profile-info-stocks'>
        <h1>Your Current Stocks:</h1>
        <span className='profile-info-stocks-item-blank'>
          You do not currently own any stocks. Search for some to buy!
        </span>
      </div>
    )
  }
}

function buyOrSell(value) {
  if (value) {
    return 'Buy'
  } else {
    return 'Sell';
  }
}

function TransactionContainer({ transactions }) {

  if (!!transactions) {
    return (
      <div className='profile-transactions'>
        <h1>Your Transactions: </h1>
        <ul className='profile-transactions-container'>
          {Object.keys(transactions).map((compObj, idx) => {
            return (
              <div className='profile-transaction-info'>
                <li className='profile-transaction-list' key={idx * 29}>
                  <h4>Ticker: {transactions[compObj]['ticker']} </h4>
                  <h4>Date: {transactions[compObj]['date'].split('T')[0]} </h4>
                  <h4>Type: {buyOrSell(transactions[compObj]['buy'])} </h4>
                  <h4>Price: {parseFloat(transactions[compObj]['price']).toFixed(2)} </h4>
                  <h4>Shares: {transactions[compObj]['shares']} </h4>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
  else {
    return (
      <div className='profile-info-stocks'>
        <h1>Your Transactions:</h1>
        <div className='profile-info-transactions-blank'>
          <h1>Sorry, you do not have any transactions.  Buy some stock!</h1>
        </div>
      </div>
    )
  }
}

function GainLoss({ totalValue }) {

  let percentage;

  if (totalValue > 50000) {
    percentage = ((totalValue / 50000) - 1) * 100;
    return (
      <span className="value"> {percentage.toFixed(2)}%</span>
    )
  } else {
    percentage = - (1 - (parseFloat(totalValue) / 50000)) * 100
    return (
      <span className="loss"> {percentage.toFixed(2)}%</span>
    )
  }

}

class ProfileData extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    let { fetchTrades, userId, getStat, endPointState,
      buildPortfolio, getStocks, buildProfile } = this.props;
    let trades = await fetchTrades(userId);
    let stockInfo = await buildPortfolio(trades.transactions.data);
    let tickers = Object.keys(stockInfo);
    let dbFetch = await getStocks(tickers);
    let stocks = endPointState(dbFetch);
    await buildProfile(stocks, stockInfo);
    getStat(userId);
  }

  render() {
    let transactions = this.props.trades;
    let profile = this.props.myProfile;
    let portfolio = this.props.myPortfolio;
    let stocks = this.props.ownedStocks;
    let totalValue = parseFloat(profile['profileValue'] + parseFloat(profile['profileValueStat']));


    return (
      <div className='profile-data'>
        <div className='profile-data-wrapper'>
          <div className='profile-info-data'>
            <h1>Profile Summary: </h1>
            <h2>Total Value:
                <span className="value"> ${parseFloat(totalValue)
                .toLocaleString(
                  undefined, { minimumFractionDigits: 2 }
                )}
              </span>
            </h2>
            <h2>Cash:
                <span className="value"> ${parseFloat(profile['profileValueStat'])
                .toLocaleString(
                  undefined, { minimumFractionDigits: 2 }
                )}
              </span>
            </h2>
            <h2>Stock Value:
              <span className="value"> ${parseFloat(profile['profileValue'])
                .toLocaleString(
                  undefined, { minimumFractionDigits: 2 }
                )}
              </span>
            </h2>
            <h2>Performance (Lifteime): <GainLoss totalValue={totalValue} /> </h2>
          </div>
        </div>
        <CurrentStocks stocks={stocks} portfolio={portfolio} />
        <TransactionContainer transactions={transactions} />
      </div>
    )
  }
}
export default ProfileData;
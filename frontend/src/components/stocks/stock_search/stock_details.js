import React from 'react';
import './stock_details.css'
import * as StockUtil from '../../../util/stocks_api_util';

export default class StockDetails extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numShares: 0,
      transactionType: true,
    };
  }

  componentDidMount() {
    this.setState({
      mostRecentStockApiData: StockUtil.mostRecent(this.props.stockDetails.intraDay)
    })
  }

  handleChange() {
    return (e) => this.setState({ numShares: e.currentTarget.value })
  }

  handleClick(type){
    let data = {}
    data['type'] = type
    this.setState({ transactionType: type })
    this.handleSubmit(type);
  }

  handleSubmit(buy) {
    let { data, ticker } = this.state.mostRecentStockApiData;

    let cash = this.props.profile
    let numberOwned;
    if (this.props.portfolio[ticker]) {
      numberOwned = this.props.portfolio[ticker];
    } else {
      numberOwned = { ownedShares: 0 }
    }
    let transactionData = {
      'userId': this.props.userId,
      'ticker': ticker,
      'cash': cash,
      'price': parseFloat(data["4. close"]), 
      'ownedShares': numberOwned,
      'shares': this.state.numShares, 
      'buy': buy 
    }
    
    if (transactionData['buy']) {
      this.props.buyStock(transactionData)
        // .then(() => push('/profile/'));
    } else {
      this.props.sellStock(transactionData)
        // .then(() => push('/profile/'));
    }
  }

  latestUpdateTicker() {
    let apiResult = this.props.stockDetails.intraDay['Time Series (15min)'];
    let objKeys = Object.keys(apiResult);
    return {
      value: apiResult[objKeys[0]],
      date: objKeys[0]
    }
  }

  lastWeek() {
    let weekPrior = this.props.stockDetails.weeklySeries['Weekly Time Series'];
    let stockTicker = this.props.stockDetails.weeklySeries['Meta Data']['2. Symbol'];
    let weekKeys = Object.keys(weekPrior);
    return { 
      data: weekPrior[weekKeys[0]],
      date: weekKeys[0],
      ticker: stockTicker
    };
  }

  render() {
    let stockData = this.latestUpdateTicker();
    let dayStock = stockData.value["4. close"];
    let recentDate = stockData.date.split(" ")[0];
    let weeklyStockData = this.lastWeek();
    let { date, data, ticker } = weeklyStockData;
    return (
      <div className='the-details-stock-api'>
        <div className="stock-details">
          <h1>Information for {ticker}:</h1>
          <ul>
            <li>Week of {date} High: ${(parseFloat(data["2. high"]).toFixed(2))}</li>
            <li>Week of {date} Low: ${(parseFloat(data["3. low"]).toFixed(2))}</li>
            <li>Latest Price as of {recentDate}: ${(parseFloat(dayStock).toFixed(2))}</li>
          </ul>
        </div>
        <div className='stock-buy-sell'>
          <form >
            <p>Would you like to buy or sell shares?</p>
            <div>
              <input
                className="stock-buy-input"
                type="number"
                onChange={this.handleChange()}
                value={this.state.numShares}
              />
              <button className="buy-button"
                onClick={() => this.handleClick(true)} > Buy
              </button>
              <button className="sell-button"
                onClick={() => this.handleClick(false)}> Sell
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
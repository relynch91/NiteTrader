import React from 'react';
import './stock_details.css'

export default class StockDetails extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numShares: 0,
      transactionType: true,
      flag: false,
    };
    this.findPrice = this.findPrice.bind(this);
  }

  async componentDidMount() {
    let { userId, fetchTrades, buildPortfolio, getStat } = this.props;
    let trades = await fetchTrades(userId);
    await buildPortfolio(trades.transactions.data);
    getStat(userId);
  }

  componentDidUpdate(prevProps) {
    if (this.state.flag) {
      this.oneMoreTime();
      this.state.flag = false;
    }
  }

  async oneMoreTime() {
    let { userId, fetchTrades, buildPortfolio, getStat } = this.props;
    let trades = await fetchTrades(userId);
    await buildPortfolio(trades.transactions.data);
    getStat(userId);
    this.state.flag = false;
  }

  handleChange() {
    return (e) => this.setState({ numShares: e.currentTarget.value })
  }

  handleClick(buy) {
    let price = this.findPrice(
      this.props.stockDetails.intraDay["Time Series (15min)"]);
    let ticker = this.props.stockDetails.intraDay["Meta Data"]['2. Symbol'];
    let { profile, portfolio, handleBuy, handleSell, userId } = this.props;
    let cash = profile;
    let numberOwned;
    if (portfolio[ticker]) {
      numberOwned = portfolio[ticker];
    } else {
      numberOwned = { ownedShares: 0 }
    }

    let transactionData = {
      'userId': userId,
      'ticker': ticker,
      'cash': cash,
      'price': price, 
      'ownedShares': numberOwned['ownedShares'],
      'shares': this.state.numShares, 
      'buy': buy 
    }
    if (transactionData['buy']) {
      console.log(this.props.flag)
      this.setState()
      return handleBuy(transactionData)
    } else { 
      this.props.flag = true;
      return handleSell(transactionData)  
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

  findPrice(obj) {
    let keys = Object.keys(obj);
    let lastKey = keys[0];
    let price = (obj[lastKey]);
    let last = price['4. close'];
    return last
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
    let cash = this.props.profile;
    let dayStock = stockData.value["4. close"];
    let recentDate = stockData.date.split(" ")[0];
    let weeklyStockData = this.lastWeek();
    let ownedStocks = Object.keys(this.props.portfolio);
    let { data, ticker, date } = weeklyStockData;
    let transactionErrors = this.props.transactionErrors
    let numberOwned;
    let pricePerShare;

    if (Object.keys(transactionErrors).length === 0) {
    }
    if (ownedStocks.includes(ticker)) {
      numberOwned = this.props.portfolio[ticker]['ownedShares'];
      pricePerShare = parseFloat(this.props.portfolio[ticker]['pricePerShare']).toFixed(2);
    } else {
      numberOwned = 0;
      pricePerShare = "0.00";
    }
    return (
      <div className='the-details-stock-api'>
        <div className="stock-details-goods">
          <h1>Information for { ticker }:</h1>
          <h4>Week of { date } High: ${parseFloat(data["2. high"]).toFixed(2) }</h4>
          <h4>Week of { date } Low : ${ parseFloat(data["3. low"]).toFixed(2) }</h4>
          <h4>Latest Price as of {recentDate}: ${ parseFloat(dayStock).toFixed(2) }</h4>
          <h4>Number of Shares Owned: { numberOwned }</h4>
          <h4>Average Price Per Share: { parseFloat(pricePerShare).toFixed(2) }</h4>
          <h4>Current amount of cash: $ { parseFloat(cash).toFixed(2) } </h4>

        </div>
        <div className='stock-buy-sell-container'>
            <div className='stock-buy-sell'>
              <h1>How many shares would you like to Buy or Sell?</h1>
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
              <h1> { transactionErrors['transactionError'] } </h1>
          </div>
        </div>
      </div>
    );
  }
}
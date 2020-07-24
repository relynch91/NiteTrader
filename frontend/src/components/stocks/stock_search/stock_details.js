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
      mostRecentStockApiData: {},
    };
  }

  componentDidMount() {
    this.setState({
      mostRecentStockApiData: StockUtil.mostRecent(this.props.stockDetails.intraDay)
    })
  }

  componentDidUpdate(prevProps) {
    let { stockDetails } = this.props;
    if (stockDetails !== prevProps.stockDetails) {
      this.setState({
        mostRecentStockApiData: (StockUtil.mostRecent(this.props.stockDetails.intraDay) ||
        StockUtil.mostRecent(this.props.stockDetails.weeklySeries))
      })
    }
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
      'price': parseFloat(data["4. close"]), // most previous close from most recent
      'ownedShares': numberOwned,
      'shares': this.state.numShares, // set in state using handleChange() as numShares
      'buy': buy //set in state true or false true: buy, sell: false 
    }
    
    if (transactionData['buy']) {
      this.props.buyStock(transactionData)
        // .then(() => push('/profile/'));
    } else {
      this.props.sellStock(transactionData)
        // .then(() => push('/profile/'));
    }
  }
  
  render() {
    let { data, ticker } = this.state.mostRecentStockApiData;
    let theDetails = (Object.keys(this.state.mostRecentStockApiData).length === 0) ? null : ( //only thing rendered in return div
      <div className="stock-box-container">
        <div className="stock-details">
          <h1>Today's Information for {ticker}:</h1>
          <p>Open: ${(parseFloat(data["1. open"]).toFixed(2))}</p>
          <p>High: ${(parseFloat(data["2. high"]).toFixed(2))}</p>
          <p>Low: ${(parseFloat(data["3. low"]).toFixed(2))}</p>
          <p>Price: ${(parseFloat(data["4. close"]).toFixed(2))}</p>
          <p>Volume: {parseFloat(data["5. volume"])}</p>
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
    return (
      <div className='the-details-stock-api'>
        {theDetails}
      </div>
    );
  }
}
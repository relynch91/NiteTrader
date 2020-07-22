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
      // activeBuy: false,
      // activeSell: false,
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
    this.setState({ transactionType: type })
    type ? this.setState({ activeBuy: true, activeSell: false }) : 
    this.setState({ activeBuy: false, activeSell: true });
    this.handleSubmit();
  }

  handleClickBuy(type) {
    this.setState({ transactionType: type })
    type ? this.setState({ activeBuy: true, activeSell: false }) :
      this.setState({ activeBuy: false, activeSell: true })
    .then(state => this.handleSubmit())
  
  }

  handleSubmit(e){
    if (e) {
      e.preventDefault();
    }
    let { data, ticker } = this.state.mostRecentStockApiData;
    let transactionData = {
      'userId': this.props.userId,
      'ticker': ticker,
      'price': parseFloat(data["4. close"]), // most previous close from most recent
      'shares': this.state.numShares, // set in state using handleChange() as numShares
      'buy': this.state.transactionType //set in state true or false
    }
    this.props.tradeStock(transactionData)
      .then(() => this.props.history.push('/portfolio/'))
  }
  
  render() {
    // let { activeBuy, activeSell } = this.state;
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
              <button className="sell-button-active"
                onClick={() => this.handleClick(false)}> Sell
              </button>);
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
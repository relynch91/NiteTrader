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
      activeBuy: false,
      activeSell: false,
    };
  }

  componentDidUpdate(prevProps) {
    let { stockDetails } = this.props;
    
    if (stockDetails !== prevProps.stockDetails) {
      this.setState(
        { mostRecentStockApiData: StockUtil.mostRecent(stockDetails.intraDay) }
      )
    }
  }

  handleChange() {
    return (e) => this.setState({ numShares: e.currentTarget.value })
  }

  handleClick(type){
    this.setState({ transactionType: type })
    type ? this.setState({ activeBuy: true, activeSell: false }) : 
    this.setState({ activeBuy: false, activeSell: true });
  }

  handleSubmit(e){
    e.preventDefault();
    let { data, ticker } = this.state.mostRecentStockApiData;
    let transactionData = {
      'userId': this.props.userId,
      'ticker': ticker,
      'price': Math.floor(parseFloat(data["4. close"])),
      'shares': this.state.numShares,
      'buy': this.state.transactionType
    }
    this.props.tradeStock(transactionData)
      .then(() => this.props.history.push('/portfolio/'))
  }
  
  render() {
    let { activeBuy, activeSell } = this.state;
    let { data, ticker } = this.state.mostRecentStockApiData;

    let sellButton = (!Object.keys(this.props.portfolio).includes(ticker)) ? null : (
        <button className={activeSell ? "sell-button-active" : "sell-button"} 
          onClick={() => this.handleClick(false)}
        >Sell</button>);

    let submitButton = (activeSell || activeBuy) ?
       <button className="trade-submit-button" 
        onClick={this.handleSubmit}>Submit Trade
      </button> :
      null;

    let theDetails = (Object.keys(this.state.mostRecentStockApiData).length === 0) ? null : (
      <div className="stock-box-container">
        <div>Today's Information for: {ticker}</div>     
        <div className="stock-details">
          <p>Open: ${Math.floor(parseFloat(data["1. open"]))}</p>
          <p>High: ${Math.floor(parseFloat(data["2. high"]))}</p>
          <p>Low: ${Math.floor(parseFloat(data["3. low"]))}</p>
          <p>Price: ${Math.floor(parseFloat(data["4. close"]))}</p>
          <p>Volume: {parseInt(data["5. volume"])}</p>
        </div>
        <form >
          <p>Number of Shares You intend to buy or sell</p>
          <div>
            <input
              className="stock-buy-input"
              type="number"
              onChange={this.handleChange()}
              value={this.state.numShares} />
              <button className={activeBuy ? "buy-button-active" : "buy-button"}
                    onClick={() => this.handleClick(true)}>Buy</button>
            {sellButton}
          </div>
          {submitButton}
        </form>
      </div>
      );
    return (
      <div>
        {theDetails}
      </div>
    );
  }
}
import React from 'react';
import './stock_details.css'
import * as StockUtil from '../../../util/stocks_api_util';

export default class StockDetails extends React.Component {
  
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      numShares: 0,
      mostRecentStockApiData: {}
    };
  }

    handleChange(){
        return (e) => this.setState({ numShares: e.currentTarget.value })
    }

  componentDidUpdate(prevProps) {
    if (this.props.stockDetails !== prevProps.stockDetails) {
      this.setState({ mostRecentStockApiData: StockUtil.mostRecent(this.props.stockDetails.intraDay) })
    }
  }

    handleSubmit(e){
      e.preventDefault();
      let { data, ticker } = this.state.mostRecentStockApiData;
      let transactionData = {
        'userId': this.props.userId,
        'ticker': ticker,
        'price': Math.floor(parseFloat(data["4. close"])),
        'shares': this.state.numShares,
        'buy': true
      }
      this.props.tradeStock(transactionData)
        .then(() => this.props.history.push('/portfolio/'))
    }
    
    render() {
      let { data, ticker } = this.state.mostRecentStockApiData;
      let theDetails = (Object.keys(this.state.mostRecentStockApiData).length === 0) ? null : (
             <div className="stock-box-container">
                {/* <div className="stock-details-box"> */}
                <div>Today's Information</div>     
                <div className="stock-details">
                  <p>Ticker: {ticker}</p>
                  <p>Open: ${Math.floor(parseFloat(data["1. open"]))}</p>
                  <p>High: ${Math.floor(parseFloat(data["2. high"]))}</p>
                  <p>Low: ${Math.floor(parseFloat(data["3. low"]))}</p>
                  <p>Price: ${Math.floor(parseFloat(data["4. close"]))}</p>
                  <p>Volume: {parseInt(data["5. volume"])}</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <p>Number of Shares You intend to purchase</p>
                  <input
                    className="stock-buy-input"
                    type="number"
                    onChange={this.handleChange()}
                    value={this.state.numShares} />
                  <button className="stock-buy-submit">Buy This Stock</button>
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
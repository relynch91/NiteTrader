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
      let data = {
        'userId': this.props.userId,
        'ticker': this.state.mostRecentStockApiData.data["01. symbol"],
        'price': this.state.mostRecentStockApiData.data["05. price"],
        'shares': this.state.numShares,
        'buy': true
      }
      this.props.tradeStock(data)
        .then(() => this.props.history.push('/portfolio/'))
    }
    
    render() {
      let { stockDetails } = this.props
      let { data } = this.state.mostRecentStockApiData;
      // let symbol = this.props.stock["Meta Data"]["2. Symbol"].toUpperCase();
      debugger
      let theDetails = (Object.keys(this.state.mostRecentStockApiData).length === 0) ? null : (
             <div className="stock-box-container">
                <div className="stock-details-box">
                  <span>Today's Information</span>
                  <form onSubmit={this.handleSubmit}>
                    <p>Number of Shares You intend to purchase</p>
                    <input type="number" onChange={this.handleChange()} value={this.state.numShares} />
                    <br/>
                    <button className="stock-buy">Buy This Stock</button>
                  </form>
                </div>
                <div className="stock-details">
                  <p>Symbol: {stockDetails.intraDay["Meta Data"]["2. Symbol"].toUpperCase()}</p>
                  <p>Open: ${Math.floor(parseFloat(data["1. open"]))}</p>
                  <p>High: ${Math.floor(parseFloat(data["2. high"]))}</p>
                  <p>Low: ${Math.floor(parseFloat(data["3. low"]))}</p>
                  <p>Price: ${Math.floor(parseFloat(data["4. close"]))}</p>
                  <p>Volume: {parseInt(data["5. volume"])}</p>
                  {/* <p>
                    Latest Trading Day: {stockDetails.intraDay["07. latest trading day"]}
                  </p>
                  <p>Previous Close: {stockDetails.intraDay["08. previous close"]}</p>
                  <p>Change: {stockDetails.intraDay["09. change"]}</p>
                  <p>Change Percent: {stockDetails.intraDay["10. change percent"]}</p> */}
                </div>
              </div>
              );
            return (
              <div>
                {theDetails}
              </div>
            );
    }
}
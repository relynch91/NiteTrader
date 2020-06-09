import React from 'react';
import './stock_details.css'

export default class StockDetails extends React.Component {
  
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      numShares: 0
    };
  }

    handleChange(){
        return (e) => this.setState({ numShares: e.currentTarget.value })
    }

    handleSubmit(e){
      e.preventDefault();

      let data = {
        'userId': this.props.userId,
        'ticker': this.props.stockDetails["01. symbol"],
        'price': this.props.stockDetails["05. price"],
        'shares': this.state.numShares,
        'buy': true
      }
      this.props.tradeStock(data)
        .then(() => this.props.history.push('/portfolio/'))
    }

    render(){
      let { stockDetails } = this.props
      let theDetails = (Object.keys(stockDetails).length === 0) ? null : (
        <div className="stock-box">
                <div>
                  <p>Today's Information</p>
                  <form onSubmit={this.handleSubmit}>
                    <label>Number of Shares
                      <input type="number" onChange={this.handleChange()} value={this.state.numShares} />
                    </label>
                    <button className="stock-buy">Buy This Stock</button>
                  </form>
                </div>

                <div className="stock-details">
                  <p>Symbol: {stockDetails.globalEndPoint["01. symbol"]}</p>
                  <p>Open: ${parseInt(stockDetails.globalEndPoint["02. open"])}</p>
                  <p>High: ${parseInt(stockDetails.globalEndPoint["03. high"])}</p>
                  <p>Low: ${parseInt(stockDetails.globalEndPoint["04. low"])}</p>
                  <p>Price: ${parseInt(stockDetails.globalEndPoint["05. price"])}</p>
                  <p>Volume: {parseInt(stockDetails.globalEndPoint["06. volume"])}</p>
                  <p>
                    Latest Trading Day: {stockDetails.globalEndPoint["07. latest trading day"]}
                  </p>
                  <p>Previous Close: {stockDetails.globalEndPoint["08. previous close"]}</p>
                  <p>Change: {stockDetails.globalEndPoint["09. change"]}</p>
                  <p>Change Percent: {stockDetails.globalEndPoint["10. change percent"]}</p>
                </div>
              </div>);
            return (
              <div>
                {theDetails}
              </div>
            );
    }
}
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
      let transactionData = new FormData();
      transactionData.append('userId', this.props.userId)
      transactionData.append('ticker', this.props.stockDetails["01. symbol"])
      transactionData.append('price', this.props.stockDetails["05. price"])
      transactionData.append('shares', this.state.numShares)
      transactionData.append('buy', true)
      debugger
      this.props.tradeStock(transactionData)
        .then(() => this.props.history.push('/portfolio/'))
    }

    render(){
            let theDetails = this.props.stockDetails;
            if(!theDetails){
                return null
            }
            return (
              <div>
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
                    <p>Symbol: {theDetails["01. symbol"]}</p>
                    <p>Open: ${parseInt(theDetails["02. open"])}</p>
                    <p>High: ${parseInt(theDetails["03. high"])}</p>
                    <p>Low: ${parseInt(theDetails["04. low"])}</p>
                    <p>Price: ${parseInt(theDetails["05. price"])}</p>
                    <p>Volume: {parseInt(theDetails["06. volume"])}</p>
                    <p>
                      Latest Trading Day: {theDetails["07. latest trading day"]}
                    </p>
                    <p>Previous Close: {theDetails["08. previous close"]}</p>
                    <p>Change: {theDetails["09. change"]}</p>
                    <p>Change Percent: {theDetails["10. change percent"]}</p>
                  </div>
                </div>
              </div>
            );
    }
}


// 01. symbol: "IBM"
// 02. open: "114.5700"
// 03. high: "117.0900"
// 04. low: "111.8100"
// 05. price: "116.9500"
// 06. volume: "5230634"
// 07. latest trading day: "2020-05-14"
// 08. previous close: "115.7300"
// 09. change: "1.2200"
// 10. change percent: "1.0542%"
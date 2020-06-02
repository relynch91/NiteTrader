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
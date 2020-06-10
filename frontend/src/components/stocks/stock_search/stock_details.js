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
        'ticker': this.props.stockDetails.globalEndPoint["01. symbol"],
        'price': this.props.stockDetails.globalEndPoint["05. price"],
        'shares': this.state.numShares,
        'buy': true
      }
      this.props.tradeStock(data)
        .then(() => this.props.history.push('/portfolio/'))
    }
    debugger
    render() {
      let { stockDetails } = this.props
      return (

      <div>
        
      </div> 
      )
    //   let theDetails = (Object.keys(stockDetails).length === 0) ? null : (
    //          <div className="stock-box-container">
    //             <div className="stock-details-box">
    //               <span>Today's Information</span>
    //               <form onSubmit={this.handleSubmit}>
    //                 <p>Number of Shares You intend to purchase</p>
    //                 <input type="number" onChange={this.handleChange()} value={this.state.numShares} />
    //                 <br/>
    //                 <button className="stock-buy">Buy This Stock</button>
    //               </form>
    //             </div>
    //             <div className="stock-details">
    //               <p>Symbol: {stockDetails.globalEndPoint["01. symbol"]}</p>
    //               <p>Open: ${parseInt(stockDetails.globalEndPoint["02. open"])}</p>
    //               <p>High: ${parseInt(stockDetails.globalEndPoint["03. high"])}</p>
    //               <p>Low: ${parseInt(stockDetails.globalEndPoint["04. low"])}</p>
    //               <p>Price: ${parseInt(stockDetails.globalEndPoint["05. price"])}</p>
    //               <p>Volume: {parseInt(stockDetails.globalEndPoint["06. volume"])}</p>
    //               <p>
    //                 Latest Trading Day: {stockDetails.globalEndPoint["07. latest trading day"]}
    //               </p>
    //               <p>Previous Close: {stockDetails.globalEndPoint["08. previous close"]}</p>
    //               <p>Change: {stockDetails.globalEndPoint["09. change"]}</p>
    //               <p>Change Percent: {stockDetails.globalEndPoint["10. change percent"]}</p>
    //             </div>
    //           </div>);
    //         return (
    //           <div>
    //             {theDetails}
    //           </div>
    //         );
    }
}
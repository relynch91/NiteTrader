import React from 'react';
import './stock_index.css';
import * as TransUtil from '../../../util/transaction_api_util';

export default class StockIndex extends React.Component {
    constructor(props){
      super(props)
    }

    componentDidMount(){
      let {fetchTrades, userId, myStocks} = this.props
      fetchTrades(userId)
        // .then(() => this.setState( myStocks ))
        // .then(() => console.log(this.state))
    }

    // componentDidUpdate(){
    //   debugger
    //   let { myStocks, activeShares } = this.props;
    //   this.setState({mystocks: activeShares(myStocks)})
    // }
    
    render(){
            let myShares = !!this.props.myStocks ? TransUtil.activeShares(this.props.myStocks) : null;
            let theStuff = (this.props.myStocks === undefined) ? null : (
              <div className="stock-index-main">
                <p>Here is Your Current Stock Portfolio</p>
                {Object.keys(myShares).map((ticker) => (
                  <div>
                    <div className="stock-box">
                      <span>{ticker}</span>
                      <span>
                        <p className="current-price">Current Price: $214</p>
                        <p className="purchase-price">Purchase Price: $110</p>
                        {/* onClick= dispatch past month of data to populate graph */}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )
            // debugger
            return (
              <div>
                {theStuff}
              </div>
            );
          }
}

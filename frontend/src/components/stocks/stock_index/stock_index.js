import React from 'react';
import './stock_index.css';
import * as TransUtil from '../../../util/transaction_api_util';

export default class StockIndex extends React.Component {
    // constructor(props){
    //   super(props)
    // }

    componentDidMount(){
      let {fetchTrades, userId, myStocks} = this.props
      fetchTrades(userId)
        // .then(() => this.setState( {myStocks} ))
        // .then(() => console.log(this.state))
    }

    // componentDidUpdate(){
    //   debugger
    //   let { myStocks, activeShares } = this.props;
    //   this.setState({mystocks: activeShares(myStocks)})
    // }
    
    render(){
      // debugger
        let { myStocks } = this.props;
        console.log("my stocks ===", myStocks);
      let myShares = (Object.keys(myStocks).length === 0) ? null : TransUtil.activeShares(myStocks);
        // let myShares = TransUtil.activeShares(myStocks);
        console.log("myShares", myShares);
        let theStuff = (!myShares) ? null : (
              <div className="stock-index-main">
                <p>Here is Your Current Stock Portfolio</p>
                {Object.keys(myShares).map((ticker) => (
                  <div>
                    <div className="stock-box">
                      <span>{ticker}</span>
                      <span>
                        <p className="current-price">Price Per Share: {Math.floor(parseFloat(myShares[ticker].pricePerShare))}</p>
                        <p className="purchase-price">Shares Owned: {myShares[ticker].ownedShares}</p>
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

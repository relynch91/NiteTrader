import React from 'react';
import './stock_index.css';
import * as PortUtil from '../../../util/portfolio_api_util';

export default class StockIndex extends React.Component {

  componentDidMount(){
    let { fetchTrades, userId } = this.props
    fetchTrades(userId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.myStocks !== prevProps.myStocks) {
      this.props.buildPortfolio(this.props.myStocks);
    }
  }
  

  render(){
    let { myStocks } = this.props;
    let myShares = (Object.keys(myStocks).length === 0) ? null : PortUtil.activeShares(myStocks);
    let theStuff = (!myShares) ? null : (
      <div className="stock-index-main">
        <p>Here is Your Current Stock Portfolio</p>
        {Object.keys(myShares).map((ticker, idx) => (
          <div className="stock-box" key={idx * 392}>
            <span>{ticker}</span>
            <span>
              <p className="current-price">Price Per Share: {Math.floor(parseFloat(myShares[ticker].pricePerShare))}</p>
              <p className="purchase-price">Shares Owned: {myShares[ticker].ownedShares}</p>
            </span>
          </div>
        ))}
      </div>
    )
    return (
      <div>
        {theStuff}
      </div>
    );
  }
}

import React from 'react';
import './stock_index.css';

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

    let { myPortfolio } = this.props;
    if (Object.keys(myPortfolio).length === 0){return null};

    let theStuff = (!myPortfolio) ? null : (
      <div className="stock-index-main">
        <p>Here is Your Current Stock Portfolio</p>
        {Object.keys(myPortfolio).map((ticker, idx) => (
          <div className="stock-box" key={idx * 392}>
            <span>{ticker}</span>
            <span>
              <p className="current-price">Price Per Share: {Math.floor(parseFloat(myPortfolio[ticker].pricePerShare))}</p>
              <p className="purchase-price">Shares Owned: {myPortfolio[ticker].ownedShares}</p>
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

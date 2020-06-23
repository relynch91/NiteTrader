import React from 'react';
import './stock_index.css';

export default class StockIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {};
  }
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
    console.log(myPortfolio);
    if (Object.keys(myPortfolio).length === 0){return null};
    return (
      <div className="stock-index-main">
        {Object.keys(myPortfolio).map((ticker, idx) => (
          <div className="stock-box-owned" key={idx * 392}>
            <span>{ticker}</span>
            <ul>
              < li className = "current-price">
                Price Per Share: 
                ${Math.floor(parseFloat(myPortfolio[ticker].pricePerShare))}
              </li>
              < li className = "purchase-price">
                Shares Owned: {myPortfolio[ticker].ownedShares}
              </li>
          
              {(myPortfolio[ticker]['priceDiff'] > 0) ? 
              <li className = "price-change-positive" >
                Gain Per Share: ${myPortfolio[ticker]['priceDiff']}
              </li> :
              <li className="price-change-negative">
                Loss Loss Per Share: ${myPortfolio[ticker]['priceDiff']}
              </li>
              }
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

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
    return (
      <div className="stock-index-table">
        {Object.keys(myPortfolio).map((ticker, idx) => (
          <div className="stock-box" key={idx * 392}>
            <div>
              {ticker}
            </div>
            <div className="current-price">
              Your Average Cost: ${Math.floor(parseFloat(myPortfolio[ticker].pricePerShare))}

            </div>
            <div className="purchase-price">
              Shares Owned: {myPortfolio[ticker].ownedShares}
            </div>
            <div className="quote-endpoint-data">
              Other Data: {
                myPortfolio[ticker].quoteEndPointData['open']
              }
            </div>
            {/* {console.log(myPortfolio[ticker])} */}
            {/* {(myPortfolio[ticker].diff > 0) ?
              <p className="price-change-positive">Gain Per Share: ${myPortfolio[ticker].diff}</p> :
              <p className="price-change-negative">Loss Loss Per Share: ${myPortfolio[ticker].diff}</p>
            } */}
          </div>
        ))}
      </div>
    );
  };
}

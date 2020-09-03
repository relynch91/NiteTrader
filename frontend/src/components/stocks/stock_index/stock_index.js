import React from 'react';
import './stock_index.css';
export default class StockIndex extends React.Component {
  render(){
    let { myPortfolio, ownedStocks } = this.props;
    if (Object.keys(ownedStocks).length === 0) {return null};
    return (
      <div className="stock-index-main">
        {Object.keys(myPortfolio).map((ticker, idx) => (
          <div className="stock-box-owned" key={idx * 392}>
            <div className='stock-box-owned-ticker'>
              <h1>
                Ticker: {ticker}
              </h1>
              <h2>
                Shares Owned: {myPortfolio[ticker].ownedShares}
              </h2>
              <h2>
                Price Per Share: {parseFloat(myPortfolio[ticker].pricePerShare).toFixed(2)}
              </h2>
              <h2>
                Information for Trading Date {
                  ownedStocks[ticker].latestTradingDay || null}:
              </h2>
            </div>
            <div className='global-end-point-details'>
              <ul>
                <li>
                  Price: {
                    parseFloat(ownedStocks[ticker].price).toFixed(2)
                  }
                </li>
                < li >
                  Change: {
                    parseFloat(ownedStocks[ticker].change).toFixed(2)
                  }
                </li>
                <li>
                  Percent Change (%):  {
                    parseFloat(ownedStocks[ticker].changePercent).toFixed(2)
                  }
                </li>
                < li >
                  Previous Close: {
                    parseFloat(ownedStocks[ticker].previousClose).toFixed(2)
                  }
                </li>
              </ul>
              <ul>
                < li >
                  High: {
                    parseFloat(ownedStocks[ticker].high).toFixed(2) }
                </li>
                <li>
                  Low: {
                    parseFloat(ownedStocks[ticker].low).toFixed(2) }
                </li>
                <li>
                  Open: {
                    parseFloat(ownedStocks[ticker].open).toFixed(2)
                  } 
                </li>
                < li >
                  Volume: {
                    parseFloat(ownedStocks[ticker].volume).toFixed(2)
                  } 
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

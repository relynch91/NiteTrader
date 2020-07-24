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
    if (Object.keys(myPortfolio).length === 0) {return null};
    return (
      <div className="stock-index-main">
        {Object.keys(myPortfolio).map((ticker, idx) => (
          <div className="stock-box-owned" key={idx * 392}>
            <div className='stock-box-owned-ticker'>
              <h1>
                Ticker: {ticker}
              </h1>
            </div>
            <div className='global-end-point-details'>
              <ul>
                <li>
                  Shares Owned: {myPortfolio[ticker].ownedShares}
                </li>
                <li>
                  Last Trading Date: {
                    myPortfolio[ticker].quoteEndPointData.latestTradingDay || null }
                </li>
                < li >
                  Change: {
                    parseFloat(myPortfolio[ticker].quoteEndPointData.change).toFixed(2)
                  }
                </li>
                <li>
                  Percent Change:  {
                    parseFloat(myPortfolio[ticker].quoteEndPointData.changePercent).toFixed(2)
                  } %
                </li>
                < li >
                  Volume: {
                    parseFloat(myPortfolio[ticker].quoteEndPointData.volume).toFixed(2)
                  } </li>
              </ul>
              <ul>
                < li >
                  High: {
                    parseFloat(myPortfolio[ticker].quoteEndPointData.high).toFixed(2) }
                </li>
                <li>
                  Low: {
                    parseFloat(myPortfolio[ticker].quoteEndPointData.low).toFixed(2) }
                </li>
                <li>
                  Open: {
                    parseFloat(myPortfolio[ticker].quoteEndPointData.open).toFixed(2)
                  } 
                </li>
                <li>
                  Price: {
                    parseFloat(myPortfolio[ticker].quoteEndPointData.price).toFixed(2)
                  }
                </li>
                < li >
                  Previous Close: {
                    parseFloat(myPortfolio[ticker].quoteEndPointData.previousClose).toFixed(2)
                  } 
                </li>
              </ul>
            </div>
          </div>
        // </div>
        ))}
      </div>
    );
  }
}

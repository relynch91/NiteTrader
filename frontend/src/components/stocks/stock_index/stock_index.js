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
    debugger
    return (
      <div className="stock-index-main">
        {Object.keys(myPortfolio).map((ticker, idx) => (
          <div className="stock-box-owned" key={idx * 392}>
            <div className='stock-box-owned-ticker'>
              Ticker: {ticker}
            </div>
            <div className = 'portfolio-specific-details'>
              <div className='stock-box-owned-details'>
                <ul>
                  <li>
                    Portfolio Information:
                  </li>
                  <li>
                    Price Per Share: ${(parseFloat(myPortfolio[ticker].pricePerShare).toFixed(2))}
                  </li>
                  <li>
                    Shares Owned: {myPortfolio[ticker].ownedShares.toFixed(2)}
                  </li>
                  {(myPortfolio[ticker]['priceDiff'] > 0) ? 
                    <li>
                      Gain Per Share: ${myPortfolio[ticker]['priceDiff'].toFixed(2)}
                    </li> :
                    <li className='stock-box-owned-price-change-negative'>
                      Loss Loss Per Share: ${myPortfolio[ticker]['priceDiff']}
                    </li>
                  }
                </ul>
              </div>
              <div className='global-end-point-details'>
                <ul>
                    <li>
                    Stock Information:
                  </li>
                  <li>
                    Price Per Share: ${(parseFloat(myPortfolio[ticker].pricePerShare).toFixed(2))}
                  </li>
                  <li>
                    Shares Owned: {
                      myPortfolio[ticker].quoteEndPointData.symbol
                      }
                  </li>
                  {(myPortfolio[ticker]['priceDiff'] > 0) ? 
                    <li>
                      Gain Per Share: ${myPortfolio[ticker]['priceDiff'].toFixed(2)}
                    </li> :
                    <li className='stock-box-owned-price-change-negative'>
                      Loss Loss Per Share: ${myPortfolio[ticker]['priceDiff']}
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

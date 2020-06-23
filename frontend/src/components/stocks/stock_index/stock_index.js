import React from 'react';
import './stock_index.css';
// import PortfolioBarChartContainer from '../portfolio/portfolio_barchart_container';
// import PortfolioBarChart from '../portfolio/portfolio_barchart';
// import { formatPortfolioData } from '../../../util/portfolio_api_util'

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
   
    if (Object.keys(myPortfolio).length === 0){return null};

    return (
      <div>
        <div className="stock-index-main">
          <p>Here is Your Current Stock Portfolio</p>
          {Object.keys(myPortfolio).map((ticker, idx) => (
            <div className="stock-box" key={idx * 392}>
              <span>{ticker}</span>
              <span>
                <p className="current-price">
                  Price Per Share: ${Math.floor(parseFloat(myPortfolio[ticker].pricePerShare))}</p>
                <p className="purchase-price">
                  Shares Owned: {myPortfolio[ticker].ownedShares}</p>
                {console.log(myPortfolio[ticker]['priceDiff'])}
                {(myPortfolio[ticker]['diff'] > 0) ?
                  <p className="price-change-positive">
                    Gain Per Share: ${myPortfolio[ticker]['priceDiff']}</p> :
                  <p className="price-change-negative">
                    Loss Loss Per Share: ${myPortfolio[ticker]['priceDiff']}</p>
                }
              </span>
            </div>
          ))}
        </div>
        {/* <PortfolioBarChart data={this.props.myPortfolio.data}/> */}
      </div>
    );
  }
}

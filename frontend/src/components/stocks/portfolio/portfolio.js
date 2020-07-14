import React from 'react';
import StockIndexContainer from '../stock_index/stock_index_container';
import PortfolioBarChartContainer from './portfolio_barchart_container'
import './portfolio.css'

class Portfolio extends React.Component {
  
  componentDidMount() {
    let {
      fetchTrades,
      userId
    } = this.props;
    fetchTrades(userId);
  }

  render() {
    let newUser = Object.keys(this.props.trades).length === 0 ? true : false;
    if (newUser) {
      return (
        <div className="new-user-welcome-container">
          <h1>Welcome To NiteTrader</h1>
          <p>Begin building your portfolio by navigating to the Search Stocks Page</p>
        </div>
      )
    }else {
      return (
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h1>Your Stock's Performance</h1>  
          </div>
          <div className='portfolio-data'>
            <StockIndexContainer />
            <PortfolioBarChartContainer />
          </div>
        </div>
      );
    }
  }
}

export default Portfolio;
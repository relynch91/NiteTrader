import React from 'react';
import StockIndexContainer from '../stock_index/stock_index_container';
import PortfolioBarChartContainer from './portfolio_barchart_container'
import PortfolioBackground from './portfolio_background.png'
import './portfolio.css'

class Portfolio extends React.Component {
  render() {
    return (
        <div className="portfolio-container">
          <StockIndexContainer />
          <PortfolioBarChartContainer />
      </div>
    );
  }
}

export default Portfolio;
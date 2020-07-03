import React from 'react';
import StockIndexContainer from '../stock_index/stock_index_container';
import PortfolioBarChartContainer from './portfolio_barchart_container'
import './portfolio.css'

class Portfolio extends React.Component {
  render() {
    return (
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h1>Your Current Portfolio:</h1>  
          </div>
          <div className='portfolio-data'>
            <StockIndexContainer />
            <PortfolioBarChartContainer />
          </div>
          <div className='performance-data'>
            
          </div>
      </div>
    );
  }
}

export default Portfolio;
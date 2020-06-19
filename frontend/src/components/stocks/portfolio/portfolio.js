import React from 'react';
import StockIndexContainer from '../stock_index/stock_index_container';
// import StockGraphContainer from '../stockgraph/stockgraph_container';
import PortfolioBarChartContainer from './portfolio_barchart_container'
// import PortfolioBackground from './portfolio_background.png'
import './portfolio.css'

class Portfolio extends React.Component {
  render() {
    return (
        <div className="portfolio-container">
          {/* <span className="portfolio-background">
            <img
              src={PortfolioBackground}
              alt='portfoio background'
              className="portfolio-background" />
          </span> */}
        <div><StockIndexContainer /></div>
        <PortfolioBarChartContainer />
      </div>
    );
  }
}

export default Portfolio;
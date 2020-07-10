import React from 'react';
import StockIndexContainer from '../stock_index/stock_index_container';
import PortfolioBarChartContainer from './portfolio_barchart_container'
import './portfolio.css'

class Portfolio extends React.Component {

  componentDidMount(){
    let { fetchTrades, userId } = this.props;
    fetchTrades(userId);
  }

  render() {
    // let username = this.props.user.username;
    return (
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h1>Hello!  Here you can find data about how the Stocks you currently own are doing!</h1>  
          </div>
          <div className='portfolio-data'>
            <StockIndexContainer />
            <PortfolioBarChartContainer />
          </div>
      </div>
    );
  }
}

export default Portfolio;
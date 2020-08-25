import React from 'react';
import StockIndexContainer from '../stock_index/stock_index_container';
import PortfolioBarChartContainer from './portfolio_barchart_container'
import './portfolio.css'

class Portfolio extends React.Component {

  async componentDidMount() {
    let { buildPortfolio, getStocks } = this.props;
    let stockInfo = await buildPortfolio(this.props.trades);
    let tickers = Object.keys(stockInfo);
    let dbFetch = await getStocks(tickers);
  }

  render() {
    let ownedStocks = this.props.ownedStocks;
    let newUser = Object.keys(this.props.trades).length === 0 ? true : false;
    let date;
    if (ownedStocks) {
      console.log(ownedStocks[Object.keys(ownedStocks)[0]].latestTradingDay);
      // date = ownedStocks[Object.keys(ownedStocks)[0]].latestTradingDay;
    } else {
      date = null;
    }
    if (newUser) {
      return (
        <div className="new-user-welcome-container">
          <h1>Welcome To NiteTrader</h1>
          <p> Begin building your portfolio by navigating to the Search Stocks Page </p>
        </div>
      )
    }else {
      return (
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h1> Your Portfolio Performance {date} </h1>  
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
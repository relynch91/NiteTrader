import React from 'react';
import StockIndexContainer from '../stock_index/stock_index_container.js';
import PortfolioRechartContainer from './portfolio_rechart_container.js'
import './portfolio.css'

class Portfolio extends React.Component {

  async componentDidMount() {
    let { buildPortfolio, getStocks,fetchTrades, userId, endPointState,
          buildProfile, getStat  } = this.props;
    let trades = await fetchTrades(userId);
    let stockInfo = await buildPortfolio(trades.transactions.data);
    let tickers = Object.keys(stockInfo);
    let dbFetch = await getStocks(tickers);
    let stocks = await endPointState(dbFetch);
    await buildProfile(stocks, stockInfo);
    await getStat(userId);
  }

  render() {
    let newUser = Object.keys(this.props.ownedStocks).length === 0 ? true : false;
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
            <h1> Your Portfolio Performance </h1>  
          </div>
          <div className='portfolio-data'>
            <StockIndexContainer />
            <PortfolioRechartContainer />
          </div>
        </div>
      );
    }
  }
}

export default Portfolio;
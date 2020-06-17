import React from 'react';
import StockDetailsContainer from './stock_details_container';
import StockGraph from '../stockgraph/stockgraph_container';
import key from '../../../frontConfig/frontKeys';
import './stock_search.css';

export default class StockSearch extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        stocks: "",
      };
      this.getStockDetails = this.getStockDetails.bind(this);
      this.getStockTicker = this.getStockTicker.bind(this);

  }

  getStockTicker(e) {
    e.preventDefault();
    const stockSearchAPI = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.stock}&apikey=${key}`;
    this.props.stockNameSearchAPICall(stockSearchAPI)
  }

  getStockDetails(e){
      e.preventDefault();
      const intraDayAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.state.ticker}&interval=15min&outputsize=full&apikey=${key}`;
      this.props.intraDayAPICall(intraDayAPI);
      const timeSeriesMonthlyAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.state.ticker}&apikey=${key}`;
      this.props.timeSeriesInfoAPICall(timeSeriesMonthlyAPI);
  }
  update() {
      return e => this.setState({
          stock: e.currentTarget.value
      });
  }
  render(){
    let theStockDetailsAndGraph = (Object.keys(this.props.stockDetails).length === 0) ? null : (
      <div className="stock-details-and-graph">
        <StockDetailsContainer />
        <StockGraph /> ;
      </div>
      );
    let stockSearchLanding = (Object.keys(this.props.stockDetails).length !== 0) ? null : (
      <div className="stock-search-landing">
          <div>Find Your Next Unicorn I am Here</div>
          <div>Enter a company's stock ticker to access real-time information</div>
      </div>
    // let stockTickerSearch = Object.keys(this.props.stockTickers).length === 0) ? null : 
    )
    return (
      <div className="stock-search-container">
        <div className="stock-search-component">
          <form onSubmit={this.getStockTicker} className="stock-search-form">
              <span>Search Stocks:</span>
              <input
                type="text"
                value={this.state.stock}
                onChange={this.update()}
                className="stock-search-form-input"
                placeholder="Enter a Stock Company Name or Ticker"
              />
              <input
                type="submit"
                value="Submit"
                className="stock-form-submit"
              />
          </form>
        </div>
          {stockSearchLanding}
          {/* {stockTickerSearch} */}
          {/* {theStockDetailsAndGraph} */}
      </div>
    );
  }
}  
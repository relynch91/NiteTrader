import React from 'react';
import StockDetailsContainer from './stock_details_container';
import StockGraph from '../stockgraph/stockgraph_container';
import key from '../../../frontConfig/frontKeys';
import './stock_search.css';

// const apiFlag = false;
// async function delayAPICall() {

// }

export default class StockSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ticker: "",
    };
    this.getStockDetails = this.getStockDetails.bind(this);
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
      ticker: e.currentTarget.value
    });
  }

  render(){
    let theStockGraph = (Object.keys(this.props.stockDetails).length !== 0) ? <StockGraph/> : null;
    let selectivelyShow = (Object.keys(this.props.stockDetails).length !== 0) ? <StockDetailsContainer/>: (
      <div className="stock-search-landing">
          <div></div>
          <div>Enter a company's stock ticker to see how that company is doing!</div>
          <div>* Due to api limitations, please only make 1 request every 20 seconds.</div>
      </div>
    )
    return (
      <div className="stock-search-container">
        <form onSubmit={this.getStockDetails} className="stock-search-form">
            <div>Search Stocks:</div>
            <input
              type="text"
              value={this.state.ticker}
              onChange={this.update()}
              className="stock-search-form-input"
              placeholder="Enter a Ticker"
            />
            <br/>
            <input
              type="submit"
              value="Submit"
              className="stock-form-submit"
            />
        </form>
        <div>
          {selectivelyShow}
          {theStockGraph}
        </div>
      </div>
    );
  }
}
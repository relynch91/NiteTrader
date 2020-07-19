import React from 'react';
import StockDetailsContainer from './stock_details_container';
import StockGraphContainer from '../stockgraph/stockgraph_container';
import key from '../../../frontConfig/frontKeys';
import './stock_search.css';
import { figureAPICall } from './../../../util/stocks_api_util';
import StockNameContainer from './stock_name_container';

export default class StockSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      stock: '',
      stocks: {
        stockNameSearch: []
      },
      ticker: "",
      loading: false,
      count: 0
    };
    this.getStockDetails = this.getStockDetails.bind(this);
    this.getStockTicker = this.getStockTicker.bind(this);
  }
  
  componentWillUnmount() {
    this.props.receiveClearStocks();
  }

  async tickerCall(apiURL) {
    let whatIs = this.props.stockNameSearchAPICall(apiURL);
    return whatIs;
  }

  async getStockTicker(e) {
    if (e) { e.preventDefault() }
    this.props.receiveClearStocks();
    // console.log(key)
    const stockSearchAPI = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.stock}&apikey=${key.alphaKeyOne}`;
    if (this.state.stock === '') {
      return;
    }
    const stockSearch = await (this.tickerCall(stockSearchAPI));
    this.apiLogic(stockSearch);
    this.setState({ stock: "", count: 
      (this.props.stockDetails.count += 1) });
  }

  searchIsTicker (ticker) {
    this.setState (() => {
      return { ticker: ticker }
    })
  }
  
  apiLogic() {
    const data = this.props.stockDetails['stockNameSearch'];
    const tickerMatch = figureAPICall(data);
    if (tickerMatch) {
      const ticker = data[0]['1. symbol'];
      this.setState( { ticker: ticker });
      this.getStockDetails();
    }
  }

  getStockDetails(e){
    if (e) { e.preventDefault() };

    const intraDayAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.state.ticker}&interval=15min&outputsize=full&apikey=${key.alphaKeyTwo}`;
    this.props.intraDayAPICall(intraDayAPI);
    const weeklyAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${this.state.ticker}&apikey=${key.alphaKeyThree}`;
    this.props.weeklyAPICall(weeklyAPI);
    this.setState({ stock: ""});
  }
  
  update() {
    return e => this.setState({
      stock: e.currentTarget.value
    });
  }

  render() {
    let firstCheck = (Object.keys(this.props.stockDetails.intraDay).length !== 0);
    let secondCheck = (Object.keys(this.props.stockDetails.weeklySeries).length !== 0);
    
    let theStockDetailsAndGraph = (!!firstCheck && !!secondCheck) ? (
      <div className="stock-details-and-graph">
        <StockDetailsContainer />
        <StockGraphContainer />
      </div>
    ) : null;

    let stockSearchLanding = (!!firstCheck && !!secondCheck) ? null : (
      < StockNameContainer />
    );
    
    return (
      <div className="stock-search-container">
          <form onSubmit={this.getStockTicker} className="stock-search-form">
            <div>
              <h1>Enter a Company Name or Ticker: </h1>
            </div>
            <div className='stock-search-form-box'>
              <input
              type="text"
              value={this.state.stock}
              onChange={this.update()}
              className="stock-search-form-input"
              placeholder="Enter a Stock Company Name or Ticker"
              />
            </div>
            <div>
              < input type="submit" value="Submit" className="stock-form-submit" />
            </div>
          </form>
          {stockSearchLanding}
          {theStockDetailsAndGraph}
      </div>
    );
  }
}
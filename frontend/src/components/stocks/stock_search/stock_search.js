import React from 'react';
import StockDetailsContainer from './stock_details_container';
import StockGraphContainer from '../stockgraph/stockgraph_container';
import key from '../../../frontConfig/frontKeys';
import './stock_search.css';
import stockSearchLandingPic from './stock-search-landing.jpg';
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
    };
    this.getStockDetails = this.getStockDetails.bind(this);
    this.getStockTicker = this.getStockTicker.bind(this);
  }
  
  componentWillUnmount() {
    this.setState(() => {
      return { 
        ticker: "",
        loading: false,
        stocks: {
          stockNameSearch: []
        },
        stock: ''
      }
    })
  }

  async tickerCall(apiURL) {
    let whatIs = this.props.stockNameSearchAPICall(apiURL);
    return whatIs;
  }

  async getStockTicker(e) {
    if (e) { e.preventDefault() }
    const stockSearchAPI = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.stock}&apikey=${key}`;
    const stockSearch = await (this.tickerCall(stockSearchAPI));
    this.apiLogic(stockSearch);
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
    const intraDayAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.state.ticker}&interval=15min&outputsize=full&apikey=${key}`;
    const intraDay = this.props.intraDayAPICall(intraDayAPI);
    const timeSeriesMonthlyAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.state.ticker}&apikey=${key}`;
    const timeSeries = this.props.timeSeriesInfoAPICall(timeSeriesMonthlyAPI);
  }
  
  update() {
    return e => this.setState({
      stock: e.currentTarget.value
    });
  }

  render() {
    let firstCheck = (Object.keys(this.props.stockDetails.intraDay).length !== 0);
    let secondCheck = (Object.keys(this.props.stockDetails.timeSeriesMonthly).length !== 0);
    
    let theStockDetailsAndGraph = (!!firstCheck && !!secondCheck) ? (
      <div className="stock-details-and-graph">
        <StockDetailsContainer />
        <StockGraphContainer />
      </div>
    ) : null;

    let stockSearchLanding = (!!firstCheck && !!secondCheck) ? null : (
      <div className="stock-search-landing">
          <span>
            <img 
            src={stockSearchLandingPic} 
            alt='stock search' 
            className="stock-search-background" />
          </span> 
           {/* <span>
            <img 
            src={stockSearchLandingPic} 
            alt='stock search' 
            className="stock-search-background" />
          </span> */}
        <div>
          <h1>Seek And You Shall Find</h1>
          <div>Enter a company's ticker to access real-time information.  Due
            to API Limitations, we are unable to process more than 2 stock ticker 
            searches per minute.  So if a response is not rendered, please stand by 
            then try again! Thank you for your patience. 
          </div>
        </div>
      </div>
    );

    // let theStockNames = !this.props.stocks.stockNameSearch ? null : (
    //     <div>
    //       <ul>
    //         {this.props.stocks.stockNameSearch.map(compObj => {
    //           return (<li>
    //             <div>
    //               <span>{compObj['1. symbol:']}</span>
    //               <span>{compObj['2. name']}</span>
    //               <span>{compObj['9. matchScore']}</span>
    //             </div>
    //           </li>)
    //         })
    //         }
    //       </ul>
    //     </div>
    // )
    
    return (
      <div className="stock-search-container">
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
          <StockNameContainer
            getStockDetails={this.getStockDetails}
          />
          {stockSearchLanding}
          {theStockDetailsAndGraph}
      </div>
    );
  }
}
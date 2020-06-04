import React from 'react';
import StockDetailsContainer from './stock_details_container'
import { globalEndPointFormat, intraDayFormat } from '../../../actions/_alphaAPI';
import key from '../../../frontConfig/frontKeys';
import { quoteEndPointDB,  intraDayDB } from '../../../util/alphaAdvantageAPI';


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
        const quoteEndPointAPI = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.ticker}&apikey=${key}`;
        const stockInfo = this.props.getQuoteEndPointAlpha(quoteEndPointAPI).then(
            (res) => {
                if (res) {
                    let stockData = globalEndPointFormat(res);
                    let storedData = quoteEndPointDB(stockData);
                }
        })
        const intraDayAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.state.ticker}&interval=15min&outputsize=full&apikey=${key}`;
        const intraDayInfo = this.props.intraDayAPICall(intraDayAPI).then(
            (res) => {
                if (res) {
                  let stockInfo = res.stock.data
                }
            }
        )
        // https: //www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo
        // const timeSeriesMonthlyAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.state.ticker}&apikey=${key}`;
        const timeSeriesMonthlyAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.state.ticker}&apikey=${key}`;
        const timeSeriesInfo = this.props.timeSeriesInfoAPICall(timeSeriesMonthlyAPI).then(
          (res) => {
            if (res) {
              let theGoods = res.stock.data;
            }
          }
        )
    }

    update() {
        return e => this.setState({
            ticker: e.currentTarget.value
        });
    }

    render(){
        return (
          <div className="stock-search-container">
            <form onSubmit={this.getStockDetails} className="stock-search-form">
                <label>Search For A Stock</label>
                <input
                  type="text"
                  value={this.state.ticker}
                  onChange={this.update()}
                  className="stock-search-form-input"
                  placeholder="Enter a Ticker"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="stock-form-submit"
                />
            </form>
            <StockDetailsContainer />
            {/* {theDetails} */}
          </div>
        );
    }
}  
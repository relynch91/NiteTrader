import React from 'react';
// import StockDetails from './stock_details'
import StockDetailsContainer from './stock_details_container'
import { getQuoteEndPointAlpha } from '../../../actions/alphaApi_actions';
import key from '../../../config/keys';
import './stock_search.css'


export default class StockSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          ticker: "",
        };

        this.getStockDetails = this.getStockDetails.bind(this);
        // this.getQuoteEndPointAlpha = this.getQuoteEndPointAlpha.bind(this)
        // this.bindingTheFunction = this.bindingTheFunction.bind(this)
    }

// bindingTheFunction(e){
//     e.preventDefault();
//     this.props.getQuoteEndPointAlpha
//     debugger
// }


getStockDetails(e){
    e.preventDefault();
    let stockURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.ticker}&apikey=${key}`;
    const stockInfo = this.props.getQuoteEndPointAlpha(stockURL).then(
        (res) => {
            formatAPICall(res)
            // debugge
        }
    )
    // const stockInforFormatted = this.bindingTheFunction(stockURL);
}

update() {
    // debugger
    return e => this.setState({
        ticker: e.currentTarget.value
    });
}

render(){
    
    // let theDetails = (!!this.state.stockDetails ? <StockDetails stockDetails={this.state.stockDetails} /> : "")
        // debugger
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
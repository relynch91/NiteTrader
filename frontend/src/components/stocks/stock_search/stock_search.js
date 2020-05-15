import React from 'react';
// import StockDetails from './stock_details'
import StockDetailsContainer from './stock_details_container'
// import Key from '../../../../../config/keys_prod';
import { getQuoteEndPointAlpha } from '../../../actions/alphaApi_actions';
import { formatAPICall } from '../../../actions/alphaApi_actions';
import './stock_search.css'

export default class StockSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          ticker: "",
        };

        this.getStockDetails = this.getStockDetails.bind(this);
        // this.formatAPICall = this.formatAPICall.bind(this)
    }


getStockDetails(e){
    // debugger
    // debugger
    e.preventDefault();
    // let stockURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE%26symbol=${this.state.ticker}%26apikey=QU2KW0R97XR5187Y`;
    let stockURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.ticker}&apikey=QU2KW0R97XR5187Y`;
    const stockInfo = this.props.getQuoteEndPointAlpha(stockURL);
    // stock is in state
    // debugger
    this.props.formatAPICall(stockInfo);
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
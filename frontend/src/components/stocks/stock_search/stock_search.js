import React from 'react';
import StockDetailsContainer from './stock_details_container'
import { getQuoteEndPointAlpha } from '../../../actions/alphaApi_actions';
import { formatAPICall} from '../../../actions/_alphaAPI';
import key from '../../../config/keys';
import './stock_search.css'
import { quoteEndPointDB } from '../../../util/alphaAdvantageAPI';


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
    let stockURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.ticker}&apikey=${key}`;
    const stockInfo = this.props.getQuoteEndPointAlpha(stockURL).then(
        (res) => {
            if (res) {
                let stockData = formatAPICall(res);
                let storedData = quoteEndPointDB(stockData);
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
import React from 'react';
import StockDetails from './stock_details'
// import Key from '../../../../../config/keys_prod';
import { getQuoteEndPointAlpha } from '../../../actions/alphaApi_actions';
import { formatAPICall } from '../../../actions/alphaApi_actions';


export default class StockSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ticker: '',
            stockDetails: {}
        }

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
    debugger
    this.props.formatAPICall(stockInfo);
}

update() {
    // debugger
    return e => this.setState({
        ticker: e.currentTarget.value
    });
}

render(){
    let stockDetails = this.state;
    // let theDetails = (!!stockDetails ? <StockDetails stockDetails={stockDetails} /> : "")
    
        return(
            <div>
                < form onSubmit={this.getStockDetails}>
                    <div>
                        <label>Stock Ticker</label>
                        <input 
                        type="text"
                        value = {this.state.ticker}
                        onChange={this.update()}
                        placeholder = "Enter a Ticker" 
                        />
                        <input type="submit" value="Submit" />
                    </div>
                    
                </form>
                {/* {theDetails} */}
            </div>
        )
    }
}  
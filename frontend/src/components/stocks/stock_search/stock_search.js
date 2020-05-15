import React from 'react';
import StockDetails from './stock_details'
// import Key from '../../../../../config/keys_prod';
import { getQuoteEndPointAlpha } from '../../../actions/alphaApi_actions';


export default class StockSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stockDetails: {}
        }
        this.getStockDetails = this.getStockDetails.bind(this);
    }

getStockDetails(e){
    e.preventDefault();
    debugger
    // let stockURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=https://www.alphavantage.co/query?function=GLOBAL_QUOTE%26symbol=${text}%26apikey=QU2KW0R97XR5187Y`;

    // getQuoteEndPointAlpha(stockURL).then(
        
    // )
        // dispatch api call (comes from mdtp from axios)
            // .then (returnedStockInfo => this.setState(returnedStockInfoDetails: stock))
    }

    render(){
        let stockDetails = this.state;
        // let theDetails = (!!stockDetails ? <StockDetails stockDetails={stockDetails} /> : "")
        

            return(
                <div>
                    <form  onSubmit = {this.getStockDetails }>
                        <label>Stock Ticker Quote EndPoint</label>
                        < input 
                            id="ticker"
                            type = "text"
                            placeholder = "Enter a Ticker" 
                        />
                        <button>Lookup Stock</button>
                    </form>
                    {/* {theDetails} */}
                </div>
            )
    }
}  
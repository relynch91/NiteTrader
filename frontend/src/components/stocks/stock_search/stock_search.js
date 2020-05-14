import React from 'react';
import StockDetails from './stock_details'
import Key from '../../../config/keys_prod';
import getQuoteEndPointAlpha from '../../..//actions/alphaApi_actions';


export default class StockSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stockDetails = {}
        }
    }


 getStockDetails(text){
    let stockURL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=https://www.alphavantage.co/query?function=GLOBAL_QUOTE%26symbol=${text}%26apikey=${Key.alphaKeyMaster}`;

    getQuoteEndPointAlpha(stockURL).then(
        
    )
        // dispatch api call (comes from mdtp from axios)
            // .then (returnedStockInfo => this.setState(returnedStockInfoDetails: stock))
    }

    render(){
        let stockDetails = this.state;
        let theDetails = (!!stockDetails ? <StockDetails stockDetails={stockDetails} /> : "")
        

            return(
                <div>
                    <form >
                        <label>Stock Ticker Quote EndPoint
                            <input type="text" value="" placeholder="Enter a Ticker"/>
                        </label>
                        <button onClick={this.props.getStockDetails()}>Lookup Stock</button>
                    </form>
                    {theDetails}
                </div>
            )
    }
}
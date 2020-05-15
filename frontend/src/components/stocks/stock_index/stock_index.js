import React from 'react';
import './stock_index.css';
export default class StockIndex extends React.Component {

    // componentDidMount(){
    //     this.props.fetchAllStocks;
    // }
    
    render(){
            let { myStocks } = this.props;
            return (
              <div className="stock-index-main">
                <p>Here is Your Current Stock Portfolio</p>
                {myStocks.map((ticker) => (
                  <div>
                    <div className="stock-box">
                      <span>{ticker}</span>
                      <span>
                        <p className="current-price">Current Price: $214</p>
                        <p className="purchase-price">Purchase Price: $110</p>
                      {/* onClick= dispatch past month of data to populate graph */}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            );
    }
}

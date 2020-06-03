import React from 'react';
import './stock_index.css';

export default class StockIndex extends React.Component {
    constructor(props){
      super(props)
      this.state = [];
    }
    componentDidMount(){
      this.props.fetchTrades(this.props.userId)
        .then(res => this.setState(res))
        .then(() => console.log(this.state))
    }

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

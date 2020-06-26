import React from 'react';

export default class StockName extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            ticker: ""
        }
    }

    handleClick(){
        this.setState({
            ticker: 'aapl'
        })
        this.props.getStockDetails()
    }

    render(){
        // debugger
        if (!this.props.stocks.stockNameSearch) {return null}
        return (
            <div>
                <ul>
                    {this.props.stocks.stockNameSearch.map(compObj => {
                        return (
                            <li onClick={() => this.handleClick()}>
                                <span>{compObj['1. symbol:']}</span>
                                <span>{compObj['2. name']}</span>
                                <span>{compObj['9. matchScore']}</span>
                            </li>
                        )
                })
                }
                </ul>
            </div>
        )
    }
}



// {
//     Object.keys(myPortfolio).map((ticker, idx) => (
//         <div className="stock-box-owned" key={idx * 392}>
//             <div className='stock-box-owned-ticker'>Ticker: {ticker}</div>
//             <ul className='stock-box-owned-details'>
//                 < li className='stock-boxowned-current-price'>
//                     Price Per Share:
//                 ${(parseFloat(myPortfolio[ticker].pricePerShare).toFixed(2))}
//                 </li>
//                 < li className="stock-box-owned-purchase-price">
//                     Shares Owned: {myPortfolio[ticker].ownedShares.toFixed(2)}
//                 </li>
//                 {(myPortfolio[ticker]['priceDiff'] > 0) ?
//                     <li className='stock-box-owned-price-change-positive'>
//                         Gain Per Share: ${myPortfolio[ticker]['priceDiff'].toFixed(2)}
//                     </li> :
//                     <li className='stock-box-owned-price-change-negative'>
//                         Loss Loss Per Share: ${myPortfolio[ticker]['priceDiff']}
//                     </li>
//                 }
//             </ul>
//         </div>
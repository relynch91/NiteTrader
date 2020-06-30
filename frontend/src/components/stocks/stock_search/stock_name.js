import React from 'react';
export default class StockName extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            stock: ""
        }
    }

    handleClick(ticker){
        this.setState({
            stock: ticker
        })
        this.props.getStockDetails()
    }

    render(){
        if (!this.props.stocks.stockNameSearch || this.props.stocks.stockNameSearch !== 0) {
            return null
        }
        return (
            <div className='stockName-search-results'>
                <h1>Click on the company below to search their stock data</h1>
                <ul>
                    {this.props.stocks.stockNameSearch.map(compObj => {
                        return (
                            <li onClick={() => this.handleClick(compObj['1. symbol'])}>
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


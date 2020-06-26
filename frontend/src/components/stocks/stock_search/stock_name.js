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
        // debugger
        if (!this.props.stocks.stockNameSearch) {return null}
        return (
            <div>
                <p>Click on the company below to search their stock data</p>
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


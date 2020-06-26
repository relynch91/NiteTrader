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


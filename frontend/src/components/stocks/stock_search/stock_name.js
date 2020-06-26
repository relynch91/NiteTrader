import React from 'react';

export default class StockName extends React.Component {
    
    render(){
        if (!this.props.StockNames.StockNameSearch) {return null}
        return (
            <div>
                <ul>
                {this.props.StockNames.StockNameSearch.map(companyName => {
                    return <li>companyName</li>
                })
                }
                </ul>
            </div>
        )
    }
}
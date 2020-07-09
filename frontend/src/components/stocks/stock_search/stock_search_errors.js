import React from 'react';

class StockSearchErrors extends React.Component {
    
    render(){
        let { errors } = this.props
        if (!errors){return null}

        return (
            <div className='stock-search-errors-container'>
                <ul className='stock-search-errors-list'>
                    {errors.map((error, idx) => {
                        return (
                            <li key={idx * 23} >
                                <p>Ticker: {compObj['1. symbol']} </p>
                                <p>Company Name: {compObj['2. name']} </p>
                                <p>Search Score Match {(parseFloat(compObj['9. matchScore']) * 100).toFixed(2)}% </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
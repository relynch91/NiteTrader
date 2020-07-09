import React from 'react';
import './stock_search_errors.css'

export default class StockSearchErrors extends React.Component {
    
    render(){
        let { errors } = this.props

        if (Object.keys(errors).length === 0){return null}
    
        return (
            <div className='stock-search-errors-container'>
                <p>{errors.error}</p>
            </div>
        )
    }
}
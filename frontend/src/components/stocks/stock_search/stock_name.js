import React from 'react';
import key from '../../../frontConfig/frontKeys';

export default class StockName extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            ticker: ""
        }
        this.getStockDetails = this.getStockDetails.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            // this.fetchData(this.props.userID);
            this.getStockDetails();
        }
    }

    getStockDetails(e) {
        if (e) {
            e.preventDefault()
        };
        debugger
        const intraDayAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.state.ticker}&interval=15min&outputsize=full&apikey=${key}`;
        this.props.intraDayAPICall(intraDayAPI);
        const timeSeriesMonthlyAPI = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${this.state.ticker}&apikey=${key}`;
        this.props.timeSeriesInfoAPICall(timeSeriesMonthlyAPI);
    }

    handleClick(ticker){
        console.log(ticker);
        this.setState({
            ticker: ticker
        })
    }

    render(){
        if (this.props.stocks.stockNameSearch.length === 0) {
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
                        )})}
                </ul>
            </div>
        )
    }
}


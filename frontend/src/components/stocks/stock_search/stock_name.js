import React from 'react';
import key from '../../../frontConfig/frontKeys';
import './stock_name.css';

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
            this.getStockDetails();
        }
    }

    getStockDetails(e) {
        if (e) { e.preventDefault() };
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
            return (
                <div className="stock-search-landing">
                    <h1>Seek And You Shall Find</h1>
                    <p> Enter a company's ticker to access real-time information.  Due
                      to API Limitations, we are unable to process more than 2 stock ticker 
                      searches per minute.  So if a response is not rendered, please stand by 
                      then try again! Thank you for your patience. 
                    </p>
                </div>
            )
        }
        return (
            <div className='stock-name-search-results'>
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


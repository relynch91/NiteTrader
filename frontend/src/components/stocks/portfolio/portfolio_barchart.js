import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine,
} from 'recharts';
import { formatPortfolioData } from '../../../util/portfolio_api_util'

export default class PortfolioBarChart extends PureComponent {
    constructor(props){
        super(props)
        this.state = {};
    }

    render() {

        let data = formatPortfolioData(this.props.ownedStocks)
        let date = this.props.ownedStocks[Object.keys(this.props.ownedStocks)[0]].latestTradingDay;
        console.log(date);
        if (Object.keys(data).length === 0) { return null };

        return (
            <div className='portfolio-graph'>
                <div className="portfolio-graph-container">
                <h1>
                    Stocks Performance for { date } (Single Day Percentage)
                </h1>
                <BarChart
                    width={420}
                    height={410}
                    data={data}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type='number' />
                <Tooltip />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="Loss" fill="#A3333D" />
                <Bar dataKey="Gain" fill="#82ca9d" />
                </BarChart>
                </div>
            </div>
        );
    }
}

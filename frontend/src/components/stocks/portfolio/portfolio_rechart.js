import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine,
} from 'recharts';
import { formatPortfolioData } from '../../../util/portfolio_api_util'

export default class PortfolioRechart extends PureComponent {
    render() {
        let data = formatPortfolioData(this.props.ownedStocks)
        if (Object.keys(data).length === 0) { return null };
        return (
            <div className='portfolio-graph'>
                <div className="portfolio-graph-container">
                    <h1>
                        Stocks Performance Single Day Percentage
                </h1>
                    <BarChart
                        width={420}
                        height={410}
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="5 5" />
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
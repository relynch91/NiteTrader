import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import { formatPortfolioData } from '../../../util/portfolio_api_util'

export default class PortfolioBarChart extends PureComponent {
    constructor(props){
        super(props)
        this.state = {};
    }

    componentDidUpdate(prevProps){
        if (this.props.portfolio !== prevProps.portfolio){
           this.setState({ data: formatPortfolioData(this.props.portfolio) });
        }
    }

    render() {
        let { portfolio } = this.props;
        if (Object.keys(portfolio).length === 0) { return null };
        return (
            <div className='portfolio-graph'>
                <h1>
                    Currently Owned Stocks Performance (Single Day)
                </h1>
                <BarChart
                    width={500}
                    height={300}
                    data={this.state.data}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type='number' />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="Loss" fill="#A3333D" />
                <Bar dataKey="Gain" fill="#82ca9d" />
                </BarChart>

            </div>
        );
    }
}

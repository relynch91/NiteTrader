import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';
import { formatPortfolioData } from '../../../util/portfolio_api_util'

export default class PortfolioBarChart extends PureComponent {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidUpdate(prevProps){
        if (this.props.portfolio !== prevProps.portfolio){
           this.setState({ data: formatPortfolioData(this.props.portfolio) });
        }
    }

    render() {
        let firstKey = Object.keys(this.props.portfolio)[0]
        if (!Object.keys(this.props.portfolio[firstKey]).includes('diff')) {return null};

        return (
            <BarChart
                width={500}
                height={300}
                data={this.state.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="pv" fill="#A3333D" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        );
    }
}

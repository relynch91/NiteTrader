import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from 'recharts';

export default class PortfolioBarChart extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/q68cz43w/';

    render() {
        return (
            <BarChart
                width={500}
                height={300}
                data={this.props.pnl}
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

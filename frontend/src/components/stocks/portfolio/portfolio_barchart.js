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

    componentDidMount(){
        this.setState({ data: formatPortfolioData(this.props.portfolio) });
    }

    render() {
        let { portfolio } = this.props;
        // console.log(portfolio);
        // let res = [];
        // let keys = Object.keys(portfolio);
        // let numStocks = Object.keys(portfolio).length;

        // console.log(numStocks);
        // for (let i = 0; i < numStocks.length; i++) {
        //     // let key = parseFloat(portfolio[keys[i]].quoteEndPointData.changePercent) > 0 ? 'Gain' : 'Loss';
        //     console.log(portfolio[keys[i]].quoteEndPointData.symbol);
        //     console.log(parseFloat(portfolio[keys[i]].quoteEndPointData.changePercent));
        //     res.push({
        //         name: portfolio[keys[i]].quoteEndPointData.symbol,
        //         // [key]: parseFloat(portfolio[keys[i]].quoteEndPointData.changePercent)
        //     })
        // }


        // console.log(portfolio[keys[0]].quoteEndPointData.symbol);
        // console.log(portfolio[keys[0]].quoteEndPointData.changePercent);
        let data = formatPortfolioData(this.props.portfolio)




        console.log(data);

        if (Object.keys(portfolio).length === 0) { return null };
        return (
            <div className='portfolio-graph'>
                <div className="portfolio-graph-container">
                <h1>
                    Currently Owned Stocks Performance (Single Day Percentage)
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

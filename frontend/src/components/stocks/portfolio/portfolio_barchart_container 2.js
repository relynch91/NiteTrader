import React from 'react';
import { connect } from 'react-redux';
import PortfolioBarChart from './portfolio_barchart';

const mapStateToProps = (state) => ({
    pnl: data
})

export default connect(mapStateToProps, null)(PortfolioBarChart);

const data = [
    {
        name: 'AAPL', uv: 4000,
    },
    {
        name: 'IBM', uv: 3000,
    },
    {
        name: 'NKE', pv: -9800,
    },
    {
        name: 'ONE', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'TWO', uv: -1890, pv: 4800, amt: 2181,
    },
    {
        name: 'THREE', uv: 2390, pv: -3800, amt: 2500,
    },
    {
        name: 'FOUR', uv: 3490, pv: 4300, amt: 2100,
    },
];
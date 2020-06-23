import React from 'react';
import { connect } from 'react-redux';
import PortfolioBarChart from './portfolio_barchart';

const mapStateToProps = (state) => ({
    portfolio: state.portfolio,
    // pnl: data
})

export default connect(mapStateToProps, null)(PortfolioBarChart);

// const data = [
//     {
//         name: 'AAPL', uv: 4000,
//     },
//     {
//         name: 'IBM', uv: 3000,
//     },
//     {
//         name: 'NKE', pv: 9800,
//     },
//     {
//         name: 'ONE', uv: 2780,
//     },
//     {
//         name: 'TWO', pv: 1890,
//     },
//     {
//         name: 'THREE', pv: -3800,
//     },
//     {
//         name: 'FOUR', uv: 3490,
//     },
// ];
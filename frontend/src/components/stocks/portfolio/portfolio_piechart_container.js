import React from 'react';
import { connect } from 'react-redux';
import PortfolioPieChart from './portfolio_piechart';

const mapStateToProps = (state) => ({
    pnl: data
})

export default connect(mapStateToProps, null)(PortfolioPieChart);


const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
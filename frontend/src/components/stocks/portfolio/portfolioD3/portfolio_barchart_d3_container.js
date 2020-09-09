import { connect } from 'react-redux';
import PortfolioD3BarChart from './portfolio_barchart_d3';

const mapStateToProps = (state) => ({
    ownedStocks: state.ownedStocks,
})

export default connect(mapStateToProps, null)(PortfolioD3BarChart);
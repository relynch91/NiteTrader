import { connect } from 'react-redux';
import PortfolioRechart from './portfolio_rechart.js';

const mapStateToProps = (state) => ({
    ownedStocks: state.ownedStocks,
})

export default connect(mapStateToProps, null)(PortfolioRechart); 
import { connect } from 'react-redux';
import Portfolio from './portfolio.js';
import { fetchTrades } from '../../../actions/transaction_actions';
import { buildPortfolio, getStocks } from '../../../actions/portfolio_actions';


const mapStateToProps = (state) => ({
    userId: state.session.user.id,
    trades: state.transactions,
    ownedStocks: state.ownedStocks
})

const mapDispatchToProps = dispatch => ({
    fetchTrades: (userId) => dispatch(fetchTrades(userId)),
    buildPortfolio: (stocks, info) => dispatch(buildPortfolio(stocks, info)),
    getStocks: (tickers) => dispatch(getStocks(tickers))
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
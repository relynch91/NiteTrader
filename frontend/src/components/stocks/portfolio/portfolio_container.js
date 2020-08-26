import { connect } from 'react-redux';
import Portfolio from './portfolio.js';
import { fetchTrades } from '../../../actions/transaction_actions';
import { buildPortfolio, getStocks, endPointState } from '../../../actions/portfolio_actions';
import { buildProfile, getStat } from '../../../actions/profile_actions.js';
const mapStateToProps = (state) => ({
    userId: state.session.user.id,
    trades: state.transactions,
    ownedStocks: state.ownedStocks,
    myStocks: state.transactions,
    myPortfolio: state.portfolio,
    myProfile: state.profile
})

const mapDispatchToProps = dispatch => ({
    fetchTrades: (userId) => dispatch(fetchTrades(userId)),
    buildProfile: (stocks, info) => dispatch(buildProfile(stocks, info)),
    getStat: (userID) => dispatch(getStat(userID)),
    buildPortfolio: (transactions) => dispatch(buildPortfolio(transactions)),
    getStocks: (tickers) => dispatch(getStocks(tickers)),
    endPointState: (dbTickers) => dispatch(endPointState(dbTickers))
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
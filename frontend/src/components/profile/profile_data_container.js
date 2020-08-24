import { connect } from 'react-redux';
import ProfileData from './profile_data';
import { fetchTrades } from '../../actions/transaction_actions';
import { buildProfile, getStat } from '../../actions/profile_actions';
import { buildPortfolio, getStocks, endPointState } from '../../actions/portfolio_actions';

const mapStateToProps = (state) => {
  return {
    ownedStocks: state.ownedStocks,
    myStocks: state.transactions,
    myPortfolio: state.portfolio,
    userId: state.session.user.id,
    trades: state.transactions,
    myProfile: state.profile
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrades: (userId) => dispatch(fetchTrades(userId)),
  buildProfile: (stocks, info) => dispatch(buildProfile(stocks, info)),
  getStat: (userID) => dispatch(getStat(userID)),
  buildPortfolio: (transactions) => dispatch(buildPortfolio(transactions)),
  getStocks: (tickers) => dispatch(getStocks(tickers)),
  endPointState: (dbTickers) => dispatch(endPointState(dbTickers))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileData);
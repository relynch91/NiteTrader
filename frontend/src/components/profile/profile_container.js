import { connect } from 'react-redux';
import Profile from './profile';
import { fetchTrades } from '../../actions/transaction_actions';
import { buildPortfolio } from '../../actions/portfolio_actions'
import { getStat, getProfileValues, buildProfile } from '../../actions/profile_actions'



const mapStateToProps = (state) => {
  return {
    myTransactions: state.transactions,
    myPortfolio: state.portfolio,
    userId: state.session.user.id,
    username: state.session.user.username,
    trades: state.transactions
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrades: (userId) => dispatch(fetchTrades(userId)),
  buildPortfolio: (transactions) => dispatch(buildPortfolio(transactions)),
  getStat: (userID) => dispatch(getStat(userID)),
  getProfileValues: (userID) => dispatch(getProfileValues(userID)),
  buildProfile: userID => dispatch(buildProfile(userID))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
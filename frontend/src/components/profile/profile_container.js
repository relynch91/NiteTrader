import { connect } from 'react-redux';
import Profile from './profile';
import { fetchTrades } from '../../actions/transaction_actions';
import { buildPortfolio } from '../../actions/portfolio_actions'
import { buildProfile } from '../../actions/profile_actions'



const mapStateToProps = (state) => {
  return {
    myTransactions: state.transactions,
    myPortfolio: state.portfolio,
    userId: state.session.user.id,
    trades: state.transactions
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrades: (userId) => dispatch(fetchTrades(userId)),
  buildPortfolio: (transactions) => dispatch(buildPortfolio(transactions)),
  buildProfile: (stocks) => dispatch(buildProfile(stocks))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
import { connect } from 'react-redux';
import ProfileData from './profile_data';
import { fetchTrades } from '../../actions/transaction_actions';
import { buildPortfolio } from '../../actions/portfolio_actions'


const mapStateToProps = (state) => {
  return {
    myStocks: state.transactions,
    myPortfolio: state.portfolio,
    userId: state.session.user.id,
    trades: state.transactions
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrades: (userId) => dispatch(fetchTrades(userId)),
  buildPortfolio: (transactions) => dispatch(buildPortfolio(transactions))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileData);
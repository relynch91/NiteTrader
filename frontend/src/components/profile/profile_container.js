import { connect } from 'react-redux';
import Profile from './profile';
import { fetchTrades } from '../../actions/transaction_actions';

const mapStateToProps = (state) => {
  return {
    // currentUser: state.session.user,
    userId: state.session.user.id,
    trades: state.transactions
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrades: (userId) => dispatch(fetchTrades(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
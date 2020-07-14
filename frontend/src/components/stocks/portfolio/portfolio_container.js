import { connect } from 'react-redux';
import Portfolio from './portfolio.js';
import { fetchTrades } from '../../../actions/transaction_actions';

const mapStateToProps = (state) => ({
    userId: state.session.user.id,
    trades: state.transactions
})

const mapDispatchToProps = dispatch => ({
    fetchTrades: (userId) => dispatch(fetchTrades(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
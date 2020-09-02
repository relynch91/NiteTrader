import { connect } from "react-redux";
import StockIndex from './stock_index'
import { fetchTrades } from '../../../actions/transaction_actions.js'
import { buildPortfolio, getStocks } from '../../../actions/portfolio_actions.js'
import { getStat } from '../../../actions/profile_actions.js'

const mapStateToProps = (state) => ({
  myStocks: state.transactions,
  myPortfolio: state.portfolio,
  userId: state.session.user.id,
  ownedStocks: state.ownedStocks
});

const mapDispatchToProps = dispatch => ({
  fetchTrades: (userId) => dispatch(fetchTrades(userId)),
  buildPortfolio: (transactions) => dispatch(buildPortfolio(transactions)),
  getStocks: (userId) => dispatch(getStocks(userId)),
  getStat: (userID) => dispatch(getStat(userID)),

})

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);
import { connect } from "react-redux";
import StockIndex from './stock_index'
import { fetchTrades } from '../../../actions/transaction_actions'
import { buildPortfolio } from '../../../actions/portfolio_actions'

const mapStateToProps = (state) => ({
  myStocks: state.transactions,
  myPortfolio: state.portfolio,
  userId: state.session.user.id,
});

const mapDispatchToProps = dispatch => ({
  fetchTrades: (userId) => dispatch(fetchTrades(userId)),
  buildPortfolio: (transactions) => dispatch(buildPortfolio(transactions))
})

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);
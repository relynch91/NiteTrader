import { connect } from "react-redux";
import StockIndex from './stock_index'
import { fetchTrades } from '../../../actions/transaction_actions'
import { activeShares } from '../../../util/transaction_api_util'

const mapStateToProps = (state) => ({
  myStocks: state.transactions,
  // myStocks: ["AAPL", "IBM", "TSLA", "NKE"],
  // myStocks: state.transactions
  userId: state.session.user.id 
});

const mapDispatchToProps = dispatch => ({
  fetchTrades: (userId) => dispatch(fetchTrades(userId)),
  activeShares: (transactions) => dispatch(activeShares(transactions))
})

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);
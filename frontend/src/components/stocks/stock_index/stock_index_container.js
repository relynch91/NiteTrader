import { connect } from "react-redux";
import StockIndex from './stock_index'
import { fetchTrades } from '../../../actions/transaction_actions'

const mapStateToProps = (state) => ({
  myStocks: ["AAPL", "IBM", "TSLA", "NKE"],
  userId: state.session.user.id 
});

const mapDispatchToProps = dispatch => ({
  fetchTrades: (userId) => dispatch(fetchTrades(userId)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(StockIndex);
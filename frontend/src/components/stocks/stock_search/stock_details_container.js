import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import StockDetails from "./stock_details";
import { buyStock, sellStock, handleBuy } from '../../../actions/transaction_actions';
import { buildPortfolio } from '../../../actions/portfolio_actions'

const mapStateToProps = (state) => ({
    stockDetails: state.stocks,
    myStocks: state.transactions,
    userId: state.session.user.id,
    portfolio: state.portfolio,
    profile: state.profile.profileValueStat,
    redirectTo: state.ui.redirect.payload,
    transactionErrors: state.errors.transactions
});

const mapDispatchToProps = (dispatch) => ({
  buyStock: (transaction) => dispatch(buyStock(transaction)),
  sellStock: (transaction) => dispatch(sellStock(transaction)),
  handleBuy: (transaction) => dispatch(handleBuy(transaction)),
  buildPortfolio: (transactions) => dispatch(buildPortfolio(transactions))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockDetails));
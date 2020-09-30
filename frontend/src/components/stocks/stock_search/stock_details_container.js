import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import StockDetails from "./stock_details";
import { buyStock, handleSell, 
         handleBuy, fetchTrades, 
         clearSearchState, receiveTransactionStart, 
         receiveTransactionEnd } from '../../../actions/transaction_actions.js';
import { buildPortfolio } from '../../../actions/portfolio_actions.js'
import { getStat } from '../../../actions/profile_actions.js'

const mapStateToProps = (state) => ({
    stockDetails: state.stocks,
    myStocks: state.transactions,
    userId: state.session.user.id,
    portfolio: state.portfolio,
    profile: state.profile.profileValueStat,
    redirectTo: state.ui.redirect.payload,
    transactionErrors: state.errors.transactions,
    flag: state.ui.loading.flag
});

const mapDispatchToProps = (dispatch) => ({
  buyStock: (transaction) => dispatch(buyStock(transaction)),
  fetchTrades: userID => dispatch(fetchTrades(userID)),
  getStat: (userID) => dispatch(getStat(userID)),
  handleSell: (transaction) => dispatch(handleSell(transaction)),
  handleBuy: (transaction) => dispatch(handleBuy(transaction)),
  buildPortfolio: (transactions) => dispatch(buildPortfolio(transactions)),
  clearSearchState: () => dispatch(clearSearchState()),
  receiveTransactionStart: () => dispatch(receiveTransactionStart()),
  receiveTransactionEnd: () => dispatch(receiveTransactionEnd()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockDetails));
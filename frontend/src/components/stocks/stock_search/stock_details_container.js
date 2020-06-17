import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import StockDetails from "./stock_details";
import { tradeStock } from '../../../actions/transaction_actions';
// import { fetchTrades } from '../../../actions/transaction_actions'
// import { buildPortfolio } from '../../../actions/portfolio_actions';

const mapStateToProps = (state) => ({
    stockDetails: state.stocks,
    userId: state.session.user.id,
    portfolio: state.portfolio
});

const mapDispatchToProps = (dispatch) => ({
  tradeStock: (transaction) => dispatch(tradeStock(transaction))
  // Depending on the route the user takes, we might have to call these to populate portfolio 
  // in order to know if user can sell a stock, but if visit portfolio first: no need
    // buildPortfolio: (transactions) => dispatch(buildPortfolio(transactions))
    // fetchTrades: (userId) => dispatch(fetchTrades(userId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockDetails));

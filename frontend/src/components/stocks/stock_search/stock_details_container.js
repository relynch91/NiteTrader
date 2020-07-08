import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import StockDetails from "./stock_details";
import { tradeStock } from '../../../actions/transaction_actions';

const mapStateToProps = (state) => ({
    stockDetails: state.stocks,
    userId: state.session.user.id,
    portfolio: state.portfolio
});

const mapDispatchToProps = (dispatch) => ({
  tradeStock: (transaction) => dispatch(tradeStock(transaction))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockDetails));

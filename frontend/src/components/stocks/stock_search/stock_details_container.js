import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import StockDetails from "./stock_details";
import { buyStock, sellStock } from '../../../actions/transaction_actions';

const mapStateToProps = (state) => ({
    stockDetails: state.stocks,
    userId: state.session.user.id,
    portfolio: state.portfolio,
    profile: state.profile.profileValueStat,
    redirectTo: state.ui.redirect.payload
});

const mapDispatchToProps = (dispatch) => ({
  buyStock: (transaction) => dispatch(buyStock(transaction)),
  sellStock: (transaction) => dispatch(sellStock(transaction))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StockDetails));
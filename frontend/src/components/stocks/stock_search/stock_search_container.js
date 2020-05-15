import { connect } from "react-redux";
import StockSearch from "./stock_search";
import { getQuoteEndPointAlpha } from '../../../actions/alphaApi_actions'

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
    getQuoteEndPointAlpha: (stockURL) => dispatch(getQuoteEndPointAlpha(stockURL))
    // logout: () => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(StockSearch);

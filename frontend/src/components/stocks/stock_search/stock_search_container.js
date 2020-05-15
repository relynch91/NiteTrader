import { connect } from "react-redux";
import StockSearch from "./stock_search";
import { getQuoteEndPointAlpha, formatAPICall } from '../../../actions/alphaApi_actions'

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
    getQuoteEndPointAlpha: (stockURL) => dispatch(getQuoteEndPointAlpha(stockURL)),
    formatAPICall: (ticker) => dispatch(formatAPICall(ticker))
    // logout: () => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(StockSearch);

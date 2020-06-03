import { connect } from "react-redux";
import StockSearch from "./stock_search";
import { getQuoteEndPointAlpha, intraDayAPICall } from '../../../actions/alphaAPI_actions';

const mapDispatchToProps = (dispatch) => ({
    getQuoteEndPointAlpha: (stockURL) => dispatch(getQuoteEndPointAlpha(stockURL)),
    intraDayAPICall: (apiURL) => dispatch(intraDayAPICall(apiURL))
})

export default connect(null, mapDispatchToProps)(StockSearch);
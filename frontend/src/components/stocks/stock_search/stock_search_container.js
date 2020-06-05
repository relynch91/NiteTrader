import { connect } from "react-redux";
import StockSearch from "./stock_search";
import { getQuoteEndPointAlpha, intraDayAPICall, timeSeriesInfoAPICall } from '../../../actions/alphaApi_actions';

const mapDispatchToProps = (dispatch) => ({
    getQuoteEndPointAlpha: (stockURL) => dispatch(getQuoteEndPointAlpha(stockURL)),
    intraDayAPICall: (apiURL) => dispatch(intraDayAPICall(apiURL)),
    timeSeriesInfoAPICall: (apiURL) => dispatch(timeSeriesInfoAPICall(apiURL))
})

export default connect(null, mapDispatchToProps)(StockSearch);
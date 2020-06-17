import { connect } from "react-redux";
import StockSearch from "./stock_search";
import { intraDayAPICall, timeSeriesInfoAPICall, stockNameAPICall } from '../../../actions/alphaApi_actions';

const mapStateToProps = (state) => ({
    stockDetails: state.stocks
});

const mapDispatchToProps = (dispatch) => ({
    intraDayAPICall: (apiURL) => dispatch(intraDayAPICall(apiURL)),
    timeSeriesInfoAPICall: (apiURL) => dispatch(timeSeriesInfoAPICall(apiURL)),
    stockNameSearchAPICall: (apiURL) => dispatch(stockNameAPICall(apiURL))
})

export default connect(mapStateToProps, mapDispatchToProps)(StockSearch);
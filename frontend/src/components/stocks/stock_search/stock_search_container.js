import { connect } from "react-redux";
import StockSearch from "./stock_search";
import { intraDayAPICall, timeSeriesInfoAPICall } from '../../../actions/alphaApi_actions';

const mapStateToProps = (state) => ({
    stockDetails: state.stocks
});

const mapDispatchToProps = (dispatch) => ({
    intraDayAPICall: (apiURL) => dispatch(intraDayAPICall(apiURL)),
    timeSeriesInfoAPICall: (apiURL) => dispatch(timeSeriesInfoAPICall(apiURL))
})

export default connect(mapStateToProps, mapDispatchToProps)(StockSearch);
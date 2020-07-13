import { connect } from "react-redux";
import StockSearch from "./stock_search";
import { intraDayAPICall, 
    timeSeriesInfoAPICall, 
    stockNameAPICall, receiveClearStocks, 
    weeklyAPICall} from '../../../actions/alphaApi_actions';

const mapStateToProps = (state) => ({
    stockDetails: state.stocks,
});

const mapDispatchToProps = (dispatch) => ({
    intraDayAPICall: (apiURL) => dispatch(intraDayAPICall(apiURL)),
    timeSeriesInfoAPICall: (apiURL) => dispatch(timeSeriesInfoAPICall(apiURL)),
    weeklyAPICall: (apiURL) => dispatch(weeklyAPICall(apiURL)),
    stockNameSearchAPICall: (apiURL) => dispatch(stockNameAPICall(apiURL)),
    receiveClearStocks: () => dispatch(receiveClearStocks())
})

export default connect(mapStateToProps, mapDispatchToProps)(StockSearch);
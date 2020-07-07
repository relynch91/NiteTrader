import { connect } from 'react-redux';
import StockName from './stock_name';
import { intraDayAPICall, timeSeriesInfoAPICall, stockNameAPICall } from '../../../actions/alphaApi_actions';


const mapStateToProps = (state) => ({
    stocks: state.stocks,
});

const mapDispatchToProps = dispatch => ({
    intraDayAPICall: (apiURL) => dispatch(intraDayAPICall(apiURL)),
    timeSeriesInfoAPICall: (apiURL) => dispatch(timeSeriesInfoAPICall(apiURL)),
    stockNameSearchAPICall: (apiURL) => dispatch(stockNameAPICall(apiURL))
})

export default connect(mapStateToProps, mapDispatchToProps)(StockName);
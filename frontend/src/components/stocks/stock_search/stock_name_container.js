import { connect } from 'react-redux';
import StockName from './stock_name';
import { intraDayAPICall, weeklyAPICall, stockNameAPICall } from '../../../actions/alphaApi_actions';


const mapStateToProps = (state) => ({
    stocks: state.stocks,
});

const mapDispatchToProps = dispatch => ({
    intraDayAPICall: (apiURL) => dispatch(intraDayAPICall(apiURL)),
    stockNameSearchAPICall: (apiURL) => dispatch(stockNameAPICall(apiURL)),
    weeklyAPICall: (apiURL) => dispatch(weeklyAPICall(apiURL)),
})

export default connect(mapStateToProps, mapDispatchToProps)(StockName);
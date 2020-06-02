import { connect } from "react-redux";
import StockSearch from "./stock_search";
import { getQuoteEndPointAlpha } from '../../../actions/alphaAPI_actions';

const mapDispatchToProps = (dispatch) => ({
    getQuoteEndPointAlpha: (stockURL) => dispatch(getQuoteEndPointAlpha(stockURL)),
})

export default connect(null, mapDispatchToProps)(StockSearch);
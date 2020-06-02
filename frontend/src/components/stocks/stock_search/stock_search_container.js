import { connect } from "react-redux";
import StockSearch from "./stock_search";
import { getQuoteEndPointAlpha } from '../../../actions/alphaApi_actions';
import { formatAPICall} from '../../../actions/_alphaAPI';


const mapDispatchToProps = (dispatch) => ({
    getQuoteEndPointAlpha: (stockURL) => dispatch(getQuoteEndPointAlpha(stockURL)),
})

export default connect(null, mapDispatchToProps)(StockSearch);
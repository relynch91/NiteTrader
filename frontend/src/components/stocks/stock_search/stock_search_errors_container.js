import { connect } from "react-redux";
import StockSearchErrors from "./stock_search";

const mapStateToProps = (state) => ({
    errors: state.errors.apiCalls,
});


export default connect(mapStateToProps, null)(StockSearchErrors);
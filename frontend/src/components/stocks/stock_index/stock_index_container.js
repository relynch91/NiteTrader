import { connect } from "react-redux";
import StockIndex from './stock_index'

const mapStateToProps = (state) => ({
  myStocks: ["APPL", "IBM", "TSLA", "NK"],
});

const mapDispatchToProps = dispatch => ({
    fetchAllUserStocks: "TBD"
})

export default connect(mapStateToProps, null)(StockIndex);



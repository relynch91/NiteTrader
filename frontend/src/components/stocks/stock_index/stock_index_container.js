import { connect } from "react-redux";
import StockIndex from './stock_index'

const mapStateToProps = (state) => ({
  myStocks: ["AAPL", "IBM", "TSLA", "NKE"],
});

const mapDispatchToProps = dispatch => ({
    fetchAllUserStocks: "TBD"
})

export default connect(mapStateToProps, null)(StockIndex);



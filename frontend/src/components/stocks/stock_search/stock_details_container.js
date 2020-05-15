import { connect } from "react-redux";
import StockDetails from "./stock_details";

const mapStateToProps = (state) => ({
    stockDetails: state.stocks.stock1,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchThisStock: "Insert your axios api call here",
// });

export default connect(mapStateToProps, null)(StockDetails);

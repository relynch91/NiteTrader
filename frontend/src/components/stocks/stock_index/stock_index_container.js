import { connect } from "react-redux";
import StockIndex from './stock_index'

const theStocksFromState = [
  {
    _id: "5ebca0a9f3e535f4f625a820",
    symbol: "GoogSSSSSSSS",
    open: 15,
    low: 114.85,
    price: 100,
    volume: 3153277,
    change: -4.53,
    changePercent: -3.7668,
    __v: 0,
  },
  {
    _id: "5ebcb8782f80140cf07db340",
    symbol: "AAPL",
    open: 135,
    low: 114.85,
    price: 115.72,
    volume: 3153277,
    change: -4.53,
    changePercent: -3.7668,
    __v: 0,
  },
  {
    _id: "5ebcd68236b38531cacdc688",
    symbol: "ThisWorks",
    open: 15,
    low: 114.85,
    price: 55,
    volume: 3153277,
    change: -4.53,
    changePercent: -3.7668,
    __v: 0,
  },
];

const mapStateToProps = state => ({
    allStocks: theStocksFromState
})

const mapDispatchToProps = dispatch => ({
    fetchAllUserStocks: "TBD"
})

export default connect(mapStateToProps, null)(StockIndex);

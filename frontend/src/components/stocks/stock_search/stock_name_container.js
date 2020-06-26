import { connect } from 'react-redux';
import StockName from './stock_name';

const mapStateToProps = (state) => ({
    stockNames: state.stocks,
    porfolio: null
});

export default connect(mapStateToProps, null)(StockName);
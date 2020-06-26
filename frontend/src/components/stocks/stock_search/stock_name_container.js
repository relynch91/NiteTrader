import { connect } from 'react-redux';
import StockName from './stock_name';

const mapStateToProps = (state) => ({
    stocks: state.stocks,
});

const mapDispatchToProps = dispatch => ({
    null: null
})

export default connect(mapStateToProps, null)(StockName);
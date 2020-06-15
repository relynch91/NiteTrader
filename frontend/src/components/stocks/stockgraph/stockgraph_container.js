import { connect } from 'react-redux';
import StockGraph from './stockgraph';

const mapStateToProps = (state) => ({
    stockInfo: state.stocks,
    porfolio: null
});

export default connect(mapStateToProps, null)(StockGraph)

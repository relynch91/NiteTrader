import { connect } from 'react-redux';
import Portfolio from './portfolio.js';

const mapStateToProps = (state) => ({
    user: state.session.user
})

export default connect(mapStateToProps, null)(Portfolio);
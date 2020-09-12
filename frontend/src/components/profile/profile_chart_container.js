import { connect } from 'react-redux';
import ProfileChart from './profile_chart';

const mapStateToProps = (state) => {
  return {
    userId: state.session.user.id,
  };
};

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChart);
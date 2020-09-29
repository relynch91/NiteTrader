import { connect } from 'react-redux';
import ProfileChart from './profile_chart';
import { getProfileValues } from '../../actions/profile_actions';

const mapStateToProps = (state) => {
  return {
    userId: state.session.user.id,
    profileValues: state.profile.profileValues
  };
};

const mapDispatchToProps = dispatch => ({
  getProfileValues: (userId) => dispatch(getProfileValues(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChart);
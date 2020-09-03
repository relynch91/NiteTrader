import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    username: state.session.user.username
  };
};

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
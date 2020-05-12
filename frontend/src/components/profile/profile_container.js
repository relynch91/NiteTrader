import { connect } from 'react-redux';
// import { fetchUserTweets } from '../../actions/tweet_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
    // tweets: Object.values(state.tweets.user),
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUserTweets: id => dispatch(fetchUserTweets(id))
//   };
// };


export default connect(mapStateToProps, null)(Profile);
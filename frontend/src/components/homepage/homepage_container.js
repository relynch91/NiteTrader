import React from 'react';
import { connect } from 'react-redux';
import HomePage from './homepage';
import { openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/error_actions';

// const mapStateToProps = (state) => {
// };

const mapDispatchToProps = dispatch => {
  return {
    signUpButton: (
        <button className="banner-button" onClick={() => {
            dispatch(openModal('login'))
            dispatch(clearErrors())
        }}>Start Investing Now
        </button>)
  };
};


export default connect(null, mapDispatchToProps)(HomePage);
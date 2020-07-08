import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { closeModal, openModal } from '../../actions/modal_actions'
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    formType: 'Sign Up'
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    // login: user => dispatch(login(user)),
    otherForm: (
      <button className="modal-switch-button" onClick={() => {
        dispatch(openModal('login'))
        dispatch(clearErrors())
      }}> Sign in        
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
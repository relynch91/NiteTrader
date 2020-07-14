import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/error_actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: 'Login',
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    closeModal: () => (dispatch(closeModal()), dispatch(clearErrors())),
    otherForm: (
      <button className="modal-switch_button" onClick={() => {
        dispatch(openModal('signup'))
        dispatch(clearErrors())
      }}>Create one
      </button>
    ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
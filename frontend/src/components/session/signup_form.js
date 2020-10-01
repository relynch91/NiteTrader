import React from 'react';
import { withRouter } from 'react-router-dom';
import '../modal/modal.css';
import './login_signup.css'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.signup(user)
      .then(() => (this.props.login(user)))
  }

  render() {
    const { formType, closeModal, otherForm } = this.props;
    const message = formType === 'Sign Up' ? 'Already have an account?' : 'No account?';
    const button_text = formType === 'Sign Up' ? 'Sign Up' : 'Sign In';
    const login_intro = formType === 'Sign Up' ? 'Join NiteTrader!' : 'Welcome Back!'
    
    return (
      <div className="modal-child">
        <div onClick={closeModal} className="close-x">
          &times;
        </div>
        <div className="modal-content">
          <div className="modal-title">{login_intro}</div>
          <div className="modal-quote">The World is Yours.</div>
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <div className="session-info">
              <label htmlFor="email">Email</label>
              <div className='login-signup-form-errors'> {this.props.errors['email']} </div>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="modal-input"
              />
            </div>
            <div className="session-info">
              <label htmlFor="username">Username</label>
              <div className='login-signup-form-errors'> {this.props.errors['username']} </div>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="modal-input"
              />
            </div>
            <div className="session-info">
              <label htmlFor="password">Password</label>
              <div className='login-signup-form-errors'> {this.props.errors['password']} </div>
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="modal-input"
              />
            </div>
            <div className="session-info">
              <label htmlFor="password2">Confirm Password</label>
              <div className='login-signup-form-errors'> {this.props.errors['password2']} </div>
              <input type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                className="modal-input"
              />
            </div>
            <input type="submit" className="modal-submit" value={button_text} />
          </form>
          <div className="modal-bottom">
            {message}
            <div className="modal-switch">{otherForm}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
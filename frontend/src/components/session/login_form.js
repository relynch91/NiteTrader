import React from 'react';
import { withRouter } from 'react-router-dom';
import '../modal/modal.css';
import './login_signup.css';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {}
    };

    this.demoUser = {
      email: 'demo_user@nitetrader.com',
      username: 'demo_user',
      password: 'demo12345'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
         this.props.history.push('/');
      this.setState({
        errors: this.props.errors
      });
    }
  }
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.demoLogin(this.demoUser)
      .then(() => this.props.closeModal())
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user)
  }

  render() {
    
    const { formType, closeModal, otherForm } = this.props;
    const message = formType === 'Sign Up' ? 'Already have an account?' : 'No account?';
    const button_text = formType === 'Sign Up' ? 'Sign up' : 'Sign in';
    const intro = formType === 'Sign Up'
      ? 'Create an account to learn about the stock market and build a portfolio!'
      : '';
    const login_intro = formType === 'Sign Up' ? 'Join NiteTrader!' : 'Welcome back!';

    return (
      <div className="modal-child">
        <div onClick={closeModal} className="close-x">
          &times;
        </div>
        <div className="modal-content">
          <div className="modal-title">{login_intro}</div>
          <div className="modal-intro">{intro}</div>
          <div className="modal-quote">The World is Yours.</div>
          <form className="modal-form" onSubmit={this.handleSubmit}>
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
              <div className='login-signup-form-errors' >{this.props.errors['password']}</div>
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="modal-input"
              />
            </div>
            <input type="submit" className="modal-submit" value={button_text} />
          </form>
          <button className="modal-submit-demo" onClick={this.handleDemo}>
            Demo User
          </button>
          <div className="modal-bottom">
            {message}
            <div className="modal-switch">{otherForm}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
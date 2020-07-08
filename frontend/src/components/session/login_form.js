import React from 'react';
import { withRouter } from 'react-router-dom';
import '../modal/modal.css';

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
    // this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Portfolio page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push('/');
    }

    // Set or clear errors
    this.setState({errors: nextProps.errors})
  }

  // Handle field updates (called in the render method)
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

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.login(user)
      .then((res) => this.handleLoggin(res));
    // .catch (err => )
  }

  handleLoggin(res) {
    console.log(res);
  }

  // Render the session errors if there are any
  renderErrors() {
    return(
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    const { formType, closeModal, otherForm } = this.props;

    const message = formType === 'Sign Up' ? 'Already have an account?' : 'No account?';
    const button_text = formType === 'Sign Up' ? 'Sign up' : 'Sign in';
    const intro = formType === 'Sign Up'
      ? 'Create an account to learn about the stock market and build a portfolio!'
      : ''
    const login_intro = formType === 'Sign Up' ? 'Join NiteTrader!' : 'Welcome back!'

    return (
      <div className="modal-child">
        <div onClick={closeModal} className="close-x">
          &times;
        </div>
        <div className="modal-content">
          <div className="modal-title">{login_intro}</div>
          <div className="modal-intro">{intro}</div>
          <div className="modal-quote">The World is Yours.</div>
          <br />
          <ul>{this.renderErrors()}</ul>
          <br />
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <div className="session-info">
              <label htmlFor="username">Username</label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                // placeholder="Username"
                className="modal-input"
              />
            </div>
            <br />
            <div className="session-info">
              <label htmlFor="password">Password</label>
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                // placeholder="Password"
                className="modal-input"
              />
            </div>
            <br />
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
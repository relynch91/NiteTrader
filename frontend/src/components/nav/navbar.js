import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className="navbar-main">
              <h1>NiteTrader</h1>
              <div>
                <Link className="navbar-link" to={'/stocks'}>All Stocks</Link>
                <Link className="navbar-link" to={'/profile'}>Profile</Link>
                <button className="navbar-button" onClick={this.logoutUser}>Logout</button>
              </div>
            </div>
        );
      } else {
        return (
            <div className="navbar-main">
            <h1>NiteTrader</h1>
              <div>
                <Link className="navbar-link" to={'/signup'}>Signup</Link>
                <Link className="navbar-link" to={'/login'}>Login</Link>
              </div>
            </div>
        );
      }
  }

  render() {
      return (
        <div className="navbar-container">
            { this.getLinks() }
        </div>
      );
  }
}

export default NavBar;

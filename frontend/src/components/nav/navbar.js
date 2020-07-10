import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }
  
  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    const { openModal, loggedIn } = this.props;
    if (loggedIn) {
      // const user = {this.state.session.user.username};
      return (
        <div className="navbar-main">
          <div className="navbar-logo">
            <NavLink className = "home-logo" to = "/"> NiteTrader </NavLink>
            <h1></h1>
          </div>
          <div className='navbar-links'>
            <Link className="navbar-link" to={'/portfolio'}> Portfolio </Link>
            <Link className="navbar-link" to={'/search'}>Search Stocks</Link>
            <button className="navbar-button" onClick={this.logoutUser}>Logout</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-main">
          <div>
            <NavLink className="home-logo" to="/">NiteTrader</NavLink>
          </div>
          <div className='navbar-links'>
            <button className="navbar-link" onClick={() => openModal('login')}>Sign In</button>
            <button className="navbar-link" onClick={() => openModal('signup')}>Get started</button>
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

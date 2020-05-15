import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import { openModal } from '../../actions/modal_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);

    // this.handleClickButton = this.handleClickButton.bind(this);
    // this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
    


  }

  // handleClickButton() {
  //   this.setState({ open: !this.state.open })
  // }

  // showMenu(e) {
  //   e.preventDefault();
  //   this.setState({ open: true }, () => {
  //     document.addEventListener('click', this.closeMenu)
  //   })
  // }

  // closeMenu(e) {
  //   if (!this.open.contains(e.target))
  //     this.setState({
  //       open: false
  //     }, () => {
  //       document.removeEventListener('click', closeMenu)
  //     })
  // }


  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      const { openModal } = this.props;

      if (this.props.loggedIn) {
        return (
            <div className="navbar-main">
            <NavLink className="home-logo" to="/">NiteTrader</NavLink>
              <div>
                <Link className="navbar-link" to={'/portfolio'}>Portfolio</Link>
                <Link className="navbar-link" to={'/search'}>Search Stocks</Link>
                <button className="navbar-button" onClick={this.logoutUser}>Logout</button>
              </div>
            </div>
        );
      } else {
        return (
            <div className="navbar-main">
            <NavLink className="home-logo" to="/">NiteTrader</NavLink>
              <div>
                {/* <Link className="navbar-link" to={'/signup'}>Signup</Link>
                <Link className="navbar-link" to={'/login'}>Login</Link> */}
                <button className="navbar-link" onClick={() => openModal('login')}>Sign in</button>
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

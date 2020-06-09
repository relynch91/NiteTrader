import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

class Footer extends React.Component {

    render() {
        return (
            <div>
                <div className="footer-container">
                    {/* <ul>
                        <li className="li-top">Your Account</li>
                        <li><Link className="nav-button" to="/signup">Sign Up</Link></li>
                        <li><Link className="nav-button" to="/login">Log In</Link></li>
                    </ul> */}
                    {/* <ul>
                        <li className="li-top">Discover</li>
                        <li>Stocks</li>
                        <li>Practice</li>
                        <li>Compete</li>
                    </ul> */}
                    <ul>
                        <li className="li-top">NiteTrader</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="last-foot">
                    <br />
                    {/* <span>© 2020 NiteTrader LLC</span> */}
                </div>
            </div>
        )
    }
}

export default Footer;
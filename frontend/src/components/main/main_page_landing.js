import React from "react";
import { Link } from 'react-router-dom'
import "./main_page.css";
import Unicorn from './unicorn.jpg';
import Profile from './profile.jpg';

class MainPageLanding extends React.Component {
  render() {
    return (
        <div>
            <p className="main-welcome-message">Welcome to NiteTrader</p>
            <div className="main-components">
                <Link to="/profile" className="baby-button1">
                    <span><img src={Profile} alt='portfolio' className="baby-button-img1"/></span>
                    <span className="baby-button-text1">View Your Profile</span> 
                </Link>
                <Link to="/search" className="baby-button2">
                    <span><img src={Unicorn} alt='unicorn' className="baby-button-img2"/></span>
                    <span className="baby-button-text2">Find The Next Unicorn</span>
                </Link>
            </div>
        </div>
    );
    }
}

export default MainPageLanding;
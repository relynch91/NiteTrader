import React from "react";
import { Link } from 'react-router-dom'
import "./main_page.css";

class MainPageLanding extends React.Component {
  render() {
    return (
        <div>
            <p className="main-welcome-message">Welcome to NiteTrader</p>
            <div className="main-components">
                <Link to="/portfolio" className="baby-button">Build Your Portfolio</Link>
                <Link to="/search" className="baby-button">Find The Next Unicorn</Link>
            </div>
        </div>
    );
    }
}

export default MainPageLanding;

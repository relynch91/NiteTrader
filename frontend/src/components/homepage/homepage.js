import React from 'react';
import { NavLink } from 'react-router-dom';
import './homepage.css'
import nyse from './nyse.jpg'

class Homepage extends React.Component {

    render() {
        return (
            <div>
                <div class="hero-image">
                        <img src={nyse} className="banner-img" alt="stock-market-graph" />
                    <div class="hero-text">
                        <h1 >Learn To Invest</h1>
                        <p>Set Your Goal | Pick Your Stocks</p>
                        <NavLink className="banner-button" to="/signup">Start Investing Now</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;
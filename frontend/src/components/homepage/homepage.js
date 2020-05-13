import React from 'react';
import { NavLink } from 'react-router-dom';
import './homepage.css'
import nyse from './nyse.jpg'
import stockChart from './stock-chart.png'

class Homepage extends React.Component {

    render() {
        return (
            <div>
                <div className="hero-image">
                        <img src={nyse} className="banner-img" alt="stock-market-graph" />
                    <div className="hero-text">
                        <h1 >Learn To Invest</h1>
                        <p>Set Your Goal | Pick Your Stocks</p>
                        <NavLink className="banner-button" to="/signup">Start Investing Now</NavLink>
                    </div>
                </div>
                <div className="homepage-info">
                    <div className="homepage-info-title">Gain Real Skills with Zero Risk</div>
                    <ul className="info-section">
                        <li>
                            <p>Invest Any Amount</p>
                            <p>Choose how much you want to invest, and we’ll convert from dollars to parts of a whole share.</p>
                        </li>
                        <li>
                            <p>Build a Balanced Portfolio</p>
                            <p>Customize your portfolio with pieces of different companies and funds to help reduce risk.</p>
                        </li>
                        <li>
                            <p>Trade in Real Time</p>
                            <p>Trades placed during market hours are executed at that time, so you’ll always know the price.</p>
                        </li>
                        <img src={stockChart} className="section-img" alt="stock-market-graph" />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Homepage;
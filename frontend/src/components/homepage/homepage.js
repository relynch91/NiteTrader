import React from 'react';
// import { NavLink } from 'react-router-dom';
import './homepage.css'
import nyse from './nyse.jpg'
import stockChart from './stock-chart.png'
import infoSection2 from './info-section2.jpg'

class Homepage extends React.Component {

    render() {
        return (
            <div>
                <div className="hero-image">
                        <img src={nyse} className="banner-img" alt="stock-market-graph" />
                    <div className="hero-text">
                        <h1 >Learn To Invest</h1>
                        <p>Set Your Goals | Test Your Skills</p>
                        {this.props.signUpButton}
                        {/* <NavLink className="banner-button" to="/signup">Start Investing Now</NavLink> */}
                        {/* <button className="banner-button" onClick={() => openModal("signup")}>Start Investing Now</button> */}
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
                <div className="homepage-info2">
                    <div className="homepage-info-title2">Are You Smarter than Random Chance?</div>
                    <ul className="info-section">
                        <img src={infoSection2} className="section-img" alt="stock-market-graph" />
                        <li>
                            <p>Beat our Portfolio</p>
                            <p>We've picked our favorite stocks, will yours outperform our experts?</p>
                        </li>
                        <li>
                            <p>Beat your Peers</p>
                            <p>Invite a friend to see who has the inside scoop on market trends.</p>
                        </li>
                        <li>
                            <p>Beat Random Stocks</p>
                            <p>Compete against a random stock selector. Can you beat chance?</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Homepage;
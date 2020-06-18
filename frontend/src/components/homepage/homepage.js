import React from 'react';
// import { NavLink } from 'react-router-dom';
import './homepage.css'
import nyse from './nyse.jpg'

class Homepage extends React.Component {

    render() {
        return (
            <div className="landing-page">
                <div className="hero-image">
                        <img src={nyse} className="banner-img" alt="stock-market-graph" />
                    <div className="hero-text">
                        <h1 >Stock Market Simulator</h1>
                        <p>Set Your Goals | Test Your Skills</p>
                        {this.props.signUpButton}
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;
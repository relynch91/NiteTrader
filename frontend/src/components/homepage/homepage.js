import React from 'react';
import './homepage.css'
import nyse from './nyse.jpg'


class Homepage extends React.Component {

    render() {
        return (
            <div className="home-page">
                <div className="hero-image">
                        <img src={nyse} className="banner-img" alt="stock-market-graph" />
                </div>
                    <div className="hero-text">
                        <h1>Learn To Invest</h1>
                        <h1>Test Your Skills</h1>
                        {this.props.signUpButton}
                    </div>
            </div>
        )
    }
}

export default Homepage;
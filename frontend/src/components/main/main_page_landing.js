import React from "react";
import { Link } from 'react-router-dom'
import "./main_page.css";
import Unicorn from './unicorn.jpg';
import Profile from './profile.jpg';
import { fetchTrades }  from '../../actions/transaction_actions'; 
import { buildProfile } from '../../actions/profile_actions';
import { buildPortfolio } from '../../actions/portfolio_actions';

class MainPageLanding extends React.Component {
    // componentDidMount() {
    //     let { userId, getStat, getProfileValues } = this.props;
    //     fetchTrades(userId);
    //     getStat(userId);
    //     getProfileValues(userId);
    //     buildPortfolio(userId)
    //     buildProfile();
    // }

    // componentDidUpdate(prevProps) {
    //     if (this.props.myTransactions !== prevProps.myTransactions) {
    //         this.props.buildPortfolio(this.props.myTransactions);
    //         this.props.buildProfile()
    //     }
    //     if (Object.keys(this.props.myPortfolio) !== Object.keys(prevProps.myPortfolio)) {
    //         this.props.buildProfile();
    //     }
    // }

    render() {
      return (
          <div className='main-welcome'>
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
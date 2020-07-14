import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StockSearchContainer from '../stocks/stock_search/stock_search_container';
import PortfolioContainer from '../stocks/portfolio/portfolio_container';
import ProfileContainer from '../profile/profile_container';


import './main_page.css'
class MainPage extends React.Component {

  render() {
    return (
      <div className="main-landing">
        <Switch>
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/portfolio" component={PortfolioContainer} />
          <Route path="/search" component={StockSearchContainer} />
        </Switch>
        <Route exact path="/" component={PortfolioContainer} />
      </div>
    );
  }
}

export default MainPage;
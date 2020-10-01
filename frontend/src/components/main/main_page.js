import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StockSearchContainer from '../stocks/stock_search/stock_search_container';
import PortfolioContainer from '../stocks/portfolio/portfolio_container';
import ProfileContainer from '../profile/profile_container';
import './main_page.css'
import MainPageLanding from './main_page_landing';


class MainPage extends React.Component {

  render() {
    return (
      <div className="main-landing">
        <Switch>
          <Route exact path="/" component={MainPageLanding} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route exact path="/portfolio" exact component={PortfolioContainer} />
          <Route exact path="/search" exact component={StockSearchContainer} />
        </Switch>
      </div>
    );
  }
}

export default MainPage;
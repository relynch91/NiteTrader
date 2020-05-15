import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StockSearchContainer from '../stocks/stock_search/stock_search_container';
import Portfolio from '../stocks/portfolio/portfolio';
import MainPageLanding from './main_page_landing';

import './main_page.css'
class MainPage extends React.Component {

  render() {
    return (
      <div className="main-landing">
        <Switch>
          <Route path="/search" component={StockSearchContainer} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Route exact path="/" component={MainPageLanding} />
      </div>
    );
  }
}

export default MainPage;
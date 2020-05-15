import React from 'react';
import { Switch, Route } from 'react-router-dom'
import StockGraphContainer from "../stocks/stockgraph/stockgraph_container";
import StockIndexContainer from "../stocks/stock_index/stock_index_container";
import StockSearchContainer from '../stocks/stock_search/stock_search_container'
import './main_page.css'
class MainPage extends React.Component {

  render() {
    return (
      <div className="main-landing">
        <div className="main-components">
          <StockIndexContainer />
          <StockGraphContainer />
          <StockSearchContainer />
        </div>
        {/* <Switch>
          <Route exact path="/search" component={StockSearchContainer} />
        </Switch> */}
      </div>
    );
  }
}

export default MainPage;
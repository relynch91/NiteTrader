import React from 'react';
import StockGraphContainer from "../stocks/stockgraph/stockgraph_container";
import StockIndexContainer from "../stocks/stock_index/stock_index_container";
import './main_page.css'
class MainPage extends React.Component {

  render() {
    return (
      <div className="main-landing">
        <div className="main-components">
          <StockIndexContainer />
          <StockGraphContainer />
        </div>
      </div>
    );
  }
}

export default MainPage;
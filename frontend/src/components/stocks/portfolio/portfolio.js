import React from 'react';
import StockIndexContainer from '../stock_index/stock_index_container';
import StockGraphContainer from '../stockgraph/stockgraph_container';

class Portfolio extends React.Component {
  render() {
    return (
        <div className="main-components">
          <StockIndexContainer />
          <StockGraphContainer />
      </div>
    );
  }
}

export default Portfolio;
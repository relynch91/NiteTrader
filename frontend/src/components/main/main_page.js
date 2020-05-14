import React from 'react';
import StockGraphContainer from "../stocks/stockgraph/stockgraph_container";
import StockIndexContainer from "../stocks/stock_index/stock_index_container";

class MainPage extends React.Component {

  render() {
    return (
      <div>
        {/* <Switch>
            <Link to="/profile" />
            <Link to="/watchlist" />
            <Link to="/portfolio" />
        </Switch> */}
        <h1>Welcome To NiteTrader</h1>
        <p>Here is Your Current Stock Portfolio</p>
        <StockIndexContainer />
        {/* <StockSearch />
          -search bar
          -results view */}
      </div>
    );
  }
}

export default MainPage;
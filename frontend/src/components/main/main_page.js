import React from 'react';
import StockGraphContainer from "../stockgraph/stockgraph_container";

class MainPage extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome To NiteTrader</h1>
        <br />
        <p>Here is the performance for our pick of the week:</p>
        <br />
        <p>Apple</p>
        <StockGraphContainer />
      </div>
    );
  }
}

export default MainPage;
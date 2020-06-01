import React, { Component } from 'react';
import './stockgraph.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend, } from 'recharts';

export default class StockGraph extends React.Component {
  constructor(props){
    super(props)
    this.state = {stock: []}
  }

  componentDidMount(){
    let theHistoricStockDate = this.props.stock["Time Series (Daily)"];
    let theDays = Object.keys(theHistoricStockDate)
    // debugger
    let structuredProps = theDays.map((dateKey) => ({
      date: dateKey,
      open: theHistoricStockDate[dateKey]["1. open"],
      high: theHistoricStockDate[dateKey]["2. high"],
      low: theHistoricStockDate[dateKey]["3. low"],
      close: theHistoricStockDate[dateKey]["4. close"],
    }));
    this.setState({stock: structuredProps});
    console.log(structuredProps);
  }

  render() {
    // debugger
      let symbol = this.props.stock["Meta Data"]["2. Symbol"];
      // console.log(this.state)
    return (
      <div className="stock-graph-main">
        <p>{symbol}</p>
        <LineChart
          width={500}
          height={300}
          data={this.state.stock}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="high"  stroke="#C4D6BO" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="low" stroke="#F64740" />
          <Line type="monotone" dataKey="open" stroke="#291F1E" />
          <Line type="monotone" dataKey="close" stroke="#477998" />
        </LineChart>
      </div>
    );
  }
}

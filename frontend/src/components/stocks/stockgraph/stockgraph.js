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



// {
//     _id: "5ebcb8782f80140cf07db340",
//     symbol: "AAPL",
//     open: 135,
//     low: 114.85,
//     price: 115.72,
//     volume: 3153277,
//     change: -4.53,
//     changePercent: -3.7668,
//     __v: 0,
//   },

  //   { name: "Mon", high: 4000, low: 2400 },
  //   { name: "Tues", high: 3000, low: 1398, amt: 2210, time: 3 },
  //   { name: "Wed", high: 9800, low: 2000, amt: 2290, time: 9 },
  //   { name: "Thur", high: 3908, low: 2750, amt: 2000, time: 10 },
  //   { name: "Fri", high: 4800, low: 2500, amt: 2181, time: 12 },
  //   { name: "Mon", high: 3800, low: 1220, amt: 2500, time: 16 },
  //   { name: "Tues", high: 4300, low: 3290, amt: 2100, time: 18 },
  // ],


// <AreaChart width={730} height={250} data={data}
//     margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
//     <defs>
//         <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//             <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
//         </linearGradient>
//         <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
//             <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
//         </linearGradient>
//     </defs>
//     <XAxis dataKey="name" />
//     <YAxis />
//     <CartesianGrid strokeDasharray="3 3" />
//     <Tooltip />
//     <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
//     <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
// </AreaChart>


// const data = [
//     {
//         "name": "Page A",
//         "uv": 4000,
//         "pv": 2400,
//         "amt": 2400
//     },
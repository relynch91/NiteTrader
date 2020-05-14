import React, { Component } from 'react';
// import { changeNumberOfData } from './utils';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend, } from 'recharts';

export default class StockGraph extends React.Component {

  render() {

    return (
      <LineChart
        width={500}
        height={300}
        data={this.props.stock}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
            type="monotone"
            dataKey="high"
            stroke="#477998"
            activeDot={{ r: 8 }}
        />
        <Line 
            type="monotone" 
            dataKey="low" 
            stroke="#F64740" />
      </LineChart>
    );
  }
}


// {
//     _id: "5ebcd68236b38531cacdc688",
//     symbol: "ThisWorks",
//     open: 15,
//     low: 114.85,
//     price: 55,
//     volume: 3153277,
//     change: -4.53,
//     changePercent: -3.7668,
//     __v: 0,
//   },



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
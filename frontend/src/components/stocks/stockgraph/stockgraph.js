import React from 'react';
import './stockgraph.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Brush, Legend, } from 'recharts';

export default class StockGraph extends React.Component {
  constructor(props){
    super(props)
    this.state = {stock: {}}
  }

  formatGraphData(){
    let theHistoricStockDate = (this.props.stockInfo.timeSeriesMonthly) ?
      this.props.stockInfo.timeSeriesMonthly["Monthly Time Series"] :
      this.props.stock["Time Series (Daily)"];
    let theDays = Object.keys(theHistoricStockDate)
    // debugger
    let structuredProps = theDays.map((dateKey) => ({
      date: dateKey,
      open: theHistoricStockDate[dateKey]["1. open"],
      high: theHistoricStockDate[dateKey]["2. high"],
      low: theHistoricStockDate[dateKey]["3. low"],
      close: theHistoricStockDate[dateKey]["4. close"],
    }));
    this.setState({ stock: structuredProps });
  }

  componentDidMount(){
    this.formatGraphData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.stockInfo !== prevProps.stockInfo){
      this.formatGraphData()
    }
  }

  render() {
    let theData = this.props.stock
    if (!!this.props.stockInfo.timeSeriesMonthly) { theData = this.props.stockInfo.timeSeriesMonthly} 
      let symbol = theData["Meta Data"]["2. Symbol"].toUpperCase();
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

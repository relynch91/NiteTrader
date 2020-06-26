import React from 'react';
import './stockgraph.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, } from 'recharts';
import * as StockUtil from '../../../util/stocks_api_util';

export default class StockGraph extends React.Component {
  constructor(props){
    super(props)
    this.state = {stock: []}
    this.handleClick = this.handleClick.bind(this);
  }

  formatGraphData(stockData){
    let stockDataFromState;
    if (stockData) {
      stockDataFromState = stockData
    } else{
      stockDataFromState = StockUtil.threeMonths(this.props.stockInfo.intraDay);
    }
    let theDays = Object.keys(stockDataFromState)
    let structuredProps = theDays.map((dateKey) => ({
      date: dateKey,
      open: stockDataFromState[dateKey]["1. open"],
      high: stockDataFromState[dateKey]["2. high"],
      low: stockDataFromState[dateKey]["3. low"],
      close: stockDataFromState[dateKey]["4. close"],
    }));
    this.setState( { stock: structuredProps.reverse() });
  }

  componentDidMount(){
    this.formatGraphData()
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.stockInfo !== prevProps.stockInfo){
  //     this.formatGraphData()
  //   }
  // }

  handleClick(stockData){
    this.formatGraphData(stockData);
    // return this.render()
  }

  render() {
    if (!this.props.stockInfo.intraDay){
      return null;
    }
    let { intraDay, timeSeriesMonthly} = this.props.stockInfo;
      let theButtons = (!!timeSeriesMonthly) ?
        <div className="stockgraph-time-button-container">
          <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.oneWeek(intraDay))}>1 Week</button>
          <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.oneMonth(intraDay))}>1 Month</button>
          <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.threeMonths(intraDay))}>3 Months</button>
          <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.oneYear(timeSeriesMonthly))}>1 Year</button>
          <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.twoYears(timeSeriesMonthly))}>2 Years</button>
        </div> : null;
    return (
      <div className="stock-graph-main">
        {theButtons}
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
          <YAxis dataKey="close"/>
          <YAxis type="number" domain={[0, 'dataMax']} />
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

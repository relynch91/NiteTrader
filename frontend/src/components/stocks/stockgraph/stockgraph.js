import React from 'react';
import './stockgraph.css'
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
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
      stockDataFromState = StockUtil.oneWeek(this.props.stockInfo.intraDay);
    }
    let theDays = Object.keys(stockDataFromState)
    let structuredProps = theDays.map((dateKey) => {

      return ({
        date: dateKey.split(" ")[0],
        close: (parseFloat(parseFloat(stockDataFromState[dateKey]["4. close"]).toFixed(2))),
      })
    });
    this.setState( { stock: structuredProps.reverse() });
  }

  componentDidMount(){
    this.formatGraphData()
  }

  handleClick(stockData){
    this.formatGraphData(stockData);
  }

  render() {
    if (!this.props.stockInfo.intraDay){
      return null;
    }
    let { intraDay, weeklySeries} = this.props.stockInfo;
      let theButtons = (!!weeklySeries) ?
        <div className="stockgraph-time-button-container">
          <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.oneWeek(intraDay))}>1 Week</button>
          <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.oneMonth(intraDay))}>1 Month</button>
          <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.sixMonths(weeklySeries))}>6 Months</button>
          <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.oneYear(weeklySeries))}>1 Year</button>
          <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.twoYears(weeklySeries))}>2 Years</button>
          <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.fiveYears(weeklySeries))}>5 Years</button>
            <button className="stockgraph-time-button" 
            onClick={() => this.handleClick(StockUtil.tenYears(weeklySeries))}>10 Years</button>
        </div> : null;
    return (
      <div className="stock-graph-main">
        {theButtons}
        <AreaChart
          width={550}
          height={400}
          data={this.state.stock}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="date" dy={10}/>
          <YAxis type="number" domain={['auto', 'auto']}  />
          <Tooltip />
          <Area type="monotone" dataKey="close" stroke="#477998"  dot={false}/>
        </AreaChart>
      </div>
    );
  }
}
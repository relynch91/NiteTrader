import React from 'react';
import * as d3 from 'd3';
import { formatPortfolioData, createMinMax } from '../../../util/portfolio_api_util'


class PortfolioD3BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }

    componentDidMount() {
        this.createBarChart();
        let data = formatPortfolioData(this.props.ownedStocks);
        let minMax = createMinMax(data);
        console.log(minMax);
        
    }

    componentDidUpdate() {
        this.createBarChart()
    }

    createBarChart() {

    }
    
    render() {

        return (
            <div className="d3-portfolio">
                <h1>D3 Will be here soon. Prepare. </h1>
            </div>
        )
    }
}

export default PortfolioD3BarChart;

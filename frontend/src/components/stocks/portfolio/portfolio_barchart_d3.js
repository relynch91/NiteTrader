import React from 'react';
import * as d3 from 'd3';
import { scaleLinear } from 'd3-scale';
import { select } from 'd3-selection'
import { formatPortfolioData, createMinMax } from '../../../util/portfolio_api_util'


class PortfolioD3BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.createBarChart = this.createBarChart.bind(this)
    }

    componentDidMount() {
        this.createBarChart();
    }

    componentDidUpdate() {
        this.createBarChart()
    }

    createBarChart() {
        let data = formatPortfolioData(this.props.ownedStocks);
        let minMax = createMinMax(data);
        console.log(minMax);

        const node = this.node
        const yScale = scaleLinear()
            .domain([minMax[0], minMax[1]])
            .range([minMax[0], minMax[1]])

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()

        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('x', (d, i) => i * 25)
            .attr('y', d => minMax[1] - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)
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

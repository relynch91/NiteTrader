import React from 'react';
import * as d3 from 'd3';
import { scaleLinear, scaleBand } from 'd3-scale';
import { select } from 'd3-selection';
import Axes from './portfolio_axes';
import Bars from './bars_d3';
import { formatPortfolioData } from '../../../../util/portfolio_api_util';


class PortfolioD3BarChart extends React.Component {
    constructor() {
        super()
        this.xScale = scaleBand()
        this.yScale = scaleLinear()
    }
    componentDidMount() {
        // console.log(formatPortfolioData(this.props.ownedStocks));
    }
    
    render() {
        let data = formatPortfolioData(this.props.ownedStocks);
        let dataValues = Object.values(data);
        let margins = { top: 50, right: 20, bottom: 100, left: 60 };
        let svgDimensions = { width: 600, height: 500 }
        // let yMin = (Math.floor(Math.min(...Object.values(data))) - 1);
        let yMax = (Math.ceil(Math.max(...Object.values(data))) + 1);
        let y0 = Math.max(Math.abs(d3.min(dataValues)), Math.abs(d3.max(dataValues)));
        
        let xScale = this.xScale
            .padding(0.5)
            .domain(Object.keys(data).map(d => d))
            .range([margins.left, svgDimensions.width - margins.right])

        let yScale = this.yScale
            // scaleLinear domain required at least two values, min and max       
            .domain([0, y0 + 5])
            // .domain([Math.min(0, d3.min(dataValues, d => d)), d3.max(dataValues, d => d)])
            .range([svgDimensions.height - margins.bottom, margins.top])

        return (
            <div className='portfolio-d3'>
                <h1> Portfolio Day Change (%)</h1>
                <svg width={svgDimensions.width} height={svgDimensions.height}>
                <Axes
                    scales={{ xScale, yScale }}
                    margins={margins}
                    svgDimensions={svgDimensions}
                />
                <Bars
                    scales={{ xScale, yScale }}
                    margins={margins}
                    data={data}
                    maxValue={y0}
                    svgDimensions={svgDimensions}
                />
                </svg>
            </div>
        )
    }
}

export default PortfolioD3BarChart;
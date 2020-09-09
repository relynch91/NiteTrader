import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'

export default class Bars extends Component {
    constructor(props) {
        super(props)
        this.colorScale = (value) => {
            console.log(value);
            if (value < 0) {
                return '#bf130d'
            } else {
                return '#0dbf13';
            }
        }
    }

    render() {
        const { scales, margins, data, svgDimensions } = this.props
        const { xScale, yScale } = scales
        const { height } = svgDimensions
        const bars = (
            Object.keys(data).map(datum =>
                <rect
                    key={datum < 0 ? "bar negative" : "bar positive"}
                    x={xScale(datum)}
                    y={yScale(data[datum])}
                    height={height - margins.bottom - scales.yScale(data[datum])}
                    width={xScale.bandwidth()}
                    fill={this.colorScale(data[datum])}
                />,
            )
        )
        return (
            <g>{bars}</g>
        )
    }
}
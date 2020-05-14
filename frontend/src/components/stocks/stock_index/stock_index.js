import React from 'react';
import StockGraphContainer from '../stockgraph/stockgraph_container'

export default class StockIndex extends React.Component {

    // componentDidMount(){
    //     this.props.fetchAllStocks;
    // }
    
    render(){
            let { allStocks } = this.props;
            return (
                <div>
                    {/* {allStocks.map((stock) => {
                        return <StockGraphContainer stock={stock} />
                    })} */}
                    <p>A table of all your stocks will go here</p>
                </div>
            )
    }
}

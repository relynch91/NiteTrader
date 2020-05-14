// import React from 'react';
// import StockDetails from './stock_details'

// export default class StockSearch extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             stockDetails = {}
//         }
//     }


//  getStockDetails(text){
//         // dispatch api call (comes from mdtp from axios)
//             // .then (returnedStockInfo => this.setState(returnedStockInfoDetails: stock))
//     }

//     render(){
//         let stockDetails = this.state;
//         let theDetails = (!!stockDetails ? <StockDetails stockDetails={stockDetails} /> : "")
        

//             return(
//                 <div>
//                     <form >
//                         <label>Enter a Stock Ticker
//                             <input type="text" value=""/>
//                         </label>
//                         <button onClick={this.props.getStockDetails()}>Lookup Stock</button>
//                     </form>
//                     {theDetails}
//                 </div>
//             )
//     }
// }
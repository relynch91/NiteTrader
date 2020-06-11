const axios = require('axios').default;

function unpackTickers(argument) {
    let tickers = [];
    for(let i = 0; i < argument.length; i++){
        let ticker = argument[i]["ticker"];
        if (tickers.includes(ticker)) {
            continue;
        } else {
            tickers.push(ticker);
        }
    }
    return tickers
}


function receiveTickers() {
    const tickers = (axios.get('http://localhost:5000/api/transactions/activeTrades'))
}

function tickerCalls() {
    
}

console.log(receiveTickers());

// function getStocksToGetInfo() {
//     // query mongo db
//     return [];
// }

// function getDataFromAPI(yourArrayFromFunctionAbove) {\
//     // call stock api with that Data
//     return data;
// }

// function updateMongoDBWithData(dataFromFunctionAbove) {
//     //update mongo DB with new values
//     return true;
// }

// updateMongoDBWithData(getDataFromAPI(getStocksToGetInfo()));
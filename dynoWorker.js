const axios = require('axios').default;

function unpackTickers(argument) {
    // console.log(argument)
    let tickers = [];
    for(let i = 0; i < argument.length; i ++) {
        let name = argument[i]['ticker']
        if (!tickers.includes(name)) {            
            tickers.push(name)
        }
    }
    return tickers
}

async function receiveTickers() {
    let apiData = await axios.get('http://localhost:5000/api/transactions/activeTrades');
    return apiData
}

async function tickerCalls() {
    let ticker = await receiveTickers();
    let ticks = unpackTickers(ticker.data)
    // console.log(ticks);
    return ticks;
}

async function printTicks () {
    console.log(tickerCalls());
}
printTicks();

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
const axios = require('axios').default;
const key = require('./config/keys');

function unpackTickers(argument) {
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
    return ticks;
}
//--------------------- above retrieves all tickers ---------------------
async function getStockData(ticker) {
    let data = await axios.get(`
    https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${key}`
    )
    return data.data
}

async function updateDatabase () {
    let ticker = await (tickerCalls());
    for(let i = 0; i < 1; i++){
        let stockData = await getStockData(ticker[i]);
        console.log(ticker[i])
        console.log(stockData);
    }
}
updateDatabase();

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
const axios = require('axios').default;
const key = require('./config/keys');
const globalEndPointObject = require('./config/endPointRestructure')
const sleep = require('util').promisify(setTimeout);

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
    console.log(ticks);
    return ticks;
}

// --------------------- above retrieves all tickers ---------------------

async function fireAPI(ticker) {
    let value = await axios.get(`
    https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${key}`);
    return value;
};

async function getStockData(ticker) {
    let data = setInterval(fireAPI(ticker), 200000)
    return data.data['Global Quote'];
}

async function updateDatabase(tickers) {

    for(let i = 0; i < tickers.length; i++){
        let stockData = await getStockData(tickers[i]);
        let formattedData = globalEndPointObject(stockData);
        console.log(stockData);
        let dbUpdate = await axios.patch(
            'http://localhost:5000/api/stock_api/quoteendpointstock/update', formattedData);
    }
    return true;
}

async function candle() {
    let ticker = await tickerCalls();
    updateDatabase(ticker);
    return true;
}

console.log(candle());
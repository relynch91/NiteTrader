const axios = require('axios').default;
const key = require('./config/keys.js');
const globalEndPointObject = require('./config/endPointRestructure')

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
    let apiData = await axios.get('https://nitetrader.herokuapp.com/api/transactions/activeTrades');
    return apiData
}

async function tickerCalls() {
    let ticker = await receiveTickers();
    let ticks = unpackTickers(ticker.data)
    return ticks;
}

// --------------------- above retrieves all tickers ---------------------

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fireAPI(ticker) {
    await timeout(15000)
    let value = await axios.get(`
    https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${key}`);
    return value;
};

async function updateDatabase(tickers) {
    for(let i = 0; i < tickers.length; i++){
        let stockData = await fireAPI(tickers[i]);
        let formattedData = globalEndPointObject(stockData.data['Global Quote']);
        console.log(formattedData);
        await axios.patch(
            'https://nitetrader.herokuapp.com/api/stock_api/quoteendpointstock/update', formattedData);
    }
    return true;
}

async function candle() {
    let ticker = await tickerCalls();
    updateDatabase(ticker);
    return true;
}

console.log(candle());

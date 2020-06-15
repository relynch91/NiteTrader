const axios = require('axios').default;
const key = require('./config/keys');
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
    let apiData = await axios.get('http://localhost:5000/api/transactions/activeTrades');
    return apiData
}

async function tickerCalls() {
    let ticker = await receiveTickers();
    let ticks = unpackTickers(ticker.data)
    return ticks;
}
// --------------------- above retrieves all tickers ---------------------
async function timeOut() {
    let x = await setTimeout( () => {}, 20000);
    return x
}

async function getStockData(ticker) {
    let data = await axios.get(`
    https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${key}`);
    return data.data['Global Quote'];
}

async function updateDatabase(tickers) {
    let please = []
    for(let i = 0; i < tickers.length; i++){
        let stockData = await getStockData(tickers[i]);
        let formattedData = globalEndPointObject(stockData);
        console.log(formattedData);
        let dbUpdate = await axios.patch(
            'http://localhost:5000/api/stock_api/quoteendpointstock/update', formattedData);
        let x = await timeOut();
        }
    return true;
}

async function candle() {
    let ticker = await tickerCalls();
    updateDatabase(ticker);
    return true;
}

candle();
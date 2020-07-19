const axios = require('axios').default;
const key = require('./config/keys');
const globalEndPointObject = require('./config/endPointRestructure.js');
// const { update } = require('./models/User');

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
    await timeout(18000)
    let value = await axios.get(`
    https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${key}`);
    return value;
};

async function updateDatabase(tickers) {
    let tickerPrice = {};
    for(let i = 0; i < tickers.length; i++){
        let stockData = await fireAPI(tickers[i]);
        let formattedData = globalEndPointObject(stockData.data['Global Quote']);
        tickerPrice[formattedData['symbol']] = formattedData.price;
        await axios.patch(
            'https://nitetrader.herokuapp.com/api/stock_api/quoteendpointstock/update', formattedData);
    }
    return tickerPrice;
}

async function candle() {
    let ticker = await tickerCalls();
    let updated = await updateDatabase(ticker);
    updatePortfolio(updated);
    return true;
}

candle();

// let updatedTestData = {
//     'TSLA': '1500.8400',
//     'AAPL': '385.3100',
//     'NKE': '96.2800',
//     'IBM': '125.1100',
//     'BKE': '16.0700',
//     'NFLX': '492.9900',
//     'DIS': '118.6400',
//     'RIG': '1.9600',
//     'KO': '46.8200',
//     'FXAIX': '111.5500'
// }

// --------------------- above updates DB w/ all tickers ---------------------
// 1) get all usernames
// 2) get all stock tickers for each username

// async function updatePortfolio(updatedTestData) { // test data ticker(key) price(value);
//     let theKeys = Object.keys(updatedTestData); //theKeys are all the tickers
//     let users = await axios.get('https://nitetrader.herokuapp.com/api/users/allusernames')
//     let userIds = [];
//     users.data.forEach(obj => {
//         userIds.push(obj._id);
//     })

//     for (let i = 0; i < userIds.length; i ++) {
//         let response = await axios.get(
//             `https://nitetrader.herokuapp.com/api/transactions/${userIds[i]}`)
//         let tickers = await sortResponse(response.data);
//         let stock
//         console.log(tickers)
//     }
// }

// async function sortResponse(transactions) { //transactions is an array of objects that are transactions
//     let tickers = {};
    
//     for (let i = 0; i < transactions.length; i ++) {
//         if (!tickers.includes(transactions[i]['ticker'])) {
//             tickers.push(transactions[i]['ticker'])
//         }
//     }
//     return tickers;
// }

// updatePortfolio(updatedTestData);
const axios = require('axios').default;
const alphaVantage = require('./config/keys');
const globalEndPointObject = require('./config/endPointRestructure.js');

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
    let ticks = unpackTickers(ticker.data);
    return ticks;
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fireAPI(ticker) {
    await timeout(3000)
    let value = await axios.get(`
    https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${alphaVantage.alphaVantage}`);
    return value;
};

async function updateDatabase(tickers) {
    let tickerPrice = {};
    for(let i = 0; i < tickers.length; i++){
        let stockData = await fireAPI(tickers[i]);
        console.log(stockData.data);
        let formattedData = globalEndPointObject(stockData.data['Global Quote']);
        tickerPrice[formattedData['symbol']] = formattedData.price;
        await axios.patch(
            'https://nitetrader.herokuapp.com/api/stock_api/quoteendpointstock/update', formattedData);
    }
    return tickerPrice;
}

async function candle() {
    console.log('Light the candle.')
    let ticker = await tickerCalls();
    let updated = await updateDatabase(ticker);
    updatePortfolio(updated);
    console.log(updated);
    return true;
}

async function updatePortfolio(tickers1234) {
    let theKeys = (tickers1234);
    let users = await axios.get('https://nitetrader.herokuapp.com/api/users/allusernames');
    let userIds = [];
    users.data.forEach(obj => {
        userIds.push(obj._id);
    })
    for (let i = 0; i < userIds.length; i ++) {
        profilePostSort(userIds[i], theKeys);
    }
    console.log("candle has been lit");
    return true
}
    
async function profilePostSort (userId, theKeys) {
    let date = await new Date();
    let dateProper = date.toDateString();
    let search = {
        date: dateProper,
        userId: userId
    }

    let response = await axios.get(
        `https://nitetrader.herokuapp.com/api/transactions/${userId}`
        )
    let tickerSharesObj = sortResponse(response.data);
    let userValue = calculateValue(tickerSharesObj, theKeys);
    let userCash = await axios.get(
        `https://nitetrader.herokuapp.com/api/stat/${userId}`)
        .catch(error => console.log(error))
    if (userCash.data.length === 0) {
        userCash.data[0] = { 'value': 50000 };
    }
    let profileInfo = {
        userId: userId,
        value: userValue,
        cash: parseFloat(userCash.data[0]['value']),
        date: dateProper
    }
    let answer = await axios.patch(
        'https://nitetrader.herokuapp.com/api/profile/update', profileInfo)
        .catch(err => console.log(err));
    console.log(answer);
    return true;
}
                
function sortResponse(transactions) {
    let tickers = {};
    for (let j = 0; j < transactions.length; j++ ) {
        let flag = transactions[j]['buy'];
        if (!tickers[transactions[j]['ticker']]) {
            let ticker = transactions[j]['ticker'];
            tickers[ticker] = 0;
        } 
        if (flag) {
            tickers[transactions[j]['ticker']] += transactions[j]['shares'];
        } else {
            tickers[transactions[j]['ticker']] -= transactions[j]['shares'];
        }
    }
    return tickers;
}

function calculateValue (tickerSharesObj, theKeys) {
    let totalValue = 0;
    let ownedStocks = Object.keys(tickerSharesObj);
    if (ownedStocks.length === 0) {
        return 0;
    }
    for (let i = 0; i < ownedStocks.length; i ++) {
        let ticker = ownedStocks[i];
        let quantity = parseFloat(tickerSharesObj[ticker]);
        let value = parseFloat(theKeys[ticker]);
        totalValue += (quantity * value);
    }
    return totalValue;
}

candle()
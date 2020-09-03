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
    return true;
}

candle();

// --------------------- above updates DB w/ all tickers ---------------------

async function updatePortfolio(updatedTestData) { // test data ticker(key) price(value);
    let theKeys = (updatedTestData); //theKeys are all the tickers
    let users = await axios.get('https://nitetrader.herokuapp.com/api/users/allusernames')

    let userIds = [];
    users.data.forEach(obj => {
        userIds.push(obj._id);
    })

    for (let i = 0; i < userIds.length; i ++) {
        let response = await axios.get(
            `https://nitetrader.herokuapp.com/api/transactions/${userIds[i]}`)
        let tickerSharesObj = sortResponse(response.data);
        let userValue = calculateValue(tickerSharesObj, theKeys);
        let userID = userIds[i]
        let userCash = await axios.get( 
            `https://nitetrader.herokuapp.com/api/stat/${userID}`)
        .catch(error => console.log(error))
        if (userCash.data.length === 0) {
            userCash.data[0] = {'value': 50000};
        }
        let profileInfo = {
            userID: userIds[i],
            value: userValue,
            cash: parseFloat(userCash.data[0]['value'])
        }
        console.log(profileInfo);
        let res = await axios.post(
            'https://nitetrader.herokuapp.com/api/profile/new', profileInfo)
            .catch(err => console.log(err));
    }
    console.log('The candle has been lit');
    return true
}

function sortResponse(transactions) {
    let tickers = {};
    for (let i = 0; i < transactions.length; i ++) {
        if (transactions[i]['buy']) {
            let ticker = transactions[i]['ticker'];
            tickers[ticker] = 0;
            tickers[ticker] += transactions[i]['shares'];
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

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
let tickers123 = {
    GOOG: '1591.0400',
    AAPL: '120.9600',
    F: '6.9000',
    IBM: '122.3000',
    RIG: '1.3400',
    FB: '282.7300',
    TSLA: '418.3200',
    NKE: '112.4000',
    CAT: '148.1800',
    DPZ: '381.8100',
    GT: '9.5900',
    DDD: '5.4100'
}

async function updatePortfolio(tickers123) { // test data ticker(key) price(value);
    let theKeys = (tickers123); //theKeys are all the tickers
    let users = await axios.get('https://nitetrader.herokuapp.com/api/users/allusernames')
    
    let userIds = [];
    users.data.forEach(obj => {
        userIds.push(obj._id);
    })
    let date = await new Date(); 
    let dateOther = date.toString();
    let dateProper = date.toDateString();
    console.log(date);
    console.log(dateProper);
    console.log(dateOther);

    
    for (let i = 0; i < userIds.length; i ++) {
        let userId = userIds[i];
        let profileInfo = { dateProper, userId };
        console.log(profileInfo);
        let mostRecentProfile = await axios.post(
            `https://nitetrader.herokuapp.com/api/profile/posts`, profileInfo
        ).catch(err => console.log(err));
        console.log(mostRecentProfile);
        // if (mostRecentProfile.length === 0) {
        //     createProfilePost(userId)
        // }
        // }
        // console.log('The candle has been lit');
        return true
        // createProfilePost(userId, theKeys);
    }
}
    
async function createProfilePost (userId, theKeys) {
    let date = await new Date();
    let dateOther = date.toString();
    let dateProper = date.toDateString();
    console.log(date);
    console.log(dateProper);
    console.log(dateOther);
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
        console.log(profileInfo);
        let res = await axios.post(
            'https://nitetrader.herokuapp.com/api/profile/new', profileInfo)
            .catch(err => console.log(err));
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

console.log(updatePortfolio(tickers123));
// candle()
const oneWeekInMilliseconds = 604800000;
const oneMonthInMilliseconds = 2592000000;
const oneYearInMilliseconds = 31556952000;

function oneWeek(stockData) {
    let todaysDate = Date.now();
    // intraDay
    let result = {};
    let pastWeek = Object.keys(stockData["Time Series (15min)"])
        .forEach(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneWeekInMilliseconds) {
                result[rawDate] = stockData["Time Series (15min)"][rawDate];
            }
        });
    return result;
}

function oneMonth(stockData) {
    let todaysDate = Date.now();
    // intraDay
    let result = {};
    let pastMonth = Object.keys(stockData["Monthly Time Series"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneMonthInMilliseconds) {
                result[rawDate] = stockData["Monthly Time Series"][rawDate];
            }
        });
    return result;
}

function threeMonths(stockData) {
    // let todaysDate = Date.now();
    // let threeMonths = 3 * oneMonthInMilliseconds;
    // let threeMonths = Object.keys(stockData["Monthly Time Series"])
    //                 .filter(rawDate => {
    //                   if (Date.parse(rawDate) >= todaysDate - threeMonths ){
    //                     return rawDate
    //                   }
    //                 });
    // Can probably just return "intraDay" api all
    // return threeMonths
}

function oneYear(stockData) {
    let todaysDate = Date.now();
    let result = {};
    let pastYear = Object.keys(stockData["Monthly Time Series"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneYearInMilliseconds) {
                result[rawDate] = stockData["Monthly Time Series"][rawDate]
            }
        });
    return result;
}

function twoYears(stockData) {
    let todaysDate = Date.now();
    let twoYearsAgo = 2 * oneYearInMilliseconds;
    let result = {};
    let pastTwoYears = Object.keys(stockData["Monthly Time Series"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - twoYearsAgo) {
                result[rawDate] = stockData["Monthly Time Series"][rawDate]
            }
        });
    return result;
}
const oneWeekInMilliseconds = 604800000;
const oneMonthInMilliseconds = 2592000000;
const oneYearInMilliseconds = 31556952000;

export const oneWeek = (stockData) => {
    let todaysDate = Date.now();
    let result = {};
    let pastWeek = Object.keys(stockData["Time Series (15min)"])
        .forEach(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneWeekInMilliseconds) {
                result[rawDate] = stockData["Time Series (15min)"][rawDate];
            }
        });
    return result;
}

export const oneMonth = (stockData) => {
    let todaysDate = Date.now();
    let result = {};
    let pastMonth = Object.keys(stockData["Time Series (15min)"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneMonthInMilliseconds) {
                result[rawDate] = stockData["Time Series (15min)"][rawDate];
            }
        });
    return result;
}

export const threeMonths = (stockData) => {
    return stockData["Monthly Time Series"]
}

export const oneYear = (stockData) => {
    let todaysDate = Date.now();
    let result = {};
    let pastYear = Object.keys(stockData["Monthly Time Series"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneYearInMilliseconds) {
                result[rawDate] = stockData["Monthly Time Series"][rawDate];
            }
        });
    return result;
}

export const twoYears = (stockData) => {
    let todaysDate = Date.now();
    let twoYearsAgo = 2 * oneYearInMilliseconds;
    let result = {};
    Object.keys(stockData["Monthly Time Series"]).filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - twoYearsAgo) {
                result[rawDate] = stockData["Monthly Time Series"][rawDate];
            }
        });
    return result;
}
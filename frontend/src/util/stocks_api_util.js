const oneWeekInMilliseconds = 604800000;
const oneMonthInMilliseconds = 2592000000;
const oneYearInMilliseconds = 31556952000;

export const mostRecent = (stockData) => {
    let result = {};
    Object.keys(stockData["Time Series (15min)"])
        .forEach(rawDate => {
            if (!result[rawDate]) {
                result["data"] = stockData["Time Series (15min)"][rawDate];
            } else if ( Date.parse(Object.keys((result)[0])) < Date.parse(rawDate)){
                result["data"] = stockData["Time Series (15min)"][rawDate];
            }
        });
    result['ticker'] = stockData["Meta Data"]["2. Symbol"].toUpperCase();
    // result["max"] = findMax(stockData["Time Series (15min)"])
    return result;
}

export const oneWeek = (stockData) => {
    let todaysDate = Date.now();
    let result = {};
    Object.keys(stockData["Time Series (15min)"])
        .forEach(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneWeekInMilliseconds) {
                result[rawDate] = stockData["Time Series (15min)"][rawDate];
            }
        }
    );
    // result["max"] = findMax(stockData["Time Series (15min)"])
    return result;
}

export const oneMonth = (stockData) => {
    let todaysDate = Date.now();
    let result = {};
    Object.keys(stockData["Time Series (15min)"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneMonthInMilliseconds) {
                result[rawDate] = stockData["Time Series (15min)"][rawDate];
            }
            return true
        }
    );
    // result["max"] = findMax(stockData["Time Series (15min)"])
    return result;
}

export const threeMonths = (stockData) => {
    return stockData["Time Series (15min)"]
}

export const oneYear = (stockData) => {
    let todaysDate = Date.now();
    let result = {};
    Object.keys(stockData["Monthly Time Series"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneYearInMilliseconds) {
                result[rawDate] = stockData["Monthly Time Series"][rawDate];
            }
            return true;
        }
    );
    // result["max"] = findMax(stockData["Monthly Time Series"])
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
            return true;
        }
        );
    // result["max"] = findMax(stockData["Monthly Time Series"])
    return result;
}

// export const findMax = (stockSeriesData) => {
//     let max = 0;
//     Object.values(stockSeriesData).forEach(stockObj => {
//         if (stockObj["4. close"] > max) {
//             max = stockObj["4. close"]
//         }
//     })
//     return max;
// }
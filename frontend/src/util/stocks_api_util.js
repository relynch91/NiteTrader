const oneWeekInMilliseconds = 604800000;
const oneMonthInMilliseconds = 2592000000;
const oneYearInMilliseconds = 31556952000;

export const mostRecent = (stockData) => { //stockData is stock api response. {Meta Data: {...}, Time Sereies: {...}}
    let result = {};
    Object.keys(stockData["Time Series (15min)"]).reverse()
        .forEach(rawDate => {
            if (!result[rawDate]) {
                result["data"] = stockData["Time Series (15min)"][rawDate];
            } else if ( Date.parse(Object.keys((result)[0])) < Date.parse(rawDate)){
                result["data"] = stockData["Time Series (15min)"][rawDate];
            }
        });
    result['ticker'] = stockData["Meta Data"]["2. Symbol"].toUpperCase();
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
    return result;
}

export const sixMonths = (stockData) => {
    let todaysDate = Date.now();
    let sixMonths = 6 * oneMonthInMilliseconds
    let result = {};
    Object.keys(stockData["Weekly Time Series"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - sixMonths) {
                result[rawDate] = stockData["Weekly Time Series"][rawDate];
            }
            return true;
        }
        );
    return result;
}

export const oneYear = (stockData) => {
    let todaysDate = Date.now();
    let result = {};
    Object.keys(stockData["Weekly Time Series"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneYearInMilliseconds) {
                result[rawDate] = stockData["Weekly Time Series"][rawDate];
            }
            return true;
        }
    );
    return result;
}

export const twoYears = (stockData) => {
    let todaysDate = Date.now();
    let twoYearsAgo = 2 * oneYearInMilliseconds;
    let result = {};
    Object.keys(stockData["Weekly Time Series"]).filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - twoYearsAgo) {
                result[rawDate] = stockData["Weekly Time Series"][rawDate];
            }
            return true;
        }
    );
    return result;
}

export const fiveYears = (stockData) => {
    let todaysDate = Date.now();
    let fiveYearsAgo = 5 * oneYearInMilliseconds;
    let result = {};
    Object.keys(stockData["Weekly Time Series"]).filter(rawDate => {
        if (Date.parse(rawDate) >= todaysDate - fiveYearsAgo) {
            result[rawDate] = stockData["Weekly Time Series"][rawDate];
        }
        return true;
    });
    return result;
}

export const tenYears = (stockData) => {
    let todaysDate = Date.now();
    let tenYears = 10 * oneYearInMilliseconds;
    let result = {};
    Object.keys(stockData["Weekly Time Series"]).filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - tenYears) {
                result[rawDate] = stockData["Weekly Time Series"][rawDate];
            }
            return true;
        }
    );
    return result;
}

export const figureAPICall = (apiArray = []) => {
    if (apiArray.length === 0  || apiArray[0]['9. matchScore'] !== '1.0000') {
        return false
    }
    return true
}
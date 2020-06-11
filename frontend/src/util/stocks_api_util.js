const oneWeekInMilliseconds = 604800000;
const oneMonthInMilliseconds = 2592000000;
const oneYearInMilliseconds = 31556952000;

function oneWeek(stockData) {
    let todaysDate = Date.now();
    // intraDay
    let pastWeek = Object.keys(stockData["Time Series (15min)"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneWeekInMilliseconds) {
                return rawDate
            }
        });
    return pastWeek
}

function oneMonth(stockData) {
    let todaysDate = Date.now();
    // intraDay
    let pastMonth = Object.keys(stockData["Monthly Time Series"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneMonthInMilliseconds) {
                return rawDate
            }
        });
    return pastMonth
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
    let pastYear = Object.keys(stockData["Monthly Time Series"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - oneYearInMilliseconds) {
                return rawDate
            }
        });
    return pastYear
}

function twoYears(stockData) {
    let todaysDate = Date.now();
    let twoYearsAgo = 2 * oneYearInMilliseconds;
    let pastTwoYears = Object.keys(stockData["Monthly Time Series"])
        .filter(rawDate => {
            if (Date.parse(rawDate) >= todaysDate - twoYearsAgo) {
                return rawDate
            }
        });
    return pastTwoYears
}
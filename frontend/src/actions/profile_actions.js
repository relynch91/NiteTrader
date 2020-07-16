export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_PROFILE_ERRORS = 'RECEIVE_PROFILE_ERRORS';
export const CLEAR_PROFILE = 'CLEAR_PROFILE';

export const receiveProfile = (stocks) => {
    return ({
        type: RECEIVE_PROFILE,
        stocks
    });
};

export const clearProfile = () => {
    return ({
        type: CLEAR_PROFILE,
    })
}

export const buildProfile = (stocks) => dispatch => {
    debugger
    stockApiArray.forEach(stockObj => {
        let sym = stockObj.data.symbol;
        ownedStocks[sym]['quoteEndPointData'] = stockObj.data;
        ownedStocks[sym]['priceDiff'] = PortUtil.overUnder(ownedStocks[sym]);
    });
    // let ownedStocks = PortUtil.activeShares(transactions)
    // PortUtil.fetchDBStockData(ownedStocks)
    //     .then((stockApiArray) => {
    //         stockApiArray.forEach(stockObj => {
    //             let sym = stockObj.data.symbol;
    //             ownedStocks[sym]['quoteEndPointData'] = stockObj.data;
    //             ownedStocks[sym]['priceDiff'] = PortUtil.overUnder(ownedStocks[sym]);
    //         })
    if (stocks) {
        dispatch(receiveProfile(stocks));
    }
};
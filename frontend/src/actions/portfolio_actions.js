import * as PortUtil from '../util/portfolio_api_util';

export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
export const RECEIVE_PORTFOLIO_STOCKS = 'RECEIVE_PORTFOLIO_STOCKS';
export const RECEIVE_PORTFOLIO_ERRORS = 'RECEIVE_PORTFOLIO_ERRORS';
export const CLEAR_PORTFOLIO = 'CLEAR_PORTFOLIO';

export const receivePortfolio = ownedStocks => {
    return ({
        type: RECEIVE_PORTFOLIO,
        ownedStocks
    });
};

export const receivePortfolioStocks = stocks => {
    return ({
        type: RECEIVE_PORTFOLIO_STOCKS,
        stocks
    })
}

export const clearPortfolio = () => {
    return ({
        type: CLEAR_PORTFOLIO,
    })
};

export const getStocks = (stocks) => dispatch => {
    PortUtil.fetchDBStockData(stocks)
    .then(endPointStocks => dispatch(receivePortfolioStocks(endPointStocks)))
}
// export const buildPortfolio = transactions => dispatch => {
//     // dispatch(clearPortfolio());
//     let ownedStocks = PortUtil.activeShares(transactions);
//     PortUtil.fetchDBStockData(ownedStocks)
//     .then(stockApiArray =>
//         stockApiArray.forEach(stockObj => {
//             if (stockObj.data) {
//                 let sym = stockObj.data.symbol;
//                 ownedStocks[sym]['quoteEndPointData'] = stockObj.data;
//                 ownedStocks[sym]['priceDiff'] = PortUtil.overUnder(ownedStocks[sym]);
//             }
//     }
//     ));
//     dispatch(receivePortfolio(ownedStocks));
//     return ownedStocks;
// };

export const buildPortfolio = transactions => dispatch => {
    // dispatch(clearPortfolio());
    let ownedStocks = PortUtil.activeShares(transactions);
    dispatch(receivePortfolio(ownedStocks));
    return ownedStocks;
};
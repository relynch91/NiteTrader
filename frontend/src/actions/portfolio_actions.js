import * as PortUtil from '../util/portfolio_api_util';
import { buildProfile } from './profile_actions';

export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
export const RECEIVE_PORTFOLIO_ERRORS = 'RECEIVE_PORTFOLIO_ERRORS';
export const CLEAR_PORTFOLIO = 'CLEAR_PORTFOLIO';

export const receivePortfolio = transactions => {
    return ({
        type: RECEIVE_PORTFOLIO,
        transactions
    });
};

export const clearPortfolio = () => {
    return ({
        type: CLEAR_PORTFOLIO,
    })
}

export const buildPortfolio = transactions => dispatch => {
    let ownedStocks = PortUtil.activeShares(transactions)
    PortUtil.fetchDBStockData(ownedStocks)
        .then((stockApiArray) => {
            stockApiArray.forEach(stockObj => {
                let sym = stockObj.data.symbol;
                ownedStocks[sym]['quoteEndPointData'] = stockObj.data;
                ownedStocks[sym]['priceDiff'] = PortUtil.overUnder(ownedStocks[sym]);
            });
            dispatch(receivePortfolio(ownedStocks));
        })
};
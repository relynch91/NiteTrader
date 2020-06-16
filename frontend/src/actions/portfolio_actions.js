import * as PortUtil from '../util/portfolio_api_util';

export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
export const RECEIVE_PORTFOLIO_ERRORS = 'RECEIVE_PORTFOLIO_ERRORS';


export const receivePortfolio = transactions => {
    return ({
        type: RECEIVE_PORTFOLIO,
        transactions
    });
};

// export const receiveErrors = errors => ({
//     type: RECEIVE_PORTFOLIO_ERRORS,
//     errors
// });

export const buildPortfolio = transactions => dispatch => {
    let ownedStocks = PortUtil.activeShares(transactions)
    return dispatch(receivePortfolio(ownedStocks))
};
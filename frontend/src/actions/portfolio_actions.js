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
    return PortUtil.fetchDBStockData(stocks)
}

export const endPointState = dbStocks => dispatch => {
    let answer = {};
    dbStocks.forEach(stock => {
        if (stock.data !== null) {
            answer[stock.data.symbol] = stock.data
        }
    })
    dispatch(receivePortfolioStocks(answer));
    return answer;
}

export const buildPortfolio = transactions => dispatch => {
    let ownedStocks = PortUtil.activeShares(transactions);
    dispatch(receivePortfolio(ownedStocks));
    return ownedStocks;
};
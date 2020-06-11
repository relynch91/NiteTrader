import * as APIUtil from '../util/transaction_api_util';

export const RECEIVE_TRADE = 'RECEIVE_TRADE';
export const RECEIVE_ALL_TRADES = 'RECEIVE_ALL_TRADES';
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";

export const receiveTransaction = transaction => {
    return ({
        type: RECEIVE_TRADE,
        transaction
    });
};

export const receiveAllUserTransactions = transactions => {
    return ({
        type: RECEIVE_ALL_TRADES,
        transactions
    });
};

export const receiveErrors = errors => ({
    type: RECEIVE_TRANSACTION_ERRORS,
    errors
});

export const tradeStock = transaction => dispatch => {
    return APIUtil.tradeStock(transaction)
        .then(
            (newTrade) => (dispatch(receiveTransaction(newTrade))),
            (err) => (dispatch(receiveErrors(err.response.data))))
    };

export const fetchTrades = userId => dispatch => {
    return APIUtil.fetchTrades(userId)
        .then(
            (allTrades) => (dispatch(receiveAllUserTransactions(allTrades))),
            (err) => (dispatch(receiveErrors(err.response.data))))
};

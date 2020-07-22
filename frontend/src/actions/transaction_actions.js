import * as APIUtil from '../util/transaction_api_util';

export const RECEIVE_BUY_TRANSACTION = 'RECEIVE_BUY_TRANSACTION';
export const RECEIVE_SELL_TRANSACTION = 'RECEIVE_SELL_TRANSACTION';
export const RECEIVE_ALL_TRADES = 'RECEIVE_ALL_TRADES';
export const RECEIVE_TRANSACTION_ERRORS = "RECEIVE_TRANSACTION_ERRORS";
export const CLEAR_TRANSACTIONS = 'CLEAR_TRANSACTIONS';

export const receiveBuyTransaction = transaction => {
    return ({
        type: RECEIVE_BUY_TRANSACTION,
        transaction
    });
};

export const receiveSellTransaction = transaction => {
    return ({
        type: RECEIVE_SELL_TRANSACTION,
        transaction
    });
};

export const receiveAllUserTransactions = transactions => {
    return ({
        type: RECEIVE_ALL_TRADES,
        transactions
    });
};

export const clearTransactions = () => {
    return ({
        type: CLEAR_TRANSACTIONS,
    });
}

export const receiveErrors = errors => ({
    type: RECEIVE_TRANSACTION_ERRORS,
    errors
});

export const buyStock = transaction => dispatch => {
    // console.log(transaction);
    return APIUtil.buyStock(transaction)
        .then(
            (newTrade) => (dispatch(receiveBuyTransaction(newTrade)))
        )
        .catch(
            (err) => (dispatch(receiveErrors(err.response.data)))
        )
};

const addCash = trade => {
    console.log('addcash');
    console.log(trade.data)
}

export const sellStock = transaction => dispatch => {
    // console.log(transaction);
    return APIUtil.sellStock(transaction)
        .then(
            (newTrade) => (addCash(newTrade), dispatch(receiveSellTransaction(newTrade)))
        )
        .catch(
            (err) => (dispatch(receiveErrors(err)))
        )
};

export const fetchTrades = userId => dispatch => {
    return APIUtil.fetchTrades(userId)
        .then(
            (allTrades) => (dispatch(receiveAllUserTransactions(allTrades))))
        .catch(
            (err) => (dispatch(receiveErrors(err.response.data)))
        )
};
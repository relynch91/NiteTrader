import * as TransactionAPIUtil from '../util/transaction_api_util';
import * as ProfileAPIUtil from '../util/profile_api_util';
import { receiveProfileError } from './profile_actions';
import globalEndPoint  from '../frontConfig/endPointRestructure';
import key from '../frontConfig/frontKeys';
import { receiveEndPointSuccess, receiveEndPointFailure } from './alphaApi_actions';
import { getStat } from './profile_actions';
const axios = require('axios').default;

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

export const receiveErrors = errors => {
    return ({
        type: RECEIVE_TRANSACTION_ERRORS,
        errors
    })
};

export const handleBuy = transactionDetails => dispatch => {
    let quantity = parseFloat(transactionDetails.shares);
    let price = parseFloat(transactionDetails.price);
    let total = quantity * price;
    if ((transactionDetails.cash - total) < 0) {
        let error = { transactionError: "Sorry, you do not have enough money for that transaction." };
        dispatch(receiveErrors(error));
    } else {
        dispatch(buyStock(transactionDetails));
        dispatch(cashValueBuy(transactionDetails));
    }
}

export const handleSell = transactionDetails => dispatch => {
    let { ownedShares, shares } = transactionDetails;
    if ((ownedShares < shares) || (ownedShares < 1)) {
        let error = { transactionError: "Sorry, you don't own enough shares for that trade." }
        dispatch(receiveErrors(error));
    } else {
        dispatch(sellStock(transactionDetails));
        dispatch(cashValueSell(transactionDetails));
    }
}

export const sellStock = transaction => dispatch => {
    TransactionAPIUtil.sellStock(transaction)
        .then(newTrade =>  dispatch(receiveSellTransaction(newTrade)))
        .catch( err => (dispatch(receiveErrors(err))))
};

export const buyStock = transaction => dispatch => {
    TransactionAPIUtil.buyStock(transaction)
        .then(newTrade => dispatch(receiveBuyTransaction(newTrade)))
        .catch( errors => dispatch(receiveErrors(errors)))
};

export const cashValueSell = trade => dispatch => {
    let quantity = parseFloat(trade.shares);
    let price = parseFloat(trade.price);
    let sum = quantity * price;
    let update = {
        userID: trade.userId,
        value: (sum)
    }
    let ticker = trade.ticker;
    ProfileAPIUtil.statUpdate(update)
        .then(() =>
            dispatch(getStat(update.userID)))
        .catch(error => dispatch(receiveProfileError(error)))
};

export const cashValueBuy = trade => dispatch => {
    let quantity = parseFloat(trade.shares);
    let price = parseFloat(trade.price);
    let sum = quantity * price;
    let update = {
        userID: trade.userId,
        value: (-sum)
    }
    let ticker = trade.ticker;
    ProfileAPIUtil.statUpdate(update)
        .then(dispatch(getStat(update.userID)), dispatch(fireAPI(ticker)))
        .catch(error => dispatch(receiveProfileError(error)))
};

export const fireAPI = (ticker) => dispatch => {
    axios.get(`
    https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${key.alphaVantage}`)
    .then( stockData => dispatch(updateDB(stockData)) )
    .catch( error => dispatch(receiveErrors(error)) )
};

export const updateDB = (stockData) => dispatch => {
    let formattedData = globalEndPoint(stockData.data['Global Quote']);
    console.log(formattedData);
    axios.patch(
        'https://nitetrader.herokuapp.com/api/stock_api/quoteendpointstock/update', formattedData)
        .then( result => dispatch(receiveEndPointSuccess(result)))
        .catch(error => dispatch(receiveEndPointFailure(error)))
    return true
}

export const fetchTrades = userId => dispatch => {
    return TransactionAPIUtil.fetchTrades(userId)
        .then( allTrades => (dispatch(receiveAllUserTransactions(allTrades))))
        .catch( err => (dispatch(receiveErrors(err))))
};
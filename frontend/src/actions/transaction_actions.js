import * as TransactionAPIUtil from '../util/transaction_api_util';
import * as ProfileAPIUtil from '../util/profile_api_util';
import { receiveProfileStat, receiveProfileError } from './profile_actions';
import globalEndPoint  from '../frontConfig/endPointRestructure';
import key from '../frontConfig/frontKeys';
import { receiveEndPointSuccess, receiveEndPointFailure } from './alphaApi_actions';
const axios = require('axios').default;

// import { updateStat } from './profile_actions';
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
    return TransactionAPIUtil.buyStock(transaction)
        .then(
            (newTrade) => dispatch(cashValue(newTrade), dispatch(receiveBuyTransaction(newTrade)))
        )
        .catch(
            (err) => (dispatch(receiveErrors(err.response)))
        )
};

export const cashValue = trade => dispatch => {
    console.log('I am runing');
    let quantity = parseFloat(trade.data.shares);
    let price = parseFloat(trade.data.price);
    let ticker = trade.data.ticker;
    if (trade.data.buy) {
        price = (price * (-1))
    }
    let sum = quantity * price; 
    let update = {
        userID: trade.data.userId,
        value: sum
    }

    console.log(update);
    ProfileAPIUtil.statUpdate(update).then(
        () => dispatch(receiveProfileStat(update)),
            fireAPI(ticker)
        )
        .catch(error => dispatch(receiveProfileError(error)))
}

async function fireAPI(ticker) {
    let value = await axios.get(`
    https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${key.alphaVantage}`);
    updateDB(value);
    return true;
};

// async function updateDB(ticker) {
export const updateDB = (stockData) => dispatch => {
    console.log(stockData);
    let formattedData = globalEndPoint(stockData.data['Global Quote']);
    console.log(formattedData);
    axios.patch(
        'https://nitetrader.herokuapp.com/api/stock_api/quoteendpointstock/update', 
        formattedData).then(
            result => dispatch(receiveEndPointSuccess(result))
        )
        .catch(error => dispatch(receiveEndPointFailure(error)))
    return true
}

export const sellStock = transaction => dispatch => {
    return TransactionAPIUtil.sellStock(transaction)
        .then(
            (newTrade) => (dispatch(cashValue(newTrade)), dispatch(receiveSellTransaction(newTrade)))
        )
        .catch(
            (err) => (dispatch(receiveErrors(err)))
        )
};

export const fetchTrades = userId => dispatch => {
    return TransactionAPIUtil.fetchTrades(userId)
        .then(
            (allTrades) => (dispatch(receiveAllUserTransactions(allTrades))))
        .catch(
            (err) => (dispatch(receiveErrors(err)))
        )
};
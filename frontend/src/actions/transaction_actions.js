import * as TransactionAPIUtil from '../util/transaction_api_util';
import * as ProfileAPIUtil from '../util/profile_api_util';
import { receiveProfileStat, receiveProfileError } from './profile_actions';
import  globalEndPoint  from '../frontConfig/endPointRestructure';
import { key } from '../frontConfig/frontKeys';
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

    // userID: "5eb9c3a0a86f753c84eabed2"
    // value: -388.3

    // data {
    // buy: false
    // date: "2020-07-22T22:59:28.816Z"
    // price: 388.7
    // shares: 1
    // ticker: "AAPL"
    // userId: "5ec0787f47f79a57e6d2dfbb"
    // __v: 0
    // _id: "5f18c4d0d68a60c5963c8f8e"
    // }
    console.log(update);
    ProfileAPIUtil.statUpdate(update).then(
        () => dispatch(receiveProfileStat(update)),
            updateDB(ticker)
        )
        .catch(error => dispatch(receiveProfileError(error)))
}

async function fireAPI(ticker) {
    let value = await axios.get(`
    https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${key}`);
    return value;
};

async function updateDB(ticker) {
    let stockData = await fireAPI(ticker);
    console.log(stockData);
    let formattedData = globalEndPoint(stockData.data['Global Quote']);
    console.log(formattedData);
    axios.patch(
        'https://nitetrader.herokuapp.com/api/stock_api/quoteendpointstock/update', 
        formattedData).then(
            result => console.log(result)
        )
        .catch(error => console.log(error));
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
            (err) => (dispatch(receiveErrors(err.response.data)))
        )
};
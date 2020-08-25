import {
    RECEIVE_TRANSACTION_ERRORS,
    RECEIVE_ALL_TRADES,
    CLEAR_TRANSACTIONS,
    RECEIVE_BUY_TRANSACTION,
    RECEIVE_SELL_TRANSACTION
} from '../../actions/transaction_actions';

const _nullErrors = {};

const TransactionsErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRANSACTION_ERRORS:
            return action.errors;
        case RECEIVE_ALL_TRADES:
            return _nullErrors;
        case RECEIVE_BUY_TRANSACTION:
            return _nullErrors;
        case RECEIVE_SELL_TRANSACTION:
            return _nullErrors;
        case CLEAR_TRANSACTIONS:
            return _nullErrors;
        default:
            return state;
    }
};

export default TransactionsErrorsReducer;
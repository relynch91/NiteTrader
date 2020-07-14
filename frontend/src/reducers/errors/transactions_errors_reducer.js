import {
    RECEIVE_TRANSACTION_ERRORS,
    RECEIVE_TRADE,
    RECEIVE_ALL_TRADES
} from '../../actions/transaction_actions';

const _nullErrors = [];

const TransactionsErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRANSACTION_ERRORS:
            return action.errors;
        case RECEIVE_TRADE:
            return _nullErrors;
        case RECEIVE_ALL_TRADES:
            return _nullErrors;
        default:
            return state;
    }
};

export default TransactionsErrorsReducer;
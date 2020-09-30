import { RECEIVE_TRANSACTION_START, RECEIVE_BUY_TRANSACTION, RECEIVE_SELL_TRANSACTION, 
    RECEIVE_TRANSACTION_END, RECEIVE_TRANSACTION_ERRORS} from '../actions/transaction_actions';

const loadingReducer = (state = false, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRANSACTION_START:
            return { flag: true };
        case RECEIVE_TRANSACTION_END:
            return false
        case RECEIVE_BUY_TRANSACTION:
            return false;
        case RECEIVE_SELL_TRANSACTION:
            return false;
        case RECEIVE_TRANSACTION_ERRORS:
            return { flag: false };
        default:
            return state;
    }
};

export default loadingReducer;
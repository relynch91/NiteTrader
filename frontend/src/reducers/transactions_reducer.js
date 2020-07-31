import { 
    RECEIVE_ALL_TRADES, 
    CLEAR_TRANSACTIONS, 
    RECEIVE_SELL_TRANSACTION,
    RECEIVE_BUY_TRANSACTION
} from '../actions/transaction_actions';

const TransactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        
        case RECEIVE_ALL_TRADES:
            return Object.assign(nextState, action.transactions.data);
        case RECEIVE_SELL_TRANSACTION:
            return Object.assign(nextState, action.transactions);
        case RECEIVE_BUY_TRANSACTION:
            return Object.assign(nextState, action.transactions);
        case CLEAR_TRANSACTIONS:
            return {};
        default:
            return state;
    }
};

export default TransactionsReducer;
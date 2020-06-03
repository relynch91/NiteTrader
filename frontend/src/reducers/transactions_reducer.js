import { RECEIVE_TRADE, RECEIVE_ALL_TRADES } from '../actions/transaction_actions';

const TransactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
// debugger
    switch (action.type) {
        case RECEIVE_ALL_TRADES:
            // debugger
            return Object.assign(nextState, action.transactions);
        // case RECEIVE_TRADE:
        //     // Object.assign(nextState, {[action.transaction.data.ticker]: action.transaction.data});
        //     // Object.assign(nextState, {[action.transaction.data.ticker]: action.transaction.data});
        //     return nextState;
        default:
            return state;
    }
};

export default TransactionsReducer;
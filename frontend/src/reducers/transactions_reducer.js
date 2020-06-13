import { RECEIVE_ALL_TRADES } from '../actions/transaction_actions';

const TransactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_TRADES:
            return Object.assign(nextState, action.transactions.data);
        default:
            return state;
    }
};

export default TransactionsReducer;
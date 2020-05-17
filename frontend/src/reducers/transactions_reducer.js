import { RECEIVE_TRADE, RECEIVE_ALL_TRADES } from '../actions/transaction_actions';

const transactionsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_TRADES:
            return action.transactions
        case RECEIVE_TRADE:
            Object.assign(nextState, action.transaction);
            return nextState;
        default:
            return state;
    }
};

export default transactionsReducer;
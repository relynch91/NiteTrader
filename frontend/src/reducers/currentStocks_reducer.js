import {
    CLEAR_PORTFOLIO,
    RECEIVE_PORTFOLIO_STOCKS
} from '../actions/portfolio_actions';

const currentStocksReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PORTFOLIO_STOCKS:
            return Object.assign(nextState, action.stocks);
        case CLEAR_PORTFOLIO:
            return {}
        default:
            return state;
    }
};

export default currentStocksReducer;
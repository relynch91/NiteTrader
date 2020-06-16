import { RECEIVE_PORTFOLIO } from '../actions/portfolio_actions';

const PortfolioReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_PORTFOLIO:
            return Object.assign(nextState, action.transactions);
        default:
            return state;
    }
};

export default PortfolioReducer;
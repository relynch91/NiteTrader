import { combineReducers } from 'redux';
import { RECEIVE_STOCK } from '../actions/alphaApi_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STOCK:
            Object.assign(nextState, { stock1: action.stock.data["Global Quote"] })
            return nextState;
        default:
            return state;
    }
}
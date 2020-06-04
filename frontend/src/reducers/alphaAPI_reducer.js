import { combineReducers } from 'redux';
import { RECEIVE_STOCK, RECEIVE_INTRADAY, RECEIVE_TIME_SERIES } from '../actions/alphaAPI_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_STOCK:
            Object.assign(nextState, { globalEndPoint: action.stock.data["Global Quote"] })
            return nextState;
        case RECEIVE_INTRADAY:
            Object.assign(nextState, { intraDay: action.stock.data })
            return nextState;
        case RECEIVE_TIME_SERIES:
            Object.assign(nextState, { timeSeriesMonthly: action.stock.data })
            return nextState;
        default:
            return state;
    }
}

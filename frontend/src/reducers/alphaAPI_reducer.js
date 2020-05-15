import { combineReducers } from 'redux';
import { RECEIVE_STOCK } from '../actions/alphaApi_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state);


    switch (action.type) {
        case RECEIVE_STOCK:
            Object.assign(nextState, { stock1: action.stock })
            return nextState;
        default:
            return state;
    }
}

// {
//     "Global Quote": {
//         "01. symbol": "AAPL",
//         "02. open": "304.5100",
//         "03. high": "309.7900",
//         "04. low": "301.5300",
//         "05. price": "309.5400",
//         "06. volume": "39653816",
//         "07. latest trading day": "2020-05-14",
//         "08. previous close": "307.6500",
//         "09. change": "1.8900",
//         "10. change percent": "0.6143%"
//     }
// }
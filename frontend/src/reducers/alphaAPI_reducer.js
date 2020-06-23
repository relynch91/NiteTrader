import { RECEIVE_STOCK, RECEIVE_INTRADAY, RECEIVE_TIME_SERIES, RECEIVE_STOCK_NAME, RECEIVE_INTRADAY_SUCCESS } from '../actions/alphaApi_actions';

export default function (state = {}, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        // case RECEIVE_STOCK:
        //     Object.assign(nextState, { globalEndPoint: action.stock.data["Global Quote"] });
        //     return nextState;
        case RECEIVE_INTRADAY:
            Object.assign(nextState, { loading: true });
            return nextState;
        case RECEIVE_INTRADAY_SUCCESS:
            Object.assign(nextState, { 
                intraDay: action.stock.data,
                loading: false,
                error: ''
            })
            return nextState;
        case RECEIVE_INTRADAY_FAILURE:
            Object.assign(nextState, {
                loading: false,
                intraDay: {},
                error: error
            })
            return nextState;
        case RECEIVE_TIME_SERIES:
            Object.assign(nextState, { timeSeriesMonthly: action.stock.data });
            return nextState;
        case RECEIVE_STOCK_NAME:
            Object.assign(nextState, {stockNameSearch: action.name.data.bestMatches });
            return nextState;
        default:
            return state;
    }
}
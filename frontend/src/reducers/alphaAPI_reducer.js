import { RECEIVE_INTRADAY, 
    RECEIVE_TIME_SERIES, 
    RECEIVE_STOCK_NAME, 
    RECEIVE_INTRADAY_SUCCESS, 
    RECEIVE_TIME_SERIES_SUCCESS, 
    RECEIVE_STOCK_NAME_SUCCESS,
    RECEIVE_INTRADAY_FAILURE,
    RECEIVE_TIME_SERIES_FAILURE,
    RECEIVE_STOCK_NAME_FAILURE,
    RECEIVE_CLEAR_STOCKS
} from '../actions/alphaApi_actions';

let preLoadedState = {
    intraDay: {},
    timeSeriesMonthly: {},
    stockNameSearch: []
}

export default function (oldState = preLoadedState, action) {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {

        case RECEIVE_CLEAR_STOCKS: 
            return preLoadedState;
        
        case RECEIVE_INTRADAY:
            Object.assign(nextState, {
                stockNameSearch: []
            });
            return nextState;

        case RECEIVE_INTRADAY_SUCCESS:
            Object.assign(nextState, { 
                intraDay: action.stock.data,
                loading: false,
                stockNameSearch: []
            })
            return nextState;
        case RECEIVE_INTRADAY_FAILURE:
            Object.assign(nextState, {
                loading: false,
                intraDay: {}
            })
            return nextState;

        case RECEIVE_TIME_SERIES:
            Object.assign(nextState, {
                stockNameSearch: []
            });
            return nextState;
        case RECEIVE_TIME_SERIES_SUCCESS:
            Object.assign(nextState, { 
                timeSeriesMonthly: action.stock.data,
                loading: false,
                stockNameSearch: []
            });
            return nextState;
        case RECEIVE_TIME_SERIES_FAILURE:
            Object.assign(nextState, {
                timeSeriesMonthly: {},
                loading: false,
            });
            return nextState;

        case RECEIVE_STOCK_NAME:
            Object.assign(nextState, {
                loading: true,
                stock: '',
                stockNameSearch: [],
                ticker: ""
            });
            return nextState;
        case RECEIVE_STOCK_NAME_SUCCESS:
            Object.assign(nextState, {
                loading: false,
                stockNameSearch: action.name.data.bestMatches
            })
            return nextState;
        case RECEIVE_STOCK_NAME_FAILURE:
            Object.assign(nextState, {
                loading: false,
            });
            return nextState;

        default:
            return oldState;
    }
}
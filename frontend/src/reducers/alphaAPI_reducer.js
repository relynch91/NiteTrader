import { RECEIVE_INTRADAY, 
    RECEIVE_STOCK_NAME, 
    RECEIVE_INTRADAY_SUCCESS, 
    RECEIVE_STOCK_NAME_SUCCESS,
    RECEIVE_INTRADAY_FAILURE,
    RECEIVE_STOCK_NAME_FAILURE,
    RECEIVE_WEEKLY_FAILURE,
    RECEIVE_WEEKLY,
    RECEIVE_WEEKLY_SUCCESS,
    RECEIVE_CLEAR_STOCKS,
    RECEIVE_END_POINT_SUCCESS,
    RECEIVE_END_POINT_FAILURE
} from '../actions/alphaApi_actions';

let preLoadedStateAlpha = {
    intraDay: {},
    intraLoading: false,
    weeklyLoading: false,
    weeklySeries: {},
    nameLoading: false,
    stockNameSearch: [],
    count: 0,
    globalEndPoint: {}
}

export default function (oldState = preLoadedStateAlpha, action) {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {

        case RECEIVE_CLEAR_STOCKS: 
            return preLoadedStateAlpha;
        
        case RECEIVE_INTRADAY:
            Object.assign(nextState, {
                stockNameSearch: [],
                intraLoading: true,
            });
            return nextState;

        case RECEIVE_INTRADAY_SUCCESS:
            Object.assign(nextState, { 
                intraDay: action.stock.data,
                intraLoading: false,
                stockNameSearch: []
            })
            return nextState;
            
        case RECEIVE_INTRADAY_FAILURE:
            Object.assign(nextState, {
                intraLoading: false,
                intraDay: {}
            })
            return nextState;

        case RECEIVE_END_POINT_SUCCESS:
            Object.assign(nextState, {
                globalEndPoint: action.stock.data,
            })
            return nextState;

        case RECEIVE_END_POINT_FAILURE:
            Object.assign(nextState, {
                globalEndPoint: {}
            })
            return nextState;

        case RECEIVE_WEEKLY:
            Object.assign(nextState, {
                weeklySeries: {},
                weeklyLoading: true
            });
            return nextState;

         case RECEIVE_WEEKLY_FAILURE:
             Object.assign(nextState, {
                weeklySeries: {},
                weeklyLoading: false
             });
         return nextState;

         case RECEIVE_WEEKLY_SUCCESS:
             Object.assign(nextState, {
                 weeklySeries: action.stock.data,
                 weeklyLoading: false
             });
         return nextState;

        case RECEIVE_STOCK_NAME:
            Object.assign(nextState, {
                nameLoading: true,
                stock: '',
                stockNameSearch: [],
                ticker: ""
            });
            return nextState;

        case RECEIVE_STOCK_NAME_SUCCESS:
            Object.assign(nextState, {
                nameLoading: false,
                stockNameSearch: action.name.data.bestMatches
            })
            return nextState;

        case RECEIVE_STOCK_NAME_FAILURE:
            Object.assign(nextState, {
                nameLoading: false,
            });
            return nextState;
        default:
            return oldState;
    }
}
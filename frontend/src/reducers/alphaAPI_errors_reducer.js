import {
    RECEIVE_INTRADAY_FAILURE,
    RECEIVE_INTRADAY_SUCCESS,
    RECEIVE_TIME_SERIES_FAILURE,
    RECEIVE_TIME_SERIES_SUCCESS,
    RECEIVE_STOCK_NAME_SUCCESS,
    RECEIVE_STOCK_NAME_FAILURE
} from '../actions/alphaApi_actions';

const _nullErrors = [];

const alphaAPIErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TIME_SERIES_FAILURE:
            return {
                error: "You reached your maximum per minute call. Please Try again in 30 seconds"
            }

        case RECEIVE_TIME_SERIES_SUCCESS:
            return _nullErrors;

        case RECEIVE_INTRADAY_FAILURE:
            return {
                error: "You reached your maximum per minute call. Please Try again in 30 seconds"
            }

        case RECEIVE_INTRADAY_SUCCESS:
            return _nullErrors;

        case RECEIVE_STOCK_NAME_FAILURE:
            
            return {
                error: "You reached your maximum per minute call. Please Try again in 30 seconds"
            }
        case RECEIVE_STOCK_NAME_SUCCESS:
            return _nullErrors;
        default:
            return state;
    }
};

export default alphaAPIErrorsReducer;
import {
    RECEIVE_INTRADAY_FAILURE,
    RECEIVE_INTRADAY,
    RECEIVE_TIME_SERIES_FAILURE,
    RECEIVE_TIME_SERIES,
    RECEIVE_STOCK_NAME,
    RECEIVE_STOCK_NAME_FAILURE,
    CLEAR_API_ERRORS,
    RECEIVE_WEEKLY_FAILURE,
    RECEIVE_WEEKLY,
    RECEIVE_END_POINT_FAILURE
} from '../../actions/alphaApi_actions';

const _nullErrors = {};

const alphaAPIErrorsReducer = (oldState = _nullErrors, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TIME_SERIES_FAILURE:
            return {
                error: "You reached your maximum per minute call. Please Try again in 30 seconds",
            }
        case RECEIVE_TIME_SERIES:
            return _nullErrors;
        case RECEIVE_INTRADAY_FAILURE:
            return {
                error: "You reached your maximum per minute call. Please Try again in 30 seconds",
            }
        case RECEIVE_END_POINT_FAILURE:
            return {
                error: action.error['Error']
            }
        case RECEIVE_INTRADAY:
            return _nullErrors;

        case RECEIVE_STOCK_NAME_FAILURE:
            return {
                error: "You reached your maximum per minute call. Please Try again in 30 seconds",
            }
        case RECEIVE_STOCK_NAME:
            return _nullErrors;

        case RECEIVE_WEEKLY_FAILURE:
                return {
                    error: "You reached your maximum per minute call. Please Try again in 30 seconds",
                }
        case RECEIVE_WEEKLY:
                return _nullErrors;
        
        case CLEAR_API_ERRORS:
            return _nullErrors;

        default:
            return oldState;
    }
};

export default alphaAPIErrorsReducer;
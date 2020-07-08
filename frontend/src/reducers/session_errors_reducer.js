import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

const _nullErrors = {};

const SessionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);


    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return Object.assign(nextState, action.errors);
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        case CLEAR_ERRORS:
            return _nullErrors;
        default:
            return state;
    }
};

export default SessionErrorsReducer;